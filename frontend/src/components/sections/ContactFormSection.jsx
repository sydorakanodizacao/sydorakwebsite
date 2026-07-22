import { Headset } from 'lucide-react'
import DashedLink from '../ui/dashed-link'
import WhatsappCard from '../ui/whatsapp-card'
import MultiStepForm from '../ui/multi-step-form'

/**
 * ContactFormSection — Seção Hero da página de Contato.
 *
 * Layout em duas colunas (lg):
 * - Esquerda: kicker, título, descrição, WhatsApp card e footer com headset.
 * - Direita: formulário multi-etapas reutilizando MultiStepForm da biblioteca ui/.
 *
 * Figma nodes:
 * - Hero layout: 22051-1815
 * - Form Etapa 1: 22051-3399
 * - Form Etapa 2: 24120-473
 */
export default function ContactFormSection() {
  const handleFormSubmit = (data) => {
    // TODO: integrar com API de contato / Sanity / e-mail
    console.log('Formulário de contato enviado:', data)
  }

  return (
    <section className="bg-canvas">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 xl:px-[112px] pt-[168px] pb-[112px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Coluna Esquerda — Textos e CTA WhatsApp */}
          <div className="flex flex-col gap-8">
            {/* Kicker */}
            <DashedLink className="uppercase tracking-wider text-xs pointer-events-none">
              Fale conosco
            </DashedLink>

            {/* Título e Descrição */}
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-6xl font-semibold text-ink tracking-[-1.5px] leading-none font-display">
                Pronto para começar?
              </h1>
              <p className="text-lg text-ink leading-none max-w-[545px]">
                Fale conosco agora! Queremos ajudar você a transformar alumínio em soluções extraordinárias.
              </p>
            </div>

            {/* Card WhatsApp */}
            <WhatsappCard
              title="Atendimento rápido pelo WhatsApp"
              description="Para um atendimento mais ágil, utilize o WhatsApp. Nossa equipe está disponível para responder dúvidas iniciais e orientar sobre os próximos passos."
              linkText="Solicite uma avaliação técnica do seu projeto"
              href="https://wa.me/5500000000000"
            />

            {/* Footer — Atendimento técnico */}
            <div className="flex items-center gap-2">
              <Headset className="size-[14px] text-ink shrink-0" aria-hidden="true" />
              <span className="text-sm text-ink leading-3">
                Atendimento técnico direto com especialista
              </span>
            </div>
          </div>

          {/* Coluna Direita — Formulário Multi-etapas */}
          <div className="w-full max-w-[488px] lg:max-w-none">
            <MultiStepForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </section>
  )
}
