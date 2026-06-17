import { Send } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * NewsletterInput — Campo de captura de e-mails para newsletter.
 * Projetado para fundos escuros (como o Footer).
 *
 * DESIGN.md:
 * - Container: Fundo escuro bg-[#1A1A1A] (com lg:bg-surface-dark), cantos md.
 * - Input: Sem bordas, texto claro, placeholder muted.
 * - Botão: Acoplado à direita, gradiente dourado (Normal) -> sólido primary (Hover).
 *
 * @param {Object} props
 * @param {string} [props.className] - Classes customizadas para o container.
 * @param {string} [props.placeholder='E-mail'] - Placeholder do input.
 */
export default function NewsletterInput({ className, placeholder = 'E-mail', ...props }) {
  return (
    <div
      className={cn(
        'flex items-center w-full max-w-md rounded-md overflow-hidden bg-[#1A1A1A] lg:bg-surface-dark border border-hairline/10 focus-within:border-primary/50 transition-colors duration-200',
        className
      )}
    >
      <input
        type="email"
        placeholder={placeholder}
        className="flex-1 bg-transparent border-none outline-none text-on-dark placeholder:text-muted px-4 py-3 text-body-sm min-w-0"
        required
        {...props}
      />
      <button
        type="submit"
        className="flex items-center justify-center px-5 py-3 transition-all duration-300 text-on-primary bg-gradient-to-r from-[#C59D1D] to-[#FCE16C] hover:from-primary hover:to-primary outline-none focus-visible:ring-2 focus-visible:ring-primary/50 shrink-0"
        aria-label="Inscrever-se"
      >
        <Send className="w-5 h-5 shrink-0" />
      </button>
    </div>
  )
}
