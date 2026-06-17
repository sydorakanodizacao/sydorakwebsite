import * as React from 'react'
import { cn } from '../../utils/cn'

/**
 * Textarea — Campo de texto multilinha base.
 * Altura mínima: 120px (min-h-[120px]).
 * Borda: border-hairline.
 * Foco: focus-visible:ring-2 focus-visible:ring-primary.
 */
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[120px] w-full rounded-md border border-hairline bg-canvas px-3 py-2 text-body text-ink placeholder:text-muted transition-all duration-200 focus:outline-none focus-visible:outline-none focus:border-primary focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 resize-y',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
