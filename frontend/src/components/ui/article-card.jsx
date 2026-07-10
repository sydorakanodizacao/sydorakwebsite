import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

/**
 * ArticleCard — Card de artigo/blog para listagem.
 * Segue a identidade visual do Design System (Fase 2/3).
 *
 * @param {Object} props
 * @param {Object} props.post - Dados do post.
 * @param {string} props.post._id - ID do post.
 * @param {string} props.post.title - Título do post.
 * @param {Object} props.post.slug - Slug do post (Sanity-like).
 * @param {string} props.post.slug.current - Valor do slug.
 * @param {string} props.post.category - Categoria do post.
 * @param {string} props.post.publishedAt - Data de publicação (ISO string).
 * @param {string} props.post.excerpt - Resumo/excerto do post.
 * @param {string} props.post.imageUrl - URL da imagem de destaque.
 * @param {string} [props.className] - Classes customizadas adicionais.
 */
export default function ArticleCard({ post, className, ...props }) {
  const { title, slug, category, publishedAt, excerpt, imageUrl } = post
  const to = `/blog/${slug.current}`

  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : ''

  return (
    <Link
      to={to}
      className={cn(
        'group flex flex-col bg-canvas border border-hairline/30 overflow-hidden transition-all duration-300 hover:border-[#1E4FA0]/40 hover:shadow-[0_8px_30px_rgba(1,16,37,0.06)] rounded-[8px] h-full cursor-pointer decoration-transparent',
        className
      )}
      {...props}
    >
      {/* Imagem do Artigo */}
      <div className="relative overflow-hidden aspect-video bg-surface-darkest">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute top-4 left-4 bg-[#011025]/85 border border-[#1E4FA0]/30 text-primary text-xs font-bold px-3 py-1 rounded-[4px] backdrop-blur-[4px]">
          {category}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex-grow flex flex-col p-6">
        <span className="text-xs text-muted font-sans mb-3">
          {formattedDate}
        </span>
        <h3 className="font-sans text-lg font-bold text-ink leading-snug group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="font-sans text-sm text-body-sm text-muted mt-2 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Link decorativo no rodapé do card */}
        <div className="mt-auto pt-6 flex items-center gap-[6px]">
          <span
            className="h-[2px] w-[16px] bg-primary transition-all duration-200 ease-out group-hover:w-[24px]"
            aria-hidden="true"
          />
          <span className="font-sans text-xs font-bold uppercase tracking-wider text-ink transition-colors duration-200 ease-out group-hover:text-primary">
            Ler Artigo
          </span>
        </div>
      </div>
    </Link>
  )
}
