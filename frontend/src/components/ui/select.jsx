import * as React from 'react'
import { cn } from '../../utils/cn'

/**
 * Select — Componente de seleção nativo estilizado.
 * Altura: 44px (h-11).
 * Borda: border-hairline.
 * Foco: focus-visible:ring-2 focus-visible:ring-primary.
 */
const Select = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <select
        className={cn(
          'flex h-11 w-full rounded-md border border-hairline bg-canvas px-3 py-2 text-body text-ink placeholder:text-muted transition-all duration-200 focus:outline-none focus-visible:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 appearance-none pr-10 cursor-pointer',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted select-none">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  )
})

Select.displayName = 'Select'

export default Select
