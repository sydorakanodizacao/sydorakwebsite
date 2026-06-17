import { NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * Button — Componente de botão polimórfico e flexível.
 *
 * Suporta as variantes:
 * - `primary` (CTA canônico com gradiente amarelo e hover com brilho/sombra + micro-interação de seta)
 * - `solid` (amarelo sólido chapado para menor ênfase)
 * - `secondary` (navy com texto amarelo para fundo escuro)
 * - `ghost` (transparente com texto muted)
 *
 * Caso as propriedades `to` ou `href` sejam fornecidas, o componente renderizará
 * de forma transparente um componente do react-router-dom (`NavLink`) ou tag `<a>` nativa.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {('primary'|'solid'|'secondary'|'ghost')} [props.variant='primary']
 * @param {boolean} [props.icon=false]
 * @param {string} [props.href]
 * @param {string} [props.to]
 * @param {string} [props.className]
 * @param {string} [props.type='button']
 */
export default function Button({
  children,
  variant = 'primary',
  icon = false,
  href,
  to,
  className,
  type = 'button',
  ...props
}) {
  const baseClasses =
    'group inline-flex items-center justify-center gap-2 select-none font-sans text-button-md font-semibold tracking-wider rounded-[10px] transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-sky/50 disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary:
      'uppercase bg-gradient-to-r from-[#C59D1D] via-[#EEC00D] to-[#FCE16C] hover:from-[#FCE16C] hover:to-[#FCE16C] text-on-primary hover:brightness-[1.04] hover:shadow-primary-hover px-8 py-4',
    solid:
      'uppercase bg-primary text-on-primary hover:brightness-105 hover:shadow-primary-hover px-8 py-4',
    secondary:
      'bg-gradient-to-r from-[#C59D1D]/30 via-[#EEC00D]/30 to-[#FCE16C]/30 hover:from-[#C59D1D] hover:via-[#EEC00D] hover:to-[#FCE16C] text-primary hover:text-on-primary hover:brightness-[1.04] hover:shadow-primary-hover px-8 py-4 border border-transparent',
    ghost:
      'bg-transparent text-muted hover:text-ink hover:bg-surface-alt/50 px-6 py-4',
  }

  const targetPath = to || href
  const isLink = !!targetPath
  const isExternal =
    typeof targetPath === 'string' &&
    (targetPath.startsWith('http') || targetPath.startsWith('mailto') || targetPath.startsWith('tel'))

  const renderContent = () => (
    <>
      <span className="btn-label">{children}</span>
      {icon && (
        <ArrowUpRight
          className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:rotate-45 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
          aria-hidden="true"
        />
      )}
    </>
  )

  const combinedClassName = cn(baseClasses, variants[variant], className)

  if (isLink) {
    if (isExternal) {
      return (
        <a
          href={targetPath}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
          {...props}
        >
          {renderContent()}
        </a>
      )
    }

    return (
      <NavLink to={targetPath} className={combinedClassName} {...props}>
        {renderContent()}
      </NavLink>
    )
  }

  return (
    <button type={type} className={combinedClassName} {...props}>
      {renderContent()}
    </button>
  )
}
