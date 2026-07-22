import Seo from '../components/layout/Seo'
import ContactFormSection from '../components/sections/ContactFormSection'
import ContactInfoMap from '../components/sections/ContactInfoMap'
import FAQ from '../components/sections/FAQ'

/**
 * Contact — Página de Contato da Sydorak Anodização (Fase 3).
 * Renderiza o formulário multi-etapas com CTA do WhatsApp,
 * seguido da seção de Mapa + Informações de Contato.
 * A Navbar é renderizada em modo claro/sólido (auto-detectado pela rota /contato).
 */
export default function Contact() {
  return (
    <main className="bg-canvas min-h-screen">
      <Seo
        title="Contato | Sydorak Anodização"
        description="Fale conosco agora! Queremos ajudar você a transformar alumínio em soluções extraordinárias."
      />
      <ContactFormSection />
      <ContactInfoMap />
      <FAQ />
    </main>
  )
}
