import { motion } from 'motion/react'
import Button from '../ui/button'
import DashedLink from '../ui/dashed-link'
import bannerCtaWebp from '../../assets/banner-cta-home.webp'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

/**
 * FinalCTA — Seção global de CTA final antes do rodapé.
 *
 * Estrutura:
 * - Título direto: "Pronto para transformar seu alumínio?"
 * - Texto de apoio
 * - 2 Botões de ação:
 *   1. WhatsApp: Atendimento direto e rápido.
 *   2. Formulário: Orçamento estruturado na página de contato.
 */
export default function FinalCTA() {
  return (
    <section className="w-full bg-canvas py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[112px]">
        {/* Card do CTA Final */}
        <div className="relative w-full rounded-2xl md:rounded-[20px] bg-surface-darkest overflow-hidden py-14 sm:py-16 md:py-20 px-6 md:px-12 flex items-center justify-center text-center shadow-floating">
          {/* Imagem de Fundo WebP */}
          <img
            src={bannerCtaWebp}
            alt="Estrutura industrial Sydorak"
            className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
          />

          {/* Orquestração do Conteúdo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative z-20 w-full flex flex-col items-center justify-center text-center"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <DashedLink onDark={true} className="uppercase tracking-wider text-xs mb-3 pointer-events-none">
                Fale conosco
              </DashedLink>
            </motion.div>

            {/* Headline Principal */}
            <motion.h2
              variants={itemVariants}
              className="text-h2-section-mobile md:text-h2-section text-on-dark font-bold leading-tight max-w-[950px] mt-1 font-display"
            >
              Pronto para transformar seu alumínio?
            </motion.h2>

            {/* Texto de Apoio Secundário */}
            <motion.p
              variants={itemVariants}
              className="text-on-dark-muted text-body mt-3 mb-6 max-w-[600px]"
            >
              Fale conosco agora. Respondemos em menos de 4 horas.
            </motion.p>

            {/* 2 Botões de CTA (WhatsApp e Formulário de Contato) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                icon={true}
                href="https://wa.me/554132862028"
                className="w-full sm:w-auto text-sm md:text-base tracking-wide"
              >
                Conversar no WhatsApp
              </Button>
              <Button
                variant="secondary"
                icon={true}
                to="/contato"
                className="w-full sm:w-auto text-sm md:text-base tracking-wide border-white/20 text-white hover:text-on-primary bg-white/10"
              >
                Solicitar Orçamento
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
