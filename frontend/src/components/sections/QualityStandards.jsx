import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Award } from 'lucide-react'
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
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Curve easeOutExpo
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // Curve easeOutExpo
    },
  },
}

const qualityParametersData = [
  {
    parameter: 'Espessura de Camada Anódica',
    description: 'Camada de óxido formada',
    measurement: '15-50 micra (padrão). Pode variar conforme necessidade',
  },
  {
    parameter: 'Classe de Corrosão',
    description: 'Resistência a ambientes severos',
    measurement: 'C1 (baixa) a C5 (muito alta)',
  },
  {
    parameter: 'Uniformidade de Cor',
    description: 'Distribuição homogênea de pigmentação',
    measurement: 'Sem manchas, degradação, tons inconsistentes',
  },
  {
    parameter: 'Dureza de Superfície',
    description: 'Resistência a riscamento e abrasão',
    measurement: 'Teste de dureza Knoop',
  },
  {
    parameter: 'Porosidade',
    description: 'Fechamento dos poros pós-anodização',
    measurement: 'Importante para durabilidade',
  },
  {
    parameter: 'Aderência',
    description: 'Camada não se descasca do alumínio',
    measurement: 'Teste de pull-off',
  },
]

/**
 * QualityParametersModal — Pop-up interativo de Parâmetros de Qualidade Comuns.
 */
function QualityParametersModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Translúcido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-0"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col select-none my-auto"
          >
            {/* Cabeçalho do Pop-up */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200 bg-canvas">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-secondary shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold text-ink leading-tight">
                    Parâmetros de Qualidade Comuns
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-500 mt-0.5">
                    Especificações técnicas e métodos de controle de qualidade Sydorak.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar modal"
                className="h-9 w-9 rounded-full flex items-center justify-center text-neutral-500 hover:text-ink hover:bg-neutral-200/80 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Conteúdo da Tabela Técnica */}
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface-darkest text-white">
                    <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider rounded-tl-lg">
                      Parâmetro
                    </th>
                    <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider">
                      Descrição
                    </th>
                    <th className="px-4 py-3 font-semibold text-xs uppercase tracking-wider rounded-tr-lg">
                      Medição / Padrão
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-sm">
                  {qualityParametersData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/80'}
                    >
                      <td className="px-4 py-3.5 font-bold text-ink whitespace-nowrap">
                        {row.parameter}
                      </td>
                      <td className="px-4 py-3.5 text-neutral-600">
                        {row.description}
                      </td>
                      <td className="px-4 py-3.5 text-neutral-700 font-medium">
                        {row.measurement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Rodapé do Pop-up */}
            <div className="px-6 py-4 bg-canvas border-t border-neutral-200 flex justify-between items-center text-xs text-neutral-500">
              <span>Sydorak Anodização — Controle de Qualidade</span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-neutral-200 text-ink font-semibold rounded-md hover:bg-neutral-300 transition-colors text-sm"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

/**
 * QualityStandards — Seção "Normas Atendidas" (Página de Serviço).
 * Identidade 100% fiel à seção AboutSummary da Home, com os dois botões no rodapé e o pop-up técnico.
 */
export default function QualityStandards() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
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
                Tradição industrial com{' '}
                <span className="text-secondary">visão de futuro</span>
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

              {/* Botões na Base */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 w-full"
              >
                <Button variant="primary" icon={true} to="/contato">
                  SOLICITAR ANÁLISE TÉCNICA
                </Button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 rounded-lg border border-primary/40 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 text-ink text-sm font-semibold hover:border-primary hover:bg-primary/20 transition-all select-none"
                >
                  Parâmetros de Qualidade Comuns
                </button>
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

      {/* Pop-up / Modal Interativo de Parâmetros de Qualidade */}
      <QualityParametersModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
