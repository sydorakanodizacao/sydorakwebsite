import { motion } from 'motion/react'
import DashedLink from '../ui/dashed-link'
import sectionImageUrl from '../../assets/comercial.png'

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
 * InvertedContentSection — Seção Institucional com layout invertido (Texto à Esquerda / Imagem à Direita).
 * 
 * Figma Node: 24330:243
 * Design System:
 * - Esquerda: Tag Kicker, Título H2 "Fachada Arquitetônica em Edifício Comercial", Descrição e Solução técnica.
 * - Direita: Imagem da fachada comercial em alumínio anodizado.
 */
export default function InvertedContentSection({
  sectionImage = sectionImageUrl,
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
        {/* Coluna da Esquerda: Bloco de Texto e Solução */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 flex flex-col items-start gap-4 order-2 lg:order-1"
        >
          {/* Tag / Kicker */}
          <DashedLink className="uppercase tracking-wider text-xs mb-2">
            Projeto Destaque
          </DashedLink>

          {/* Título H2 */}
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-ink tracking-tight leading-tight">
            Fachada Arquitetônica em Edifício Comercial
          </h2>

          {/* Subtítulo & Descrição */}
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-4">
            Aqui mostramos uma das aplicações da Anodização na arquitetura diferente de esquadrias.
          </p>

          {/* Destaque / Solução */}
          <h3 className="text-xl md:text-2xl font-semibold text-[#c59d1d] tracking-tight">
            Solução:
          </h3>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed max-w-xl">
            Essa fachada foi anodizada na cor fosca e composta conforme projeto arquitetônico, entregando uma composição perfeita.
          </p>
        </motion.div>

        {/* Coluna da Direita: Imagem da Fachada Comercial */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 w-full h-[360px] sm:h-[420px] md:h-[454px] rounded-2xl overflow-hidden shadow-lg group relative order-1 lg:order-2"
        >
          <img
            src={sectionImage}
            alt="Fachada Arquitetônica em Edifício Comercial"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
