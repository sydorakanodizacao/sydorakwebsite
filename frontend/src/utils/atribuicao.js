/**
 * atribuicao — captura de UTMs/click IDs na página de entrada do site.
 *
 * O visitante costuma chegar na home ou num serviço e só depois navegar até /contato;
 * como o site é SPA, a query string se perde no caminho. Por isso capturamos na entrada
 * e enviamos junto com o formulário (só sai do navegador se a pessoa enviar o form).
 *
 * - atual:    origem desta visita (sessionStorage — some ao fechar a aba). Um novo clique
 *             de campanha durante a sessão substitui o anterior.
 * - primeiro: primeiro contato com o site (localStorage, 180 dias). Só é gravado com o
 *             consentimento do banner de cookies ('sydorak_cookie_consent').
 *
 * Privacidade: da página de entrada guardamos só o caminho (sem query) e do referrer só o
 * domínio — URLs completas podem carregar dados pessoais (ex.: e-mail em links de newsletter).
 */

const CHAVE_ATUAL = 'sydorak_atribuicao_atual'
const CHAVE_PRIMEIRO = 'sydorak_atribuicao_primeiro'
const CHAVE_CONSENTIMENTO = 'sydorak_cookie_consent'
const VALIDADE_PRIMEIRO_MS = 180 * 24 * 60 * 60 * 1000
const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']

// Storage pode lançar exceção (Safari privado, cookies bloqueados): nunca quebrar o site por isso
function ler(tipo, chave) {
  try {
    return JSON.parse(window[tipo].getItem(chave))
  } catch {
    return null
  }
}

function gravar(tipo, chave, valor) {
  try {
    window[tipo].setItem(chave, JSON.stringify(valor))
  } catch {
    /* armazenamento indisponível — segue sem atribuição */
  }
}

function temConsentimento() {
  try {
    return window.localStorage.getItem(CHAVE_CONSENTIMENTO) === 'true'
  } catch {
    return false
  }
}

function referrerExterno() {
  try {
    const ref = document.referrer && new URL(document.referrer)
    return ref && ref.host !== window.location.host ? ref.host : ''
  } catch {
    return ''
  }
}

/** Chamar uma vez, no carregamento do app (main.jsx). */
export function capturarAtribuicao() {
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)
  const toque = {}
  for (const p of PARAMS) {
    const v = params.get(p)
    if (v) toque[p] = v.slice(0, 200)
  }
  const temCampanha = Object.keys(toque).length > 0
  toque.pagina_entrada = window.location.pathname
  const referrer = referrerExterno()
  if (referrer) toque.referrer = referrer
  toque.em = new Date().toISOString()

  if (temCampanha || !ler('sessionStorage', CHAVE_ATUAL)) gravar('sessionStorage', CHAVE_ATUAL, toque)

  if (temConsentimento()) {
    const primeiro = ler('localStorage', CHAVE_PRIMEIRO)
    const expirado = !primeiro?.em || Date.now() - Date.parse(primeiro.em) > VALIDADE_PRIMEIRO_MS
    if (expirado) gravar('localStorage', CHAVE_PRIMEIRO, toque)
  }
}

/** Atribuição para enviar com o formulário. */
export function obterAtribuicao() {
  if (typeof window === 'undefined') return {}
  const atual = ler('sessionStorage', CHAVE_ATUAL) ?? {}
  const primeiro = (temConsentimento() && ler('localStorage', CHAVE_PRIMEIRO)) || atual
  return { primeiro, atual }
}
