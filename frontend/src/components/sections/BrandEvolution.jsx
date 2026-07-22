import { motion } from 'motion/react'
import DashedLink from '../ui/dashed-link'
import oldLogoUrl from '../../assets/logoantiga-secao.png'
import newLogoUrl from '../../assets/logonova-secao.png'

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
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
 * BrandEvolution — Seção "Evolução da Identidade".
 * 
 * Figma Node: 24110:1359
 * Design System:
 * - Cabeçalho centralizado com tag, título com gradiente azul e citação com marcador amarelo.
 * - Grid comparativo (1986 vs 2026) com cards de fundo suave e legendas destacadas.
 * - Parágrafo de fechamento sobre posicionamento de mercado.
 */
export default function BrandEvolution({
  oldLogo = oldLogoUrl,
  newLogo = newLogoUrl,
}) {
  return (
    <section className="w-full bg-canvas py-20 md:py-28 px-6 lg:px-12 select-none overflow-hidden border-b border-hairline/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12 md:gap-16"
      >
        {/* Cabeçalho Centralizado */}
        <div className="flex flex-col items-center max-w-4xl gap-4">
          {/* Tag / Kicker */}
          <motion.div variants={itemVariants}>
            <DashedLink className="uppercase tracking-wider text-xs">
              Evolução da Identidade
            </DashedLink>
          </motion.div>

          {/* Título H2 */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight leading-tight text-ink"
          >
            <span className="bg-gradient-to-r from-[#78b5e3] via-[#0e53a6] to-[#08418b] bg-clip-text text-transparent">
              40 anos de essência.
            </span>{' '}
            Uma marca renovada.
          </motion.h2>

          {/* Parágrafo de Apoio */}
          <motion.p
            variants={itemVariants}
            className="text-muted text-base md:text-lg leading-relaxed max-w-3xl mt-2"
          >
            Não mudamos nossa essência, a aprimoramos. A marca que construiu 40 anos de confiança agora veste roupa nova. Identidade visual moderna, clara, forte. Cores que falam de energia e compromisso. Tipografia que transmite profissionalismo.
          </motion.p>

          {/* Destaque / Citação */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 text-left border-l-[3px] border-primary pl-4 py-1 mt-3"
          >
            <p className="text-muted text-base md:text-lg font-medium">
              Resultado: uma Sydorak que honra sua história e abraça o futuro.
            </p>
          </motion.div>
        </div>

        {/* Cards Comparativos (Grid de Logos) */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch"
        >
          {/* Card 1: Logo Antiga (1986) */}
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-8 lg:p-12 flex flex-col items-center justify-between gap-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-full h-64 md:h-72 flex items-center justify-center p-4">
              <img
                src={oldLogo}
                alt="Logo Sydorak 1986"
                className="max-h-full max-w-full object-contain mx-auto transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
            <div className="w-full flex items-start text-left border-l-[3px] border-primary pl-3 py-0.5">
              <p className="text-muted text-sm md:text-base leading-snug">
                <strong>1986</strong> - &quot;A Sydorak de ontem. Sólida, testada, confiável.&quot;
              </p>
            </div>
          </div>

          {/* Card 2: Logo Nova (2026) */}
          <div className="bg-white border border-neutral-200/80 rounded-2xl p-8 lg:p-12 flex flex-col items-center justify-between gap-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-full h-64 md:h-72 flex items-center justify-center p-4">
              <img
                src={newLogo}
                alt="Logo Sydorak 2026"
                className="max-h-full max-w-full object-contain mx-auto transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
            <div className="w-full flex items-start text-left border-l-[3px] border-primary pl-3 py-0.5">
              <p className="text-muted text-sm md:text-base leading-snug">
                <strong>2026</strong> - &quot;A Sydorak de hoje e dos próximos anos. Moderna, inovadora, preparada.&quot;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Texto de Fechamento (Rodapé da Seção) */}
        <motion.p
          variants={itemVariants}
          className="text-muted text-sm md:text-base leading-relaxed max-w-5xl text-center"
        >
          Essa renovação não é apenas visual. É declaração: a Sydorak segue inovando. Temos respeito profundo pela nossa história, mas olhos firmes no horizonte. Com marca forte, identidade clara e processos aperfeiçoados, estamos prontos. Prontos para clientes mais exigentes. Prontos para mercados em transformação. Prontos para os próximos anos de excelência.
        </motion.p>
      </motion.div>
    </section>
  )
}
