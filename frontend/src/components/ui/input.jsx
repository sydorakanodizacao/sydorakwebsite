import * as React from 'react'
import { cn } from '../../utils/cn'

/**
 * Input — Campo de texto base.
 * Altura: 44px (h-11).
 * Borda: border-hairline.
 * Foco: focus-visible:ring-2 focus-visible:ring-primary.
 */
const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-md border border-hairline bg-canvas px-3 py-2 text-body text-ink placeholder:text-muted transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none focus-visible:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input
