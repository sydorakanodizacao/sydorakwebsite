import { motion } from 'motion/react'

const colorItems = [
  {
    title: 'Fosco Natural',
    type: 'Branco',
    colorHex: '#D9D9D9',
    line1: 'Reflexo metálico suave, tom claro',
    line2: 'Arquitetura moderna, acabamento clean',
  },
  {
    title: 'Perita',
    type: 'Sob consulta',
    colorHex: '#B8A99B',
    description: 'Para projetos específicos, sob consulta',
  },
  {
    title: 'Bronze 1001',
    type: 'Bronze Champagne',
    colorHex: '#C8B49C',
    line1: 'Tom quente, leve ouro, elegante',
    line2: 'Projetos de alto design, luxo',
  },
  {
    title: 'Bronze 1002',
    type: 'Bronze Médio',
    colorHex: '#8E735B',
    line1: 'Tom intermediário, versátil',
    line2: 'Esquadrias, aplicações gerais',
  },
  {
    title: 'Bronze 1003',
    type: 'Bronze Escuro',
    colorHex: '#594333',
    line1: 'Tom profundo, sofisticado',
    line2: 'Fachadas, destaque visual',
  },
  {
    title: 'Bronze 1004',
    type: 'Bronze Extra Escuro',
    colorHex: '#332924',
    line1: 'Tom muito escuro, quase preto',
    line2: 'Projetos modernistas, contraste',
  },
  {
    title: 'Preto',
    type: 'Preto Anodizado',
    colorHex: '#242424',
    line1: 'Tom profundo, reflexo metálico retido',
    line2: 'Eletrônicos, design premium',
  },
  {
    title: 'Brilhante',
    type: 'Bright/Polish',
    colorHex: '#E8E8E8',
    line1: 'Reflexo alto, aspecto leitoso, superfície espelhada',
    line2: 'Decorativo, acabamento nobre',
  },
]

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
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

/**
 * ColorsAndFinishes — Seção "Cores & Referências de acabamento" (Página de Serviço).
 * 
 * Figma Node: 24117:159
 * Design System:
 * - Cabeçalho: Título centralizado com "Cores &" em azul gradiente institucional.
 * - Grid: 8 amostras em 4 colunas responsivas com o padrão de card animado da biblioteca.
 */
export default function ColorsAndFinishes() {
  return (
    <section className="w-full bg-canvas py-20 md:py-28 px-6 lg:px-12 select-none overflow-hidden border-b border-hairline/20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="max-w-7xl mx-auto flex flex-col items-center gap-12"
      >
        {/* Cabeçalho Centralizado */}
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-[48px] font-bold text-ink tracking-tight leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#78B5E3] via-[#0E55A9] to-[#08418B]">
              Cores &amp;
            </span>{' '}
            Referências de acabamento
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-neutral-600 text-sm md:text-base leading-relaxed"
          >
            A precisão técnica construída em 40 anos pela Sydorak desenvolveu a palheta de cores: fosco, tons de bronze, preto e brilhante
          </motion.p>
        </div>

        {/* Grid de Cards de Cores (4 Colunas no Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {colorItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex items-start gap-3 p-5 md:p-6 rounded-[10px] bg-white border-l-4 border-transparent hover:border-primary hover:shadow-card transition-all duration-300 select-none h-full"
            >
              {/* Amostra da Cor */}
              <div
                className="w-8 h-8 rounded-[5px] shrink-0 mt-0.5 shadow-sm border border-black/10"
                style={{ backgroundColor: item.colorHex }}
                aria-hidden="true"
              />

              {/* Informações da Cor */}
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <h3 className="text-lg font-bold text-secondary leading-tight truncate">
                  {item.title}
                </h3>

                {item.type && (
                  <span className="text-xs font-semibold text-primary-strong">
                    {item.type}
                  </span>
                )}

                {item.description ? (
                  <p className="text-xs text-neutral-600 leading-snug mt-1">
                    {item.description}
                  </p>
                ) : (
                  <div className="flex flex-col gap-0.5 mt-1 text-xs text-neutral-600 leading-snug">
                    {item.line1 && <span>{item.line1}</span>}
                    {item.line2 && <span>{item.line2}</span>}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
