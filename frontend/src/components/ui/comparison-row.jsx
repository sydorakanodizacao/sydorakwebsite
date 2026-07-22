import { CheckCheck } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * ComparisonRow — Card comparativo Anodização × Pintura e Aplicações.
 * 
 * DESIGN.md:
 * - Normal: fundo bg-surface, borda esquerda border-transparent, sem sombra.
 * - Hover: borda-esquerda border-primary (Amarelo, 4px), leve sombra (shadow-card).
 * - Conteúdo: Título royal (text-secondary), Anodização/Aplicação com destaque (text-primary-strong).
 *
 * @param {Object} props
 * @param {string} props.title - Título do card.
 * @param {string} props.anodizacao - Primeiro texto (ex: "Aplicação: ...").
 * @param {string} props.pintura - Segundo texto (ex: "Por que anodização: ...").
 * @param {boolean} [props.showCheck=true] - Exibe ou oculta ícones CheckCheck.
 * @param {boolean} [props.highlightBoth=false] - Destaca ambos os prefixos em dourado.
 * @param {string} [props.className] - Classes customizadas para o wrapper.
 */
export default function ComparisonRow({
  title,
  anodizacao,
  pintura,
  showCheck = true,
  highlightBoth = false,
  className,
  ...props
}) {
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
        'group flex flex-col p-5 md:p-6 rounded-[10px] bg-surface border-l-4 border-transparent transition-all duration-300 hover:border-primary hover:shadow-card select-none',
        className
      )}
      {...props}
    >
      {/* Título do Card */}
      <h4 className="text-h4-card text-secondary font-bold mb-2.5">
        {title}
      </h4>

      {/* Lista de Informações */}
      <div className="flex flex-col gap-1.5">
        {/* Item 1 */}
        {anodizacao && (
          <div className="flex gap-2.5 items-start text-body-sm leading-relaxed">
            {showCheck && (
              <CheckCheck className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden="true" />
            )}
            <span>
              <strong className="text-primary-strong font-semibold">{anodizacaoPrefix}</strong>
              <span className="text-muted">{anodizacaoText}</span>
            </span>
          </div>
        )}

        {/* Item 2 */}
        {pintura && (
          <div className="flex gap-2.5 items-start text-body-sm leading-relaxed">
            {showCheck && (
              <CheckCheck className="h-5 w-5 shrink-0 text-muted mt-0.5" aria-hidden="true" />
            )}
            <span>
              <strong className={cn(highlightBoth ? 'text-primary-strong' : '', 'font-semibold')}>
                {pinturaPrefix}
              </strong>
              <span className="text-muted">{pinturaText}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
