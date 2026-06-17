import { cn } from '../../utils/cn'

/**
 * FloatingCard — card branco que flutua sobre seção navy, com borda-esquerda amarela.
 * DESIGN.md: bg canvas · borderLeft 4px primary · shadow floating · radius lg · padding 40px.
 */
export default function FloatingCard({ children, className }) {
  return (
    <div
      className={cn(
        'rounded-lg border-l-4 border-primary bg-canvas p-10 shadow-floating',
        className,
      )}
    >
      {children}
    </div>
  )
}
