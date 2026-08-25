import { motion } from 'motion/react'
import Button from '../ui/button'
import HighlightLine from '../ui/highlight-line'
import SupportHighlight from '../ui/support-highlight'
import DashedLink from '../ui/dashed-link'
import SydorakLogo from '../ui/sydorak-logo'
import heroBg from '../../assets/Hero-home.webp'

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // curve easeOutExpo
    }
  }
}

import { cn } from '../../utils/cn'

/**
 * Hero — Seção principal da página Home, Sobre Nós e Serviço.
 * 
 * DESIGN.md:
 * - Fundo: Imagem industrial otimizada com gradiente navy escuro translúcido.
 * - Responsividade: Padding lateral com Grid Strict e overlay adaptativo.
 * - Elementos: SydorakLogo completa, H1 (destaque text-sky), HighlightLine (onDark), SupportHighlight.
 * - CTAs: Botão principal gradiente com seta e secundário translúcido.
 * - Animação: Cascata staggerChildren via motion/react.
 */
export default function Hero({
  backgroundImage = heroBg,
  eyebrow = 'Sydorak Anodização',
  title = 'Anodização que protege, valoriza e garante',
  highlightedText = 'durabilidade real.',
  highlightPosition = 'last',
  highlightLineText = 'Evite falhas, corrosão e retrabalho no seu alumínio.',
  description = 'Sydorak Anodização, 40 anos transformando perfis de alumínio em soluções duráveis, seguras e tecnicamente confiáveis para diversas aplicações industriais e arquitetônicas.',
  buttonText = 'Solicitar Análise Técnica',
  buttonTo = '/contato',
  secondaryButtonText = 'Saiba mais',
  secondaryButtonTo = '/sobre-nos',
  bottomText = 'Atendimento direto com especialista',
  showDesktopOverlay = true,
  highlightBlock = false,
}) {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-surface-darkest">
      {/* Imagem de Fundo Otimizada */}
      <img
        src={backgroundImage}
        alt="Sydorak Processo Anódico"
        className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
      />

      {/* Overlay de Gradiente Responsivo (Vertical no Mobile, Horizontal no Desktop se habilitado) */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-b from-[#011025] via-[#011025]/90 to-transparent z-10',
          showDesktopOverlay
            ? 'md:bg-gradient-to-r md:from-[#011025] md:via-[#011025]/80 md:to-transparent'
            : 'md:bg-none'
        )}
      />

      {/* Overlay Superior */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-darkest via-transparent to-transparent z-10" />

      {/* Container Principal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[112px] pt-36 pb-20 flex flex-col items-start justify-center min-h-screen"
      >
        {/* Logo Completa em Destaque */}
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <SydorakLogo dark={true} className="h-[48px] sm:h-[50px] md:h-[46px] lg:h-[50px] w-auto drop-shadow-md" />
        </motion.div>

        {/* Headline (H1) */}
        <motion.h1
          variants={itemVariants}
          className="text-h1-hero-mobile md:text-h1-hero text-on-dark w-full max-w-[580px] md:max-w-[680px] lg:max-w-[720px] tracking-tight mb-8"
        >
          {highlightPosition === 'first' && highlightedText ? (
            <>
              <span className={cn("text-sky", highlightBlock ? "block" : "block md:inline")}>{highlightedText}</span>{' '}
              {title}
            </>
          ) : (
            <>
              {title}{' '}
              {highlightedText && (
                <span className={cn("text-sky", highlightBlock ? "block" : "block md:inline")}>{highlightedText}</span>
              )}
            </>
          )}
        </motion.h1>

        {/* HighlightLine */}
        {highlightLineText && (
          <motion.div variants={itemVariants} className="mb-6 w-full max-w-[450px]">
            <HighlightLine onDark={true}>
              {highlightLineText}
            </HighlightLine>
          </motion.div>
        )}

        {/* Parágrafo de Apoio */}
        {description && (
          <motion.p
            variants={itemVariants}
            className="text-on-dark-muted text-body md:text-lead w-full max-w-[450px] mb-10 leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* CTAs e Subtexto de Apoio */}
        <motion.div variants={itemVariants} className="flex flex-col items-start gap-3 w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {buttonText && (
              <Button variant="primary" icon={true} to={buttonTo} className="w-full sm:w-auto justify-center">
                {buttonText}
              </Button>
            )}
            {secondaryButtonText && (
              <Button variant="secondary" to={secondaryButtonTo} className="w-full sm:w-auto justify-center">
                {secondaryButtonText}
              </Button>
            )}
          </div>

          {bottomText && (
            <SupportHighlight text={bottomText} className="pt-0.5 pl-0.5" />
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}


