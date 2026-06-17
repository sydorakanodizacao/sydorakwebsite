import IconChip from './icon-chip'
import { cn } from '../../utils/cn'

/**
 * StatItem — Bloco interativo de métricas e prova social.
 * Alinha o IconChip à esquerda e os textos empilhados verticalmente à direita.
 * Contém a classe `group` para que o chip reaja ao hover do card.
 *
 * @param {Object} props
 * @param {React.ComponentType} props.icon - Ícone do lucide-react.
 * @param {string} [props.title] - Valor/número principal (ex: "40 anos").
 * @param {string} [props.description] - Texto secundário/legenda.
 * @param {string} [props.value] - Prop legada compatível mapeada para `title`.
 * @param {string} [props.caption] - Prop legada compatível mapeada para `description`.
 * @param {string} [props.className]
 */
export default function StatItem({
  icon,
  title,
  description,
  value,
  caption,
  className,
  ...props
}) {
  const displayTitle = title || value
  const displayDescription = description || caption

  return (
    <div
      className={cn(
        'group flex items-start gap-3 cursor-pointer select-none',
        className,
      )}
      {...props}
    >
      <IconChip icon={icon} />
      <div className="flex flex-col items-start min-w-0">
        <h4 className="text-h4-card text-secondary font-bold leading-7 break-words">
          {displayTitle}
        </h4>
        {displayDescription ? (
          <p className="text-body-sm text-muted leading-tight mt-0.5 break-words">
            {displayDescription}
          </p>
        ) : null}
      </div>
    </div>
  )
}
