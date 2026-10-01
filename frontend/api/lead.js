/**
 * POST /api/lead — Vercel Function que recebe o formulário de contato e cria o lead no Omie.
 *
 * Camadas de proteção (nesta ordem):
 *   1. Só POST com Content-Type application/json (form cross-site não consegue enviar JSON
 *      sem preflight CORS, e esta rota não responde CORS).
 *   2. Origem: Origin/Referer precisa ser o próprio host (produção, www e previews da Vercel).
 *   3. Limite por IP (best-effort, memória da instância).
 *   4. Honeypot: campo "website" invisível — preenchido = robô → responde 200 e descarta.
 *   5. Validação estrita de todos os campos (server/lead.js) antes de chamar o Omie,
 *      para não acumular erros e cair no bloqueio de 30 min (HTTP 425) da API.
 *
 * Respostas ao navegador nunca incluem detalhes do Omie, IDs internos ou chaves.
 */

import { criarLeadNoOmie, validarLead } from '../server/lead.js'

const LIMITE_POR_IP = 5
const JANELA_MS = 10 * 60 * 1000
const MAX_CORPO = 20_000
const tentativas = new Map() // ip → [timestamps]

function excedeuLimite(ip, agora = Date.now()) {
  const recentes = (tentativas.get(ip) ?? []).filter((t) => agora - t < JANELA_MS)
  recentes.push(agora)
  tentativas.set(ip, recentes)
  if (tentativas.size > 5000) {
    for (const [chave, ts] of tentativas) if (ts.every((t) => agora - t >= JANELA_MS)) tentativas.delete(chave)
  }
  return recentes.length > LIMITE_POR_IP
}

function ipDoCliente(req) {
  return String(req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'desconhecido'
}

function origemPermitida(req) {
  const host = String(req.headers['x-forwarded-host'] || req.headers.host || '').toLowerCase()
  const origem = req.headers.origin || req.headers.referer
  if (!host || !origem) return false
  try {
    return new URL(origem).host.toLowerCase() === host
  } catch {
    return false
  }
}

function responder(res, status, corpo) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  return res.status(status).json(corpo)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return responder(res, 405, { erro: 'Método não permitido.' })
  }
  if (!String(req.headers['content-type'] || '').toLowerCase().startsWith('application/json')) {
    return responder(res, 415, { erro: 'Formato não suportado.' })
  }
  if (!origemPermitida(req)) {
    return responder(res, 403, { erro: 'Origem não permitida.' })
  }
  if (excedeuLimite(ipDoCliente(req))) {
    return responder(res, 429, { erro: 'Muitas tentativas em pouco tempo. Aguarde alguns minutos ou fale com a gente pelo WhatsApp.' })
  }

  let body
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  } catch {
    return responder(res, 400, { erro: 'Dados inválidos.' })
  }
  if (JSON.stringify(body ?? {}).length > MAX_CORPO) {
    return responder(res, 413, { erro: 'Dados muito grandes.' })
  }

  // Honeypot: humanos não veem o campo. Resposta igual à de sucesso para não ensinar o robô.
  if (body && typeof body === 'object' && String(body.website ?? '').trim()) {
    console.warn('[lead] honeypot preenchido — descartado')
    return responder(res, 200, { ok: true })
  }

  const validacao = validarLead(body)
  if (!validacao.ok) {
    return responder(res, 400, { erro: 'Confira os dados do formulário.', campos: validacao.campos })
  }

  try {
    const r = await criarLeadNoOmie(validacao.lead)
    console.info(`[lead] ok oportunidade=${r.nCodOp} contaNova=${r.contaNova} contatoNovo=${r.contatoNovo}`)
    return responder(res, 200, { ok: true })
  } catch (erro) {
    // Lead não pode se perder: fica nos logs da Vercel para reenvio manual até existir
    // um canal de backup (ex.: e-mail). Nunca registrar as chaves — erro.message não as contém.
    console.error(`[lead-nao-enviado] ${erro?.message ?? erro}`, JSON.stringify(validacao.lead))
    return responder(res, 502, { erro: 'Não foi possível registrar sua solicitação agora. Tente novamente em instantes ou fale com a gente pelo WhatsApp.' })
  }
}
