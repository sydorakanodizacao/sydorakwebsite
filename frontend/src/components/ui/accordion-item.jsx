import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * AccordionItem — Item de FAQ interativo com transições e gradiente de cor.
 * 
 * DESIGN.md:
 * - Normal (Fechado): Borda cinza suave (border-hairline), título (text-ink), chevron (text-muted) baixo.
 * - Hover (Fechado) e Active (Aberto): Borda azul (border-secondary), título (gradiente de marca azul),
 *   chevron azul (text-secondary) rotacionado 180° para cima se aberto.
 *
 * @param {Object} props
 * @param {string} props.title - Pergunta do FAQ.
 * @param {React.ReactNode} props.children - Resposta do FAQ (conteúdo).
 * @param {string} [props.className] - Classes customizadas adicionais.
 */
export default function AccordionItem({ title, children, className, isOpen: controlledIsOpen, onToggle }) {
  const [localIsOpen, setLocalIsOpen] = useState(false)
  const isControlled = controlledIsOpen !== undefined
  const isOpen = isControlled ? controlledIsOpen : localIsOpen

  const handleToggle = () => {
    if (isControlled) {
      onToggle?.()
    } else {
      setLocalIsOpen(!localIsOpen)
    }
  }

  return (
    <div
      className={cn(
        'border rounded-md bg-canvas transition-colors duration-200',
        isOpen ? 'border-secondary' : 'border-hairline hover:border-secondary',
        className
      )}
    >
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center gap-4 p-4 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-md"
      >
        <span
          className={cn(
            'text-h4-card text-left transition-all duration-300 font-semibold select-none',
            isOpen
              ? 'bg-gradient-to-r from-sky via-[#0E55A9] to-[#08418B] bg-clip-text text-transparent'
              : 'text-ink group-hover:bg-gradient-to-r group-hover:from-sky group-hover:via-[#0E55A9] group-hover:to-[#08418B] group-hover:bg-clip-text group-hover:text-transparent'
          )}
        >
          {title}
        </span>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 transition-transform duration-300',
            isOpen 
              ? 'rotate-180 text-secondary' 
              : 'text-muted group-hover:text-secondary'
          )}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className="text-body text-muted p-4 pt-0 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}
