import { motion } from 'motion/react'
import ServiceCard from '../ui/service-card'
import protecaoEletroquimicaWebp from '../../assets/protecao-eletroquimica-card.webp'
import acabamentosWebp from '../../assets/acabamentos-card.webp'
import aplicacaoWebp from '../../assets/aplicacao-card.webp'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      ease: [0.16, 1, 0.3, 1] // Curve easeOutExpo
    }
  }
}

/**
 * ServicesGrid — Seção de Grade de Serviços da Sydorak.
 * 
 * DESIGN.md:
 * - Fundo: bg-canvas (claro).
 * - Grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop).
 * - Elementos: Reutiliza o componente ServiceCard.
 * - Animações: staggerChildren no container, reveal ao scroll (whileInView).
 */
export default function ServicesGrid() {
  const services = [
    {
      title: "Proteção Eletroquímica",
      description: "Camada integrada ao alumínio. Alta resistência à corrosão e longa vida útil.",
      imageSrc: protecaoEletroquimicaWebp,
      href: "#"
    },
    {
      title: "Acabamentos Técnicos e Estéticos",
      description: "Fosco, Tons de Bronze, Preto, Cores que mantêm o reflexo metálico e elegância natural.",
      imageSrc: acabamentosWebp,
      href: "#"
    },
    {
      title: "Aplicações Industriais e Arquitetônicas",
      description: "Arquitetura, Energia, Mecânica, Moveleira, Estruturas, Agropecuária e Transportes.",
      imageSrc: aplicacaoWebp,
      href: "#"
    }
  ]

  return (
    <section className="w-full bg-canvas py-16 md:py-24 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[112px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ServiceCard
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              href={service.href}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
