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
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.091176274488!2d-49.2295932!3d-25.5008818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfaec4b75f4ad%3A0x114995b7fb7a5763!2sSydorak%20Tratamentos%20de%20Superf%C3%ADcie!5e0!3m2!1spt-BR!2sbr!4v1'

const SYDORAK_MAPS_URL = 'https://maps.app.goo.gl/54THsoxEvL9mpENr5'

const contactBlocks = [
  {
    title: 'Endereço Físico',
    lines: [
      { text: 'R. Dr. Simão Kossobudski, 1110', href: SYDORAK_MAPS_URL },
      { text: 'Boqueirão — Curitiba, Paraná', href: SYDORAK_MAPS_URL },
      { text: 'CEP: 81730-410', href: SYDORAK_MAPS_URL },
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
      'Segunda a quinta: das 8h às 12h e das 13h às 17h30',
      'Sexta-feira fechamos às 17h.',
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
                        target={line.href.startsWith('http') ? '_blank' : undefined}
                        rel={line.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
