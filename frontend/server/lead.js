/**
 * Lead do formulário de contato → Omie CRM — SOMENTE SERVIDOR.
 *
 * Fluxo (validado contra o CRM real da Sydorak em 30/09/2026):
 *   1. Conta: IncluirConta com CNPJ/CPF + características de UTM (origem do lead — ver
 *      toqueDeConversao em src/utils/atribuicao.js).
 *      Se o documento já existe → VerificarConta(cDoc) e reaproveita a conta (sem alterá-la).
 *      Assim o caminho comum (empresa nova) não gera nenhum erro no Omie — erros seguidos
 *      no mesmo método bloqueiam a API por 30 min (HTTP 425).
 *   2. Contato: reaproveita o da conta com o mesmo e-mail; senão UpsertContato.
 *   3. Oportunidade: 01 Prospect · Ativo · origem Site · Anderson · Anodização.
 *
 * Regras do Omie descobertas no teste: CNPJ/CPF obrigatório na conta; tags enviadas mesmo
 * vazias; cCodInt cortado em 20 caracteres; origem obrigatória na oportunidade.
 */

import { createHash, randomBytes } from 'node:crypto'
import { formatarDocumento, limparDocumento, validarDocumento } from '../src/utils/documento.js'
import { SERVICOS_CONTATO } from '../src/data/servicos-contato.js'
import { toqueDeConversao } from '../src/utils/atribuicao.js'
import { ehDuplicado, ehNaoEncontrado, omie } from './omie.js'

// Códigos do CRM da Sydorak (crm/fases, crm/status, crm/origens, crm/usuarios…)
export const CRM = {
  faseProspect: 549903379, // 01 Prospect
  statusAtivo: 549903414, // Ativo
  origemSite: 4121148754, // Site
  solucaoAnodizacao: 549903407, // Anodização (única solução cadastrada)
  tipoClienteNovo: 549903395, // Cliente Novo
  tipoClienteCorrente: 549903394, // Cliente Corrente
  vendedorAnderson: 1104288282, // Anderson Elias Muzeka — responsável fixo dos leads do site
}

// Limites alinhados aos campos do Omie (cNome string100, cEmail string200, cDesOp string100)
const LIMITES = { empresa: 100, nome: 100, email: 200, whatsapp: 20, documento: 18, mensagem: 2000 }

export const CAMPOS_ATRIBUICAO = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid', 'fbclid', 'pagina_entrada', 'referrer',
]

// ---------------------------------------------------------------------------
// Validação
// ---------------------------------------------------------------------------
// eslint-disable-next-line no-control-regex
const CONTROLE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g
const textoLinha = (v) => String(v ?? '').replace(CONTROLE, '').replace(/\s+/g, ' ').trim()
const textoLivre = (v) => String(v ?? '').replace(CONTROLE, '').replace(/\r\n?/g, '\n').trim()
// Atribuição vem da URL: só caracteres comuns em UTM, sem < > " ' etc.
const textoAtribuicao = (v) => textoLinha(v).replace(/[^\p{L}\p{N} \-_.~%+:/@,]/gu, '').slice(0, 200)

export function separarTelefone(txt) {
  const d = String(txt ?? '').replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '')
  return /^[1-9]\d\d{8,9}$/.test(d) ? { ddd: d.slice(0, 2), numero: d.slice(2) } : null
}

function limparAtribuicao(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return {}
  const out = {}
  for (const campo of CAMPOS_ATRIBUICAO) {
    const v = textoAtribuicao(obj[campo])
    if (v) out[campo] = v
  }
  return out
}

/**
 * Valida e normaliza o corpo enviado pelo formulário.
 * @returns {{ ok: true, lead: object } | { ok: false, campos: string[] }}
 */
export function validarLead(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return { ok: false, campos: ['corpo'] }

  const brutos = ['empresa', 'nome', 'email', 'whatsapp', 'documento', 'servico', 'mensagem']
  const campos = brutos.filter((c) => body[c] != null && typeof body[c] !== 'string')
  if (campos.length) return { ok: false, campos }

  const lead = {
    empresa: textoLinha(body.empresa),
    nome: textoLinha(body.nome),
    email: textoLinha(body.email).toLowerCase(),
    whatsapp: textoLinha(body.whatsapp),
    documento: formatarDocumento(body.documento),
    servico: textoLinha(body.servico),
    mensagem: textoLivre(body.mensagem),
  }

  const erros = []
  if (lead.empresa.length < 2 || lead.empresa.length > LIMITES.empresa) erros.push('empresa')
  if (lead.nome.length < 2 || lead.nome.length > LIMITES.nome) erros.push('nome')
  if (lead.email.length > LIMITES.email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) erros.push('email')
  if (lead.whatsapp.length > LIMITES.whatsapp || !separarTelefone(lead.whatsapp)) erros.push('whatsapp')
  if (String(body.documento ?? '').length > LIMITES.documento + 10 || !validarDocumento(lead.documento).valido) erros.push('documento')
  if (!SERVICOS_CONTATO.includes(lead.servico)) erros.push('servico')
  if (!lead.mensagem || lead.mensagem.length > LIMITES.mensagem) erros.push('mensagem')
  if (erros.length) return { ok: false, campos: erros }

  const atr = body.atribuicao && typeof body.atribuicao === 'object' ? body.atribuicao : {}
  lead.atribuicao = {
    atual: limparAtribuicao(atr.atual),
    campanha: limparAtribuicao(atr.campanha),
    primeiro: limparAtribuicao(atr.primeiro),
  }
  return { ok: true, lead }
}

// ---------------------------------------------------------------------------
// Montagem dos payloads
// ---------------------------------------------------------------------------
// cCodInt do Omie é cortado em 20 caracteres → "site" + 16 hex
const codInt = (semente) => 'site' + createHash('sha256').update(semente).digest('hex').slice(0, 16)
const codIntAleatorio = () => 'site' + randomBytes(8).toString('hex')

const ENDERECO_VAZIO = { cEndereco: '', cCompl: '', cCEP: '', cBairro: '', cCidade: '', cUF: '', cPais: 'Brasil' }

const listarAtribuicao = (a) =>
  CAMPOS_ATRIBUICAO.filter((c) => a[c]).map((c) => `${c}=${a[c]}`).join(', ')

function montarObservacoes(lead) {
  const { atual, campanha, primeiro } = lead.atribuicao
  const visita = listarAtribuicao(atual)
  const ultimaCampanha = listarAtribuicao(campanha)
  const origem = listarAtribuicao(primeiro)
  return [
    'Lead do site (formulário /contato)',
    `Serviço: ${lead.servico}`,
    `Empresa: ${lead.empresa} · CNPJ/CPF: ${lead.documento}`,
    `Contato: ${lead.nome} · WhatsApp: ${lead.whatsapp} · E-mail: ${lead.email}`,
    `Mensagem: ${lead.mensagem}`,
    // O Omie exibe quebras de linha como "|": dentro de cada linha separamos por vírgula
    `Origem do lead: ${listarAtribuicao(toqueDeConversao(lead.atribuicao)) || 'acesso direto'}`,
    visita && `Esta visita: ${visita}`,
    ultimaCampanha && ultimaCampanha !== visita && `Última campanha (até 90 dias): ${ultimaCampanha}`,
    origem && origem !== visita && origem !== ultimaCampanha && `Primeiro contato com o site: ${origem}`,
  ].filter(Boolean).join('\n')
}

function separarNome(nome) {
  const [primeiro, ...resto] = nome.split(' ')
  return { cNome: primeiro, cSobrenome: resto.join(' ') }
}

// ---------------------------------------------------------------------------
// Fluxo no Omie
// ---------------------------------------------------------------------------
async function obterConta(lead, tel) {
  const docLimpo = limparDocumento(lead.documento)
  const origemLead = toqueDeConversao(lead.atribuicao)
  try {
    const conta = await omie('crm/contas', 'IncluirConta', {
      identificacao: { cCodInt: codInt(`conta:${docLimpo}`), cNome: lead.empresa, cDoc: lead.documento, nCodVend: CRM.vendedorAnderson },
      endereco: ENDERECO_VAZIO,
      telefone_email: { cDDDTel: tel.ddd, cNumTel: tel.numero, cEmail: lead.email },
      informacoesAdicionais: { nNumFunc: 0, nFaixaFat: '', cCnae: '', cRegTrib: '' },
      tags: [],
      // Campos personalizados (o Omie cria a característica se não existir). Conteúdo até 60.
      // Origem do lead = esta visita se veio de campanha; senão a última campanha; senão o 1º contato.
      caracteristicas: CAMPOS_ATRIBUICAO.filter((c) => origemLead[c]).map((c) => ({ campo: c, conteudo: origemLead[c].slice(0, 60) })),
    })
    return { nCod: conta.nCod, nova: true }
  } catch (erro) {
    if (!ehDuplicado(erro)) throw erro
    // Empresa já cadastrada (cliente atual ou lead anterior): reaproveita sem alterar dados
    const existente = await omie('crm/contas', 'VerificarConta', { cDoc: lead.documento })
    if (!existente?.nCod) throw erro
    return { nCod: existente.nCod, nova: false }
  }
}

async function obterContato(lead, tel, conta) {
  if (!conta.nova) {
    try {
      const r = await omie('crm/contatos', 'ListarContatos', { pagina: 1, registros_por_pagina: 50, filtrar_por_conta: conta.nCod })
      const igual = (r.cadastros ?? []).find((c) => {
        const te = Array.isArray(c.telefone_email) ? c.telefone_email[0] : c.telefone_email
        return te?.cEmail?.trim().toLowerCase() === lead.email
      })
      if (igual) {
        const id = Array.isArray(igual.identificacao) ? igual.identificacao[0] : igual.identificacao
        if (id?.nCod) return { nCod: id.nCod, novo: false }
      }
    } catch (erro) {
      if (!ehNaoEncontrado(erro)) throw erro
    }
  }
  const { cNome, cSobrenome } = separarNome(lead.nome)
  const contato = await omie('crm/contatos', 'UpsertContato', {
    identificacao: { cCodInt: codInt(`contato:${lead.email}:${conta.nCod}`), cNome, cSobrenome, nCodConta: conta.nCod, nCodVend: CRM.vendedorAnderson },
    endereco: ENDERECO_VAZIO,
    telefone_email: { cDDDCel1: tel.ddd, cNumCel1: tel.numero, cEmail: lead.email },
    cObs: 'Contato criado pelo formulário do site',
  })
  return { nCod: contato.nCod, novo: true }
}

/**
 * Cria (ou reaproveita) conta e contato e abre a oportunidade.
 * @param {object} lead saída de validarLead().lead
 */
export async function criarLeadNoOmie(lead) {
  const tel = separarTelefone(lead.whatsapp)
  const conta = await obterConta(lead, tel)
  const contato = await obterContato(lead, tel, conta)

  const hoje = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' }) // dd/mm/aaaa
  const [, mes, ano] = hoje.split('/').map(Number)
  const op = await omie('crm/oportunidades', 'IncluirOportunidade', {
    identificacao: {
      cCodIntOp: codIntAleatorio(),
      cDesOp: `${lead.empresa} - ${lead.servico}`.slice(0, 100),
      nCodConta: conta.nCod,
      nCodContato: contato.nCod,
      nCodSolucao: CRM.solucaoAnodizacao,
      nCodOrigem: CRM.origemSite,
      nCodVendedor: CRM.vendedorAnderson,
    },
    fasesStatus: { nCodFase: CRM.faseProspect, nCodStatus: CRM.statusAtivo, dNovoLead: hoje },
    previsaoTemp: { nTemperatura: 10, nMesPrev: mes, nAnoPrev: ano },
    ticket: { nProdutos: 0, nServicos: 0, nRecorrencia: 0, nMeses: 0 },
    envolvidos: { nCodFinder: 0, nCodParceiro: 0, nCodPrevenda: 0 },
    outrasInf: { nCodTipo: conta.nova ? CRM.tipoClienteNovo : CRM.tipoClienteCorrente },
    observacoes: { cObs: montarObservacoes(lead) },
  })

  return { nCodOp: op.nCodOp, nCodConta: conta.nCod, contaNova: conta.nova, nCodContato: contato.nCod, contatoNovo: contato.novo }
}
