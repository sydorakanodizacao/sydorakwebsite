import { useParams, Link } from 'react-router-dom'
import { mockPosts } from '../data/mock-posts'
import Button from '../components/ui/button'
import Seo from '../components/layout/Seo'

/**
 * BlogPost — Página interna de exibição de um artigo individual do Blog (Fase 3).
 * Captura o slug da URL via useParams, busca o post correspondente no mock estático,
 * e exibe o artigo com design focado em legibilidade (max-w-3xl) e tratamento de erro 404.
 */
export default function BlogPost() {
  const { slug } = useParams()

  // Buscar post no mock
  const post = mockPosts.find((p) => p.slug.current === slug)

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
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full aspect-video object-cover rounded-xl mt-8 mb-12 shadow-sm border border-hairline/20 select-none"
          />
        )}

        {/* Parágrafo de Introdução (Excerto) */}
        <p className="text-lg md:text-xl text-body font-medium leading-relaxed mb-8">
          {post.excerpt}
        </p>

        {/* Corpo do Artigo (Fake Content Simulado) */}
        <div className="space-y-6 text-body text-base leading-relaxed">
          <p>
            O processo de anodização é amplamente reconhecido por sua capacidade de transformar a superfície do alumínio, conferindo-lhe uma durabilidade superior a de quase qualquer outro tipo de revestimento disponível. Isso ocorre porque o acabamento anódico não é apenas aplicado superficialmente, mas sim integrado quimicamente à liga metálica base. Esse diferencial faz com que o material seja ideal para aplicações estruturais exigentes.
          </p>
          <p>
            Diferente da pintura tradicional, que depende da adesão mecânica de uma película polimérica sobre a peça, o processo eletroquímico cria uma camada de óxido de alumínio controlada e uniforme. Esse óxido é extremamente duro e resistente à abrasão, agindo como um escudo protetor contra intempéries e agentes corrosivos comuns em grandes centros urbanos ou áreas litorâneas.
          </p>
          
          <h2 className="text-2xl font-bold text-ink pt-6 pb-2 font-sans tracking-tight leading-tight">
            Vantagens Técnicas em Ambientes Agressivos
          </h2>
          
          <p>
            Quando submetido a testes de névoa salina (salt spray), o alumínio anodizado demonstra uma resistência significativamente maior a corrosão do que o metal não tratado. Em projetos de fachadas industriais ou residenciais expostas à maresia, a especificação da espessura de camada anódica correta (como as classes de 15 a 20 mícrons) garante a preservação estética e estrutural do edifício por décadas, sem necessidade de manutenção complexa.
          </p>
          <p>
            Adicionalmente, o ciclo de vida do alumínio anodizado o posiciona como uma escolha altamente sustentável. O processo não utiliza solventes orgânicos nocivos e o produto final permanece 100% reciclável, mantendo suas propriedades originais após a fusão. A facilidade de limpeza e a longevidade do material reduzem drasticamente o custo total de propriedade do empreendimento, tornando-o um investimento altamente eficiente a longo prazo.
          </p>
        </div>
      </article>
    </main>
  )
}
