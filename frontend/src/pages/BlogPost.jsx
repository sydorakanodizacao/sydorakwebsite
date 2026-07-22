import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { PortableText } from '@portabletext/react'
import { sanityClient, urlFor } from '../lib/sanity'
import Button from '../components/ui/button'
import Seo from '../components/layout/Seo'
import DashedLink from '../components/ui/dashed-link'

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  ...,
  "category": category->title
}`

/**
 * BlogPost — Página interna de exibição de um artigo individual do Blog (Fase 3).
 * Captura o slug da URL via useParams, busca o post correspondente no Sanity,
 * e exibe o artigo com design focado em legibilidade (max-w-3xl) e tratamento de erro 404.
 */
export default function BlogPost() {
  const { slug } = useParams()
  // key={slug} força remontagem ao trocar de artigo, reiniciando post/loading sem setState síncrono no efeito.
  return <BlogPostContent key={slug} slug={slug} />
}

function BlogPostContent({ slug }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    sanityClient.fetch(POST_QUERY, { slug }).then((data) => {
      setPost(data)
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return (
      <main className="pt-32 md:pt-40 pb-24 bg-canvas min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-hairline/30 border-t-primary rounded-full animate-spin" aria-label="Carregando artigo" />
      </main>
    )
  }

  // Tratamento de erro caso o post não exista
  if (!post) {
    return (
      <main className="pt-32 md:pt-40 pb-24 bg-canvas min-h-screen flex items-center justify-center">
        <Seo title="Artigo não encontrado" />
        <div className="text-center max-w-md px-6">
          <h2 className="text-3xl font-bold text-ink mb-4 font-sans tracking-tight">
            Artigo não encontrado
          </h2>
          <p className="text-muted mb-8 leading-relaxed text-sm md:text-base">
            O artigo que você está procurando não existe ou foi removido de nossa base de dados.
          </p>
          <Button variant="secondary" to="/blog" className="inline-flex justify-center">
            Voltar para o Blog
          </Button>
        </div>
      </main>
    )
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : ''

  return (
    <main className="pt-32 md:pt-40 pb-24 bg-canvas min-h-screen">
      <Seo title={post.title} description={post.excerpt} />

      <article className="max-w-3xl mx-auto px-6">
        {/* Link para voltar ao blog */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors duration-200 font-bold uppercase tracking-wider mb-8 select-none decoration-transparent"
        >
          ← Voltar para o Blog
        </Link>

        {/* Eyebrow Tag */}
        <div className="mb-4">
          <DashedLink className="uppercase tracking-wider text-xs pointer-events-none">
            Blog &amp; Artigos
          </DashedLink>
        </div>

        {/* Metadados: Categoria e Data */}
        <div className="flex items-center gap-3 text-xs md:text-sm text-muted font-semibold mb-6 select-none">
          <span className="bg-[#011025]/5 border border-[#1e4fa0]/15 text-[#011025] px-3 py-1 rounded-[4px] font-sans">
            {post.category}
          </span>
          <span>•</span>
          <span className="font-sans">{formattedDate}</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink tracking-tight font-sans leading-tight">
          {post.title}
        </h1>

        {/* Imagem de Capa */}
        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).width(1200).height(675).url()}
            alt={post.title}
            className="w-full aspect-video object-cover rounded-xl mt-8 mb-12 shadow-sm border border-hairline/20 select-none"
          />
        )}

        {/* Parágrafo de Introdução (Excerto) */}
        <p className="text-lg md:text-xl text-body font-medium leading-relaxed mb-8">
          {post.excerpt}
        </p>

        {/* Corpo do Artigo */}
        <div className="space-y-6 text-body text-base leading-relaxed">
          <PortableText value={post.body} />
        </div>
      </article>
    </main>
  )
}
