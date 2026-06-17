import { ShieldCheck } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * IconChip — Quadrado de 40px em surface-alt contendo um ícone.
 * Reage ao hover do container pai (que deve possuir a classe `group`) mudando
 * para o gradiente secundário da marca e tornando o ícone branco.
 *
 * @param {Object} props
 * @param {React.ComponentType} props.icon - Componente de ícone do lucide-react.
 * @param {string} [props.className]
 * @param {string} [props.iconClassName]
 */
export default function IconChip({ icon: Icon = ShieldCheck, className, iconClassName }) {
  return (
    <span
      className={cn(
        'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-alt transition-all duration-300 ease-out',
        'group-hover:bg-gradient-to-r group-hover:from-sky group-hover:via-[#0E55A9] group-hover:to-[#08418B]',
        className,
      )}
    >
      {Icon ? (
        <Icon
          className={cn(
            'h-5 w-5 text-secondary transition-colors duration-300 ease-out',
            'group-hover:text-white',
            iconClassName,
          )}
          aria-hidden="true"
        />
      ) : null}
    </span>
  )
}
