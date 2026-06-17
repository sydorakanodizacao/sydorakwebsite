---
version: v2.0
name: Sydorak Anodização
description: >
  Anodizador industrial de 40 anos posicionado como engenharia confiável, não commodity.
  Base navy quase preta (#011025) carrega autoridade em hero, footer e seções de fechamento;
  uma única voltagem amarelo-dourada (#F0C51C, quase sempre aplicada como gradiente) marca todo
  CTA, check de conformidade e o dash que abre cada eyebrow. O azul é plural por design — claro
  sobre o escuro, royal sobre o claro, gradiente para profundidade — escolhido por seção conforme
  o fundo. Anek Telugu em pesos altos (700-800) projeta solidez sem serifa. Assinaturas repetidas
  (eyebrow com dash, highlight-line de barra amarela, card branco flutuante com borda-esquerda
  dourada sobre navy) substituem o ornamento.

colors:
  # ---- Marca ----
  primary: "#F0C51C"
  primary-strong: "#C59D1D"
  primary-gradient:
    angle: "90deg"
    from: "#C59D1D"
    mid: "#EEC00D"
    to: "#FCE16C"
    stops: "0% 32% 100%"
  secondary: "#1E4FA0"
  sky: "#78B5E3"
  secondary-gradient:
    angle: "90deg"
    from: "#78B5E3"
    mid: "#0E55A9"
    to: "#08418B"
    stops: "0% 50% 100%"

  # ---- Superfície ----
  canvas: "#FAF8F8"
  surface: "#F4F4F5"
  surface-alt: "#F3F4F8"
  surface-dark: "#0E2240"
  surface-darkest: "#011025"

  # ---- Texto ----
  ink: "#011025"
  body: "#3F3F3F"          # inferido — corpo de texto em fundo claro
  muted: "#71717A"
  on-dark: "#FFFFFF"
  on-dark-muted: "#C7CDD9"  # inferido — texto secundário sobre navy

  # ---- Hairlines ----
  hairline: "#E4E4E7"        # inferido das bordas de card/accordion
  hairline-strong: "#D4D4D8" # inferido

  # ---- Semântica ----
  whatsapp: "#25D366"
  whatsapp-text: "#1FA855"
  success: "#16A34A"         # inferido — não desenhado
  destructive: "#DC2626"     # inferido — não desenhado

  # ---- On-Surface ----
  on-primary: "#011025"      # texto navy sobre amarelo/gradiente
  on-secondary: "#FFFFFF"

typography:
  h1-hero:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 60px
    fontSize-mobile: 40px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h2-section:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 48px
    fontSize-mobile: 32px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  h3-subtitle:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 32px
    fontSize-mobile: 24px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  h4-card:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  lead:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  highlight:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  label:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  eyebrow:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
    textTransform: uppercase
  nav-link:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  button-md:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.04em"
    textTransform: uppercase
  button-sm:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.04em"
    textTransform: uppercase
  small:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  muted:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  blockquote:
    fontFamily: "'Anek Telugu', system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  full: 9999px

spacing:
  base: 4px
  section-y: 96px         # respiro vertical entre seções (desktop)
  section-y-mobile: 56px
  card-padding: 24px
  field-gap: 16px

grid:
  website-desktop:
    width: 1440px
    columns: 12
    gutter: 32px
    margin: 112px
    container: 1216px      # 1440 - (112 * 2)
  dashboard-desktop:
    width: 1440px
    columns: 12
    gutter: 24px
    margin: 48px
    container: 1344px
  tablet:
    width: 800px
    columns: 6
    gutter: 24px
    margin: 24px
  mobile:
    width: 375px
    columns: 4
    gutter: 16px
    margin: 16px

elevation:
  card: "0 1px 2px rgba(1,16,37,0.04), 0 8px 24px rgba(1,16,37,0.06)"
  floating: "0 12px 40px rgba(1,16,37,0.12)"   # card branco sobre navy
  nav: "0 2px 12px rgba(1,16,37,0.08)"

components:
  nav:
    description: "Barra de navegação topo. Duas variantes conforme o fundo da seção sob ela."
    variants:
      dark:
        background: "{colors.surface-darkest}"
        color: "{colors.on-dark}"
      light:
        background: "{colors.canvas}"
        color: "{colors.ink}"
        borderBottom: "1px solid {colors.hairline}"
    height: 80px
    paddingX: "{grid.website-desktop.margin}"

  text-link:
    description: "Link/rótulo de texto para navegação integrada com react-router-dom, usado em Navbar e Footer."
    typography: "{typography.nav-link}"
    color-default: "{colors.muted}"
    color-default-dark: "{colors.on-dark-muted}"
    color-hover: "{colors.ink}"
    color-hover-dark: "{colors.on-dark}"
    underline: "2px solid {colors.primary}"
    transition: "duration-200"

  dashed-link:
    description: "Link/Hat decorativo de navegação com dash horizontal estável à esquerda e micro-interação no hover."
    dash: "16px x 2px, {colors.primary}"
    typography: "{typography.nav-link}"
    color-default: "{colors.on-dark-muted}"
    color-hover: "{colors.primary}"
    transition: "duration-200"

  button-primary:
    description: "CTA canônico. Preenchimento gradiente amarelo, texto navy, caixa-alta, seta diagonal com micro-interação no hover."
    background: "linear-gradient({colors.primary-gradient.angle}, {colors.primary-gradient.from} 0%, {colors.primary-gradient.mid} 32%, {colors.primary-gradient.to} 100%)"
    color: "{colors.on-primary}"
    typography: "{typography.button-md}"
    radius: "rounded-[10px]"
    paddingY: 12px
    paddingX: 32px
    icon: "arrow-up-right (rotaciona 45° e translada horizontal/vertical no hover para apontar para a direita)"
    hover:
      filter: "brightness(1.04)"
      shadow: "0 6px 18px rgba(240,197,28,0.35)"

  button-primary-solid:
    description: "Variante de menor ênfase do CTA — amarelo chapado, sem gradiente."
    background: "{colors.primary}"
    color: "{colors.on-primary}"
    typography: "{typography.button-md}"
    radius: "{rounded.md}"
    paddingY: 14px
    paddingX: 24px

  button-secondary:
    description: "Ação secundária em fundo escuro (como o hero/footer). Gradiente translúcido com texto dourado; assume gradiente opaco com texto navy no hover."
    background: "linear-gradient(90deg, rgba(197,157,29,0.3) 0%, rgba(238,192,13,0.3) 50%, rgba(252,225,108,0.3) 100%)"
    color: "{colors.primary}"
    typography: "{typography.nav-link} (sem uppercase forçado)"
    radius: "rounded-[10px]"
    paddingY: 12px
    paddingX: 32px
    hover:
      background: "linear-gradient({colors.primary-gradient.angle}, {colors.primary-gradient.from} 0%, {colors.primary-gradient.mid} 32%, {colors.primary-gradient.to} 100%)"
      color: "{colors.on-primary}"
      filter: "brightness(1.04)"
      shadow: "0 6px 18px rgba(240,197,28,0.35)"
    typography: "{typography.button-md}"
    radius: "{rounded.md}"
    paddingY: 14px
    paddingX: 24px

  link-whatsapp:
    color: "{colors.whatsapp-text}"
    typography: "{typography.label}"
    icon: "arrow-up-right"

  hero:
    description: "Bloco de abertura full-bleed: foto de chão de fábrica sob overlay navy."
    background: "{colors.surface-darkest}"
    overlay: "linear-gradient(90deg, rgba(1,16,37,0.92) 0%, rgba(1,16,37,0.55) 60%, rgba(1,16,37,0.15) 100%)"
    headline: "{typography.h1-hero}"
    headline-color: "{colors.on-dark}"
    headline-accent: "{colors.sky}"
    paddingY: 120px

  highlight-line:
    description: "Frase-resumo com barra vertical amarela à esquerda e microinteração no hover."
    bar: "3px x full-height, {colors.primary} (Normal) -> {colors.secondary} (Hover)"
    typography: "{typography.highlight}"
    color: "{colors.ink}"
    color-on-dark: "{colors.on-dark}"
    gap: 12px
    interaction:
      normal:
        bar: "{colors.primary}"
      hover:
        bar: "{colors.secondary}"
        transition: "bg transition-colors duration-300"

  support-highlight:
    description: "Destaque de suporte/atendimento com ícone de headset, usado sobre fundos escuros."
    icon: "headset (contorno), {colors.secondary}"
    typography: "{typography.body-sm}"
    color: "{colors.on-dark-muted}"
    gap: 12px
    interaction:
      normal:
        icon: "{colors.secondary}"
        text: "{colors.on-dark-muted}"
      hover:
        icon: "{colors.sky}"
        text: "{colors.on-dark}"
        transition: "transition-colors duration-200"

  icon-chip:
    description: "Quadrado de 40px em surface-alt que segura um ícone secundário. No hover do stat-item (pai), assume bg-gradient-to-r de sky para azul escuro e ícone em branco."
    size: 40px
    background: "{colors.surface-alt}"
    iconColor: "{colors.secondary}"
    radius: "{rounded.md}"
    hover: "bg-gradient-to-r from-sky via-[#0E55A9] to-[#08418B], iconColor white"

  stat-item:
    description: "Métrica de prova social interativa: icon-chip à esquerda + textos verticais à direita. Habilita micro-interação de hover no chip ao ativar cursor-pointer."
    number: "{typography.h4-card}"
    number-color: "{colors.secondary}"
    caption: "{typography.body-sm}"
    caption-color: "{colors.muted}"
    layout: "flex items-start gap-3 cursor-pointer group"

  checklist-item:
    description: "Item de lista de benefícios/conformidade com check duplo amarelo e microinteração no hover."
    icon: "check-check, {colors.primary}"
    typography: "{typography.body}"
    gap: 12px
    interaction:
      normal:
        text: "{colors.muted} (ou {colors.on-dark-muted} em fundo escuro)"
        weight: "regular (400)"
      hover:
        text: "{colors.ink} (ou {colors.on-dark} em fundo escuro)"
        weight: "semibold (600)"
        transition: "transition-all duration-200"
      icon: "estático na cor {colors.primary}"

  service-card:
    description: "Card de serviço dinâmico sobre foto, com overlay escuro. Título com gradiente invertido e botão secundário no hover. Grid 3-up."
    background: "imageSrc"
    overlay: "linear-gradient(to top, rgba(1,16,37,0.9) 0%, rgba(1,16,37,0.4) 60%, transparent 100%)"
    title: "{typography.h4-card}"
    title-gradient: "linear-gradient(90deg, #C59D1D 0%, #FCE16C 100%)"
    body: "{typography.body-sm}"
    body-color: "{colors.on-dark}"
    radius: "{rounded.lg}"
    cta: "Button (variant=secondary)"
    interaction:
      normal:
        image: "scale-100"
        title: "gradiente dourado normal (#C59D1D -> #FCE16C)"
      hover:
        image: "scale-105"
        title: "gradiente dourado invertido (#FCE16C -> #C59D1D)"
        transition: "transform duration-500, bg-gradient duration-300"

  norm-card:
    description: "Selo de norma técnica atendida: badge de check azul + código + descrição. Variante com fundo surface para destaque."
    background: "{colors.canvas} (default)"
    background-alt: "{colors.surface} (surface)"
    border: "1px solid {colors.hairline}"
    padding: "22px vertical, 14px lateral"
    gap: "8px"
    radius: "{rounded.md}"
    interaction:
      normal:
        badge: "{colors.secondary}"
        title: "{colors.secondary}"
        caption: "{colors.muted}"
      hover:
        badge: "{colors.primary}"
        title: "{colors.primary}"
        transition: "transition-colors duration-200"

  floating-card:
    description: "Card branco que flutua sobre seção navy, com borda-esquerda amarela. Carrega headline + lista da seção 'Aplicações'."
    background: "{colors.canvas}"
    borderLeft: "4px solid {colors.primary}"
    shadow: "{elevation.floating}"
    radius: "{rounded.lg}"
    padding: 40px

  accordion-item:
    description: "Item de FAQ com transições de estado e gradientes de cores."
    radius: "{rounded.md}"
    closed:
      border: "1px solid {colors.hairline}"
      border-hover: "1px solid {colors.secondary}"
      title-color: "{colors.ink}"
      title-color-hover: "{colors.secondary-gradient}"
      chevron: "{colors.muted}"
      chevron-hover: "{colors.secondary}"
    open:
      border: "1px solid {colors.secondary}"
      title-color: "{colors.secondary-gradient}"
      chevron: "{colors.secondary}"
      chevron-rotation: "180deg"
    title: "{typography.h4-card}"
    answer: "{typography.body}"
    answer-color: "{colors.muted}"
    transition: "colors duration-200, transform duration-300"

  comparison-row:
    description: "Card comparativo Anodização × Pintura com transição de borda lateral e sombra no hover."
    background: "{colors.surface}"
    borderLeft:
      normal: "4px solid transparent"
      hover: "4px solid {colors.primary}"
    shadow:
      normal: "none"
      hover: "{elevation.card}"
    radius: "{rounded.md}"
    title: "{typography.h4-card}"
    title-color: "{colors.secondary}"
    lead-item:
      icon: "check-check (dourado)"
      text: "Anodização: (dourado, font-semibold) + descrição (muted)"
    muted-item:
      icon: "check-check (muted)"
      text: "Pintura: (muted)"
    transition: "all duration-300"

  process-card:
    description: "Etapa do processo no carrossel. Fundo surface, borda esquerda amarela ativa no hover com sombra leve."
    background: "{colors.surface}"
    borderLeft:
      normal: "4px solid transparent"
      hover: "4px solid {colors.primary}"
    shadow:
      normal: "none"
      hover: "{elevation.card}"
    dashed-link: "{typography.nav-link}"
    title: "{typography.h4-card}"
    title-color: "{colors.secondary}"
    body: "{typography.body-sm}"
    body-color: "{colors.muted}"
    radius: "{rounded.md}"
    transition: "all duration-300"

  carousel-nav:
    description: "Par de botões circulares (anterior/próximo) que controlam o carrossel de processo."
    size: 40px
    border: "1px solid {colors.hairline-strong}"
    iconColor: "{colors.ink}"
    radius: "{rounded.full}"

  form-input:
    description: "Campo de formulário: label + input com placeholder. Estado default apenas (focus/error → Known Gaps)."
    label: "{typography.label}"
    label-color: "{colors.ink}"
    background: "{colors.canvas}"
    border: "1px solid {colors.hairline}"
    radius: "{rounded.md}"
    height: 48px
    placeholder-color: "{colors.muted}"
    text-color: "{colors.ink}"

  newsletter-input:
    description: "Input de captura de e-mails para a newsletter, feito para fundos escuros (Footer)."
    background: "bg-[#1A1A1A] (com lg:bg-surface-dark)"
    text-color: "{colors.on-dark}"
    placeholder-color: "{colors.muted}"
    radius: "{rounded.md}"
    button:
      icon: "send"
      icon-color: "{colors.on-primary}"
      background: "linear-gradient(90deg, #C59D1D 0%, #FCE16C 100%)"
      background-hover: "{colors.primary} (sólido)"
      transition: "duration-300"

  step-tabs:
    description: "Navegação por etapas do formulário (Etapa 1 / Etapa 2). Ativa em branco, inativa em surface-alt."
    active-bg: "{colors.canvas}"
    active-color: "{colors.secondary}"
    inactive-bg: "{colors.surface-alt}"
    inactive-color: "{colors.muted}"
    radius: "{rounded.md}"

  contact-info-block:
    description: "Bloco de informações de contato. Subtítulos em amarelo, corpo muted."
    subtitle: "{typography.h4-card}"
    subtitle-color: "{colors.primary-strong}"
    body: "{typography.body-sm}"
    body-color: "{colors.muted}"

  cta-banner-dark:
    description: "Banner de fechamento full-width sobre textura industrial escura, cantos arredondados. Headline + highlight-line + CTA primário largo."
    background: "{colors.surface-darkest}"
    radius: "{rounded.xl}"
    headline: "{typography.h2-section}"
    headline-color: "{colors.on-dark}"
    headline-accent: "{colors.sky}"
    cta: "button-primary"

  footer:
    description: "Rodapé navy com logo, colunas (Links Rápidos / Legal / Newsletter), input de e-mail com botão amarelo, divisor e copyright centralizado."
    background: "{colors.surface-darkest}"
    color: "{colors.on-dark}"
    column-label: "{typography.eyebrow}"
    column-label-color: "{colors.primary}"
    link-color: "{colors.on-dark-muted}"
    newsletter-button-bg: "{colors.primary}"
    divider: "1px solid rgba(255,255,255,0.12)"
---

# Sydorak Anodização — Design System

## Overview

A Sydorak se apresenta como o anodizador que fala a língua da engenharia, não a do fornecedor de commodity: 40 anos de processo controlado vendidos como seguro contra corrosão, falha e retrabalho. O sistema se apoia numa base navy quase preta (`#011025`) que carrega hero, footer e seções de fechamento — é dela que vem a autoridade industrial — e numa única voltagem amarelo-dourada (`#F0C51C`, quase sempre aplicada como gradiente `#C59D1D → #FCE16C`) que marca todo CTA, todo check de conformidade e o dash que abre cada eyebrow.

O azul é deliberadamente plural: azul-claro (`#78B5E3`) brilha sobre o escuro — é o "durabilidade real" do hero; o royal (`#1E4FA0`) acende palavras-chave nas headlines claras ("Por que **empresas exigentes** escolhem a Sydorak?"); e o gradiente azul reforça profundidade. A cor do acento é escolhida **por seção, conforme o fundo** — não fixada num único token. Quem implementa precisa ler o fundo da seção antes de decidir qual azul usar: sobre navy, `sky`; sobre branco, `secondary`; quando se quer dimensão, o `secondary-gradient`.

Anek Telugu em pesos altos (headlines 700-800, hero a 60px) projeta solidez sem recorrer a serifa. A personalidade vem de assinaturas repetidas — eyebrow com dash, highlight-line de barra amarela, card branco flutuante com borda-esquerda dourada sobre navy — e não de ornamento. Contra a convenção do setor (cinza corporativo sem brilho), a Sydorak aposta em contraste alto navy↔dourado e foto real de chão de fábrica sob overlay escuro, posicionando precisão técnica como algo visualmente premium.

## Colors

A paleta tem **uma cor de marca dominante e três expressões de azul**, e isso é intencional. O amarelo-dourado é a constante: ele não muda de função entre seções — é sempre ação, conformidade ou destaque. O azul é a variável.

**Marca.** `primary` (`#F0C51C`) é a voltagem. Na prática quase nunca aparece chapado em CTA — o botão primário usa `primary-gradient` (90°, `#C59D1D → #EEC00D → #FCE16C`). O amarelo sólido fica para usos de menor ênfase (checks, dashes, títulos de service-card sobre foto). `secondary` (`#1E4FA0`) é o royal de palavras-chave e links em fundo claro; `sky` (`#78B5E3`) é o acento sobre fundo escuro; `secondary-gradient` (90°, `#78B5E3 → #0E55A9 → #08418B`) entra quando a seção pede profundidade (o mark do logo, blocos de imersão).

**Superfície.** Três brancos próximos com papéis distintos: `canvas` (`#FAF8F8`) é o fundo-padrão de página e de card; `surface` (`#F4F4F5`) é o cinza-claro de blocos destacados (process-card, comparison-row); `surface-alt` (`#F3F4F8`) tem leve viés azul e segura icon-chips e a tab inativa. Os dois navies — `surface-dark` (`#0E2240`) e `surface-darkest` (`#011025`) — não são "dark mode": são superfícies escuras deliberadas para hero, footer, CTA de fechamento e botão secundário.

**Texto.** `ink` (`#011025`) para headlines em fundo claro; `body` (`#3F3F3F`, inferido) para parágrafo; `muted` (`#71717A`) para texto de apoio e legendas. Sobre navy, `on-dark` (`#FFFFFF`) e `on-dark-muted` (`#C7CDD9`, inferido).

**On-Surface.** Sobre amarelo/gradiente o texto é **navy** (`on-primary` = `#011025`), nunca branco — o contraste do dourado pede tinta escura. Sobre o royal, branco (`on-secondary`).

**Semântica e hairlines** são em parte inferidas: `whatsapp` (`#25D366`) e `whatsapp-text` (`#1FA855`) vieram das telas; `success`, `destructive`, `hairline` e `hairline-strong` foram inferidos de padrão e marcados como tal — confirmar antes de usar em produção.

## Typography

Família única: **Anek Telugu** (variável, pesos 100-800, open-source via Google Fonts). Não há fonte secundária no projeto — toda hierarquia é feita por **peso e tamanho**, não por contraste de família. Isso simplifica a implementação mas exige disciplina na escala.

A escala foi fornecida pela marca e bate com as telas. Headlines vivem no topo do peso (`h1-hero` a 800, demais a 700) com `letter-spacing` levemente negativo para fechar o texto grande. O hero é o único token a 60px e cai para 40px no mobile; `h2-section` (48→32) abre as demais seções; `h3-subtitle` (32→24) para subtítulos. Corpo de texto distingue desktop (`lead`, 18px) de mobile/card (`body`, 16px) — use `lead` em parágrafos longos de seção e `body` dentro de cards e no mobile.

Dois tokens carregam personalidade e não devem ser improvisados: `eyebrow` (12px, peso 600, `letter-spacing` 0.08em, caixa-alta) é o selo que abre seção, sempre precedido do dash amarelo; `button-md` (16px, 600, caixa-alta, `letter-spacing` 0.04em) padroniza todo CTA. Botões são **sempre uppercase** — é uma escolha de assinatura, não um acaso.

## Layout

O grid é definido por dispositivo (foram fornecidos quatro, do Figma "Grid System v3.0"):

| Contexto | Largura | Colunas | Gutter | Margem | Container útil |
|---|---|---|---|---|---|
| **Website desktop** | 1440px | 12 | 32px | 112px | **1216px** |
| Dashboard desktop | 1440px | 12 | 24px | 48px | 1344px |
| Tablet | 800px | 6 | 24px | 24px | auto |
| Mobile | 375px | 4 | 16px | 16px | auto |

O **canônico do site é o Website desktop**: container de 1216px centrado, 12 colunas com gutter de 32px. A variante Dashboard (margem 48px, container 1344px) existe para telas internas/aplicativo, caso surjam — não use no site público. Tablet e mobile reduzem para 6 e 4 colunas respectivamente.

O ritmo vertical usa `section-y` de 96px no desktop e 56px no mobile entre seções. Cards respiram com `card-padding` de 24px; o `floating-card` é a exceção, com 40px de respiro interno por ser peça de destaque. Espaçamento base é múltiplo de 4px (grid de 4/8 pontos).

Padrão estrutural recorrente: **eyebrow → headline (com palavra-chave colorida) → highlight-line → conteúdo**. Quase toda seção segue essa ordem. Seções navy frequentemente quebram com um `floating-card` branco deslocado para um dos lados, sobreposto a uma foto que sangra até a borda.

## Elevation

Sombras são contidas — o sistema é industrial, não "fofo". `card` é uma sombra dupla sutil (`0 1px 2px` + `0 8px 24px`, ambas em navy translúcido) para cards em fundo claro. `floating` (`0 12px 40px`) é mais forte e reservada ao card branco que flutua sobre navy, onde precisa de separação real. `nav` é leve, só para a variante light da barra quando há scroll. Tudo tinge a sombra em `rgba(1,16,37,...)` — navy, não preto puro — para manter coerência com a base da marca. Não há elevação por cor de fundo (não usar `surface-dark` como "card elevado" em fundo claro).

## Components

Todos os tokens abaixo referenciam o frontmatter — nenhum hexcode é repetido fora do bloco `colors:`.

**Navegação.** `nav` tem duas variantes conforme o fundo sob ela: `dark` (sobre hero/navy, fundo `surface-darkest`, texto branco) e `light` (sobre páginas claras, fundo `canvas`, borda inferior hairline). O componente `<TextLink />` (que substitui a especificação anterior `nav-link`) no estado normal possui a cor `{colors.muted}` (ou `{colors.on-dark-muted}` no tema escuro) e no estado active ou hover ganha a cor `{colors.ink}` (ou `{colors.on-dark}`) com borda inferior de 2px sólida em `{colors.primary}`.

`dashed-link` possui um dash horizontal fixo à esquerda de `16px x 2px` com a cor `{colors.primary}`. No estado normal sobre fundo escuro, o texto assume a cor `{colors.on-dark-muted}`. No hover, o texto acende na cor `{colors.primary}` e o dash permanece estável (mas com micro-interação sutil de expansão de largura), utilizando transições suaves (`duration-200`). A tipografia base segue o token `{typography.nav-link}`.

**Botões.** `button-primary` é o CTA canônico: preenchimento gradiente amarelo (`from-[#C59D1D] via-[#EEC00D] to-[#FCE16C]`), texto navy (`text-on-primary`), caixa-alta, seta diagonal `arrow-up-right` e raio de borda `rounded-[10px]` com padding `32px x 12px`. No hover, possui brilho `brightness(1.04)`, sombra de `0 6px 18px rgba(240,197,28,0.35)` e a seta diagonal ganha uma micro-interação rotacionando 45° e deslizando levemente para apontar para a direita. `button-primary-solid` é a versão de menor ênfase (amarelo chapado) — usada dentro de service-cards e contextos onde o gradiente competiria com a foto. `button-secondary` aparece ao lado do primário em fundo escuro (como hero/footer): possui fundo gradiente amarelo translúcido a 30% (`from-[#C59D1D]/30 via-[#EEC00D]/30 to-[#FCE16C]/30`) e texto dourado (`text-primary`), sem caixa alta forçada (Title/Sentence Case). No hover, assume o gradiente amarelo opaco completo, texto navy (`text-on-primary`), brilho `brightness(1.04)` e sombra `0 6px 18px rgba(240,197,28,0.35)`. `link-whatsapp` é o único elemento verde do sistema, justificado pela convenção do canal.

**Selos e listas.** `dashed-link` (dash de 16×2px em `primary` + label) abre seção. `highlight-line` (barra vertical de 3px amarela + frase em peso 500) reforça a promessa; herda `on-dark` quando está sobre navy. `checklist-item` usa o check duplo amarelo — é o mesmo ícone que aparece em conformidade e em benefícios.

**Stats e ícones.** `icon-chip` é o quadrado `md` em `surface-alt` que segura ícones em `secondary`. No hover do stat-item (pai), assume o gradiente `secondary-gradient` e o ícone fica branco. `stat-item` compõe icon-chip à esquerda + número em royal (`h4-card`) + legenda muted verticalmente à direita. O container possui cursor-pointer e a classe group, ativando a micro-interação de grupo no chip.

**Cards (documentados como componentes separados, por decisão de escopo).** `service-card` é foto com overlay escuro, título em gradiente dourado (que se inverte no hover), zoom suave na imagem e botão secundário (`Saiba mais`) — vive em grid 3-up. `norm-card` é o selo de norma técnica (badge de check azul + código em royal + descrição muted), com variante de fundo `surface` para destaque (ex: Homologação Eletrobras). `floating-card` é o card branco com borda-esquerda amarela que flutua sobre navy. `comparison-row` é o card comparativo Anodização×Pintura (fundo surface, borda-esquerda amarela ativa no hover, título azul, anodização em destaque dourado e pintura em muted). `process-card` é a etapa do processo (dashed-link "Etapa N" + título royal + corpo muted) com borda-esquerda amarela ativa no hover, navegada por `carousel-nav` — par de botões circulares com borda `hairline-strong`. `whatsapp-card` é o card de contato direto via WhatsApp (fundo `canvas`, borda suave/hairline inferior e superior como divisores). No estado normal, exibe o ícone oficial em degradê verde (`#57D163` -> `#23B33A`), título principal em `text-ink` e link de CTA em verde (`#23B33A`). Ao sofrer hover aplicado a todo o grupo do card, o título principal muda para a cor verde primária do WhatsApp (`#23B33A`), o link de CTA transiciona de tom para verde escuro (`#096512`) e o ícone de seta muda de cor simultaneamente.

**FAQ.** `accordion-item` possui estados dinâmicos: fechado normal (borda hairline, título ink, chevron baixo em muted), fechado hover e aberto ativo (borda `secondary`, título em gradiente azul de marca, chevron em `secondary` rotacionado para cima). A mudança de cor da borda para azul e o título em gradiente são os sinais visuais de atividade e foco.

**Formulário.** Os componentes atômicos `<Label />`, `<Input />`, `<Textarea />` e `<Select />` formam a base dos formulários. Os campos possuem fundo branco (`bg-canvas`), cantos arredondados `rounded-md`, borda fina cinza clara (`border-hairline` ou similar), com foco ativo exibindo anel com ring primário (`focus-visible:ring-2 focus-visible:ring-primary`). A altura padrão dos inputs e select é de 44px (`h-11`), e o textarea possui altura mínima de 120px. O `segmented-control` (Abas de Etapa) controla a transição de etapas do formulário: é um container arredondado com fundo cinza muito claro (`bg-surface` ou `#f1f5f9`), onde a aba ativa possui fundo branco, sombra leve (`drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]`) e texto azul (`text-[#0e53a6]` ou `{colors.secondary}`), e a aba inativa possui texto cinza (`text-muted`).

**Fechamento e rodapé.** `cta-banner-dark` é o banner full-width sobre textura industrial escura, cantos `xl`, com headline (acento `sky`) + highlight-line + CTA primário largo. `contact-info-block` usa subtítulos em dourado-forte sobre corpo muted. `footer` é navy com labels de coluna em amarelo (`eyebrow`), links em `on-dark-muted`, input de newsletter (`newsletter-input`) com botão `primary` e divisor translúcido antes do copyright centralizado.

## Layout

**Cabeçalho (Navbar).** O cabeçalho global (`navbar`) é fixo no topo (`fixed top-0 left-0 w-full`) com comportamento flutuante e cantos arredondados (`rounded-[10px]`), possuindo bordas azuis sutis (`border-secondary/30` ou `border-[#1e4fa0]/50`) e efeito de desfoque (`backdrop-blur-[5.184px] bg-[rgba(5,17,35,0.3)]`).
- **Estado de Scroll:** No topo da página, exibe fundo translúcido e flutuante. Ao rolar a tela, o fundo escurece para `{colors.surface-darkest}` (`bg-surface-darkest/95`) e ganha sombra para assegurar o contraste visual das informações.
- **Estrutura:**
  - **Logo** (Símbolo `simbolo.svg`): O símbolo da letra "S" em formato SVG.
  - **Menu de Navegação:** Links de texto horizontais ("Início", "Sobre nós", "Serviços") utilizando `<TextLink dark={true} />`.
  - **CTA** (Botão de Contato): `<Button variant="primary" to="/contato" />`.
- **Comportamento Responsivo:** No mobile, os links horizontais e o CTA de contato colapsam em um botão de menu (hambúrguer) que, ao ser acionado, expande um drawer vertical absoluto (`bg-surface-darkest` com sombra) com os links em coluna e o botão de contato em largura total.

**Rodapé (Footer).** O rodapé global (`footer`) utiliza o fundo navy quase preto (`{colors.surface-darkest}`). No desktop, seu conteúdo é distribuído em um grid de 12 colunas:
- **Logo** (`lg:col-span-3`): Logomarca oficial da Sydorak Anodização.
- **Links Rápidos** (`lg:col-span-3`): Título em amarelo (`text-primary`), lista vertical de links de navegação (`TextLink` com `dark={true}` e "Início" ativo por padrão) e botão CTA secundário "Contato" com ícone de seta.
- **Legal** (`lg:col-span-2`): Título em amarelo (`text-primary`), lista vertical de links legais (`TextLink` com `dark={true}`).
- **Newsletter** (`lg:col-span-4`): Título em amarelo, descrição técnica em `text-on-dark-muted` e o componente `<NewsletterInput />`.
Na base do rodapé, uma linha divisória horizontal fina (`border-t border-white/5`) separa o conteúdo do copyright centralizado em `text-on-dark-muted`. No mobile, todo o conteúdo colapsa e é empilhado em uma única coluna (`grid-cols-1`).

## Responsive Behavior

> ⚠️ **Mobile não foi validado em Figma.** Não há telas mobile dedicadas no material — só a escala tipográfica mobile e o grid de 375px. A tabela abaixo é **inferência** a partir do grid fornecido + padrões Tailwind. A regra acordada é: **adaptar o desktop para mobile à medida que cada tela for produzida**, usando o grid de 4 colunas. Tratar como ponto de partida, não como spec fechado.

| Breakpoint | Largura ref. | Grid | Comportamento |
|---|---|---|---|
| **Mobile** | 375px | 4 col · 16 gutter · 16 margin | Tudo empilha em 1 coluna. Hero 40px. Grids 3-up viram stack. Nav colapsa em menu. `floating-card` perde o deslocamento e ocupa largura cheia. |
| **Tablet** | 800px | 6 col · 24 gutter · 24 margin | Grids 3-up viram 2-up. Headlines em escala intermediária. Card flutuante reduz sobreposição. |
| **Desktop** | 1440px | 12 col · 32 gutter · 112 margin | Layout de referência. Container 1216px. Hero 60px. |
| **Wide** | >1440px | 12 col | Container trava em 1216px e centraliza; margens crescem. |

Pontos de atenção na adaptação: o overlay do hero (gradiente horizontal navy→transparente) precisa virar vertical no mobile para o texto continuar legível sobre a foto; os botões uppercase com seta podem quebrar em telas estreitas — considerar `button-sm` ou esconder o label em ícone. O carrossel de processo no mobile deve manter o swipe e reduzir os `carousel-nav` ou substituí-los por indicadores de página.

## Known Gaps

1. **Estados de formulário não desenhados.** `focus`, `error`, `disabled` e `loading` de `form-input` não existem no material. Sugestão de ponto de partida: focus com borda `secondary` + ring `sky` translúcido; error com borda `destructive`; mas precisam ser desenhados e aprovados.
2. **Mobile não validado.** Toda a seção Responsive é inferência. Os layouts mobile devem ser produzidos tela a tela e este documento atualizado conforme forem definidos.
3. **Cores semânticas inferidas.** `success`, `destructive`, `hairline`, `hairline-strong`, `body` e `on-dark-muted` foram inferidos de padrão visual e marcados no YAML. Validar os hexcodes contra o Figma antes de usar em produção (especialmente as bordas de card).
4. **Botão: regras de uso gradiente × sólido.** Ficou definido que o gradiente é o padrão, mas não há regra explícita de quando cai para o sólido além do contexto de service-card. Recomenda-se documentar: gradiente em CTA de seção; sólido quando sobre foto ou em densidade alta de botões.
5. **Ícones não especificados.** O sistema usa ícones (stats, checks, WhatsApp, setas, chevrons, ícones de aplicação) mas não há biblioteca definida nem grid de ícones. Definir família (sugestão: Lucide, que casa com o traço técnico) e tamanhos padrão.
6. **Logo e assets em SVG.** O mark gradiente (azul/amarelo) e o lockup "SYDORAK ANODIZAÇÃO" aparecem em raster no material; faltam os SVGs oficiais e as regras de área de proteção / versões mono.
7. **Integração de mapa.** A página de contato tem um placeholder "google maps" — falta definir o tratamento visual do embed (bordas, raio, filtro de cor para casar com a paleta).
8. **Páginas potenciais não desenhadas.** Há uma página de "Serviço" detalhada, mas serviços individuais, casos/portfólio e páginas legais (privacidade, termos, cookies — linkadas no footer) ainda não têm layout.
