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
    <section className="w-full bg-canvas py-20 md:py-28 px-6 lg:px-12 select-none overflow-hidden border-b border-hairline/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        {/* Coluna da Esquerda: Imagem do Projeto */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 w-full h-[360px] sm:h-[420px] md:h-[454px] rounded-2xl overflow-hidden shadow-lg group relative"
        >
          <img
            src={projectImage}
            alt="Usina Nuclear Angra 3"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>

        {/* Coluna da Direita: Bloco de Texto e Solução */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 flex flex-col items-start gap-4"
        >
          {/* Tag / Kicker */}
          <DashedLink className="uppercase tracking-wider text-xs mb-2">
            Projeto Destaque
          </DashedLink>

          {/* Título H2 */}
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-ink tracking-tight leading-tight">
            Usina Nuclear Angra 3 (2014)
          </h2>

          {/* Subtítulo & Cliente */}
          <div className="flex flex-col gap-1 text-neutral-600 text-sm md:text-base leading-relaxed mb-4">
            <p>Anodização de componentes do sistema de circulação e controle de gotas</p>
            <p className="font-semibold text-ink">Cliente: Eletrobras (Indústria Nuclear)</p>
          </div>

          {/* Destaque / Solução */}
          <h3 className="text-xl md:text-2xl font-semibold text-[#c59d1d] tracking-tight">
            Solução:
          </h3>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl">
            Desenvolvemos um Plano de Qualidade Técnica específico a este projeto para atender as exigências técnicas requeridas.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
