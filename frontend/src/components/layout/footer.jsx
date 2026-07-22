import { cn } from '../../utils/cn'
import TextLink from '../ui/text-link'
import Button from '../ui/button'
import logoRodape from '../../assets/logorodape.svg'

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
        {/* Coluna 1: Logo */}
        <div className="lg:col-span-3 flex flex-col items-start justify-center">
          <img
            src={logoRodape}
            alt="Sydorak Anodização"
            className="w-auto h-12"
          />
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
              R. Dr. Simão Kossobudski, 1110<br/>
              Boqueirão — Curitiba, Paraná<br/>
              CEP: 81730-410
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
              Segunda a quinta das 8 as 12 e das 13 as 17:30<br/>
              Sexta-feira fechamos as 17 horas.
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
