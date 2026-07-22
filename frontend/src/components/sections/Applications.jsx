import { motion } from 'motion/react'
import DashedLink from '../ui/dashed-link'
import ComparisonRow from '../ui/comparison-row'
import bgAplicacaoServico from '../../assets/bgaplicacao-servico.png'

const applicationsData = [
  {
    title: 'Arquitetura',
    anodizacao: 'Aplicação: Esquadrias, fachadas, perfis estruturais, divisórias, parapeitos',
    pintura: 'Por que anodização: Durabilidade, estética, resistência climática',
  },
  {
    title: 'Vidro Temperado',
    anodizacao: 'Aplicação: perfis de alumínio e alguns acessórios',
    pintura: 'Por que anodização: Proteção contra corrosão, acabamento limpo',
  },
  {
    title: 'Indústria Moveleira',
    anodizacao: 'Aplicação: Estruturas, puxadores, Acessórios decorativos',
    pintura: 'Por que anodização: Acabamento nobre, durabilidade, design',
  },
  {
    title: 'Persianas & Cortinas',
    anodizacao: 'Aplicação: Tubos, trilhos e alguns componentes',
    pintura: 'Por que anodização: Resistência ao uso repetido, proteção',
  },
  {
    title: 'Indústria Mecânica',
    anodizacao: 'Aplicação: Peças usinadas, componentes de máquinas',
    pintura: 'Por que anodização: Proteção contra desgaste, redução de atrito e possibilidade de altas temperaturas.',
  },
  {
    title: 'Informática & Eletrônicos',
    anodizacao: 'Aplicação: Chassis, dissipadores, componentes estruturais',
    pintura: 'Por que anodização: Proteção térmica, isolamento, estética',
  },
  {
    title: 'Comunicações',
    anodizacao: 'Aplicação: Antenas, estruturas de suporte',
    pintura: 'Por que anodização: Resistência ambiental, durabilidade outdoor',
  },
  {
    title: 'Energia (Nuclear, Hidro, Eólica e Solar)',
    anodizacao: 'Aplicação: Componentes críticos, sistemas especializados',
    pintura: 'Por que anodização: Proteção e resistência conforme especificações de projeto',
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

/**
 * Applications — Seção "Aplicações da Anodização" (Página de Serviço).
 * 
 * Figma Node: 24111:405
 * Design System:
 * - Imagem de Fundo: bgaplicacao-servico.png com overlay azul escuro.
 * - Card Suspenso: bg-[#faf8f8] (canvas) com borda lateral amarela (border-primary) e bordas arredondadas.
 * - Grid: 8 setores utilizando a UI padronizada ComparisonRow em 2 colunas responsivas.
 */
export default function Applications({
  bgImageUrl = bgAplicacaoServico,
}) {
  return (
    <section className="relative w-full py-20 md:py-28 px-6 lg:px-12 select-none overflow-hidden border-b border-hairline/20 flex items-center justify-center">
      {/* Imagem de Fundo em Overlay Escuro */}
      <img
        src={bgImageUrl}
        alt="Aplicações da Anodização Sydorak"
        className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
      />

      {/* Overlay Azul Escuro Translucido */}
      <div className="absolute inset-0 bg-[#0e2240]/80 z-10" />

      {/* Card Principal Elevado (Conteúdo Interno) */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="bg-[#faf8f8] border-l-4 border-primary rounded-2xl p-6 md:p-10 lg:p-12 shadow-2xl flex flex-col gap-6 md:gap-8"
        >
          {/* Cabeçalho do Card */}
          <div className="flex flex-col items-start gap-2">
            <DashedLink className="uppercase tracking-wider text-xs">
              Onde é usada anodização
            </DashedLink>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-ink tracking-tight leading-tight">
              Aplicações
            </h2>
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-2xl mt-1">
              Anodização não é &quot;um produto&quot;. É uma solução técnica. Seus usos abrangem indústrias e mercados.
            </p>
          </div>

          {/* Grid de Aplicações com ComparisonRow da UI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {applicationsData.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ComparisonRow
                  title={item.title}
                  anodizacao={item.anodizacao}
                  pintura={item.pintura}
                  showCheck={false}
                  highlightBoth={true}
                  className="h-full bg-white"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
