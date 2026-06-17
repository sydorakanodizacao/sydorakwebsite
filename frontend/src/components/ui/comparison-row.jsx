import { CheckCheck } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * ComparisonRow — Card comparativo Anodização × Pintura.
 * 
 * DESIGN.md:
 * - Normal: fundo bg-surface, borda esquerda border-transparent, sem sombra.
 * - Hover: borda-esquerda border-primary (Amarelo, 4px), leve sombra (shadow-card).
 * - Conteúdo: Título royal (text-secondary), Anodização com check CheckCheck (text-primary)
 *   e texto em destaque (text-primary), Pintura em tom muted.
 *
 * @param {Object} props
 * @param {string} props.title - Título do card comparativo.
 * @param {string} props.anodizacao - Texto de comparação da Anodização (ex: "Anodização: ...").
 * @param {string} props.pintura - Texto de comparação da Pintura (ex: "Pintura: ...").
 * @param {string} [props.className] - Classes customizadas para o wrapper.
 */
export default function ComparisonRow({ title, anodizacao, pintura, className, ...props }) {
  // Helper para separar o prefixo "Anodização:" ou similar e colocá-lo em destaque
  const splitPrefix = (str, defaultPrefix) => {
    if (!str) return ['', '']
    const idx = str.indexOf(':')
    if (idx === -1) return [defaultPrefix, str]
    return [str.slice(0, idx + 1), str.slice(idx + 1)]
  }

  const [anodizacaoPrefix, anodizacaoText] = splitPrefix(anodizacao, 'Anodização:')
  const [pinturaPrefix, pinturaText] = splitPrefix(pintura, 'Pintura:')

  return (
    <div
      className={cn(
        'group flex flex-col p-6 rounded-md bg-surface border-l-4 border-transparent transition-all duration-300 hover:border-primary hover:shadow-card select-none',
        className
      )}
      {...props}
    >
      {/* Título do Card */}
      <h4 className="text-h4-card text-secondary font-bold mb-4">
        {title}
      </h4>

      {/* Lista Comparativa */}
      <div className="flex flex-col gap-3">
        {/* Item de Destaque: Anodização */}
        {anodizacao && (
          <div className="flex gap-3 items-start text-body-sm leading-relaxed">
            <CheckCheck className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
            <span>
              <strong className="text-primary font-semibold">{anodizacaoPrefix}</strong>
              <span className="text-muted">{anodizacaoText}</span>
            </span>
          </div>
        )}

        {/* Item Secundário: Pintura */}
        {pintura && (
          <div className="flex gap-3 items-start text-body-sm leading-relaxed text-muted">
            <CheckCheck className="h-5 w-5 shrink-0 text-muted mt-0.5" aria-hidden="true" />
            <span>
              <strong className="font-semibold">{pinturaPrefix}</strong>
              <span>{pinturaText}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
