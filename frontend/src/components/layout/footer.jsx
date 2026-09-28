import { cn } from '../../utils/cn'
import TextLink from '../ui/text-link'
import Button from '../ui/button'
import logoRodape from '../../assets/logorodape.svg'

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sydorak-tratamento-de-superf%C3%ADcies',
    icon: LinkedInIcon,
    label: 'Acesse o LinkedIn da Sydorak Anodização (abre em nova aba)',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sydorak.anodizacao/',
    icon: InstagramIcon,
    label: 'Acesse o Instagram da Sydorak Anodização (abre em nova aba)',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/sydorakanodizacao/',
    icon: FacebookIcon,
    label: 'Acesse o Facebook da Sydorak Anodização (abre em nova aba)',
  },
]

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.3a1.63 1.63 0 1 0 1.63 1.63A1.63 1.63 0 0 0 7.86 6.3Z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

/**
 * Footer — Rodapé global da aplicação.
 * 
 * DESIGN.md:
 * - Fundo: navy quase preto bg-surface-darkest.
 * - Grid de 12 colunas no desktop, empilhado em 1 coluna no mobile.
 * - Reutiliza: TextLink (dark), NewsletterInput, Button.
 */
export default function Footer({ className, ...props }) {
  return (
    <footer
      className={cn(
        'bg-surface-darkest text-on-dark py-16 px-6 lg:px-12 w-full select-none',
        className
      )}
      {...props}
    >
      {/* Grid Principal */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
        {/* Coluna 1: Logo & Redes Sociais */}
        <div className="lg:col-span-3 flex flex-col items-start gap-6">
          <img
            src={logoRodape}
            alt="Sydorak Anodização"
            className="w-auto h-12"
          />
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-on-dark-muted/80">
              Siga a Sydorak
            </span>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/10 text-on-dark-muted hover:text-primary hover:border-primary/50 hover:bg-primary/[0.08] hover:shadow-[0_0_12px_rgba(240,197,28,0.25)] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="lg:col-span-3 flex flex-col items-start">
          <h6 className="text-primary font-bold text-sm mb-6 uppercase tracking-wider">
            Links Rápidos
          </h6>
          <nav className="flex flex-col gap-4 items-start w-full">
            <TextLink dark={true} to="/">
              Início
            </TextLink>
            <TextLink dark={true} to="/sobre-nos">
              Sobre nós
            </TextLink>
            <TextLink dark={true} to="/servicos">
              Serviço
            </TextLink>
            <TextLink dark={true} to="/blog">
              Blog
            </TextLink>
          </nav>
          <Button variant="primary" icon={true} to="/contato" className="mt-8">
            Contato
          </Button>
        </div>

        {/* Coluna 3: Legal */}
        <div className="lg:col-span-2 flex flex-col items-start">
          <h6 className="text-primary font-bold text-sm mb-6 uppercase tracking-wider">
            Legal
          </h6>
          <nav className="flex flex-col gap-4 items-start">
            <TextLink dark={true} to="/privacidade">
              Políticas de privacidade
            </TextLink>
            <TextLink dark={true} to="/termos">
              Termos de Serviço
            </TextLink>
            <TextLink dark={true} to="/cookies">
              Cookies
            </TextLink>
          </nav>
        </div>

        {/* Coluna 4: Contatos */}
        <div className="lg:col-span-4 flex flex-col items-start w-full max-w-sm">
          <h6 className="text-primary font-bold text-sm mb-6 uppercase tracking-wider">
            Contatos
          </h6>
          <div className="flex flex-col gap-4 text-on-dark-muted text-sm">
            <p>
              <strong>Endereço:</strong> <br/>
              <a
                href="https://maps.app.goo.gl/54THsoxEvL9mpENr5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors hover:underline"
              >
                R. Dr. Simão Kossobudski, 1110<br/>
                Boqueirão — Curitiba, Paraná<br/>
                CEP: 81730-410
              </a>
            </p>
            <p>
              <strong>Telefones:</strong> <br/>
              <a href="https://wa.me/554132862028" className="hover:text-primary transition-colors hover:underline">WhatsApp: (41) 3286-2028</a><br/>
              <a href="tel:+554130837979" className="hover:text-primary transition-colors hover:underline">Telefone: (41) 3083-7979</a>
            </p>
            <p>
              <strong>E-mails:</strong> <br/>
              <a href="mailto:contato@sydorak.com.br" className="hover:text-primary transition-colors hover:underline">contato@sydorak.com.br</a><br/>
              <a href="mailto:sydorak@uol.com.br" className="hover:text-primary transition-colors hover:underline">sydorak@uol.com.br</a>
            </p>
            <p>
              <strong>Horário de Funcionamento:</strong> <br/>
              Segunda a quinta: das 8h às 12h e das 13h às 17h30<br/>
              Sexta-feira fechamos às 17h.
            </p>
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className="border-t border-white/5 mt-16 pt-8 text-center text-sm text-on-dark-muted">
        <p className="max-w-7xl mx-auto">
          © Sydorak Anodização Todos os Direitos reservados
        </p>
      </div>
    </footer>
  )
}
