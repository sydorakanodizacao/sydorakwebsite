import { Headset } from 'lucide-react'
import DashedLink from '../ui/dashed-link'
import SydorakLogo from '../ui/sydorak-logo'
import WhatsappCard from '../ui/whatsapp-card'
import MultiStepForm from '../ui/multi-step-form'

/**
 * ContactFormSection — Seção Hero da página de Contato.
 *
 * Layout em duas colunas (lg):
 * - Esquerda: kicker com SydorakLogo, título, descrição, WhatsApp card e rodapé com headset.
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
            {/* Logo Completa em Destaque */}
            <div className="mb-2">
              <SydorakLogo dark={false} className="h-[48px] sm:h-[50px] md:h-[46px] lg:h-[50px] w-auto" />
            </div>

            {/* Título e Descrição */}
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-6xl font-semibold text-ink tracking-[-1.5px] leading-none font-display">
                Pronto para começar?
              </h1>
              <p className="text-lg text-ink leading-none max-w-[545px]">
                Fale conosco agora! Queremos ajudar você a transformar alumínio em soluções extraordinárias.
              </p>
            </div>

            {/* Bloco 1: Atendimento Rápido WhatsApp */}
            <WhatsappCard
              title="Atendimento rápido pelo WhatsApp"
              buttonText="Conversar agora"
              href="https://wa.me/554132862028"
            />

            {/* Divisão & Bloco 2: Atendimento Técnico Especializado */}
            <div className="flex flex-col gap-1.5 pt-6 border-t border-hairline">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center size-9 md:size-10 rounded-xl bg-surface-darkest text-sky shrink-0 shadow-sm">
                  <Headset className="size-5 md:size-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-ink leading-tight">
                  Atendimento técnico personalizado
                </h3>
              </div>
              <p className="text-body-sm text-muted leading-snug pl-12">
                Consultoria e análise detalhada para o seu projeto via formulário.
              </p>
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
