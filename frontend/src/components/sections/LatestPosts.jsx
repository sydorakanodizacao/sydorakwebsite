import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ArticleCard from '../ui/article-card'
import Button from '../ui/button'
import DashedLink from '../ui/dashed-link'
import { sanityClient, urlFor } from '../../lib/sanity'
import { cn } from '../../utils/cn'

const LATEST_POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  "category": category->title,
  publishedAt,
  excerpt,
  mainImage
}`

// Artigos de fallback caso o Sanity esteja temporariamente inacessível
const FALLBACK_POSTS = [
  {
    _id: 'fallback-1',
    title: 'Anodização vs. Pintura Eletrostática a Pó: Qual Escolher para Perfis de Alumínio Industriais?',
    slug: { current: 'anodizacao-vs-pintura-eletrostatica-a-po' },
    category: 'Comparativo Técnico',
    publishedAt: new Date().toISOString(),
    excerpt: 'Análise aprofundada de custos, durabilidade, resistência à corrosão e sustentabilidade entre os dois processos de acabamento.',
  },
  {
    _id: 'fallback-2',
    title: 'Tabela de Cores e Acabamentos em Anodização: Do Fosco Natural ao Bronze 1004 e Preto',
    slug: { current: 'tabela-de-cores-e-acabamentos-em-anodizacao' },
    category: 'Acabamentos e Cores',
    publishedAt: new Date().toISOString(),
    excerpt: 'Guia visual e de especificações técnicas das ligas de alumínio e das tonalidades anodizadas disponíveis na Sydorak.',
  },
  {
    _id: 'fallback-3',
    title: 'Serviços de Anodização em Curitiba e Região Sul: Como Escolher um Fornecedor de Tratamento de Superfície',
    slug: { current: 'servicos-de-anodizacao-em-curitiba-e-regiao-sul' },
    category: 'Guia Industrial',
    publishedAt: new Date().toISOString(),
    excerpt: 'Critérios essenciais de capacidade de banhos, testes de camada, ensaios em câmara salina e certificações de conformidade.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/**
 * LatestPosts — Seção de Artigos Recentes / Push Blog.
 * Exibida antes da seção de FAQ nas páginas institucionais.
 * 
 * - Desktop: Grade com os 3 artigos mais recentes alinhados lado a lado.
 * - Mobile: Carrossel touch/scroll-snap com setas de navegação visíveis e indicadores.
 * - CMS: Integração com Sanity CMS (query dos últimos 3 posts publicados).
 */
export default function LatestPosts({ className }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef(null)

  useEffect(() => {
    let isMounted = true

    sanityClient
      .fetch(LATEST_POSTS_QUERY)
      .then((data) => {
        if (isMounted) {
          if (data && data.length > 0) {
            setPosts(data)
          } else {
            setPosts(FALLBACK_POSTS)
          }
          setLoading(false)
        }
      })
      .catch((err) => {
        console.warn('Erro ao carregar posts do Sanity, utilizando fallbacks:', err)
        if (isMounted) {
          setPosts(FALLBACK_POSTS)
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  // Atualiza o índice do slide ativo durante o scroll manual/swipe no mobile
  const handleScroll = () => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const children = Array.from(container.children)
    if (!children.length) return

    const containerCenter = container.scrollLeft + container.offsetWidth / 2
    let closestIndex = 0
    let minDistance = Infinity

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2
      const distance = Math.abs(containerCenter - childCenter)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = idx
      }
    })

    setActiveIndex(closestIndex)
  }

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return
    const targetIndex = Math.max(0, Math.min(index, posts.length - 1))
    const cardElement = scrollRef.current.children[targetIndex]
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
    setActiveIndex(targetIndex)
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1)
    } else {
      scrollToIndex(posts.length - 1)
    }
  }

  const handleNext = () => {
    if (activeIndex < posts.length - 1) {
      scrollToIndex(activeIndex + 1)
    } else {
      scrollToIndex(0)
    }
  }

  return (
    <section className={cn('w-full bg-canvas py-16 md:py-24 overflow-hidden border-b border-hairline/20', className)}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[112px]">
        {/* Cabeçalho da Seção com Título e CTA Desktop */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <DashedLink className="uppercase tracking-wider text-xs mb-3 pointer-events-none">
              Blog & Conhecimento Técnico
            </DashedLink>
            <h2 className="text-h2-section-mobile md:text-h2-section text-ink font-bold leading-tight">
              Artigos e Destaques Técnicos
            </h2>
            <p className="text-muted text-base mt-3 leading-relaxed">
              Explore nossas publicações sobre normas técnicas, comparativos industriais e as melhores práticas no tratamento e acabamento de superfícies de alumínio.
            </p>
          </div>

          <div className="hidden md:block shrink-0">
            <Button to="/blog" variant="primary" icon={true}>
              Ver todos os artigos
            </Button>
          </div>
        </div>

        {/* Estado de Carregamento (Skeleton) */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="animate-pulse bg-white border border-hairline/30 rounded-[8px] overflow-hidden flex flex-col h-[380px]"
              >
                <div className="aspect-video bg-hairline/40 w-full" />
                <div className="p-6 flex flex-col flex-1 gap-3">
                  <div className="h-3 bg-hairline/40 rounded w-1/4" />
                  <div className="h-5 bg-hairline/40 rounded w-3/4" />
                  <div className="h-4 bg-hairline/30 rounded w-full mt-2" />
                  <div className="h-4 bg-hairline/30 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Desktop / Tablet Grid: 3 cards visíveis */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={containerVariants}
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            >
              {posts.map((post) => (
                <motion.div key={post._id} variants={itemVariants} className="h-full flex flex-col">
                  <ArticleCard
                    post={{
                      ...post,
                      imageUrl: post.mainImage ? urlFor(post.mainImage).width(600).height(400).url() : null,
                    }}
                    className="h-full"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile: Carrossel com navegação e setas visíveis */}
            <div className="md:hidden">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-2 px-1 -mx-4 px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {posts.map((post, idx) => (
                  <div
                    key={post._id || idx}
                    className="w-[85vw] max-w-[340px] shrink-0 snap-center flex flex-col"
                  >
                    <ArticleCard
                      post={{
                        ...post,
                        imageUrl: post.mainImage ? urlFor(post.mainImage).width(600).height(400).url() : null,
                      }}
                      className="h-full"
                    />
                  </div>
                ))}
              </div>

              {/* Controles de Navegação do Carrossel (Setas e Indicadores) */}
              <div className="mt-6 flex items-center justify-between px-2">
                {/* Seta Anterior */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-hairline/40 flex items-center justify-center bg-white text-ink shadow-sm hover:border-primary active:scale-95 transition-all duration-200 select-none cursor-pointer"
                  aria-label="Artigo anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-ink" />
                </button>

                {/* Indicadores / Dots */}
                <div className="flex items-center gap-2">
                  {posts.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => scrollToIndex(idx)}
                      className={cn(
                        'h-2 rounded-full transition-all duration-300 select-none cursor-pointer',
                        activeIndex === idx ? 'w-6 bg-primary' : 'w-2 bg-hairline-strong/60 hover:bg-muted'
                      )}
                      aria-label={`Ir para artigo ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Seta Próximo */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full border border-hairline/40 flex items-center justify-center bg-white text-ink shadow-sm hover:border-primary active:scale-95 transition-all duration-200 select-none cursor-pointer"
                  aria-label="Próximo artigo"
                >
                  <ChevronRight className="w-5 h-5 text-ink" />
                </button>
              </div>

              {/* Botão Ver Todos os Artigos no Mobile */}
              <div className="mt-8 flex justify-center w-full">
                <Button to="/blog" variant="primary" icon={true} className="w-full justify-center">
                  Ver todos os artigos
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
