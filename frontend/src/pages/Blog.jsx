import { useState, useMemo, useEffect } from 'react'
import ArticleCard from '../components/ui/article-card'
import Button from '../components/ui/button'
import Seo from '../components/layout/Seo'
import { sanityClient, urlFor } from '../lib/sanity'
import { cn } from '../utils/cn'

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  "category": category->title,
  publishedAt,
  excerpt,
  mainImage
}`

const CATEGORIES_QUERY = `*[_type == "category"] | order(title asc) { title }`

/**
 * Blog — Página principal de listagem do Blog e Artigos Técnicos (Fase 3).
 * Renderiza os artigos vindos do Sanity, oferecendo filtros por categoria, ordenação e paginação.
 * O cabeçalho é renderizado sob o layout global, com a Navbar em modo claro/sólido.
 */
export default function Blog() {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState(['Todas'])
  const [category, setCategory] = useState('Todas')
  const [sort, setSort] = useState('recentes')
  const [visibleCount, setVisibleCount] = useState(6)

  useEffect(() => {
    Promise.all([
      sanityClient.fetch(POSTS_QUERY),
      sanityClient.fetch(CATEGORIES_QUERY),
    ]).then(([fetchedPosts, fetchedCategories]) => {
      setPosts(fetchedPosts)
      setCategories(['Todas', ...fetchedCategories.map((c) => c.title)])
    })
  }, [])

  // Lógica de filtragem e ordenação combinada
  const filteredAndSortedPosts = useMemo(() => {
    let result = [...posts]

    // 1. Filtrar por categoria
    if (category !== 'Todas') {
      result = result.filter((post) => post.category === category)
    }

    // 2. Ordenar posts
    result.sort((a, b) => {
      if (sort === 'recentes') {
        return new Date(b.publishedAt) - new Date(a.publishedAt)
      }
      if (sort === 'antigos') {
        return new Date(a.publishedAt) - new Date(b.publishedAt)
      }
      if (sort === 'az') {
        return a.title.localeCompare(b.title)
      }
      return 0
    })

    return result
  }, [posts, category, sort])

  const handleLoadMore = () => setVisibleCount((prev) => prev + 6)

  const paginatedPosts = filteredAndSortedPosts.slice(0, visibleCount)

  return (
    <main className="pt-32 md:pt-40 pb-24 bg-canvas min-h-screen">
      <Seo title="Blog e Artigos Técnicos" description="Explore nosso acervo de especificações, normas técnicas, comparativos de processos e as melhores práticas no tratamento de superfícies de alumínio." />
      <div className="max-w-[1440px] px-4 md:px-6 xl:px-[112px] mx-auto">
        {/* Cabeçalho da página */}
        <div className="border-b border-hairline/20 pb-8 mb-12">
          <p className="flex items-center gap-2 text-eyebrow uppercase text-muted mb-3 select-none">
            <span className="h-0.5 w-4 bg-primary" aria-hidden="true" />
            Conhecimento Técnico
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-ink tracking-tight font-sans">
            Blog e Artigos Técnicos
          </h1>
          <p className="text-muted text-base max-w-2xl mt-4 leading-relaxed">
            Explore nosso acervo de especificações, normas técnicas, comparativos de processos e as melhores práticas no tratamento de superfícies de alumínio.
          </p>
        </div>

        {/* Filtros e Ordenação */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          {/* Botões de Categoria */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setCategory(cat)
                  setVisibleCount(6)
                }}
                className={cn(
                  'px-4 py-2 text-xs md:text-sm font-medium transition-all duration-200 focus:outline-none rounded-[6px] border select-none cursor-pointer',
                  category === cat
                    ? 'bg-[#011025] text-white border-[#011025] shadow-sm'
                    : 'bg-white text-muted border-hairline/30 hover:border-ink hover:text-ink'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Ordenação */}
          <div className="flex items-center gap-3 shrink-0">
            <label htmlFor="sort" className="text-sm font-medium text-muted whitespace-nowrap select-none">
              Ordenar por:
            </label>
            <div className="relative">
              <select
                id="sort"
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value)
                  setVisibleCount(6)
                }}
                className="bg-white border border-hairline/30 text-ink text-sm rounded-[6px] pl-3 pr-8 py-2 focus:border-[#1E4FA0] focus:outline-none cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%252371717a%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[right_8px_center] bg-no-repeat"
              >
                <option value="recentes">Mais recentes</option>
                <option value="antigos">Mais antigos</option>
                <option value="az">A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grid de Artigos */}
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.map((post) => (
              <ArticleCard
                key={post._id}
                post={{
                  ...post,
                  imageUrl: post.mainImage ? urlFor(post.mainImage).width(600).height(400).url() : null,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-hairline/40 rounded-lg">
            <p className="text-muted text-lg">Nenhum artigo encontrado nesta categoria.</p>
          </div>
        )}

        {/* Botão Ver Mais */}
        {filteredAndSortedPosts.length > visibleCount && (
          <div className="mt-16 flex justify-center">
            <Button variant="secondary" onClick={handleLoadMore}>
              Ver mais
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
