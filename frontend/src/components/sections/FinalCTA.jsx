import { motion } from 'motion/react'
import { Info } from 'lucide-react'
import Button from '../ui/button'
import HighlightLine from '../ui/highlight-line'
import DashedLink from '../ui/dashed-link'
import bannerCtaWebp from '../../assets/banner-cta-home.webp'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export default function FinalCTA() {
  return (
    <section className="w-full bg-canvas py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[112px]">
        {/* Card do CTA Final com cantos arredondados (rounded-xl/20px do DS) e bordas adequadas */}
        <div className="relative w-full rounded-2xl md:rounded-[20px] bg-surface-darkest overflow-hidden py-16 md:py-20 px-6 md:px-12 flex items-center justify-center text-center shadow-floating">
          {/* Imagem de Fundo (WebP otimizada com maior visibilidade) */}
          <img
            src={bannerCtaWebp}
            alt="Estrutura industrial Sydorak"
            className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
          />

          {/* Orquestração do Conteúdo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="relative z-20 w-full flex flex-col items-center justify-center text-center"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <DashedLink onDark={true} className="uppercase tracking-wider text-xs mb-4 pointer-events-none">
                Fale conosco
              </DashedLink>
            </motion.div>

            {/* Headline Principal em Duas Linhas no Desktop */}
            <motion.h2
              variants={itemVariants}
              className="text-h2-section-mobile md:text-h2-section text-on-dark font-bold leading-tight max-w-[950px] mt-2"
            >
              Pronto para transformar seu alumínio?{" "}
              <span className="bg-gradient-to-r from-sky via-[#0E55A9] to-[#08418B] bg-clip-text text-transparent font-bold">
                Seu projeto exige durabilidade real
              </span>
            </motion.h2>

            {/* HighlightLine */}
            <motion.div variants={itemVariants} className="w-full flex justify-center mt-6">
              <HighlightLine onDark={true} className="justify-center">
                Evite retrabalho, falhas prematuras e problemas com prazos de entrega
              </HighlightLine>
            </motion.div>

            {/* Texto de Apoio Secundário */}
            <motion.p
              variants={itemVariants}
              className="text-on-dark-muted text-body mt-4 mb-8 max-w-[600px]"
            >
              Fale conosco agora. Respondemos em menos de 4 horas.
            </motion.p>

            {/* Botão Master CTA (WhatsApp) */}
            <motion.div variants={itemVariants}>
              <Button
                variant="primary"
                icon={true}
                href="https://wa.me/554132862028"
                className="text-sm md:text-base tracking-wide"
              >
                Fale conosco no WhatsApp: (41) 3286-2028
              </Button>
            </motion.div>

            {/* Subtexto de Alerta/Info */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2 mt-4 text-on-dark-muted text-xs md:text-sm"
            >
              <Info className="w-4 h-4 text-primary shrink-0" />
              <span>ou use o formulário de contato para orçamentos estruturados</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
