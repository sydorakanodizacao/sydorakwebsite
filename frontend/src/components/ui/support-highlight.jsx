import { Headset } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * SupportHighlight — Destaque de suporte/atendimento com ícone de headset.
 * DESIGN.md: usado sobre fundos escuros · ícone headset · text-body-sm · gap 12px · items-start.
 */
export default function SupportHighlight({ text, children, icon: IconComponent = Headset, className }) {
  const displayText = text || children

  return (
    <div className={cn('flex items-center gap-2.5 cursor-default select-none', className)}>
      <IconComponent 
        className="size-[18px] md:size-5 shrink-0 text-sky" 
        aria-hidden="true" 
      />
      <span 
        className="text-sm md:text-base font-medium text-on-dark-muted leading-snug"
      >
        {displayText}
      </span>
    </div>
  )
}
