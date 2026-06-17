import DashedLink from './dashed-link'
import { cn } from '../../utils/cn'

/**
 * ProcessCard — etapa do processo no carrossel.
 * 
 * DESIGN.md:
 * - Normal: fundo bg-surface, borda esquerda border-transparent, sem sombra.
 * - Hover: borda-esquerda border-primary (Amarelo, 4px), leve sombra (shadow-card).
 * - Conteúdo: DashedLink "Etapa N" no topo, título royal (text-secondary) com mt-6 mb-2,
 *   corpo/descrição muted (text-body-sm).
 *
 * @param {Object} props
 * @param {string} props.step - Texto da etapa (ex: "Etapa 1").
 * @param {string} props.title - Título do card.
 * @param {string} props.description - Descrição da etapa.
 * @param {string} [props.className] - Classes customizadas adicionais.
 */
export default function ProcessCard({ step, title, description, className, ...props }) {
  return (
    <div
      className={cn(
        'group flex flex-col p-6 rounded-md bg-surface border-l-4 border-transparent transition-all duration-300 hover:border-primary hover:shadow-card select-none',
        className
      )}
      {...props}
    >
      {step && <DashedLink>{step}</DashedLink>}
      <h3 className="text-h4-card text-secondary font-bold mt-6 mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-body-sm text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
