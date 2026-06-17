import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * CarouselNav — par de botões circulares (anterior/próximo) do carrossel de processo.
 * DESIGN.md: 40px · borda hairline-strong · iconColor ink · radius full.
 */
export default function CarouselNav({ onPrev, onNext, className }) {
  const buttonClass =
    'flex h-10 w-10 items-center justify-center rounded-full border border-hairline-strong text-ink transition hover:border-primary hover:text-primary-strong'

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <button type="button" onClick={onPrev} aria-label="Anterior" className={buttonClass}>
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button type="button" onClick={onNext} aria-label="Próximo" className={buttonClass}>
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  )
}
