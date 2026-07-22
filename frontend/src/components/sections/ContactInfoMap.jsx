import DashedLink from '../ui/dashed-link'

/**
 * ContactInfoMap — Seção de Mapa do Google + Informações de Contato.
 *
 * Layout em duas colunas (lg):
 * - Esquerda: iframe do Google Maps com o endereço da Sydorak.
 * - Direita: kicker, título, e 4 blocos de informação (endereço, telefones, emails, horário).
 *
 * Figma node: 24120-1016
 */

const GOOGLE_MAPS_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.761763782046!2d-49.2374386!3d-25.512967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfb27a3c3f07b%3A0x6b8f3b20bb3f30a4!2sR.%20Dr.%20Sim%C3%A3o%20Kossobudski%2C%201110%20-%20Boqueir%C3%A3o%2C%20Curitiba%20-%20PR%2C%2081730-410!5e0!3m2!1spt-BR!2sbr!4v1'

const contactBlocks = [
  {
    title: 'Endereço Físico',
    lines: [
      'R. Dr. Simão Kossobudski, 1110',
      'Boqueirão — Curitiba, Paraná',
      'CEP: 81730-410',
    ],
  },
  {
    title: 'Telefones',
    lines: [
      { text: 'WhatsApp: (41) 3286-2028', href: 'https://wa.me/554132862028' },
      { text: 'Telefone: (41) 3083-7979', href: 'tel:+554130837979' },
    ],
  },
  {
    title: 'Emails',
    lines: [
      { text: 'contato@sydorak.com.br', href: 'mailto:contato@sydorak.com.br' },
      { text: 'sydorak@uol.com.br', href: 'mailto:sydorak@uol.com.br' },
    ],
  },
  {
    title: 'Horário de Funcionamento',
    lines: [
      'Segunda a quinta das 8 as 12 e das 13 as 17:30',
      'Sexta-feira fechamos as 17 horas.',
    ],
  },
]

export default function ContactInfoMap() {
  return (
    <section className="bg-canvas">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[112px] pb-[112px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda — Google Maps */}
          <div className="w-full">
            <iframe
              src={GOOGLE_MAPS_SRC}
              title="Localização da Sydorak Anodização"
              className="w-full h-[400px] lg:h-[500px] rounded-2xl shadow-sm border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Coluna Direita — Informações de Contato */}
          <div className="flex flex-col gap-4">
            {/* Kicker */}
            <DashedLink className="uppercase tracking-wider text-xs pointer-events-none">
              Localização
            </DashedLink>

            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-semibold text-ink tracking-[-1.2px] leading-none font-display">
              Informações de contato:
            </h2>

            {/* Blocos de informação */}
            {contactBlocks.map((block) => (
              <div key={block.title} className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold text-primary tracking-[-0.6px] leading-none font-display">
                  {block.title}
                </h3>
                <div className="flex flex-col text-sm text-muted leading-5">
                  {block.lines.map((line, i) => {
                    if (typeof line === 'string') {
                      return <span key={i}>{line}</span>
                    }
                    return (
                      <a
                        key={i}
                        href={line.href}
                        className="hover:text-ink transition-colors duration-200 hover:underline"
                      >
                        {line.text}
                      </a>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
