/**
 * LegalLayout — Wrapper de layout para páginas textuais de cunho legal (Termos de Uso, Política de Privacidade).
 */
export default function LegalLayout({ children }) {
  return (
    <main className="pt-32 md:pt-40 pb-24 bg-canvas min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8 text-ink leading-relaxed font-sans">
        {children}
      </div>
    </main>
  )
}
