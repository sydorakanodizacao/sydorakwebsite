import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../../utils/cn'
import Button from '../ui/button'
import TextLink from '../ui/text-link'
import iconNovaLogo from '../../assets/icon-novalogo.png'

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Sobre nós', to: '/sobre-nos' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Blog', to: '/blog' }
]

/**
  * Navbar — Cabeçalho de navegação global.
  * 
  * DESIGN.md:
  * - Fundo: translúcido com backdrop-blur e cantos arredondados, bordas azuis sutis.
  * - Scroll: transiciona para fundo escuro bg-surface-darkest/95 e sombra.
  * - Símbolo: simbolo.svg da Sydorak.
  * - Mobile: menu hambúrguer com drawer suspenso correspondente.
  */
export default function Navbar({ className }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={cn('fixed top-0 left-0 w-full z-50 px-6 pt-6 transition-all duration-300', className)}>
      <div
        className={cn(
          'max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-[10px] border backdrop-blur-[6px] transition-all duration-300',
          scrolled
            ? 'bg-surface-darkest/95 border-[#1e4fa0]/50 shadow-lg'
            : 'bg-[rgba(5,17,35,0.3)] border-[#1e4fa0]/30'
        )}
      >
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0 focus:outline-none">
          <img
            src={iconNovaLogo}
            alt="Sydorak Anodização"
            className="h-[40px] w-auto transition-transform duration-200 hover:scale-[1.03]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
             <TextLink key={link.label} to={link.to} dark={true}>
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
          className="md:hidden flex items-center justify-center text-on-dark p-2 hover:bg-white/5 rounded-md focus:outline-none transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'absolute top-full left-6 right-6 mt-2 bg-surface-darkest/95 border border-[#1e4fa0]/40 backdrop-blur-md rounded-[10px] shadow-2xl p-6 md:hidden flex flex-col gap-6 transition-all duration-300 origin-top',
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
              dark={true}
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
