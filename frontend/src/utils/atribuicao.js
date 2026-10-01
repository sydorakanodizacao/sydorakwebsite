/**
 * atribuicao — persistência de UTMs/click IDs para não perder a origem do lead.
 *
 * O visitante pode chegar por um anúncio, navegar, fechar a aba e voltar dias depois
 * direto pelo endereço para preencher o formulário. Por isso guardamos três "toques":
 *
 * - atual:    origem desta visita (sessionStorage).
 * - campanha: última visita que chegou com UTM/gclid/fbclid (localStorage, 90 dias).
 *             Visitas diretas/orgânicas NÃO apagam — lógica de "último clique não direto" do GA.
 * - primeiro: primeira visita ao site (localStorage, 180 dias).
 *
 * `toqueDeConversao()` escolhe qual deles representa a origem do lead (usado no Omie e no dataLayer).
 *
 * Se o visitante RECUSAR cookies no banner, nada é guardado a longo prazo (só a visita atual,
 * em sessionStorage) e o que já existia é apagado — ver utils/consentimento.js.
 *
 * Se o storage estiver bloqueado (Safari privado, cookies bloqueados), guarda em memória —
 * vale até recarregar a página. Os dados só saem do navegador quando a pessoa envia o formulário.
 * Privacidade: da página de entrada só o caminho (sem query); do referrer só o domínio.
 */

export const PARAMS_CAMPANHA = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']

export const CHAVE_CONSENTIMENTO = 'sydorak_cookie_consent'

const CHAVES = {
  atual: 'sydorak_atribuicao_atual',
  campanha: 'sydorak_atribuicao_campanha',
  primeiro: 'sydorak_atribuicao_primeiro',
}
const DIA_MS = 24 * 60 * 60 * 1000
const VALIDADE_MS = { campanha: 90 * DIA_MS, primeiro: 180 * DIA_MS }

const memoria = {}

function ler(tipo, chave) {
  let valor
  try {
    valor = window[tipo].getItem(chave)
  } catch {
    return memoria[chave] ?? null // storage indisponível — usa a memória
  }
  try {
    return valor == null ? null : JSON.parse(valor)
  } catch {
    return null // valor corrompido
  }
}

function gravar(tipo, chave, valor) {
  memoria[chave] = valor
  try {
    window[tipo].setItem(chave, JSON.stringify(valor))
  } catch {
    /* storage indisponível — fica só em memória */
  }
}

const expirado = (toque, validade) => !toque?.em || !(Date.now() - Date.parse(toque.em) <= validade)

function recusouCookies() {
  try {
    return window.localStorage.getItem(CHAVE_CONSENTIMENTO) === 'false'
  } catch {
    return false
  }
}

/** Apaga as UTMs guardadas a longo prazo (chamado quando o visitante recusa cookies). */
export function limparAtribuicaoPersistida() {
  for (const chave of [CHAVES.campanha, CHAVES.primeiro]) {
    delete memoria[chave]
    try {
      window.localStorage.removeItem(chave)
    } catch {
      /* storage indisponível */
    }
  }
}

export const temCampanha = (toque) => PARAMS_CAMPANHA.some((p) => toque?.[p])

function referrerExterno() {
  try {
    const ref = document.referrer && new URL(document.referrer)
    return ref && ref.host !== window.location.host ? ref.host : ''
  } catch {
    return ''
  }
}

/** Chamar uma vez, no carregamento do app (main.jsx), enquanto a query string existe. */
export function capturarAtribuicao() {
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)
  const toque = {}
  for (const p of PARAMS_CAMPANHA) {
    const v = params.get(p)
    if (v) toque[p] = v.slice(0, 200)
  }
  const veioDeCampanha = temCampanha(toque)
  toque.pagina_entrada = window.location.pathname
  const referrer = referrerExterno()
  if (referrer) toque.referrer = referrer
  toque.em = new Date().toISOString()

  if (veioDeCampanha || !ler('sessionStorage', CHAVES.atual)) gravar('sessionStorage', CHAVES.atual, toque)
  if (recusouCookies()) return
  if (veioDeCampanha) gravar('localStorage', CHAVES.campanha, toque)
  if (expirado(ler('localStorage', CHAVES.primeiro), VALIDADE_MS.primeiro)) gravar('localStorage', CHAVES.primeiro, toque)
}

/** Os três toques, para enviar junto com o formulário. */
export function obterAtribuicao() {
  if (typeof window === 'undefined') return { atual: {}, campanha: {}, primeiro: {} }
  const atual = ler('sessionStorage', CHAVES.atual) ?? {}
  if (recusouCookies()) return { atual, campanha: {}, primeiro: atual }
  const campanhaSalva = ler('localStorage', CHAVES.campanha)
  const campanha = expirado(campanhaSalva, VALIDADE_MS.campanha) ? {} : campanhaSalva
  const primeiro = ler('localStorage', CHAVES.primeiro) ?? atual
  return { atual, campanha, primeiro }
}

/**
 * Toque que gerou o lead: esta visita, se veio de campanha; senão a última campanha
 * (até 90 dias); senão o primeiro contato com o site; senão esta visita (acesso direto).
 * Usado no navegador (dataLayer) e no servidor (características da conta no Omie).
 */
export function toqueDeConversao({ atual = {}, campanha = {}, primeiro = {} } = {}) {
  if (temCampanha(atual)) return atual
  if (temCampanha(campanha)) return campanha
  if (Object.keys(primeiro).length) return primeiro
  return atual
}
