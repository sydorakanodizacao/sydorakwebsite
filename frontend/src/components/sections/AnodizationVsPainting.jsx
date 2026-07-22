import { motion } from 'motion/react'
import Button from '../ui/button'
import DashedLink from '../ui/dashed-link'
import ComparisonRow from '../ui/comparison-row'

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
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

const comparisonData = [
  {
    title: 'Tipo de Cobertura',
    anodizacao: 'Anodização: Camada eletroquímica — integrada ao alumínio',
    pintura: 'Pintura: Camada polimérica — aplicada sobre superfície.',
  },
  {
    title: 'Reflexo do Metal',
    anodizacao: 'Anodização: Mantém reflexo natural (permite efeitos metálicos únicos)',
    pintura: 'Pintura: Cobre completamente — sem reflexo, podendo ter brilho.',
  },
  {
    title: 'Durabilidade',
    anodizacao: 'Anodização: Extremamente durável — resistência à abrasão e corrosão',
    pintura: 'Pintura: Durável, se respeitadas as normas e formas de aplicação.',
  },
  {
    title: 'Ambiente de Corrosão Alta',
    anodizacao: 'Anodização: Excelente desempenho',
    pintura: 'Pintura: Pode atender, desde que realizados todos os testes de ancoragem e aderência do polímero.',
  },
  {
    title: 'Manutenção',
    anodizacao: 'Anodização: Mínima — apenas limpeza periódica',
    pintura: 'Pintura: Apenas limpeza',
  },
  {
    title: 'Variações de Cor',
    anodizacao: 'Anodização: Fosco, Bronze (1001/1002/1003/1004), Preto, Aço Escovado, Brilhante',
    pintura: 'Pintura: Cores ilimitadas',
  },
  {
    title: 'Aplicações Ideais',
    anodizacao: 'Anodização: Arquitetura, industrial, objetos técnicos de longo prazo',
    pintura: 'Pintura: Aplicações em diversas áreas com possibilidades de cores e texturas ilimitadas',
  },
]

/**
 * AnodizationVsPainting — Seção comparativa "Anodização vs. Pintura" (Página de Serviço).
 * 
 * Figma Node: 24111:327
 * Design System:
 * - Esquerda: Tag Kicker, Título H2, Descrição e Botão CTA master para análise técnica.
 * - Direita: Cards comparativos reaproveitando a estrutura da UI `ComparisonRow`.
 */
export default function AnodizationVsPainting() {
  return (
    <section className="w-full bg-canvas py-20 md:py-28 px-6 lg:px-12 select-none overflow-hidden border-b border-hairline/20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
      >
        {/* Coluna da Esquerda: Chamada Sticky */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 lg:sticky lg:top-28 self-start flex flex-col items-start lg:-mt-3"
        >
          {/* Tag / Kicker */}
          <DashedLink className="uppercase tracking-wider text-xs mb-3">
            Tecnologia de ponta
          </DashedLink>

          {/* Título H2 */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-ink tracking-tight leading-tight mb-4">
            Anodização vs. Pintura
          </h2>

          {/* Descrição */}
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Muitos clientes confundem. Aqui clarificamos algumas diferenças entre os 2 beneficiamentos.
          </p>

          {/* Botão Call-to-Action */}
          <Button variant="primary" icon={true} to="/contato" className="tracking-wide">
            SOLICITAR ANÁLISE TÉCNICA
          </Button>
        </motion.div>

        {/* Coluna da Direita: Lista Comparativa de Cards */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 flex flex-col gap-4 w-full"
        >
          {comparisonData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ComparisonRow
                title={item.title}
                anodizacao={item.anodizacao}
                pintura={item.pintura}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
