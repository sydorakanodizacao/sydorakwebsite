import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import DashedLink from '../ui/dashed-link'
import { cn } from '../../utils/cn'

const timelineData = [
  {
    id: 'onde-tudo-comecou',
    title: 'Onde tudo começou',
    paragraphs: [
      'Toda grande história começa com uma decisão.',
      'Em 1986, Mario Sydorak iniciou a empresa praticamente sozinho. Mais do que abrir um negócio, decidiu construir uma reputação. Naquela época, cada cliente conquistado representava um voto de confiança. Cada projeto concluído aumentava a responsabilidade de entregar ainda melhor no projeto seguinte.',
      'Sem grandes estruturas. Sem atalhos. Apenas trabalho, dedicação e a convicção de que qualidade sempre seria o melhor investimento.',
      'Foi assim que nasceram os princípios que continuam orientando a Sydorak até hoje.',
    ],
  },
  {
    id: 'crescer-sem-perder-a-essencia',
    title: 'Crescer sem perder a essência',
    paragraphs: [
      'Os anos passaram. A empresa cresceu. Novos clientes chegaram. Novos segmentos passaram a exigir soluções cada vez mais sofisticadas.',
      'Com eles vieram desafios técnicos, investimentos em equipamentos, desenvolvimento de processos e uma busca permanente por aperfeiçoamento.',
      'Enquanto muitas empresas buscavam crescer rapidamente, a Sydorak escolheu crescer de forma consistente. Porque reputação não se constrói em um único projeto. Ela é construída todos os dias.',
    ],
  },
  {
    id: 'uma-nova-geracao',
    title: 'Uma nova geração, o mesmo compromisso',
    paragraphs: [
      'Em 2000, Irene Sydorak passou a integrar a empresa. Mais do que uma sucessão familiar, iniciou-se uma parceria baseada no equilíbrio entre experiência e renovação.',
      'Ao conhecimento acumulado por décadas somaram-se uma visão moderna de gestão, novos processos administrativos, investimentos em tecnologia, organização interna, sustentabilidade e fortalecimento da cultura da qualidade.',
      'Pai e filha passaram a conduzir juntos uma nova fase da empresa. Uma fase em que tradição e inovação deixaram de ser conceitos opostos para se tornarem complementares. Foi essa parceria que permitiu à Sydorak preservar sua essência enquanto se preparava para os desafios do futuro.',
    ],
  },
  {
    id: 'evoluir-sempre',
    title: 'Evoluir sempre fez parte do nosso trabalho',
    paragraphs: [
      'Ao longo de quatro décadas, investimos continuamente em tecnologia, infraestrutura e pessoas. Modernizamos equipamentos. Aprimoramos processos. Fortalecemos nossos controles de qualidade. Capacitamos nossa equipe. Incorporamos práticas sustentáveis. Buscamos maior eficiência energética.',
      'Cada investimento teve um único propósito: entregar aos nossos clientes um processo cada vez mais seguro, preciso e confiável.',
      'Porque entendemos que qualidade não é resultado de um único equipamento. Ela é consequência de um sistema construído diariamente.',
    ],
  },
  {
    id: 'grandes-desafios',
    title: 'Quando a experiência encontra grandes desafios',
    paragraphs: [
      'A maturidade conquistada ao longo dos anos permitiu à Sydorak participar de projetos que exigiram elevados padrões técnicos de qualidade e controle de processo.',
      'Essas experiências ampliaram nosso conhecimento, fortaleceram nossos procedimentos e consolidaram nossa capacidade de atender aplicações industriais de alta exigência.',
      'Mais importante do que um projeto específico foi o aprendizado construído em cada desafio enfrentado. Esse conhecimento permanece presente em nossa empresa e continua sendo aplicado diariamente em cada peça que processamos.',
    ],
  },
  {
    id: 'nosso-maior-patrimonio',
    title: 'O nosso maior patrimônio',
    paragraphs: [
      'Ao longo desses quarenta anos, acumulamos equipamentos modernos, processos aperfeiçoados e uma estrutura preparada para atender diferentes segmentos da indústria. Mas nenhum desses ativos é mais valioso do que as pessoas que construíram essa trajetória.',
      'São elas que preservam o conhecimento adquirido. Que mantêm o compromisso com a qualidade. Que transformam experiência em resultado.',
      'A Sydorak é feita por pessoas que acreditam que excelência não acontece por acaso. Ela é construída todos os dias.',
    ],
  },
  {
    id: 'uma-nova-marca',
    title: 'Uma nova marca para uma história que continua',
    paragraphs: [
      'Ao completar quatro décadas, entendemos que era o momento de renovar nossa identidade visual. Não para mudar quem somos. Mas para representar, de forma mais fiel, aquilo que nos tornamos.',
      'Nossa nova marca simboliza evolução, modernidade e continuidade. Ela acompanha a transformação da empresa, preservando os valores que sempre fizeram parte da nossa história. Porque acreditamos que tradição e inovação caminham juntas.',
    ],
  },
  {
    id: 'olhando-para-o-futuro',
    title: 'Olhando para o futuro',
    paragraphs: [
      'O futuro da Sydorak será construído da mesma maneira que sua história. Com responsabilidade. Com investimento contínuo em tecnologia. Com desenvolvimento das pessoas. Com respeito ao meio ambiente. Com melhoria permanente dos processos. E, acima de tudo, com o compromisso de continuar sendo uma empresa em que clientes, colaboradores e parceiros possam confiar.',
      'Ainda há muito a construir. Novos desafios surgirão. Novas tecnologias transformarão a indústria. E nós continuaremos evoluindo.',
      'Porque a história da Sydorak não é apenas uma trajetória de quarenta anos. É um compromisso renovado todos os dias com a qualidade, a inovação e a confiança.',
    ],
  },
]

/**
 * TimelineCard — Card individual da timeline com efeitos suaves de scroll.
 */
function TimelineCard({ item, index, total, smoothProgress }) {
  const step = total > 1 ? 1 / (total - 1) : 1
  const center = index * step

  const range = [
    Math.max(0, center - step * 0.7),
    center,
    Math.min(1, center + step * 0.7),
  ]

  const scale = useTransform(smoothProgress, range, [0.97, 1.015, 0.97])
  const opacity = useTransform(smoothProgress, range, [0.75, 1, 0.75])
  const borderColor = useTransform(
    smoothProgress,
    range,
    ['rgba(229, 231, 235, 0.9)', '#0e53a6', 'rgba(229, 231, 235, 0.9)']
  )
  const shadow = useTransform(
    smoothProgress,
    range,
    [
      '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
      '0 10px 25px -5px rgba(14, 83, 166, 0.12), 0 8px 10px -6px rgba(14, 83, 166, 0.08)',
      '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
    ]
  )

  return (
    <motion.div
      style={{
        scale,
        opacity,
        borderColor,
        boxShadow: shadow,
      }}
      className="w-full bg-white border-2 rounded-[14px] p-6 sm:p-7 md:p-8 transition-colors duration-300 select-none text-left"
    >
      <h3 className="text-xl md:text-2xl font-bold text-[#0e53a6] mb-3 md:mb-4 tracking-tight font-display">
        {item.title}
      </h3>
      <div className="space-y-3 text-muted text-sm sm:text-base leading-relaxed">
        {item.paragraphs.map((paragraph, pIdx) => (
          <p key={pIdx}>
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  )
}

/**
 * HistoryTimeline — Seção "Nossa História" com cabeçalho centralizado e cards intercalados no desktop.
 */
export default function HistoryTimeline() {
  const containerRef = useRef(null)
  const timelineRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 30%', 'end 70%'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 22,
    restDelta: 0.001,
  })

  // Progresso em altura da linha amarela e posição vertical do indicador
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%'])
  const dotTop = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={containerRef}
      className="w-full bg-canvas py-20 md:py-28 px-4 md:px-6 xl:px-[112px] select-none overflow-hidden border-b border-hairline/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho Centralizado no Topo */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 flex flex-col items-center">
          <DashedLink className="uppercase tracking-wider text-xs mb-4 pointer-events-none">
            Sydorak Anodização
          </DashedLink>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-ink tracking-tight mb-6 leading-tight font-display">
            Nossa História
          </h2>
          
          <div className="space-y-4 text-muted text-base md:text-lg leading-relaxed max-w-3xl">
            <p className="font-semibold text-ink text-lg md:text-xl leading-snug">
              Quatro décadas transformando alumínio em confiança.
            </p>
            <p>
              Existem empresas que fabricam produtos. Existem empresas que prestam serviços. E existem empresas que constroem confiança ao longo do tempo. A história da Sydorak pertence à terceira categoria.
            </p>
            <p>
              Há quarenta anos, iniciamos uma trajetória baseada em um princípio que permanece inalterado até hoje: entregar qualidade com responsabilidade, consistência e respeito aos compromissos assumidos com cada cliente. Ao longo desse tempo, vimos a indústria evoluir, novas tecnologias surgirem e o mercado tornar-se cada vez mais exigente. Evoluímos junto com ele, sem abrir mão dos valores que deram origem à nossa empresa.
            </p>
            <p className="font-medium text-ink">
              Porque acreditamos que a verdadeira inovação só faz sentido quando preserva aquilo que nunca deve mudar: a confiança.
            </p>
          </div>
        </div>

        {/* Timeline Interativa: Coluna Única no Mobile / Intercalada (Zig-Zag) no Desktop */}
        <div
          ref={timelineRef}
          className="relative max-w-5xl mx-auto"
        >
          {/* Trilho e Bolinha de Progresso: À esquerda no mobile, no centro no desktop */}
          <div className="absolute top-2 bottom-2 left-[18px] md:left-1/2 md:-translate-x-1/2 w-[3px] z-10">
            {/* Linha de Fundo (Track Neutro) */}
            <div className="absolute inset-0 w-full bg-neutral-200 rounded-full" />

            {/* Linha Amarela de Preenchimento */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 w-full bg-primary rounded-full origin-top"
            />

            {/* Bolinha Amarela de Progresso */}
            <motion.div
              style={{ top: dotTop }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 shadow-md shadow-primary/30 z-20"
            />
          </div>

          {/* Lista de Cards Intercalados */}
          <div className="flex flex-col w-full">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={item.id}
                  className={cn(
                    'relative w-full flex mb-8 md:mb-14 last:mb-0',
                    'pl-12 md:pl-0', // no mobile afasta para dar espaço ao trilho
                    isEven
                      ? 'md:w-1/2 md:pr-10 lg:pr-14 md:mr-auto' // Esquerda no Desktop
                      : 'md:w-1/2 md:pl-10 lg:pl-14 md:ml-auto'  // Direita no Desktop
                  )}
                >
                  <TimelineCard
                    item={item}
                    index={index}
                    total={timelineData.length}
                    smoothProgress={smoothProgress}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {/* Bloco de Destaque: Uma mensagem da família Sydorak */}
        <div className="mt-20 lg:mt-32 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#011025] via-[#051a38] to-[#011025] text-white p-8 sm:p-10 md:p-14 border border-[#1e4fa0]/40 shadow-2xl">
            {/* Efeitos de Iluminação de Fundo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-8">
              {/* Kicker com Indicador */}
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs sm:text-sm uppercase tracking-widest font-bold text-primary font-mono">
                  Uma mensagem da família Sydorak
                </span>
              </div>

              {/* Citação Principal */}
              <blockquote className="text-lg sm:text-xl md:text-2xl text-on-dark/95 font-medium leading-relaxed italic border-l-2 border-primary/60 pl-4 sm:pl-6">
                “Quando iniciamos nossa trajetória, em 1986, tínhamos um objetivo simples: realizar um trabalho de qualidade e honrar a confiança de cada cliente. Quatro décadas depois, continuamos acreditando que esse é o caminho mais sólido para construir relações duradouras. Hoje, unimos a experiência construída ao longo dos anos com uma visão voltada para inovação, sustentabilidade e melhoria contínua, preparando a Sydorak para os desafios das próximas décadas.”
              </blockquote>

              {/* Assinaturas */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4 border-t border-white/10">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Mario Sydorak
                  </h4>
                  <p className="text-xs sm:text-sm text-sky font-medium">Fundador</p>
                </div>
                <div className="hidden sm:block w-px h-8 bg-white/20" />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Irene Sydorak
                  </h4>
                  <p className="text-xs sm:text-sm text-sky font-medium">Diretora</p>
                </div>
              </div>

              {/* Frase Final de Fechamento em Destaque */}
              <div className="mt-2 p-5 sm:p-6 rounded-[12px] bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                <p className="text-base sm:text-lg md:text-xl font-semibold text-sky leading-snug tracking-tight text-center md:text-left">
                  “A Sydorak não foi construída para ser a maior empresa de anodização. Foi construída para ser uma empresa em que clientes, colaboradores e parceiros possam confiar por gerações.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
