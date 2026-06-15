import { Helmet } from 'react-helmet-async'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../utils/cn'

/**
 * HomePage — página smoke da Fase 1.
 * Objetivo: validar que Anek Telugu + os tokens do @theme compilam e renderizam.
 * Exercita: fundo navy (surface-darkest), eyebrow com dash amarelo, headline no
 * token de display (h1-hero) com acento `sky`, highlight-line de barra amarela e
 * o CTA canônico (gradiente primário + texto navy + caixa-alta + seta).
 */
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Sydorak Anodização — Engenharia em anodização há 40 anos</title>
        <meta
          name="description"
          content="Sydorak Anodização: 40 anos de processo controlado em anodização de alumínio. Proteção contra corrosão e falha, com conformidade técnica para engenharia exigente."
        />
      </Helmet>

      <main className="min-h-screen bg-surface-darkest text-on-dark">
        <section className="mx-auto max-w-[1216px] px-6 py-section-y-mobile md:py-section-y">
          {/* Eyebrow: dash amarelo + label caixa-alta */}
          <p className="flex items-center gap-3 text-eyebrow uppercase text-on-dark-muted">
            <span className="h-0.5 w-4 bg-primary" aria-hidden="true" />
            Fase 1 · Arquitetura pronta
          </p>

          {/* Headline no token de display, com acento sky */}
          <h1 className="mt-6 max-w-3xl text-h1-hero-mobile md:text-h1-hero text-on-dark">
            Precisão técnica que vira{' '}
            <span className="text-sky">durabilidade real</span>.
          </h1>

          {/* Highlight-line: barra vertical amarela + frase peso 500 */}
          <div className="mt-8 flex gap-3">
            <span className="w-[3px] shrink-0 self-stretch bg-primary" aria-hidden="true" />
            <p className="max-w-2xl text-highlight text-on-dark">
              Design System tokenizado e ambiente Jamstack inicializados. Tipografia
              Anek Telugu e a paleta navy↔dourado compilando a partir do{' '}
              <code className="text-primary">@theme</code>.
            </p>
          </div>

          {/* CTA canônico: gradiente primário, texto navy, caixa-alta, seta */}
          <div className="mt-10">
            <a
              href="#"
              className={cn(
                'inline-flex items-center gap-2 rounded-md px-6 py-[14px]',
                'text-button-md uppercase text-on-primary',
                'shadow-card transition hover:brightness-[1.04] hover:shadow-[var(--shadow-primary-hover)]',
              )}
              style={{ backgroundImage: 'var(--gradient-primary)' }}
            >
              Avançar para a Fase 2
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
