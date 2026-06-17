import { Headset } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * SupportHighlight — Destaque de suporte/atendimento com ícone de headset.
 * DESIGN.md: usado sobre fundos escuros · ícone headset · text-body-sm · gap 12px · items-start.
 */
export default function SupportHighlight({ text, children, icon: IconComponent = Headset, className }) {
  const displayText = text || children

  return (
    <div className={cn('group flex items-center gap-3 cursor-default select-none', className)}>
      <IconComponent 
        className="h-5 w-5 shrink-0 text-secondary group-hover:text-sky transition-colors duration-200" 
        aria-hidden="true" 
      />
      <span 
        className="text-body-sm text-on-dark-muted group-hover:text-on-dark transition-colors duration-200 leading-snug"
      >
        {displayText}
      </span>
    </div>
  )
}
