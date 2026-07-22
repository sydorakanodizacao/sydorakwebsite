import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './button'

/**
 * CookieBanner — Banner de consentimento de cookies em conformidade com a LGPD.
 * Armazena a decisão no localStorage ('sydorak_cookie_consent').
 */
export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('sydorak_cookie_consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('sydorak_cookie_consent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-canvas/90 backdrop-blur-md border-t border-hairline p-4 md:p-6 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-body-sm text-ink leading-relaxed text-center md:text-left">
          Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site. Ao continuar navegando, você concorda com a nossa{' '}
          <Link to="/privacidade" className="text-secondary font-medium underline hover:text-ink transition-colors">
            Política de Privacidade
          </Link>.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="primary" onClick={handleAccept} className="px-6 py-2.5 text-xs">
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  )
}
