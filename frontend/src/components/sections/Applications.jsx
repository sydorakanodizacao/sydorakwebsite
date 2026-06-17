import { motion } from 'motion/react'
import ChecklistItem from '../ui/checklist-item'
import DashedLink from '../ui/dashed-link'
import aplicacaoSectionWebp from '../../assets/aplicacao-section-home.webp'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] // Curve easeOutExpo
    }
  }
}

/**
 * Applications — Seção demonstrativa de Aplicações e Setores da Sydorak.
 * 
 * DESIGN.md:
 * - Fundo: Imagem industrial de fundo inteiro (WebP) com profissional na esquerda e área navy na direita.
 * - Elementos: Card flutuante sobre a direita com DashedLink, H2, ChecklistItem.
 * - Animações: staggerChildren dos elementos internos do card whenInView.
 */
export default function Applications() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-surface-darkest overflow-hidden border-b border-hairline/20">
      {/* Imagem de Fundo Inteira */}
      <img
        src={aplicacaoSectionWebp}
        alt="Profissional avaliando perfil de alumínio anodizado"
        className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
      />

      {/* Grid Strict com Flex para alinhar o Card à Direita */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[112px] flex justify-end items-center w-full min-h-[450px]">
        {/* Card de Conteúdo Flutuante */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="bg-surface p-6 md:p-8 rounded-lg border-l-4 border-primary shadow-card flex flex-col w-full lg:max-w-[600px]"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <DashedLink className="uppercase tracking-wider text-xs">
              Aplicações
            </DashedLink>
          </motion.div>

          {/* Headline (H2) */}
          <motion.h2
            variants={itemVariants}
            className="text-h2-section-mobile md:text-h2-section text-ink font-bold tracking-tight leading-tight mt-6"
          >
            Onde nossa <span className="text-secondary">anodização</span> está presente
          </motion.h2>

          {/* Texto de Apoio */}
          <motion.p
            variants={itemVariants}
            className="text-muted text-body-sm mt-4 mb-6 leading-relaxed"
          >
            Atuamos em projetos exigentes nos setores:
          </motion.p>

          {/* Sub-Grid de Setores */}
          <motion.ul
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 list-none p-0"
          >
            <ChecklistItem>Construção civil</ChecklistItem>
            <ChecklistItem>Energia</ChecklistItem>
            <ChecklistItem>Indústria mecânica</ChecklistItem>
            <ChecklistItem>Equipamentos eletrônicos</ChecklistItem>
            <ChecklistItem className="sm:col-span-2">
              Projetos especiais sob especificação técnica
            </ChecklistItem>
          </motion.ul>

          {/* Parágrafo de Fechamento */}
          <motion.p
            variants={itemVariants}
            className="text-muted text-body-sm border-t border-hairline pt-4 leading-relaxed"
          >
            Experiência em projetos específicos com diversos requisitos normativos.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
