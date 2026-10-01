/**
 * Cliente mínimo da API do Omie — SOMENTE SERVIDOR (função /api/lead).
 *
 * As chaves vêm de process.env (OMIE_APP_KEY / OMIE_APP_SECRET) e nunca aparecem em
 * mensagens de erro ou logs. Não importar este arquivo em nada dentro de src/.
 */

const BASE = 'https://app.omie.com.br/api/v1'
const TIMEOUT_MS = 8000

// Defesa extra: se o Omie ecoar a requisição num erro, as chaves não chegam aos logs
function semSegredos(texto) {
  let t = String(texto ?? '')
  for (const segredo of [process.env.OMIE_APP_SECRET, process.env.OMIE_APP_KEY]) {
    if (segredo) t = t.split(segredo).join('***')
  }
  return t
}

export class OmieErro extends Error {
  constructor(call, status, faultstring = '', faultcode = '') {
    faultstring = semSegredos(faultstring)
    super(`${call} [HTTP ${status}] ${faultcode} ${faultstring}`.replace(/\s+/g, ' ').trim())
    this.name = 'OmieErro'
    this.call = call
    this.status = status
    this.faultstring = faultstring
  }
}

export async function omie(endpoint, call, param) {
  const { OMIE_APP_KEY, OMIE_APP_SECRET } = process.env
  if (!OMIE_APP_KEY || !OMIE_APP_SECRET) {
    throw new Error('OMIE_APP_KEY/OMIE_APP_SECRET não configuradas no ambiente')
  }

  const res = await fetch(`${BASE}/${endpoint}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ call, app_key: OMIE_APP_KEY, app_secret: OMIE_APP_SECRET, param: [param] }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  })

  const texto = await res.text()
  let body
  try {
    body = JSON.parse(texto)
  } catch {
    throw new OmieErro(call, res.status, `resposta não-JSON: ${texto.slice(0, 120)}`)
  }
  if (body.faultstring) throw new OmieErro(call, res.status, body.faultstring, body.faultcode)
  if (!res.ok) throw new OmieErro(call, res.status, 'HTTP de erro sem faultstring')
  return body
}

/** O Omie devolve "não encontrado" como erro; isto identifica esse caso. */
export const ehNaoEncontrado = (erro) =>
  erro instanceof OmieErro && /n[aã]o (cadastrad|existem registros|encontrad)/i.test(erro.faultstring)

/** Erro de cadastro duplicado (ex.: conta com CNPJ que já existe). */
export const ehDuplicado = (erro) =>
  erro instanceof OmieErro && /j[aá] (est[aá] )?(cadastrad|existe)|duplicad/i.test(erro.faultstring)
