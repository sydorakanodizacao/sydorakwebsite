import { motion } from 'motion/react'
import Button from '../ui/button'
import HighlightLine from '../ui/highlight-line'
import ChecklistItem from '../ui/checklist-item'
import DashedLink from '../ui/dashed-link'
import diferenciaisBg from '../../assets/diferenciais-home.webp'

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
      ease: [0.16, 1, 0.3, 1] // curve easeOutExpo
    }
  }
}

const imageVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // curve easeOutExpo
    }
  }
}

/**
 * Differentiators — Seção de Diferenciais competitivos da Sydorak.
 * 
 * DESIGN.md:
 * - Fundo: bg-canvas (claro).
 * - Grid: 1 col (mobile), 2 cols (desktop) com gap de 12/16.
 * - Elementos: DashedLink, H2 (destaque text-secondary), HighlightLine, ChecklistItem, Button.
 * - Animações: staggerChildren no texto + image slide-in a partir da esquerda.
 * - Otimização: Imagem WebP de 56KB.
 */
export default function Differentiators() {
  return (
    <section className="w-full pt-0 pb-16 md:pb-24 bg-canvas overflow-hidden border-b border-hairline/20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[112px] flex flex-col lg:flex-row lg:justify-between items-stretch gap-12 lg:gap-16">
        {/* Coluna da Imagem (Esquerda) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={imageVariants}
          className="w-full lg:w-[52%] lg:h-auto flex justify-center lg:justify-start lg:shrink-0"
        >
          <img
            src={diferenciaisBg}
            alt="Especialistas da Sydorak avaliando um projeto de anodização"
            className="w-full h-auto lg:h-full max-w-[500px] lg:max-w-none object-cover rounded-[10px] shadow-lg border border-secondary/10"
            loading="lazy"
          />
        </motion.div>

        {/* Coluna de Conteúdo (Direita) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="flex flex-col gap-8 items-start w-full lg:w-[42%] lg:max-w-[50%] lg:shrink-0"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <DashedLink className="uppercase tracking-wider text-xs">
              Diferenciais
            </DashedLink>
          </motion.div>

          {/* Headline (H2) */}
          <motion.h2
            variants={itemVariants}
            className="text-h2-section-mobile md:text-h2-section text-ink font-bold tracking-tight leading-none max-w-[500px]"
          >
            Por que <span className="bg-gradient-to-r from-secondary-gradient-from via-secondary-gradient-mid to-secondary-gradient-to bg-clip-text text-transparent">empresas exigentes</span> escolhem a Sydorak?
          </motion.h2>

          {/* HighlightLine */}
          <motion.div variants={itemVariants} className="w-full max-w-[393px]">
            <HighlightLine>
              Precisão técnica que evita problemas no seu projeto
            </HighlightLine>
          </motion.div>

          {/* Checklist (ul) */}
          <motion.ul variants={itemVariants} className="flex flex-col gap-4 w-full">
            <ChecklistItem>Controle rigoroso de processo químico</ChecklistItem>
            <ChecklistItem>Padronização conforme normas técnicas</ChecklistItem>
            <ChecklistItem>Rastreabilidade de lotes</ChecklistItem>
            <ChecklistItem>Atendimento técnico consultivo</ChecklistItem>
            <ChecklistItem>Capacidade para pequenos e grandes volumes</ChecklistItem>
            <ChecklistItem>Experiência com projetos críticos</ChecklistItem>
          </motion.ul>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Button variant="primary" icon={true} to="/contato">
              Solicitar Análise Técnica
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
