import { PARAMS_CAMPANHA, obterAtribuicao, toqueDeConversao } from '../utils/atribuicao'
import { validarDocumento } from '../utils/documento'

/**
 * Evento `form_submit` no dataLayer do GTM (GTM-5X9FH5CV), disparado só depois que
 * a /api/lead confirmou o lead no Omie.
 *
 * - form_data: dados do formulário para tags/relatórios.
 * - user_data: formato "dados fornecidos pelo usuário" do Google (Enhanced Conversions);
 *   o GTM faz o hash antes de enviar. Telefone em E.164 (+55…).
 * - utm: toque que gerou o lead (mesma regra usada no Omie).
 * - event_id: id único do envio, para deduplicar conversões (ex.: Meta Pixel + API de Conversões).
 *
 * Fora do dataLayer de propósito: CNPJ/CPF (CPF é dado pessoal sensível na LGPD e fica exposto a
 * toda tag de terceiro) e o texto da mensagem — vão só para o Omie. Vai apenas o tipo do documento.
 * Atenção no GTM: não mapear form_data/user_data como parâmetros do GA4 (política de PII do Google).
 */

function gerarId() {
  try {
    return window.crypto.randomUUID()
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
  }
}

export function registrarFormSubmit(dados) {
  if (typeof window === 'undefined') return

  const nome = String(dados.nome ?? '').trim().split(/\s+/)
  const digitos = String(dados.whatsapp ?? '').replace(/\D/g, '')
  const email = String(dados.email ?? '').trim().toLowerCase()
  const toque = toqueDeConversao(obterAtribuicao())

  // Todas as chaves sempre presentes: o GTM mescla objetos entre pushes e um envio
  // anterior não pode "vazar" valores para o próximo.
  const utm = Object.fromEntries(
    [...PARAMS_CAMPANHA, 'pagina_entrada', 'referrer'].map((c) => [c, toque[c] ?? ''])
  )

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'form_submit',
    event_id: gerarId(),
    form_id: 'contato',
    form_name: 'Formulário de contato',
    form_data: {
      empresa: dados.empresa ?? '',
      nome: dados.nome ?? '',
      email,
      telefone: dados.whatsapp ?? '',
      servico: dados.servico ?? '',
      tipo_documento: validarDocumento(dados.documento).tipo ?? '',
    },
    user_data: {
      email,
      phone_number: digitos ? `+55${digitos}` : '',
      address: {
        first_name: nome[0] ?? '',
        last_name: nome.slice(1).join(' '),
        country: 'BR',
      },
    },
    utm,
  })
}
