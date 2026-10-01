import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './button'
import { lerConsentimento, registrarConsentimento } from '../../utils/consentimento'

/**
 * CookieBanner — Banner de consentimento de cookies em conformidade com a LGPD.
 * Recusar visível ao lado de Aceitar, mesmo tamanho (não escondido em link). A decisão fica no localStorage
 * ('sydorak_cookie_consent' = 'true' | 'false') e atualiza o Consent Mode do GTM
 * (padrão negado no index.html) — ver utils/consentimento.js.
 */
export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(() => lerConsentimento() === null)

  const decidir = (aceito) => {
    registrarConsentimento(aceito)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="region"
      aria-label="Consentimento de cookies"
      className="fixed bottom-0 left-0 w-full z-50 bg-canvas/90 backdrop-blur-md border-t border-hairline p-4 md:p-6 shadow-lg transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-body-sm text-ink leading-relaxed text-center md:text-left">
          Usamos cookies para analisar o tráfego do site e medir nossas campanhas. Você pode aceitar ou recusar — o site funciona normalmente nos dois casos. Saiba mais na nossa{' '}
          <Link to="/privacidade" className="text-secondary font-medium underline hover:text-ink transition-colors">
            Política de Privacidade
          </Link>.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="ghost" onClick={() => decidir(false)} className="px-6 py-2.5 text-xs uppercase border border-hairline">
            Recusar
          </Button>
          <Button variant="primary" onClick={() => decidir(true)} className="px-6 py-2.5 text-xs">
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
