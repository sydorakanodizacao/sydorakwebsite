import { motion } from 'motion/react'
import { CheckCheck } from 'lucide-react'
import DashedLink from '../ui/dashed-link'
import anodizationImageUrl from '../../assets/oqueeanodizacao.png'

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const benefits = [
  'Protege o alumínio contra corrosão (até em ambientes agressivos)',
  'Oferece acabamento visual perfeito (Fosco, Tons de bronze e Preto)',
  'Aumenta durabilidade e vida útil do alumínio tratado',
  'Mantém o reflexo natural do metal (pois não ocorre cobertura do alumínio, somente a formação de camada protetiva.)',
  'Baixa manutenção',
]

/**
 * WhatIsAnodization — Seção educativa "O que é Anodização?" (Página de Serviço).
 * 
 * Figma Node: 24111:449
 * Design System:
 * - Esquerda: Imagem institucional com borbulhamento do processo eletroquímico.
 * - Direita: Kicker "Educação", H2, lista com ícones checkmark duplos em dourado e bloco "Definição Técnica".
 */
export default function WhatIsAnodization({
  anodizationImage = anodizationImageUrl,
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
        {/* Coluna da Esquerda: Imagem Institucional */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 w-full h-[360px] sm:h-[440px] lg:h-[540px] rounded-2xl overflow-hidden shadow-sm group relative"
        >
          <img
            src={anodizationImage}
            alt="Processo eletroquímico de anodização do alumínio"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </motion.div>

        {/* Coluna da Direita: Conteúdo Educativo & Técnico */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 flex flex-col items-start"
        >
          {/* Tag / Kicker */}
          <DashedLink className="uppercase tracking-wider text-xs mb-3">
            Educação
          </DashedLink>

          {/* Título H2 */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-ink tracking-tight leading-tight mb-4">
            O que é Anodização?
          </h2>

          {/* Parágrafo de Introdução */}
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-6">
            Anodização é um processo eletroquímico que transforma a superfície do alumínio em uma camada de óxido protetor. Essa camada:
          </p>

          {/* Lista de Benefícios com Ícones CheckCheck Dourados */}
          <div className="flex flex-col gap-3.5 mb-8 w-full">
            {benefits.map((text, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-3 text-neutral-600 text-sm md:text-base leading-snug"
              >
                <CheckCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{text}</span>
              </motion.div>
            ))}
          </div>

          {/* Bloco "Definição Técnica" */}
          <h3 className="text-xl md:text-2xl font-semibold text-[#f0c51c] tracking-tight mb-3">
            Definição Técnica
          </h3>
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            Durante o processo anódico, o alumínio é ligado ao pólo positivo (anodo) de uma fonte de eletricidade e imerso em banho eletrolítico. Isso causa a formação de uma camada anódica (óxido de alumínio) na superfície. A espessura, composição e acabamento dessa camada dependem de parâmetros como voltagem, amperagem, tempo de imersão e composição do eletrólito — variáveis que precisam estar devidamente equalizadas.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
