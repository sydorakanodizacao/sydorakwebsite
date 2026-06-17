import { CheckCheck } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * ChecklistItem — Item de lista de benefícios/conformidade com check duplo amarelo e microinteração no hover.
 * DESIGN.md: ícone check primary · typography body · cor ink (ou on-dark) · gap 12px.
 */
export default function ChecklistItem({ children, icon: IconComponent = CheckCheck, onDark = false, className }) {
  return (
    <li className={cn('group flex items-start gap-3', className)}>
      <IconComponent 
        className="h-5 w-5 shrink-0 text-primary mt-0.5" 
        aria-hidden="true" 
      />
      <span
        className={cn(
          'text-body transition-all duration-200',
          onDark 
            ? 'text-on-dark-muted group-hover:text-on-dark group-hover:font-semibold' 
            : 'text-muted group-hover:text-ink group-hover:font-semibold'
        )}
      >
        {children}
      </span>
    </li>
  )
}
