import { motion } from 'motion/react'
import DashedLink from '../ui/dashed-link'
import projectImageUrl from '../../assets/angra3.png'

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
 * FeaturedProject — Seção "Projeto Destaque (Usina Nuclear Angra 3)".
 * 
 * Figma Node: 24110:1851
 * Design System:
 * - Esquerda: Foto aérea da Usina Nuclear Angra 3 com cantos arredondados.
 * - Direita: Detalhes do projeto, cliente (Eletrobras) e solução técnica desenvolvida.
 */
export default function FeaturedProject({
  projectImage = projectImageUrl,
}) {
  return (
    <section className="w-full bg-canvas py-10 sm:py-14 md:py-24 px-4 sm:px-6 lg:px-12 select-none overflow-hidden border-b border-hairline/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-16 items-center"
      >
        {/* Coluna da Esquerda: Imagem do Projeto */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 w-full h-[200px] sm:h-[260px] md:h-[380px] lg:h-[454px] rounded-xl md:rounded-2xl overflow-hidden shadow-md group relative"
        >
          <img
            src={projectImage}
            alt="Projeto no Setor de Geração de Energia"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>

        {/* Coluna da Direita: Bloco de Texto e Solução */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 flex flex-col items-start gap-2 sm:gap-3 md:gap-4"
        >
          {/* Tag / Kicker */}
          <DashedLink className="uppercase tracking-wider text-xs mb-0.5 md:mb-1">
            Projeto Destaque
          </DashedLink>

          {/* Título H2 */}
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[44px] font-bold text-ink tracking-tight leading-snug">
            Setor de Geração de Energia (2016)
          </h2>

          {/* Subtítulo & Descrição */}
          <div className="flex flex-col gap-1 text-neutral-600 text-body leading-relaxed mb-1 sm:mb-2 max-w-xl">
            <p>
              Participação em projeto de elevada exigência técnica para o setor de geração de energia, desenvolvido em parceria com cliente industrial, e ainda, com homologação pelo Sistema Eletrobras.
            </p>
          </div>

          {/* Destaque / Solução */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#c59d1d] tracking-tight">
            Solução:
          </h3>
          <p className="text-neutral-600 text-body leading-relaxed max-w-xl">
            Desenvolvemos um Plano de Qualidade Técnica específico a este projeto para atender as exigências técnicas requeridas.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
