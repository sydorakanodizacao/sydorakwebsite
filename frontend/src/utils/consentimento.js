import { CHAVE_CONSENTIMENTO, limparAtribuicaoPersistida } from './atribuicao'

/**
 * consentimento — decisão do visitante sobre cookies (LGPD) + Consent Mode v2 do GTM.
 *
 * O padrão "negado" é declarado no index.html, antes do GTM carregar. Aqui só registramos a
 * escolha feita no CookieBanner e avisamos o GTM:
 * - aceitar → libera ad_storage, ad_user_data, ad_personalization e analytics_storage;
 * - recusar → mantém negado e apaga as UTMs guardadas a longo prazo (fica só a visita atual).
 * Também dispara `cookie_consent_update` no dataLayer para acionadores do GTM.
 */

const SINAIS_GOOGLE = ['ad_storage', 'ad_user_data', 'ad_personalization', 'analytics_storage']

/** @returns {'aceito' | 'recusado' | null} null = ainda não escolheu */
export function lerConsentimento() {
  try {
    const valor = window.localStorage.getItem(CHAVE_CONSENTIMENTO)
    if (valor === 'true') return 'aceito'
    if (valor === 'false') return 'recusado'
  } catch {
    /* storage indisponível */
  }
  return null
}

function gtag() {
  window.dataLayer = window.dataLayer || []
  // Comandos de consentimento precisam ir como `arguments`, igual ao gtag oficial
  window.dataLayer.push(arguments)
}

export function registrarConsentimento(aceito) {
  try {
    window.localStorage.setItem(CHAVE_CONSENTIMENTO, aceito ? 'true' : 'false')
  } catch {
    /* storage indisponível — vale só para esta página */
  }

  const estado = aceito ? 'granted' : 'denied'
  gtag('consent', 'update', Object.fromEntries(SINAIS_GOOGLE.map((s) => [s, estado])))
  window.dataLayer.push({ event: 'cookie_consent_update', consentimento: aceito ? 'aceito' : 'recusado' })

  if (!aceito) limparAtribuicaoPersistida()
}
