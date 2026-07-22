import { motion } from 'motion/react'
import Button from '../ui/button'
import HighlightLine from '../ui/highlight-line'
import NormCard from '../ui/norm-card'
import DashedLink from '../ui/dashed-link'
import sobreNosWebp from '../../assets/sobre-nos-home.webp'

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

const imageVariants = {
  hidden: { opacity: 0, x: 30 }, // Slide in from the right
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // Curve easeOutExpo
    }
  }
}

/**
 * AboutSummary — Seção resumo institucional e normas atendidas da Sydorak.
 * 
 * DESIGN.md:
 * - Fundo: bg-canvas (claro).
 * - Grid: 1 col (mobile), 2 cols (desktop) com gap de 12/16.
 * - Elementos: DashedLink, H2 (visão de futuro text-secondary), HighlightLine, NormCard, Button.
 * - Animações: staggerChildren no texto + image slide-in a partir da direita.
 * - Otimização: Imagem WebP de 46.67KB.
 */
export default function AboutSummary() {
  return (
    <section className="w-full py-16 md:py-24 bg-canvas overflow-hidden border-b border-hairline/20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[112px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Coluna de Conteúdo (Esquerda) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="flex flex-col w-full"
        >
          {/* Bloco Institucional */}
          <div className="flex flex-col items-start w-full mb-6">
            <motion.div variants={itemVariants}>
              <DashedLink className="uppercase tracking-wider text-xs">
                Sobre nós
              </DashedLink>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-h2-section-mobile md:text-h2-section text-ink font-bold tracking-tight leading-none mt-6"
            >
              Tradição industrial com <span className="text-secondary">visão de futuro</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="w-full mt-6">
              <HighlightLine>
                Desde 1986, a Sydorak constrói confiança através da consistência técnica.
              </HighlightLine>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted text-body-sm mt-4 mb-0 leading-relaxed"
            >
              Evoluímos processos, desenvolvemos pessoas e investimos continuamente em qualidade para atender projetos cada vez mais exigentes. E agora, com novo visual e identidade forte, estamos preparados para o futuro.
            </motion.p>
          </div>

          {/* Bloco de Normas Técnicas */}
          <div className="flex flex-col items-start w-full">
            <motion.div variants={itemVariants}>
              <DashedLink className="uppercase tracking-wider text-xs">
                Normas Técnicas
              </DashedLink>
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="text-h3-subtitle-mobile md:text-h3-subtitle text-primary font-bold mt-6 mb-6"
            >
              Normas Atendidas
            </motion.h3>

            {/* Grade de NormCards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full"
            >
              <NormCard
                title="ASTM B117"
                description="Teste de corrosão acelerada"
              />
              <NormCard
                title="ABNT NBR 12373"
                description="Anodização de alumínio"
              />
              <NormCard
                title="ISO 7599"
                description="Principal norma mundial para anodização decorativa/protetiva"
              />
              <NormCard
                title="QUALANOD"
                description="Sistema europeu de qualidade (muito usado em arquitetura)"
              />
              <NormCard
                className="sm:col-span-2"
                title="Homologação Eletrobras"
                description="Projetos críticos"
              />
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button variant="primary" icon={true} to="/sobre-nos">
                Saiba mais
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Coluna da Imagem (Direita) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={imageVariants}
          className="w-full flex justify-center lg:justify-end lg:h-full order-first lg:order-last"
        >
          <picture className="w-full max-w-[600px] lg:max-w-none">
            <source srcSet={sobreNosWebp} type="image/webp" />
            <img
              src={sobreNosWebp}
              alt="Especialista realizando medição técnica precisa com micrômetro digital em perfil de alumínio"
              className="w-full h-auto lg:min-h-[500px] object-cover rounded-xl shadow-md border border-secondary/10"
              loading="lazy"
            />
          </picture>
        </motion.div>

      </div>
    </section>
  )
}
