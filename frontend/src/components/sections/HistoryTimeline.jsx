import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import DashedLink from '../ui/dashed-link'

const timelineData = [
  {
    year: '1986',
    title: '1986 - Fundação da Sydorak',
    description: 'O sonho de especialização em anodização nasce.',
  },
  {
    year: '1997',
    title: '1997 - Sede própria no Boqueirão',
    description: 'Infraestrutura para crescer e servir melhor.',
  },
  {
    year: '2014',
    title: '2014 - Homologação Eletrobras — Usina Angra 3',
    description: 'Reconhecimento de excelência técnica em projeto de altíssima exigência.',
  },
  {
    year: '2020',
    title: '2020 - Investimento em Eficiência Energética',
    description: 'Sistema Fotovoltaico e demais adequações.',
  },
  {
    year: '2026',
    title: '2026 - Redesign da Marca e Website',
    description: 'Modernização mantendo a raiz — 40 anos como base para o futuro.',
  },
]

/**
 * TimelineItem — Componente interno para isolar os hooks de animação por card.
 */
function TimelineCard({ item, index, total, smoothProgress }) {
  const step = total > 1 ? 1 / (total - 1) : 1
  const center = index * step

  // Define os pontos de entrada, centro e saída do scroll
  const range = [
    Math.max(0, center - step * 0.8),
    center,
    Math.min(1, center + step * 0.8),
  ]

  const scale = useTransform(smoothProgress, range, [0.96, 1.03, 0.96])
  const opacity = useTransform(smoothProgress, range, [0.6, 1, 0.6])
  const x = useTransform(smoothProgress, range, [0, -8, 0])
  const borderColor = useTransform(
    smoothProgress,
    range,
    ['rgba(229, 231, 235, 0.8)', '#0e53a6', 'rgba(229, 231, 235, 0.8)']
  )

  return (
    <motion.div
      style={{
        scale,
        opacity,
        x,
        borderColor,
      }}
      className="bg-white border-2 rounded-[10px] p-5 md:p-6 transition-shadow duration-300 shadow-sm hover:shadow-md select-none"
    >
      <h3 className="text-base md:text-lg font-bold text-[#0e53a6] mb-1 tracking-tight">
        {item.title}
      </h3>
      <p className="text-muted text-sm md:text-body leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  )
}

/**
 * HistoryTimeline — Seção "Nossa História" com linha do tempo interativa no scroll.
 * 
 * Figma Node: 24110:1274
 * Design System:
 * - Esquerda: Título H2 + Texto sobre as raízes da Sydorak.
 * - Direita: Trilho com bolinha amarela que desliza dinamicamente e cards com foco 3D.
 */
export default function HistoryTimeline() {
  const containerRef = useRef(null)
  const timelineRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 40%', 'end 60%'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  })

  // Progresso em altura da linha amarela e posição vertical do indicador
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%'])
  const dotTop = useTransform(smoothProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={containerRef}
      className="w-full bg-canvas py-20 md:py-28 px-6 lg:px-12 select-none overflow-hidden border-b border-hairline/20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Coluna Esquerda: Texto Fixo */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-start">
          <DashedLink className="uppercase tracking-wider text-xs mb-4">
            Sydorak Anodização
          </DashedLink>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-ink tracking-tight mb-6 leading-tight">
            Nossa História
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-lg">
            Tudo começou em 1986 com uma visão simples, focada em evolução e qualidade. Logo depois com sede própria consolidou sua busca por crescimento e novas possibilidades. A Sydorak nasceu da ousadia, cultivada pela qualidade, e solidificada pelo tempo.
          </p>
        </div>

        {/* Coluna Direita: Interactive Motion Timeline */}
        <div
          ref={timelineRef}
          className="lg:col-span-7 relative flex gap-6 md:gap-8 items-start pl-2 md:pl-4"
        >
          {/* Trilho e Bolinha de Progresso */}
          <div className="relative w-[3px] shrink-0 self-stretch min-h-[520px]">
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

          {/* Lista de Cards com Animação Dinâmica */}
          <div className="flex flex-col gap-6 md:gap-8 w-full">
            {timelineData.map((item, index) => (
              <TimelineCard
                key={item.year}
                item={item}
                index={index}
                total={timelineData.length}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
