import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '../../utils/cn'
import Button from '../ui/button'
import TextLink from '../ui/text-link'
import logoMenu from '../../assets/logomenu.svg'

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Sobre nós', to: '/sobre-nos' },
  { label: 'Serviço', to: '/servicos' },
  { label: 'Blog', to: '/blog' }
]

/**
  * Navbar — Cabeçalho de navegação global.
  * 
  * DESIGN.md:
  * - Fundo: translúcido com backdrop-blur e cantos arredondados, bordas azuis sutis.
  * - Scroll: transiciona para fundo escuro bg-surface-darkest/95 e sombra.
  * - Símbolo: logoMenu (logomenu.svg) da Sydorak.
  * - Mobile: menu hambúrguer com drawer suspenso correspondente.
  */
export default function Navbar({ className, solid = false, dark = true }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-detect /blog, /contato, /privacidade, /termos, /cookies routes to enforce light solid layout
  const isBlog = location.pathname.startsWith('/blog')
  const isContact = location.pathname.startsWith('/contato')
  const isPrivacy = location.pathname.startsWith('/privacidade')
  const isTerms = location.pathname.startsWith('/termos')
  const isCookies = location.pathname.startsWith('/cookies')
  const isLightPage = isBlog || isContact || isPrivacy || isTerms || isCookies
  const forceSolid = solid || isLightPage
  const forceLight = !dark || isLightPage

  const bgClass = forceSolid
    ? forceLight
      ? 'bg-white/95 border-neutral-200/50 shadow-md'
      : 'bg-surface-darkest/95 border-[#1e4fa0]/50 shadow-lg'
    : scrolled
      ? 'bg-surface-darkest/95 border-[#1e4fa0]/50 shadow-lg'
      : 'bg-[rgba(5,17,35,0.3)] border-[#1e4fa0]/30'

  const textDarkClass = forceLight ? false : true

  return (
    <nav className={cn('fixed top-0 left-0 w-full z-50 px-6 pt-6 transition-all duration-300', className)}>
      <div
        className={cn(
          'max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-[10px] border backdrop-blur-[6px] transition-all duration-300',
          bgClass
        )}
      >
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0 focus:outline-none">
          <img
            src={logoMenu}
            alt="Sydorak Anodização"
            className="h-[52px] md:h-[58px] w-auto transition-transform duration-200 hover:scale-[1.03]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
             <TextLink key={link.label} to={link.to} dark={textDarkClass}>
               {link.label}
             </TextLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" icon={true} to="/contato">
            Contato
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={cn(
            'md:hidden flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors',
            textDarkClass
              ? 'text-on-dark hover:bg-white/5'
              : 'text-ink hover:bg-black/5'
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'absolute top-full left-6 right-6 mt-2 border backdrop-blur-md rounded-[10px] shadow-2xl p-6 md:hidden flex flex-col gap-6 transition-all duration-300 origin-top',
          textDarkClass
            ? 'bg-surface-darkest/95 border-[#1e4fa0]/40'
            : 'bg-white/95 border-neutral-200',
          mobileOpen
            ? 'opacity-100 scale-y-100 pointer-events-auto'
            : 'opacity-0 scale-y-95 pointer-events-none'
        )}
      >
        <div className="flex flex-col gap-4 items-start w-full">
          {navLinks.map((link) => (
            <TextLink
              key={link.label}
              to={link.to}
              dark={textDarkClass}
              onClick={() => setMobileOpen(false)}
              className="w-full text-left py-1"
            >
              {link.label}
            </TextLink>
          ))}
        </div>
        <Button
          variant="primary"
          icon={true}
          to="/contato"
          onClick={() => setMobileOpen(false)}
          className="w-full justify-center"
        >
          Contato
        </Button>
      </div>
    </nav>
  )
}
