import { cn } from '../../utils/cn'

/**
 * Label — rótulo de formulário.
 * Tipografia: text-body-sm font-semibold text-ink.
 */
export default function Label({ className, children, ...props }) {
  return (
    <label
      className={cn('text-body-sm font-semibold text-ink select-none', className)}
      {...props}
    >
      {children}
    </label>
  )
}
