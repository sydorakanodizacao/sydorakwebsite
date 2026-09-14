import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Award, X, FileText, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react'

export const technicalNormsData = [
  {
    code: 'ABNT NBR 12373',
    description: 'Anodização do alumínio e suas ligas.',
  },
  {
    code: 'ISO 7599',
    description: 'Anodização decorativa e protetora do alumínio.',
  },
  {
    code: 'ASTM B117',
    description: 'Ensaio acelerado de resistência à corrosão por névoa salina.',
  },
  {
    code: 'ISO 2360',
    description: 'Medição não destrutiva da espessura das camadas anodizadas.',
  },
  {
    code: 'Especificações Técnicas do Cliente',
    description: 'Desenvolvimento de processos conforme requisitos específicos de projetos industriais.',
  },
]

export const thicknessTableData = [
  {
    classe: 'A 13',
    espessura: '11 a 15',
    agressividade: 'Baixa/média',
    ambiente: 'Urbano/rural',
  },
  {
    classe: 'A 18',
    espessura: '16 a 20',
    agressividade: 'Alta',
    ambiente: 'Litorâneo ᵇ',
  },
  {
    classe: 'A 23',
    espessura: '21 a 25',
    agressividade: 'Excessiva',
    ambiente: 'Industrial/marítimo',
  },
]

export const commonQualityParameters = [
  {
    title: 'Selagem',
    description: 'Fechamento rigoroso dos poros da camada anódica para assegurar resistência química e durabilidade.',
  },
  {
    title: 'Resistência à Corrosão',
    description: 'Proteção superior contra intempéries, atmosferas industriais severas e névoa salina.',
  },
  {
    title: 'Resistência UV',
    description: 'Estabilidade fotoquímica e retenção de tonalidade sem desbotamento por radiação solar.',
  },
  {
    title: 'Medição de Camada',
    description: 'Controle de micragem não destrutiva executado com equipamento calibrado e específico (ISO 2360).',
  },
  {
    title: 'Controle Químico',
    description: 'Monitoramento contínuo da concentração, temperatura e equalização dos banhos eletrolíticos.',
  },
  {
    title: 'Inspeção Visual',
    description: 'Análise criteriosa de acabamento, homogeneidade de cor e ausência de imperfeições.',
  },
  {
    title: 'Rastreabilidade',
    description: 'Identificação e controle de lotes de produção com histórico completo de parâmetros.',
  },
  {
    title: 'Ensaios e Testes',
    description: 'Validações técnicas laboratoriais e emissão de documentação de conformidade e certificados.',
  },
]

/**
 * QualityParametersModal — Pop-up técnico completo com Normas, Tabela NBR 12.609 e Parâmetros de Qualidade.
 */
export default function QualityParametersModal({ isOpen, onClose }) {
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Translúcido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-0"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col select-none my-auto"
          >
            {/* Cabeçalho do Pop-up */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200 bg-canvas sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <Award className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink leading-tight font-display">
                    Normas e Parâmetros de Qualidade
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-500 mt-0.5">
                    Especificações técnicas, normas de referência e métodos de controle de qualidade Sydorak.
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

            {/* Conteúdo com Scroll */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-neutral-700">
              
              {/* Bloco 1: Normas e Referências Técnicas */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-[#0e53a6]" />
                  <h4 className="text-base sm:text-lg font-bold text-ink uppercase tracking-wide">
                    Normas e Referências Técnicas
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {technicalNormsData.map((norm, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-canvas border border-neutral-200 flex flex-col justify-start gap-1"
                    >
                      <span className="font-bold text-secondary text-sm md:text-base font-display">
                        {norm.code}
                      </span>
                      <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                        {norm.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bloco 2: Tabela 1 – Espessura da Camada Anódica (ABNT NBR 12.609) */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-[#c59d1d]" />
                  <h4 className="text-base sm:text-lg font-bold text-ink uppercase tracking-wide">
                    Espessuras Típicas da Camada Anódica (ABNT NBR 12.609)
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-500 mb-3">
                  Tabela 1 – Relação entre classe, espessura da camada anódica, agressividade e ambiente de aplicação.
                </p>

                <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-surface-darkest text-white">
                        <th className="px-4 py-3 font-semibold uppercase tracking-wider border-r border-white/10">
                          Classe ᵃ
                        </th>
                        <th className="px-4 py-3 font-semibold uppercase tracking-wider border-r border-white/10">
                          Espessura da camada anódica (µm)
                        </th>
                        <th className="px-4 py-3 font-semibold uppercase tracking-wider border-r border-white/10">
                          Nível de agressividade
                        </th>
                        <th className="px-4 py-3 font-semibold uppercase tracking-wider">
                          Ambiente típico
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {thicknessTableData.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-canvas'}>
                          <td className="px-4 py-3 font-bold text-secondary border-r border-neutral-200">
                            {row.classe}
                          </td>
                          <td className="px-4 py-3 font-medium text-ink border-r border-neutral-200">
                            {row.espessura}
                          </td>
                          <td className="px-4 py-3 text-neutral-700 border-r border-neutral-200">
                            {row.agressividade}
                          </td>
                          <td className="px-4 py-3 text-neutral-700">
                            {row.ambiente}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Notas de Rodapé da Tabela */}
                <div className="mt-3 space-y-1 text-[11px] sm:text-xs text-neutral-500 leading-relaxed bg-canvas p-3 rounded-lg border border-neutral-200/80">
                  <p>
                    <strong className="text-neutral-700">ᵃ</strong> Os números 13, 18 e 23, que sucedem a letra “A”, identificam o valor médio da camada, expresso em micrômetros (µm).
                  </p>
                  <p>
                    <strong className="text-neutral-700">ᵇ</strong> O ambiente marítimo abrange somente os prédios frontais ao mar e sujeitos à névoa salina. Áreas marítimas mais internas são consideradas litorâneas.
                  </p>
                </div>
              </div>

              {/* Bloco 3: Parâmetros de Qualidade Comuns */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#0e53a6]" />
                  <h4 className="text-base sm:text-lg font-bold text-ink uppercase tracking-wide">
                    Parâmetros de Qualidade Comuns
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {commonQualityParameters.map((param, index) => (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-canvas border border-neutral-200 flex flex-col justify-start"
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="font-bold text-ink text-sm tracking-tight font-display">
                          {param.title}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {param.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Rodapé do Pop-up */}
            <div className="px-6 py-4 bg-canvas border-t border-neutral-200 flex justify-between items-center text-xs text-neutral-500 sticky bottom-0 z-20">
              <span className="font-medium text-neutral-600">Sydorak Anodização — Controle de Qualidade</span>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors text-xs sm:text-sm"
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
