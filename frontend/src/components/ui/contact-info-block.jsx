import { cn } from '../../utils/cn'

/**
 * ContactInfoBlock — bloco de informações de contato.
 * DESIGN.md: subtítulo dourado-forte (h4-card / primary-strong) · corpo muted (body-sm).
 */
export default function ContactInfoBlock({ subtitle, children, className }) {
  return (
    <div className={cn('space-y-1', className)}>
      <p className="text-h4-card text-primary-strong">{subtitle}</p>
      <div className="text-body-sm text-muted">{children}</div>
    </div>
  )
}
