import { cn } from '../../utils/cn'

/**
 * DashedLink — Chapéu (hat) decorativo de texto com um dash horizontal à esquerda.
 * Por padrão, atua como elemento estático (div) e não clicável, conforme as especificações
 * da Sydorak Anodização, mas renderiza como link <a> se um href válido (diferente de '#') for passado.
 *
 * Possui uma micro-interação sutil de expansão no dash e acendimento do texto no hover.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.href='#']
 * @param {string} [props.className]
 */
export default function DashedLink({ children, href = '#', onDark = false, className, ...props }) {
  const isLink = href && href !== '#'
  const Component = isLink ? 'a' : 'div'

  return (
    <Component
      href={isLink ? href : undefined}
      className={cn(
        'group inline-flex items-center gap-[6px] select-none',
        isLink ? 'cursor-pointer' : 'cursor-default',
        className
      )}
      {...props}
    >
      <span
        className="h-[2px] w-[16px] bg-primary shrink-0 transition-all duration-200 ease-out group-hover:w-[24px]"
        aria-hidden="true"
      />
      <span
        className={cn(
          "font-sans text-nav-link transition-colors duration-200 ease-out group-hover:text-primary whitespace-nowrap",
          onDark ? "text-on-dark-muted" : "text-ink"
        )}
      >
        {children}
      </span>
    </Component>
  )
}
