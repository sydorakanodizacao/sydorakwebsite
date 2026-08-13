import { motion } from 'motion/react'
import DashedLink from '../ui/dashed-link'
import angra3Img from '../../assets/angra3.png'
import comercialImg from '../../assets/comercial.png'

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
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
 * FeaturedProjects — Seção unificada de Projetos Destaque na página Sobre Nós.
 * 
 * Design Responsivo:
 * - Desktop: Layout alternado elegante (Imagem-Texto / Texto-Imagem) em grade de 12 colunas.
 * - Mobile: Layout compacto unificado com imagens proporcionais (200px-260px), espaçamentos
 *   otimizados entre textos e títulos balanceados para caber confortavelmente na tela.
 */
export default function FeaturedProjects() {
  return (
    <section className="w-full bg-canvas py-10 sm:py-14 md:py-24 px-4 sm:px-6 lg:px-12 select-none overflow-hidden border-b border-hairline/20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-14 lg:gap-24">
        
        {/* Projeto 1: Setor de Geração de Energia */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-16 items-center"
        >
          {/* Imagem do Projeto */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 w-full h-[200px] sm:h-[260px] md:h-[380px] lg:h-[454px] rounded-xl md:rounded-2xl overflow-hidden shadow-md group relative"
          >
            <img
              src={angra3Img}
              alt="Projeto no Setor de Geração de Energia"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </motion.div>

          {/* Textos do Projeto */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 flex flex-col items-start gap-2 sm:gap-3 md:gap-4"
          >
            <DashedLink className="uppercase tracking-wider text-xs mb-0.5 md:mb-1">
              Projeto Destaque
            </DashedLink>

            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[44px] font-bold text-ink tracking-tight leading-snug">
              Setor de Geração de Energia (2016)
            </h2>

            <div className="flex flex-col gap-1 text-neutral-600 text-body leading-relaxed mb-1 sm:mb-2 max-w-xl">
              <p>
                Participação em projeto de elevada exigência técnica para o setor de geração de energia, desenvolvido em parceria com cliente industrial, e ainda, com homologação pelo Sistema Eletrobras.
              </p>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#c59d1d] tracking-tight">
              Solução:
            </h3>
            <p className="text-neutral-600 text-body leading-relaxed max-w-xl">
              Desenvolvemos um Plano de Qualidade Técnica específico a este projeto para atender as exigências técnicas requeridas.
            </p>
          </motion.div>
        </motion.div>

        {/* Divisor mobile sutil entre os dois destaques */}
        <div className="block lg:hidden w-full border-t border-hairline/20" />

        {/* Projeto 2: Fachada Arquitetônica em Edifício Comercial */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-16 items-center"
        >
          {/* Textos do Projeto */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 flex flex-col items-start gap-2 sm:gap-3 md:gap-4 order-2 lg:order-1"
          >
            <DashedLink className="uppercase tracking-wider text-xs mb-0.5 md:mb-1">
              Projeto Destaque
            </DashedLink>

            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[44px] font-bold text-ink tracking-tight leading-snug">
              Fachada Arquitetônica em Edifício Comercial
            </h2>

            <p className="text-neutral-600 text-body leading-relaxed mb-1 sm:mb-2">
              Aqui mostramos uma das aplicações da Anodização na arquitetura diferente de esquadrias.
            </p>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#c59d1d] tracking-tight">
              Solução:
            </h3>
            <p className="text-neutral-600 text-body leading-relaxed max-w-xl">
              Essa fachada foi anodizada na cor fosca e composta conforme projeto arquitetônico, entregando uma composição perfeita.
            </p>
          </motion.div>

          {/* Imagem do Projeto */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 w-full h-[200px] sm:h-[260px] md:h-[380px] lg:h-[454px] rounded-xl md:rounded-2xl overflow-hidden shadow-md group relative order-1 lg:order-2"
          >
            <img
              src={comercialImg}
              alt="Fachada Arquitetônica em Edifício Comercial"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
