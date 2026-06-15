# Sydorak Anodização

Site institucional (Jamstack) da **Sydorak Anodização** — anodizador industrial com 40 anos de
processo controlado, posicionado como engenharia confiável (não commodity). Base navy quase preta
(`#011025`) com uma única voltagem amarelo-dourada (`#F0C51C`, quase sempre em gradiente) marcando
todo CTA e check de conformidade.

---

## 🤖 REGRAS OBRIGATÓRIAS PARA IA (AI RULES)

> Estas regras valem para **qualquer agente de IA** (Claude, Antigravity Kit, Copilot etc.) que
> editar este repositório. Leia antes de criar ou alterar qualquer componente. Não são sugestões.

### 1. O `DESIGN.md` é a fonte da verdade — leia primeiro
- **Antes de criar/editar qualquer componente, leia o [`DESIGN.md`](DESIGN.md) por completo.**
- Cores, tipografia, hairlines, spacing, radius e sombras saem **exclusivamente** dele.
- **Proibido inventar valores** (hexcodes, tamanhos, line-heights) e **proibido usar cores/medidas
  default do Tailwind** (`text-gray-500`, `rounded-lg` default, `p-4` arbitrário fora da escala etc.).
- Os tokens vivem no bloco `@theme` de [`frontend/src/styles/index.css`](frontend/src/styles/index.css).
  Para mudar um token, **edite o `DESIGN.md` e replique no `@theme`** — nunca hardcode no componente.

### 2. Reutilize antes de criar (diretriz de reutilização)
- **Antes de escrever um componente novo, mapeie [`frontend/src/components/ui/`](frontend/src/components/ui/)**
  e o helper [`cn`](frontend/src/utils/cn.js). Se já existe um primitivo que serve, use-o.
- **Proibido recriar estilos utilitários "na unha"** (reescrever um botão/checkbox/card que já é um
  primitivo, ou colar a mesma string de classes em vários lugares).
- Combine classes **sempre** via `cn()` (clsx + tailwind-merge) — para que overrides do consumidor
  vençam os defaults sem duplicar utilitário.
- **Primitivo faltante vai para `ui/` e é registrado lá antes de ser usado** em `sections/` ou `pages/`.

### 3. Use exclusivamente os tokens do Design System
- **Paleta:** use os tokens (`bg-surface-darkest`, `text-primary`, `text-sky`, `text-ink`,
  `text-muted`, `border-hairline`…). O acento azul é **escolhido por seção conforme o fundo**:
  sobre navy → `sky`; sobre branco → `secondary`; profundidade → `secondary-gradient`.
- **CTA canônico:** gradiente amarelo (`var(--gradient-primary)`) + texto navy (`text-on-primary`)
  + **caixa-alta** + seta `arrow-up-right`. Botões são **sempre uppercase** (assinatura do DS).
- **Tipografia:** use os tokens `text-h1-hero`, `text-h2-section`, `text-eyebrow`, `text-button-md`…
  (e as variantes `-mobile`). Não improvise os tokens de personalidade (`eyebrow`, `button-md`).
- **Elevação = hairlines, não sombras pesadas.** O sistema é industrial: prefira bordas
  (`border-hairline`) à sombra. Sombras são contidas e tingidas em navy translúcido
  (`shadow-card`, `shadow-floating`, `shadow-nav`) — não use `surface-dark` como "card elevado".
- **Nunca remova o `focus-ring`.** Foco visível usa `shadow-focus-ring` (ring `sky` translúcido,
  ponto de partida do DS — ver _Known Gaps_ #1). Acessibilidade não é opcional.

### 4. Pasta `.agents/` — exclusão **local**, nunca no `.gitignore`
- A pasta de agentes (**Antigravity Kit / `@vudovn/ag-kit`** — no disco é **`.agents/`**, no plural)
  **não vai para o GitHub**, mas **NUNCA** deve entrar no `.gitignore` versionado: isso quebraria a
  indexação dos workflows e sumiria com os slash-commands (`/plan`, `/debug`) nas IDEs com IA.
- A exclusão correta é **local**, via [`.git/info/exclude`](.git/info/exclude) (já configurado com
  `.agents/` e `.agent/`). Se o kit criar um `.agents/.gitignore`, **remova-o**.

---

## Sobre o Projeto

A Sydorak se apresenta como o anodizador que fala a língua da engenharia: 40 anos de processo
controlado vendidos como seguro contra corrosão, falha e retrabalho. O site institucional traduz
isso em alto contraste navy↔dourado, tipografia Anek Telugu em pesos altos e foto real de chão de
fábrica sob overlay escuro — posicionando precisão técnica como algo visualmente premium.

Arquitetura **Jamstack**: front-end desacoplado (React + Vite) e CMS headless (**Sanity**, a entrar
na Fase 6) consumido em build/runtime. Esta é a **Fase 1** — fundação de arquitetura e Design System.

## Tecnologias

Stack **real** instalada (sem libs além destas):

| Camada | Tecnologia |
|---|---|
| UI / Build | **React 19** + **Vite** |
| Estilo | **Tailwind CSS v4** (CSS-first via plugin **`@tailwindcss/vite`**) — tokens no `@theme` |
| Roteamento | **react-router-dom** |
| Ícones | **lucide-react** |
| SEO / `<head>` | **react-helmet-async** |
| Classes utilitárias | **clsx** + **tailwind-merge** (helper `cn`) |
| CMS (Fase 6) | **Sanity** — pasta `studio/` reservada, ainda **vazia** |

> Sem `postcss.config.js` e sem `autoprefixer`: o plugin do Tailwind v4 já resolve o prefixing.
> O `tailwind.config.js` é **mínimo** (só `theme.extend: {}`) — os tokens vivem no `@theme` do CSS.

## Estrutura de Pastas

```
/ (raiz)
├── .gitignore                # ÚNICO do projeto
├── DESIGN.md                 # fonte da verdade do Design System
├── README.md                 # este arquivo
├── frontend/                 # aplicação React + Vite
│   ├── public/
│   ├── src/
│   │   ├── assets/           # imagens, ícones, SVGs
│   │   ├── components/
│   │   │   ├── layout/       # Header, Footer, wrappers
│   │   │   ├── sections/     # blocos completos de conteúdo
│   │   │   └── ui/           # botões, inputs, cards genéricos (primitivos)
│   │   ├── data/             # textos legais, mocks, arrays
│   │   ├── lib/              # configs de terceiros (ex.: Sanity)
│   │   ├── pages/            # views (HomePage.jsx)
│   │   ├── styles/           # index.css global + @theme (tokens)
│   │   ├── utils/            # cn.js
│   │   ├── App.jsx           # roteamento
│   │   └── main.jsx          # entry (HelmetProvider + BrowserRouter)
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── studio/                   # Sanity CMS (Fase 6) — vazio por enquanto
```

## Como Executar

Todos os comandos rodam dentro de `frontend/`:

```bash
cd frontend
npm install      # instala as dependências
npm run dev      # ambiente de desenvolvimento (Vite)
npm run build    # build de produção
npm run preview  # serve o build de produção localmente
```
