import { motion } from 'motion/react'
import {
  Zap,
  BatteryCharging,
  FlaskConical,
  Droplets,
  TrendingUp,
  Check
} from 'lucide-react'
import DashedLink from '../ui/dashed-link'
import factoryImageUrl from '../../assets/sustentabilidade-sobrenos.png'

const commitmentsList = [
  'Modernização contínua da infraestrutura industrial.',
  'Investimentos permanentes em eficiência energética.',
  'Otimização dos processos eletroquímicos para maior estabilidade operacional.',
  'Uso responsável de recursos naturais e redução sistemática de desperdícios.',
  'Aperfeiçoamento contínuo dos controles de processo e qualidade.',
  'Atuação em conformidade com a legislação ambiental e as boas práticas da indústria.',
]

const investmentsData = [
  {
    id: 'fotovoltaico',
    icon: Zap,
    title: 'Sistema Fotovoltaico',
    description: 'Investimento em geração própria de energia para maior eficiência operacional.',
  },
  {
    id: 'modernizacao',
    icon: BatteryCharging,
    title: 'Modernização Energética',
    description: 'Melhoria contínua da infraestrutura elétrica e dos equipamentos produtivos.',
  },
  {
    id: 'otimizacao',
    icon: FlaskConical,
    title: 'Otimização dos Processos',
    description: 'Aprimoramento constante dos parâmetros eletroquímicos para maior estabilidade e menor desperdício.',
  },
  {
    id: 'recursos',
    icon: Droplets,
    title: 'Uso Inteligente dos Recursos',
    description: 'Busca permanente por maior eficiência no consumo de água, energia e insumos produtivos.',
  },
  {
    id: 'melhoria',
    icon: TrendingUp,
    title: 'Melhoria Contínua',
    description: 'Investimentos permanentes em tecnologia, pessoas e processos para elevar o desempenho industrial.',
  },
]

/**
 * Sustainability — Seção "Eficiência Energética e Sustentabilidade".
 *
 * Estrutura original mantida (Figma Node: 24110:1739):
 * - Esquerda/Fundo: Imagem industrial com gradiente navy.
 * - Direita: Card elevado bg-[#f3f4f8] com borda lateral amarela, textos explicativos e ícones azuis.
 */
export default function Sustainability({
  factoryImage = factoryImageUrl,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-surface-darkest py-20 md:py-28 px-4 sm:px-6 lg:px-12 select-none min-h-[760px] flex items-center">
      {/* Imagem de Fundo Institucional */}
      <img
        src={factoryImage}
        alt="Processo Fabril Sydorak Sustentabilidade"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />

      {/* Overlay de Gradiente Responsivo */}
      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#0e2240] via-[#0e2240]/90 lg:via-[#0e2240]/80 to-[#0e2240]/40 z-10" />

      {/* Container de Conteúdo com Card à Direita */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex justify-end">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[620px] lg:max-w-[680px] xl:max-w-[720px] lg:ml-auto bg-[#f3f4f8] border-l-4 border-primary rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col gap-6"
        >
          {/* Tag / Kicker */}
          <div>
            <DashedLink className="uppercase tracking-wider text-xs pointer-events-none">
              Sustentabilidade
            </DashedLink>
          </div>

          {/* Título Principal */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-tight leading-tight font-display">
            Eficiência energética e sustentabilidade
          </h2>

          {/* Subtítulo / Frase de Impacto */}
          <p className="text-base sm:text-lg font-semibold text-[#0e53a6] leading-snug">
            Eficiência para produzir melhor. Responsabilidade para crescer de forma sustentável.
          </p>

          {/* Texto de Apoio Introdutório */}
          <div className="space-y-3 text-neutral-600 text-sm md:text-base leading-relaxed">
            <p>
              Na Sydorak, acreditamos que excelência operacional e responsabilidade ambiental caminham juntas.
            </p>
            <p>
              Por isso, investimos continuamente na modernização de nossa infraestrutura, na eficiência energética e no aperfeiçoamento dos processos produtivos, tornando nossa operação cada vez mais estável, segura e preparada para os desafios da indústria moderna.
            </p>
            <p className="font-medium text-neutral-800">
              Mais do que reduzir consumo de energia, buscamos produzir com inteligência, precisão e responsabilidade, sempre alinhados às melhores práticas técnicas e ambientais.
            </p>
          </div>

          {/* Bloco 1: Por Que Isso Importa? */}
          <div className="pt-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#c59d1d] uppercase tracking-wide mb-2">
              Por Que Isso Importa?
            </h3>
            <p className="font-semibold text-ink text-sm sm:text-base mb-2">
              A anodização é um processo eletroquímico de alta precisão.
            </p>
            <div className="space-y-3 text-neutral-600 text-sm md:text-base leading-relaxed">
              <p>
                Cada parâmetro operacional — energia elétrica, temperatura, composição química, tempo de processamento e qualidade da água — influencia diretamente o desempenho do processo e a qualidade final da camada anódica.
              </p>
              <p>
                Por isso, eficiência energética não representa apenas economia de recursos. Ela significa maior estabilidade operacional, melhor controle dos processos, redução de desperdícios e repetição de padrões com melhores resultados.
              </p>
              <p>
                Essa filosofia beneficia tanto o meio ambiente quanto nossos clientes, que recebem componentes produzidos em uma operação continuamente aperfeiçoada, com foco em qualidade, confiabilidade e desempenho.
              </p>
            </div>
          </div>

          {/* Bloco 2: Nosso Compromisso com a Evolução Contínua */}
          <div className="pt-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#c59d1d] uppercase tracking-wide mb-2">
              Nosso Compromisso com a Evolução Contínua
            </h3>
            <div className="space-y-2 text-neutral-600 text-sm md:text-base leading-relaxed mb-3">
              <p>
                Na Sydorak, eficiência não é um projeto com data para terminar. É uma cultura construída diariamente.
              </p>
              <p>
                Investimos continuamente em iniciativas que tornam nossa operação mais moderna, eficiente e sustentável. Nossos compromissos incluem:
              </p>
            </div>
            <ul className="flex flex-col gap-2 my-2">
              {commitmentsList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-neutral-700 leading-snug">
                  <span className="bg-[#0e53a6]/10 text-[#0e53a6] rounded-full p-0.5 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloco 3: Um Compromisso com as Próximas Décadas */}
          <div className="pt-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#c59d1d] uppercase tracking-wide mb-2">
              Um Compromisso com as Próximas Décadas
            </h3>
            <div className="space-y-3 text-neutral-600 text-sm md:text-base leading-relaxed">
              <p>
                A sustentabilidade da Sydorak não é definida por uma única iniciativa. Ela está presente nas decisões que tomamos todos os dias.
              </p>
              <p>
                Cada investimento realizado fortalece nossa capacidade produtiva, aumenta a eficiência dos processos, reduz desperdícios e prepara a empresa para os desafios das próximas décadas.
              </p>
              <p className="font-semibold text-neutral-800">
                Porque acreditamos que uma empresa sólida é aquela que cresce de forma responsável, preservando recursos, desenvolvendo pessoas e entregando aos seus clientes soluções cada vez mais confiáveis.
              </p>
            </div>
          </div>

          {/* Bloco 4: Nossos Investimentos em Eficiência */}
          <div className="pt-2 flex flex-col gap-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#c59d1d] uppercase tracking-wide">
              Nossos Investimentos em Eficiência
            </h3>
            <div className="flex flex-col gap-3.5">
              {investmentsData.map((item) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={item.id}
                    className="flex items-start gap-3.5 p-3.5 rounded-[12px] bg-white border border-neutral-200/80 shadow-sm"
                  >
                    <div className="bg-[#0e53a6]/10 text-[#0e53a6] rounded-[10px] w-10 h-10 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#0e53a6] font-bold text-base tracking-tight leading-snug">
                        {item.title}
                      </span>
                      <span className="text-neutral-600 text-xs sm:text-sm leading-relaxed mt-0.5">
                        {item.description}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bloco 5: Citação de Fechamento */}
          <div className="mt-3 p-5 rounded-[12px] bg-white border-2 border-[#0e53a6]/20 shadow-sm">
            <p className="text-[#0e53a6] font-semibold text-sm sm:text-base leading-relaxed italic text-center">
              “Para nós, eficiência energética, sustentabilidade e qualidade fazem parte do mesmo compromisso: construir uma operação cada vez mais confiável para entregar aos nossos clientes resultados consistentes hoje e nas próximas décadas.”
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
