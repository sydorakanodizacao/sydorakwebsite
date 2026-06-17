import { motion } from 'motion/react'
import { Award, Factory, Leaf, Target } from 'lucide-react'
import StatItem from '../ui/stat-item'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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
      ease: [0.16, 1, 0.3, 1] // easeOutExpo curve
    }
  }
}

/**
 * Stats — Seção de estatísticas/Power Numbers.
 * 
 * DESIGN.md:
 * - Fundo: bg-canvas (Padrão de página claro).
 * - Grid: 1 col (mobile), 2 cols (tablet), 4 cols (desktop).
 * - Responsividade: Padding lateral com Grid Strict.
 * - Animações: staggerChildren disparado whenInView.
 * - Itens: Reutiliza o componente atômico StatItem com cursor estático.
 */
export default function Stats() {
  return (
    <section className="w-full bg-canvas py-12 md:py-16 border-b border-hairline/20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[112px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12"
      >
        <motion.div variants={itemVariants}>
          <StatItem
            icon={Award}
            title="40 anos de experiência"
            description="Desde 1986 — Experiência contínua em anodização"
            className="cursor-default"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatItem
            icon={Factory}
            title="1.080 ton / ano"
            description="Capacidade produtiva industrial"
            className="cursor-default"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatItem
            icon={Leaf}
            title="Desde 2020"
            description="Compromisso com sustentabilidade e inovação"
            className="cursor-default"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatItem
            icon={Target}
            title="100% foco em anodização"
            description="Especialização total no processo"
            className="cursor-default"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
