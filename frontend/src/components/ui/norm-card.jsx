import { BadgeCheck } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * NormCard — Selo de norma técnica atendida.
 * DESIGN.md: bg-canvas (ou bg-surface para destaque) · border hairline · gap-x 8px · py 22px · px 14px · radius md.
 * Microinteração: Ícone e título mudam simultaneamente de secondary (azul) para primary (amarelo) no hover.
 */
export default function NormCard({ 
  title, 
  code, // alias retrocompatível
  description, 
  variant = 'default', 
  icon: IconComponent = BadgeCheck, 
  className 
}) {
  const displayTitle = title || code

  return (
    <article
      className={cn(
        'group cursor-pointer flex items-start gap-x-2 py-[22px] px-[14px] rounded-md border border-hairline transition-all duration-200',
        variant === 'surface' ? 'bg-surface' : 'bg-canvas',
        className
      )}
    >
      <IconComponent 
        className="h-6 w-6 shrink-0 text-secondary group-hover:text-primary transition-colors duration-200 mt-0.5" 
        aria-hidden="true" 
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-sans text-label text-secondary group-hover:text-primary transition-colors duration-200 leading-tight truncate">
          {displayTitle}
        </h4>
        {description && (
          <p className="text-body-sm text-muted mt-[3px] leading-tight truncate">
            {description}
          </p>
        )}
      </div>
    </article>
  )
}
