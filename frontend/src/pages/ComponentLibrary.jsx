import { useState } from 'react'
import {
  Check,
  Copy,
  Layers,
  Component,
  Search,
  ExternalLink,
  FileCode,
  Eye,
  Info,
  ShieldCheck,
  Factory,
  BadgeCheck,
} from 'lucide-react'
import { cn } from '../utils/cn'

// Primitivos do Design System (Fase 2)
import HighlightLine from '../components/ui/highlight-line'
import ChecklistItem from '../components/ui/checklist-item'
import SupportHighlight from '../components/ui/support-highlight'
import IconChip from '../components/ui/icon-chip'
import StatItem from '../components/ui/stat-item'
import LinkWhatsapp from '../components/ui/link-whatsapp'
import ServiceCard from '../components/ui/service-card'
import NormCard from '../components/ui/norm-card'
import FloatingCard from '../components/ui/floating-card'
import ProcessCard from '../components/ui/process-card'
import ArticleCard from '../components/ui/article-card'
import ComparisonRow from '../components/ui/comparison-row'
import ContactInfoBlock from '../components/ui/contact-info-block'
import AccordionItem from '../components/ui/accordion-item'
import CarouselNav from '../components/ui/carousel-nav'
import MultiStepForm from '../components/ui/multi-step-form'
import DashedLink from '../components/ui/dashed-link'
import TextLink from '../components/ui/text-link'
import Button from '../components/ui/button'
import protecaoEletroquimicaCard from '../assets/protecao-eletroquimica-card.webp'
import NewsletterInput from '../components/ui/newsletter-input'
import WhatsappCard from '../components/ui/whatsapp-card'
import Footer from '../components/layout/footer'
import Navbar from '../components/layout/navbar'

/**
 * ComponentLibrary — Sandbox/Storybook interno ("Biblioteca de Componentes").
 *
 * Ferramenta INTERNA: a estrutura visual (sidebar w-72, cantos retos `rounded-none`,
 * `font-sans`/`font-mono`) é proposital e deve ser preservada — só as CORES usam os
 * tokens do Design System (ver @theme em styles/index.css). Nada de hex hardcoded.
 */

const navItems = [
  { id: 'Buttons', label: 'Buttons', icon: Component },
  { id: 'Navigation', label: 'Navigation', icon: Layers },
  { id: 'Eyebrow & Lists', label: 'Eyebrow & Lists', icon: FileCode },
  { id: 'Cards', label: 'Cards', icon: Eye },
  { id: 'Forms', label: 'Forms', icon: Info },
  { id: 'Layout', label: 'Layout', icon: Factory },
]

/* Bloco de código com botão "copiar". Fundo escuro do DS (surface-dark). */
function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="overflow-hidden rounded-none border border-hairline/20 bg-surface-dark">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-wider text-on-dark-muted">
          jsx
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 font-mono text-xs text-on-dark-muted transition hover:text-on-dark"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-success" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          {copied ? 'Copiado' : 'Copiar'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm leading-relaxed text-on-dark-muted">
          {code}
        </code>
      </pre>
    </div>
  )
}

/* Item da biblioteca: título + descrição + área de preview + código. */
function LibraryComponentItem({ title, description, code, children }) {
  return (
    <article className="rounded-none border border-hairline/30 bg-canvas">
      <header className="border-b border-hairline/30 px-6 py-4">
        <h3 className="font-sans text-lg font-bold text-ink">{title}</h3>
        {description ? (
          <p className="mt-1 font-sans text-sm text-muted">{description}</p>
        ) : null}
      </header>
      <div className="flex min-h-[120px] items-center justify-center bg-surface/50 p-10">
        {children}
      </div>
      {code ? (
        <div className="p-4">
          <CodeBlock code={code} />
        </div>
      ) : null}
    </article>
  )
}

/* Wrapper de preview sobre navy (para componentes que dependem de fundo escuro). */
function DarkPreview({ children, className }) {
  return (
    <div className={cn('rounded-md bg-surface-darkest p-4', className)}>{children}</div>
  )
}


/* ---- Conteúdo por categoria do sidebar ---- */
function CategoryContent({ category }) {
  if (category === 'Eyebrow & Lists') {
    return (
      <div className="space-y-8">
        <LibraryComponentItem
          title="HighlightLine"
          description="Frase-resumo com barra vertical amarela à esquerda e microinteração no hover. Suporta injeção de className e variantes on-dark."
          code={`<HighlightLine>Precisão técnica que evita problemas no seu projeto</HighlightLine>\n<HighlightLine className="text-muted">Aço e alumínio sob tratamento rigoroso de engenharia</HighlightLine>\n<HighlightLine onDark>Durabilidade real, medida em décadas de exposição.</HighlightLine>`}
        >
          <div className="flex w-full max-w-md flex-col gap-4">
            <HighlightLine>
              Precisão técnica que evita problemas no seu projeto
            </HighlightLine>
            <HighlightLine className="text-muted">
              Aço e alumínio sob tratamento rigoroso de engenharia
            </HighlightLine>
            <DarkPreview>
              <HighlightLine onDark>
                Durabilidade real, medida em décadas de exposição.
              </HighlightLine>
            </DarkPreview>
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="ChecklistItem"
          description="Item de lista de benefícios/conformidade com check duplo amarelo e microinteração no hover."
          code={`{/* Em fundo claro */}\n<ul className="flex flex-col gap-4">\n  <ChecklistItem>Controle rigoroso de processo químico</ChecklistItem>\n  <ChecklistItem>Rastreabilidade de lote ponta a ponta</ChecklistItem>\n  <ChecklistItem>Camada anódica conforme normas técnicas</ChecklistItem>\n</ul>\n\n{/* Em fundo escuro (onDark) */}\n<ul className="flex flex-col gap-4">\n  <ChecklistItem onDark>Controle rigoroso de processo químico</ChecklistItem>\n  <ChecklistItem onDark>Rastreabilidade de lote ponta a ponta</ChecklistItem>\n  <ChecklistItem onDark>Camada anódica conforme normas técnicas</ChecklistItem>\n</ul>`}
        >
          <div className="flex w-full max-w-md flex-col gap-6">
            <div className="rounded-md border border-hairline/30 bg-canvas p-6">
              <p className="mb-3 text-xs uppercase tracking-wider text-muted font-semibold">Fundo Claro</p>
              <ul className="flex flex-col gap-4">
                <ChecklistItem>Controle rigoroso de processo químico</ChecklistItem>
                <ChecklistItem>Rastreabilidade de lote ponta a ponta</ChecklistItem>
                <ChecklistItem>Camada anódica conforme normas técnicas</ChecklistItem>
              </ul>
            </div>
            <DarkPreview className="p-6">
              <p className="mb-3 text-xs uppercase tracking-wider text-on-dark-muted font-semibold">Fundo Escuro</p>
              <ul className="flex flex-col gap-4">
                <ChecklistItem onDark>Controle rigoroso de processo químico</ChecklistItem>
                <ChecklistItem onDark>Rastreabilidade de lote ponta a ponta</ChecklistItem>
                <ChecklistItem onDark>Camada anódica conforme normas técnicas</ChecklistItem>
              </ul>
            </DarkPreview>
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="SupportHighlight"
          description="Destaque de suporte/atendimento com ícone de headset, usado sobre fundos escuros."
          code={`<DarkPreview className="p-6 rounded-md inline-block">\n  <SupportHighlight text="Atendimento direto com especialista • Resposta rápida" />\n</DarkPreview>`}
        >
          <div className="flex w-full max-w-md justify-center">
            <DarkPreview className="p-6 rounded-md inline-block w-full">
              <SupportHighlight text="Atendimento direto com especialista • Resposta rápida" />
            </DarkPreview>
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="IconChip"
          description="Quadrado md em surface-alt segurando um ícone secundário. Reage ao hover do container pai."
          code={`<div className="group cursor-pointer">\n  <IconChip icon={ShieldCheck} />\n</div>`}
        >
          <div className="flex flex-wrap gap-6">
            <div className="group cursor-pointer flex flex-col items-center gap-1.5">
              <IconChip icon={ShieldCheck} />
              <span className="text-[10px] text-muted">Normal</span>
            </div>
            <div className="group cursor-pointer flex flex-col items-center gap-1.5">
              <IconChip icon={ShieldCheck} className="bg-gradient-to-r from-sky via-[#0E55A9] to-[#08418B]" iconClassName="text-white" />
              <span className="text-[10px] text-muted">Simulado Hover</span>
            </div>
            <div className="group cursor-pointer flex flex-col items-center gap-1.5">
              <IconChip icon={Factory} />
              <span className="text-[10px] text-muted">Interativo (Passe o mouse)</span>
            </div>
            <div className="group cursor-pointer flex flex-col items-center gap-1.5">
              <IconChip />
              <span className="text-[10px] text-muted">Fallback (Sem prop)</span>
            </div>
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="StatItem"
          description="Estatísticas e prova social (Power Number) com micro-interação no hover combinada."
          code={`<StatItem\n  icon={BadgeCheck}\n  title="40 anos de experiência"\n  description="Desde 1986 — Experiência contínua em anodização"\n/>`}
        >
          <div className="w-full max-w-md bg-canvas p-6 border border-hairline/30 rounded-md">
            <StatItem
              icon={BadgeCheck}
              title="40 anos de experiência"
              description="Desde 1986 — Experiência contínua em anodização"
            />
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="LinkWhatsapp"
          description="Único elemento verde do sistema (convenção do canal)."
          code={`<LinkWhatsapp href="#">Falar no WhatsApp</LinkWhatsapp>`}
        >
          <LinkWhatsapp href="#">Falar no WhatsApp</LinkWhatsapp>
        </LibraryComponentItem>
      </div>
    )
  }

  if (category === 'Cards') {
    return (
      <div className="space-y-8">
        <LibraryComponentItem
          title="ServiceCard"
          description="Card de serviço sobre foto com overlay escuro, zoom na imagem e título em gradiente invertido no hover. Grid 3-up."
          code={`<ServiceCard\n  title="Proteção Eletroquímica"\n  description="Camada integrada ao alumínio. Alta resistência à corrosão e longa vida útil."\n  imageSrc={protecaoEletroquimicaCard}\n  href="#"\n/>`}
        >
          <div className="grid w-full max-w-md grid-cols-1 gap-6">
            <ServiceCard
              title="Proteção Eletroquímica"
              description="Camada integrada ao alumínio. Alta resistência à corrosão e longa vida útil."
              imageSrc={protecaoEletroquimicaCard}
              href="#"
            />
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="ArticleCard"
          description="Card de artigo/blog para listagem no grid do Blog. Fundo canvas, borda hairline e efeito de hover premium."
          code={`<ArticleCard post={{\n  title: "Qual a diferença entre Anodização e Pintura?",\n  slug: { current: "diferenca-anodizacao-pintura" },\n  category: "Técnico",\n  publishedAt: "2026-06-15T10:00:00Z",\n  excerpt: "Entenda as propriedades mecânicas...",\n  imageUrl: "https://placehold.co/600x400"\n}} />`}
        >
          <div className="w-full max-w-md">
            <ArticleCard post={{
              title: "Qual a diferença entre Anodização e Pintura?",
              slug: { current: "diferenca-anodizacao-pintura" },
              category: "Técnico",
              publishedAt: "2026-06-15T10:00:00Z",
              excerpt: "Entenda as propriedades mecânicas e visuais que separam estes dois processos populares na indústria do alumínio.",
              imageUrl: "https://placehold.co/600x400/0B101B/FFFFFF?text=Anodizacao+vs+Pintura"
            }} />
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="NormCard"
          description="Selo de norma técnica atendida com transição sincronizada no hover. Suporta as variantes default (bg-canvas) e surface (bg-surface)."
          code={`<NormCard title="ASTM B117" description="Teste de corrosão acelerada" />\n<NormCard variant="surface" title="ABNT NBR 12609" description="Anodização de alumínio e suas ligas." />`}
        >
          <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            <NormCard
              title="ASTM B117"
              description="Teste de corrosão acelerada"
            />
            <NormCard
              variant="surface"
              title="ABNT NBR 12609"
              description="Anodização de alumínio e suas ligas."
            />
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="FloatingCard"
          description="Card branco com borda-esquerda amarela que flutua sobre navy."
          code={`<FloatingCard>\n  <h4>Aplicações</h4>\n  <ul>...</ul>\n</FloatingCard>`}
        >
          <DarkPreview className="w-full max-w-md p-8">
            <FloatingCard>
              <h4 className="text-h4-card text-ink">Aplicações</h4>
              <ul className="mt-4 space-y-2">
                <ChecklistItem>Esquadrias e fachadas arquitetônicas</ChecklistItem>
                <ChecklistItem>Componentes aeronáuticos e automotivos</ChecklistItem>
                <ChecklistItem>Trocadores de calor e dissipadores</ChecklistItem>
              </ul>
            </FloatingCard>
          </DarkPreview>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="ProcessCard"
          description="Etapa do processo no carrossel: fundo surface, borda esquerda amarela ativa no hover com sombra leve."
          code={`<ProcessCard\n  step="Etapa 1"\n  title="Recebimento & Inspeção"\n  description="Peças chegam à planta. Nossa equipe inspeciona..."\n/>\n\n<ProcessCard\n  step="Etapa 2"\n  title="Limpeza & Preparação"\n  description="Tratamento químico inicial da superfície..."\n/>`}
        >
          <div className="flex flex-col gap-4 w-full max-w-md">
            <ProcessCard
              step="Etapa 1"
              title="Recebimento & Inspeção"
              description="Peças chegam à planta. Nossa equipe inspeciona dimensões, defeitos superficiais e conformidade. Aqui identificamos possíveis desafios antes do processo anódico começar."
            />
            <ProcessCard
              step="Etapa 2"
              title="Limpeza & Preparação"
              description="Tratamento químico inicial da superfície para remover óxidos e impurezas, assegurando pureza e aderência perfeita."
            />
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="ComparisonRow"
          description="Card comparativo Anodização × Pintura com transição de borda lateral esquerda (border-primary) e sombra leve no hover."
          code={`<ComparisonRow\n  title="Tipo de Cobertura"\n  anodizacao="Anodização: Camada eletroquímica — integrada ao alumínio"\n  pintura="Pintura: Camada polimérica — aplicada sobre superfície"\n/>`}
        >
          <div className="w-full max-w-md">
            <ComparisonRow
              title="Tipo de Cobertura"
              anodizacao="Anodização: Camada eletroquímica — integrada ao alumínio"
              pintura="Pintura: Camada polimérica — aplicada sobre superfície"
            />
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="ContactInfoBlock"
          description="Bloco de contato: subtítulo dourado-forte sobre corpo muted."
          code={`<ContactInfoBlock subtitle="Comercial">...</ContactInfoBlock>`}
        >
          <div className="w-full max-w-sm">
            <ContactInfoBlock subtitle="Comercial">
              <p>(11) 4000-0000</p>
              <p>comercial@sydorak.com.br</p>
            </ContactInfoBlock>
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="WhatsappCard"
          description="Card de contato direto via WhatsApp: fundo canvas com divisores superior e inferior. Hover sincronizado mudando o título para verde e o link/seta para verde escuro."
          code={`<WhatsappCard\n  title="Atendimento rápido pelo WhatsApp"\n  description="Para um atendimento mais ágil, utilize o WhatsApp. Nossa equipe está disponível para responder dúvidas iniciais e orientar sobre os próximos passos."\n  linkText="Falar pelo WhatsApp"\n  href="https://wa.me/SEUNUMERO"\n/>`}
        >
          <div className="w-full max-w-xl">
            <WhatsappCard
              title="Atendimento rápido pelo WhatsApp"
              description="Para um atendimento mais ágil, utilize o WhatsApp. Nossa equipe está disponível para responder dúvidas iniciais e orientar sobre os próximos passos."
              linkText="Falar pelo WhatsApp"
              href="https://wa.me/SEUNUMERO"
            />
          </div>
        </LibraryComponentItem>
      </div>
    )
  }

  if (category === 'Navigation') {
    return (
      <div className="space-y-8">
        <LibraryComponentItem
          title="TextLink"
          description="Links de texto da navegação. Variante clara (para navbar clara) e variante escura (para navbar navy)."
          code={`{/* Modo Claro (Navbar Light) */}\n<div className="flex gap-6 items-center bg-canvas p-6 border border-hairline/30">\n  <TextLink to="#" active={false} dark={false}>Sobre Nós</TextLink>\n  <TextLink to="#" active={true} dark={false}>Início</TextLink>\n  <TextLink to="#" active={false} dark={false}>Fale Conosco</TextLink>\n</div>\n\n{/* Modo Escuro (Navbar Dark) */}\n<div className="flex gap-6 items-center bg-surface-darkest p-6 rounded-md">\n  <TextLink to="#" active={false} dark={true}>Sobre Nós</TextLink>\n  <TextLink to="#" active={true} dark={true}>Início</TextLink>\n  <TextLink to="#" active={false} dark={true}>Fale Conosco</TextLink>\n</div>`}
        >
          <div className="w-full max-w-xl space-y-6">
            <div className="flex gap-6 items-center justify-center bg-canvas p-6 border border-hairline/30">
              <TextLink to="#" active={false} dark={false}>Sobre Nós</TextLink>
              <TextLink to="#" active={true} dark={false}>Início</TextLink>
              <TextLink to="#" active={false} dark={false}>Fale Conosco</TextLink>
            </div>
            <div className="flex gap-6 items-center justify-center bg-surface-darkest p-6 rounded-md">
              <TextLink to="#" active={false} dark={true}>Sobre Nós</TextLink>
              <TextLink to="#" active={true} dark={true}>Início</TextLink>
              <TextLink to="#" active={false} dark={true}>Fale Conosco</TextLink>
            </div>
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="DashedLink"
          description="Hat/rótulo decorativo com dash horizontal fixo à esquerda. No hover, o texto acende e o dash expande."
          code={`<DashedLink>Sydorak Anodização</DashedLink>\n<DashedLink>Nossos Serviços</DashedLink>\n<DashedLink>Fale Conosco</DashedLink>`}
        >
          <div className="w-full max-w-sm">
            <div className="bg-surface-darkest p-6 rounded-md flex flex-col gap-4">
              <DashedLink onDark={true}>Sydorak Anodização</DashedLink>
              <DashedLink onDark={true}>Nossos Serviços</DashedLink>
              <DashedLink onDark={true}>Fale Conosco</DashedLink>
            </div>
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="CarouselNav"
          description="Par de botões circulares (anterior/próximo) com borda hairline-strong."
          code={`<CarouselNav onPrev={...} onNext={...} />`}
        >
          <CarouselNav onPrev={() => {}} onNext={() => {}} />
        </LibraryComponentItem>
      </div>
    )
  }

  if (category === 'Forms') {
    return (
      <div className="space-y-8">
        <LibraryComponentItem
          title="MultiStepForm"
          description="Formulário de contato em etapas com abas clicáveis (Segmented Control), inputs base customizados (Label, Input, Select, Textarea) e botão CTA."
          code={`<div className="w-full max-w-xl mx-auto">\n  <MultiStepForm />\n</div>`}
        >
          <div className="w-full max-w-xl mx-auto">
            <MultiStepForm />
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="AccordionItem"
          description="FAQ com estados fechado (hairline), hover e aberto ativo (borda azul + título em gradiente de marca)."
          code={`<AccordionItem title="Vocês fazem pintura também?">\n  Focamos exclusivamente em anodização e tratamentos eletroquímicos...\n</AccordionItem>\n\n<AccordionItem title="Qual é a diferença entre anodização e pintura?">\n  A anodização é um processo eletroquímico que converte a superfície...\n</AccordionItem>`}
        >
          <div className="w-full max-w-xl space-y-3">
            <AccordionItem title="Vocês fazem pintura também?">
              Focamos exclusivamente em anodização e tratamentos eletroquímicos de alta performance para garantir o máximo padrão de qualidade e durabilidade.
            </AccordionItem>
            <AccordionItem title="Qual é a diferença entre anodização e pintura?">
              A anodização é um processo eletroquímico que converte a superfície do metal em um acabamento anódico de óxido extremamente durável, integrado ao próprio alumínio (não descasca). A pintura, por outro lado, é uma película superficial aplicada sobre a peça, sendo mais suscetível a lascas, riscos e descolamentos em ambientes corrosivos ou industriais.
            </AccordionItem>
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="NewsletterInput"
          description="Input de captura de e-mails para newsletter, projetado para fundos escuros (Footer) com botão que transiciona para amarelo sólido no hover."
          code={`<div className="bg-surface-darkest p-8 rounded-md">\n  <NewsletterInput />\n</div>`}
        >
          <div className="bg-surface-darkest p-8 rounded-md w-full max-w-md">
            <NewsletterInput />
          </div>
        </LibraryComponentItem>
      </div>
    )
  }

  if (category === 'Buttons') {
    return (
      <div className="space-y-8">
        <LibraryComponentItem
          title="Button Primary"
          description="CTA canônico com preenchimento gradiente amarelo e hover com brilho/sombra + micro-interação no ícone."
          code={`<Button variant="primary" icon>Solicitar Análise Técnica</Button>\n<Button variant="primary">Enviar Mensagem</Button>`}
        >
          <div className="flex flex-wrap items-center gap-6">
            <Button variant="primary" icon>Solicitar Análise Técnica</Button>
            <Button variant="primary">Enviar Mensagem</Button>
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="Button Solid"
          description="Versão de menor ênfase (amarelo sólido chapado, sem gradiente) para uso em service-cards ou alta densidade."
          code={`<Button variant="solid">Confirmar Dados</Button>`}
        >
          <Button variant="solid">Confirmar Dados</Button>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="Button Secondary"
          description="Botão secundário para fundos escuros (ex: hero, footer). Gradiente translúcido (30%) com texto dourado no estado normal; assume gradiente opaco com texto navy no hover."
          code={`<div className="bg-surface-darkest p-6 rounded-md inline-block">\n  <Button variant="secondary">Saiba mais</Button>\n</div>`}
        >
          <div className="bg-surface-darkest p-6 rounded-md inline-block">
            <Button variant="secondary">Saiba mais</Button>
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="Button Ghost"
          description="Variante Ghost totalmente transparente com hover sutil para ações secundárias ou de cancelamento."
          code={`<Button variant="ghost">Cancelar</Button>`}
        >
          <div className="flex items-center justify-center bg-surface p-8 w-full max-w-md">
            <Button variant="ghost">Cancelar</Button>
          </div>
        </LibraryComponentItem>
      </div>
    )
  }

  if (category === 'Layout') {
    return (
      <div className="space-y-8">
        <LibraryComponentItem
          title="Navbar"
          description="Cabeçalho de navegação global da aplicação. Fixo no topo, flutuante com cantos arredondados, borda azul sutil, desfoque e efeito de scroll (escurece ao rolar)."
          code={`<Navbar />`}
        >
          <div className="w-full py-8 text-center bg-surface-darkest rounded-md border border-white/5">
            <p className="text-sm text-on-dark-muted">
              A **Navbar** está ativa e fixada no topo da página. Role a janela para ver a transição de fundo e contraste (escurecimento e sombra).
            </p>
            <Navbar />
          </div>
        </LibraryComponentItem>

        <LibraryComponentItem
          title="Footer"
          description="Rodapé global da aplicação: fundo navy quase preto bg-surface-darkest, colunas organizadas em grid e barra de copyright."
          code={`<Footer />`}
        >
          <div className="w-full">
            <Footer />
          </div>
        </LibraryComponentItem>
      </div>
    )
  }

  // Buttons (ou qualquer categoria sem primitivos) → empty state
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-10 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-none border border-hairline/30 bg-surface/50">
        <Component className="h-7 w-7 text-muted" />
      </div>
      <p className="mt-6 font-sans text-base font-semibold text-ink">
        Nenhum componente cadastrado nesta categoria ainda.
      </p>
      <p className="mt-2 max-w-md font-sans text-sm text-muted">
        Os primitivos de <span className="font-semibold text-body">{category}</span> serão
        injetados aqui conforme a Fase 2 avança.
      </p>
    </div>
  )
}

export function ComponentLibrary() {
  const [activeCategory, setActiveCategory] = useState(navItems[0].id)
  const [query, setQuery] = useState('')

  const filteredNav = navItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen bg-canvas font-sans text-ink">
      {/* ---- Sidebar ---- */}
      <aside className="flex w-72 shrink-0 flex-col border-r border-hairline/30 bg-surface/40">
        {/* Header da sidebar (rebranding) */}
        <div className="flex items-center gap-3 border-b border-hairline/30 px-6 py-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-none bg-primary text-on-primary">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <p className="font-sans text-sm font-bold leading-tight text-ink">
              Sydorak Anodização
            </p>
            <p className="font-sans text-xs text-muted">Design System Library</p>
          </div>
        </div>

        {/* Busca / filtro */}
        <div className="px-4 py-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar componente..."
              className="w-full rounded-none border border-hairline/30 bg-canvas py-2 pl-9 pr-3 font-sans text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        {/* Navegação lateral */}
        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          {filteredNav.length === 0 ? (
            <p className="px-3 py-4 font-sans text-xs text-muted">
              Nenhuma categoria encontrada.
            </p>
          ) : (
            filteredNav.map((item) => {
              const Icon = item.icon
              const isActive = item.id === activeCategory
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveCategory(item.id)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-none border-l-2 px-3 py-2.5 text-left font-sans text-sm transition',
                    isActive
                      ? 'border-primary bg-primary/10 font-semibold text-ink'
                      : 'border-transparent text-body hover:border-primary-strong hover:bg-surface/60 hover:text-ink',
                  )}
                >
                  <Icon
                    className={cn(
                      'h-4 w-4 shrink-0',
                      isActive ? 'text-primary' : 'text-muted',
                    )}
                  />
                  {item.label}
                </button>
              )
            })
          )}
        </nav>

        {/* Footer da sidebar */}
        <div className="flex items-center justify-between border-t border-hairline/30 px-6 py-4">
          <span className="font-mono text-xs text-muted">v1.0.0</span>
          <a
            href="/"
            className="flex items-center gap-1 font-sans text-xs text-muted transition hover:text-primary-strong"
          >
            Voltar ao site
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </aside>

      {/* ---- Área principal / Preview ---- */}
      <main className="flex-1 overflow-y-auto">
        {/* Cabeçalho com título dinâmico + eyebrow */}
        <header className="border-b border-hairline/30 bg-canvas px-10 py-8">
          <p className="flex items-center gap-2 text-eyebrow uppercase text-muted">
            <span className="h-0.5 w-4 bg-primary" aria-hidden="true" />
            Component Library
          </p>
          <h1 className="mt-2 font-sans text-3xl font-bold text-ink">
            {activeCategory}
          </h1>
        </header>

        {/* Conteúdo da categoria ativa */}
        <div className="px-10 py-10">
          <CategoryContent category={activeCategory} />
        </div>
      </main>
    </div>
  )
}
