import { ArrowUpRight } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * LinkWhatsapp — único elemento verde do sistema (convenção do canal).
 * DESIGN.md: cor whatsapp-text · typography label · ícone arrow-up-right.
 */
export default function LinkWhatsapp({ href = '#', children, className }) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center gap-1.5 text-label text-whatsapp-text transition hover:opacity-80',
        className,
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  )
}
