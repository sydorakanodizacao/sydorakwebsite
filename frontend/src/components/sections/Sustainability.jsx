import { motion } from 'motion/react'
import DashedLink from '../ui/dashed-link'
import factoryImageUrl from '../../assets/sustentabilidade-sobrenos.png'

// Ícone 1: Raio (Energia)
const IconLightning = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask_lightning" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask_lightning)">
      <path d="M10.55 18.2L15.725 12H11.725L12.45 6.325L7.825 13H11.3L10.55 18.2ZM8 22L9 15H4L13 2H15L14 10H20L10 22H8Z" fill="url(#grad_lightning)"/>
    </g>
    <defs>
      <linearGradient id="grad_lightning" x1="20" y1="9.38033" x2="3.66125" y2="6.06334" gradientUnits="userSpaceOnUse">
        <stop stopColor="#78B5E3"/>
        <stop offset="0.5" stopColor="#0E55A9"/>
        <stop offset="1" stopColor="#08418B"/>
      </linearGradient>
    </defs>
  </svg>
)

// Ícone 2: Seta (Otimização)
const IconArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask_arrow" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask_arrow)">
      <path d="M16 18V16H18.6L13.4 10.85L9.4 14.85L2 7.4L3.4 6L9.4 12L13.4 8L20 14.6V12H22V18H16Z" fill="url(#grad_arrow)"/>
    </g>
    <defs>
      <linearGradient id="grad_arrow" x1="22" y1="10.4282" x2="3.96157" y2="2.79894" gradientUnits="userSpaceOnUse">
        <stop stopColor="#78B5E3"/>
        <stop offset="0.5" stopColor="#0E55A9"/>
        <stop offset="1" stopColor="#08418B"/>
      </linearGradient>
    </defs>
  </svg>
)

// Ícone 3: Dinheiro (Investimento)
const IconMoney = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask_money" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask_money)">
      <path d="M11.0252 21V18.85C10.1419 18.65 9.37936 18.2667 8.7377 17.7C8.09603 17.1333 7.6252 16.3333 7.3252 15.3L9.1752 14.55C9.4252 15.35 9.79603 15.9583 10.2877 16.375C10.7794 16.7917 11.4252 17 12.2252 17C12.9085 17 13.4877 16.8458 13.9627 16.5375C14.4377 16.2292 14.6752 15.75 14.6752 15.1C14.6752 14.5167 14.4919 14.0542 14.1252 13.7125C13.7585 13.3708 12.9085 12.9833 11.5752 12.55C10.1419 12.1 9.15853 11.5625 8.6252 10.9375C8.09186 10.3125 7.8252 9.55 7.8252 8.65C7.8252 7.56667 8.1752 6.725 8.8752 6.125C9.5752 5.525 10.2919 5.18333 11.0252 5.1V3H13.0252V5.1C13.8585 5.23333 14.546 5.5375 15.0877 6.0125C15.6294 6.4875 16.0252 7.06667 16.2752 7.75L14.4252 8.55C14.2252 8.01667 13.9419 7.61667 13.5752 7.35C13.2085 7.08333 12.7085 6.95 12.0752 6.95C11.3419 6.95 10.7835 7.1125 10.4002 7.4375C10.0169 7.7625 9.8252 8.16667 9.8252 8.65C9.8252 9.2 10.0752 9.63333 10.5752 9.95C11.0752 10.2667 11.9419 10.6 13.1752 10.95C14.3252 11.2833 15.196 11.8125 15.7877 12.5375C16.3794 13.2625 16.6752 14.1 16.6752 15.05C16.6752 16.2333 16.3252 17.1333 15.6252 17.75C14.9252 18.3667 14.0585 18.75 13.0252 18.9V21H11.0252Z" fill="url(#grad_money)"/>
    </g>
    <defs>
      <linearGradient id="grad_money" x1="16.6752" y1="9.64229" x2="6.90351" y2="8.35421" gradientUnits="userSpaceOnUse">
        <stop stopColor="#78B5E3"/>
        <stop offset="0.5" stopColor="#0E55A9"/>
        <stop offset="1" stopColor="#08418B"/>
      </linearGradient>
    </defs>
  </svg>
)

// Ícone 4: Selo (Certificação)
const IconSeal = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask_seal" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask_seal)">
      <path d="M9.675 13.7L10.55 10.85L8.25 9H11.1L12 6.2L12.9 9H15.75L13.425 10.85L14.3 13.7L12 11.925L9.675 13.7ZM6 23V15.275C5.36667 14.575 4.875 13.775 4.525 12.875C4.175 11.975 4 11.0167 4 10C4 7.76667 4.775 5.875 6.325 4.325C7.875 2.775 9.76667 2 12 2C14.2333 2 16.125 2.775 17.675 4.325C19.225 5.875 20 7.76667 20 10C20 11.0167 19.825 11.975 19.475 12.875C19.125 13.775 18.6333 14.575 18 15.275V23L12 21L6 23ZM16.25 14.25C17.4167 13.0833 18 11.6667 18 10C18 8.33333 17.4167 6.91667 16.25 5.75C15.0833 4.58333 13.6667 4 12 4C10.3333 4 8.91667 4.58333 7.75 5.75C6.58333 6.91667 6 8.33333 6 10C6 11.6667 6.58333 13.0833 7.75 14.25C8.91667 15.4167 10.3333 16 12 16C13.6667 16 15.0833 15.4167 16.25 14.25ZM8 20.025L12 19L16 20.025V16.925C15.4167 17.2583 14.7875 17.5208 14.1125 17.7125C13.4375 17.9042 12.7333 18 12 18C11.2667 18 10.5625 17.9042 9.8875 17.7125C9.2125 17.5208 8.58333 17.2583 8 16.925V20.025Z" fill="url(#grad_seal)"/>
    </g>
    <defs>
      <linearGradient id="grad_seal" x1="20" y1="9.74934" x2="3.6009" y2="6.57864" gradientUnits="userSpaceOnUse">
        <stop stopColor="#78B5E3"/>
        <stop offset="0.5" stopColor="#0E55A9"/>
        <stop offset="1" stopColor="#08418B"/>
      </linearGradient>
    </defs>
  </svg>
)

const commitmentsData = [
  {
    id: 'lightning',
    icon: IconLightning,
    text: 'Redução de consumo energético em',
    highlight: '40% desde 2020',
  },
  {
    id: 'arrow',
    icon: IconArrow,
    text: 'Otimização de banhos eletrolíticos para',
    highlight: 'Menor desperdício',
  },
  {
    id: 'money',
    icon: IconMoney,
    text: 'Investimento contínuo em',
    highlight: 'Tecnologia sustentável',
  },
  {
    id: 'seal',
    icon: IconSeal,
    titleHighlight: true,
    title: 'Certificações',
    text: 'Em conformidade com normas ambientais',
  },
]

/**
 * Sustainability — Seção "Eficiência Energética e Sustentabilidade".
 * 
 * Figma Node: 24110:1739
 * Design System:
 * - Esquerda/Fundo: Imagem industrial do processo fabril com gradiente navy.
 * - Direita: Card elevado bg-[#f3f4f8] com borda lateral amarela, textos explicativos e ícones com gradiente azul.
 */
export default function Sustainability({
  factoryImage = factoryImageUrl,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-surface-darkest py-20 md:py-28 px-6 lg:px-12 select-none min-h-[760px] flex items-center">
      {/* Imagem de Fundo Institucional */}
      <img
        src={factoryImage}
        alt="Processo Fabril Sydorak Sustentabilidade"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />

      {/* Overlay de Gradiente Responsivo */}
      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#0e2240] via-[#0e2240]/90 lg:via-[#0e2240]/80 to-[#0e2240]/40 z-10" />

      {/* Container de Conteúdo */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex justify-end">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[590px] lg:ml-auto bg-[#f3f4f8] border-l-4 border-primary rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col gap-6"
        >
          {/* Tag / Kicker */}
          <div>
            <DashedLink className="uppercase tracking-wider text-xs">
              Sustentabilidade
            </DashedLink>
          </div>

          {/* Título Principal */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-ink tracking-tight leading-tight">
            Eficiência energética e sustentabilidade
          </h2>

          {/* Texto de Apoio 1 */}
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            Desde 2020, a Sydorak investe sistematicamente em eficiência energética. Não é apenas compromisso ambiental, é modernidade operacional.
          </p>

          {/* Subtítulo 1 */}
          <h3 className="text-xl md:text-2xl font-semibold text-[#c59d1d] tracking-tight mt-2">
            Por Que Importa
          </h3>

          {/* Texto de Apoio 2 */}
          <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
            Anodização é um processo eletroquímico. Cada amp, cada volt, cada ciclo térmico conta. Otimizamos nossos processos não apenas para melhor qualidade, mas para menor pegada de carbono. Seus componentes anodizados aqui carregam a certeza de que foram produzidos com responsabilidade.
          </p>

          {/* Subtítulo 2 */}
          <h3 className="text-xl md:text-2xl font-semibold text-[#c59d1d] tracking-tight mt-2">
            Compromissos
          </h3>

          {/* Grid de Compromissos */}
          <div className="flex flex-col gap-4">
            {commitmentsData.map((item) => {
              const IconComponent = item.icon
              return (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="bg-[#0e53a6]/10 rounded-[10px] w-11 h-11 flex items-center justify-center shrink-0">
                    <IconComponent />
                  </div>
                  <div className="flex flex-col">
                    {item.titleHighlight ? (
                      <>
                        <span className="text-[#0e53a6] font-semibold text-lg md:text-xl tracking-tight leading-snug">
                          {item.title}
                        </span>
                        <span className="text-neutral-600 text-sm md:text-base leading-snug">
                          {item.text}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-neutral-600 text-sm md:text-base leading-snug">
                          {item.text}
                        </span>
                        <span className="text-[#0e53a6] font-semibold text-lg md:text-xl tracking-tight leading-snug">
                          {item.highlight}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
