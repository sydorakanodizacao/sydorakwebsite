import { cn } from '../../utils/cn'

/**
 * HighlightLine — Frase-resumo com barra vertical amarela à esquerda e microinteração no hover.
 * DESIGN.md: barra 3px full-height primary (muda para secondary no hover) · typography highlight (peso 500) ·
 * cor ink (on-dark no escuro) · gap 12px.
 */
export default function HighlightLine({ children, onDark = false, className, ...props }) {
  return (
    <div 
      className={cn(
        'group flex items-center gap-[12px] select-none',
        onDark ? 'text-on-dark' : 'text-ink',
        className
      )}
      {...props}
    >
      <span 
        className="w-[3px] self-stretch flex-shrink-0 bg-primary group-hover:bg-secondary transition-colors duration-300" 
        aria-hidden="true" 
      />
      <p className="text-highlight leading-relaxed">
        {children}
      </p>
    </div>
  )
}
