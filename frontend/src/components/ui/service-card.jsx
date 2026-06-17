import { Link } from 'react-router-dom'
import Button from './button'
import { cn } from '../../utils/cn'

/**
 * ServiceCard — Card de serviço dinâmico sobre foto, com overlay escuro.
 * Título com gradiente dourado invertido e botão secundário que acende no hover do card.
 * 
 * DESIGN.md: bg imagem + overlay + zoom no hover · título primary-gradient (inverte no hover) ·
 * corpo on-dark (body-sm) · radius lg · CTA Button (variant=secondary).
 *
 * @param {Object} props
 * @param {string} props.title - Título do card.
 * @param {string} props.description - Descrição curta do serviço.
 * @param {string} props.imageSrc - URL/caminho da imagem de fundo.
 * @param {string} [props.href] - Link externo (renderiza como tag <a>).
 * @param {string} [props.to] - Rota interna do react-router-dom (renderiza como <Link>).
 * @param {string} [props.className] - Classes customizadas adicionais para o wrapper.
 */
export default function ServiceCard({
  title,
  description,
  imageSrc,
  href,
  to,
  className,
  ...props
}) {
  const isExternal = href && (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel'))

  // Escolha o elemento raiz dinamicamente
  const Component = to ? Link : (href ? 'a' : 'div')
  const componentProps = to
    ? { to }
    : href
    ? {
        href,
        target: isExternal ? '_blank' : undefined,
        rel: isExternal ? 'noopener noreferrer' : undefined,
      }
    : {}

  return (
    <Component
      className={cn(
        'group relative overflow-hidden rounded-lg flex flex-col justify-end pt-[240px] md:pt-[312px] pb-6 px-6 cursor-pointer bg-surface-darkest select-none decoration-transparent',
        className
      )}
      {...componentProps}
      {...props}
    >
      {/* Imagem de Fundo com Zoom no Hover */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-0"
        />
      )}

      {/* Overlay para escurecer o fundo e garantir legibilidade */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-surface-darkest/90 via-surface-darkest/40 to-transparent z-10" 
        aria-hidden="true"
      />

      {/* Conteúdo do Card */}
      <div className="relative z-20 flex flex-col">
        {/* Título com Gradiente Dourado Invertido */}
        <h3 className="text-h4-card bg-gradient-to-r from-[#C59D1D] to-[#FCE16C] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#FCE16C] group-hover:to-[#C59D1D] w-fit font-semibold">
          {title}
        </h3>

        {/* Descrição */}
        {description && (
          <p className="text-body-sm text-on-dark mb-6 mt-2">
            {description}
          </p>
        )}

        {/* Botão Secundário - Acende no hover do card via group-hover */}
        <Button
          variant="secondary"
          className={cn(
            'w-fit pointer-events-none',
            'group-hover:from-[#C59D1D] group-hover:via-[#EEC00D] group-hover:to-[#FCE16C]',
            'group-hover:text-on-primary group-hover:brightness-[1.04] group-hover:shadow-primary-hover'
          )}
        >
          Saiba mais
        </Button>
      </div>
    </Component>
  )
}
