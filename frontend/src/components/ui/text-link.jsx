import { NavLink } from 'react-router-dom'
import { cn } from '../../utils/cn'

/**
 * TextLink — Link de texto para navegação integrada com react-router-dom.
 * Usado na Navbar e no Footer da Sydorak Anodização.
 *
 * Oferece variantes claro/escuro (prop `dark`) e gerencia automaticamente
 * a classe ativa através do roteador ou forçada pela prop `active`.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.href]
 * @param {string} [props.to]
 * @param {boolean} [props.active]
 * @param {boolean} [props.dark=false]
 * @param {string} [props.className]
 */
export default function TextLink({
  children,
  href,
  to,
  active,
  dark = false,
  className,
  ...props
}) {
  const targetPath = to || href || '#'
  // Verifica se o link é externo
  const isExternal =
    typeof targetPath === 'string' &&
    (targetPath.startsWith('http') || targetPath.startsWith('mailto') || targetPath.startsWith('tel'))

  const renderClassName = (isActive) => {
    const isCurrentActive = active !== undefined ? active : isActive

    return cn(
      'inline-block text-nav-link transition-all duration-200 border-b-2 pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky/50 select-none',
      dark
        ? isCurrentActive
          ? 'text-on-dark border-primary font-bold'
          : 'text-on-dark-muted border-transparent hover:text-on-dark hover:border-primary'
        : isCurrentActive
          ? 'text-ink border-primary font-bold'
          : 'text-muted border-transparent hover:text-ink hover:border-primary',
      className
    )
  }

  if (isExternal) {
    return (
      <a
        href={targetPath}
        target="_blank"
        rel="noopener noreferrer"
        className={renderClassName(false)}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <NavLink
      to={targetPath}
      className={({ isActive }) => renderClassName(isActive)}
      {...props}
    >
      {children}
    </NavLink>
  )
}
