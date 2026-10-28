# Technical Specification & Architecture (SPEC) — Agência IX AI

**Especificação Técnica de Software e Arquitetura**  
**Versão:** 1.1.0  
**Data:** 12/10/2026  
**Status:** Especificação Aprovada após Pesquisa de Referências  
**Protocolo:** V.L.A.E.G. (Etapa A — Architecture)  
**Padrão de Acabamento Visual:** Benchmark `tess.im` / Awwwards Design System

---

## 1. Arquitetura de Software e Pilha Tecnológica

Para atingir a nota máxima nos critérios de Core Web Vitals do Google e garantir estabilidade sem dependências quebradiças, a plataforma adota a arquitetura **Zero-Runtime-Overhead**:

- **Marcação e Semântica**: HTML5 Semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Camada de Apresentação**: CSS3 Vanilla moderno estruturado por variáveis CSS (Design Tokens), CSS Grid, Flexbox, efeitos de profundidade com `backdrop-filter: blur(12px)` e gradientes radiais para o efeito *Aurora Glow*.
- **Camada de Interatividade**: JavaScript Vanilla modular (ES6+), com carregamento assíncrono (`defer`), Intersection Observer API para revelação suave ao rolar a página e controle de tema (Dark/Light).
- **Ícones e Ilustrações**: SVGs inline otimizados em traço fino (Lucide/Minimalist) para as ferramentas integradas (WhatsApp, CRM, n8n, Calendário) e monograma vetorial IX.

---

## 2. Design System & Tokens Visuais (Baseados no Benchmark `tess.im`)

A paleta e os tokens de design foram extraídos diretamente da análise das 9 telas do `tess.im` e do plano diretor:

### 2.1 Tokens Globais (CSS Custom Properties)
```css
:root {
  /* Tema Escuro (Padrão — Centro de Controle) */
  --bg-primary: #0E0F11;              /* Fundo principal profundo */
  --bg-surface-1: #16181B;            /* Superfícies de cards e painéis */
  --bg-surface-2: #1E2126;            /* Superfícies elevadas e hovers */
  --bg-glass: rgba(14, 15, 17, 0.82); /* Vidro translúcido para o header */
  
  /* Linhas e Contornos Técnicos */
  --border-subtle: #2A2E33;           /* Borda técnica de 1px */
  --border-focus: #3A4048;            /* Borda em estado de foco */
  --border-glow: rgba(111, 195, 211, 0.4); /* Brilho de acento ciano */
  
  /* Acentos de Tecnologia e IA */
  --accent-cyan: #6FC3D3;             /* Ciano-água vibrante (IA & Status) */
  --accent-cyan-subtle: rgba(111, 195, 211, 0.12);
  --accent-cyan-glow: rgba(111, 195, 211, 0.28);
  --accent-emerald: #10B981;          /* Status ONLINE / ATIVO */
  --accent-amber: #F59E0B;            /* Alertas e conversão */
  
  /* Tipografia */
  --text-primary: #F3F4F6;            /* Texto principal em branco suave */
  --text-secondary: #9CA3AF;          /* Cinza médio para apoio e descrições */
  --text-muted: #6B7280;              /* Cinza para metadados e tags */
  --text-dimmed: #4B5563;             /* Termos de apoio atenuados */
  
  /* Fontes */
  --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
  
  /* Formas e Efeitos */
  --radius-pill: 999px;               /* Botões e badges cápsula */
  --radius-card: 16px;                /* Cantos dos cards modulares */
  --radius-inner: 10px;               /* Elementos internos */
  --shadow-card: 0 16px 40px -12px rgba(0, 0, 0, 0.6);
  --aurora-gradient: radial-gradient(ellipse 65% 50% at 50% -10%, rgba(111, 195, 211, 0.16), transparent 70%);
}

/* Suporte a Tema Claro (Ativado via seletor ou preferência do sistema) */
[data-theme="light"] {
  --bg-primary: #F8F9FA;
  --bg-surface-1: #FFFFFF;
  --bg-surface-2: #F1F3F5;
  --bg-glass: rgba(248, 249, 250, 0.85);
  --border-subtle: #E2E6EA;
  --border-focus: #CED4DA;
  --border-glow: rgba(31, 127, 145, 0.3);
  --accent-cyan: #1F7F91;
  --accent-cyan-subtle: rgba(31, 127, 145, 0.08);
  --accent-cyan-glow: rgba(31, 127, 145, 0.2);
  --text-primary: #111827;
  --text-secondary: #4B5563;
  --text-muted: #6B7280;
  --text-dimmed: #9CA3AF;
  --shadow-card: 0 16px 36px -12px rgba(0, 0, 0, 0.08);
}
```

---

## 3. Especificação Detalhada dos Componentes Visuais

### 3.1 Header com Vidro Translúcido (`HeaderGlass`)
- Posição fixa no topo com `backdrop-filter: blur(12px)`.
- Monograma minimalista "IX" em vetor SVG acompanhado da marca textual "IX AI" em DM Sans 500.
- Links de âncora: `#servicos` (Serviços), `#evolucao` (Timeline), `#setores` (PMEs), `#seguranca` (LGPD).
- Controles: Seletor de Tema (Dark/Light) e Botão Pílula CTA para o WhatsApp oficial.

### 3.2 Hero Section com "Constelação de Agentes" (`HeroConstellation`)
- **Badge Cápsula Superior**: `"NOVO: Conheça os Agentes de IA que operam enquanto sua equipe descansa ↗"` com borda e efeito de brilho suave.
- **Headline Central com Termos Sublinhados em Ciano**:
  - Exemplo: *"Sua empresa **atendendo**, **vendendo** e **organizando** com inteligência artificial."*
- **Agentes em Órbita**:
  - 4 nós de agentes flutuantes em posições estratégicas com linhas tracejadas sutis conectando-os ao centro:
    1. **Agente SDR de Vendas** (WhatsApp + CRM + n8n | Badge: `● RODANDO`).
    2. **Recuperação de Vendas** (WhatsApp + integrações | Badge: `● REATIVANDO`), classe `.node-followup`. Os 4 nós: Agente SDR, Agente de Follow-up, Agente de Agenda, Triagem Especializada (o Follow-up substitui o antigo Agente de Mídia).
    3. **Agente de Agendamento 24/7** (Google Agenda + WhatsApp | Badge: `● STANDBY`).
    4. **Agente de Qualificação Prévia** (Filtro por Renda / Procedimento | Badge: `● ATIVO`).
- **Traçados pontilhados** (`#hero-conectores`, SVG desenhado por `initHeroConnectors()` em `main.js`, estilo em `components.css`): curva Bezier ciano, `stroke-dasharray: 5 9`, animação `fluxo-conector` de 1,8s, ponto de ancoragem no fim de cada linha.
  - **A partir de 1200px**: os 4 agentes orbitam o texto e cada traçado aponta para o centro da headline, parando na borda da coluna de texto para não invadi-la.
  - **Abaixo de 1200px**: os agentes saem da órbita e viram uma faixa estática abaixo dos botões da hero (2x2 no celular, 4 lado a lado de 640px a 1199px). Os traçados continuam: descem dos 4 agentes e convergem no badge `NOSSOS SERVIÇOS`, que abre a seção `#servicos`, parando 12px acima dele. A camada SVG usa `overflow: visible` para desenhar fora da hero.
  - Redesenho em `resize`, ao carregar as fontes, a cada quadro da flutuação orbital (só ≥ 1200px) e no `transitionend` do cabeçalho de serviços, que nasce deslocado por `data-reveal`.
- **Barra de Ação Principal**: Botões com ícones Apple/Android/Web e botão principal estilo pílula sólida com seta direcionando para WhatsApp.

### 3.3 Seção de Serviços em Abas (`ServicesTabs`)
- "Onde a IA faz diferença no seu negócio" (referência `playbooklab.com.br`): uma oferta única, sem pilares.
  - Desktop (≥900px): lista vertical de 6 abas (`.service-tab`, mono, trilho à esquerda) + painel (`.service-panel`) com contador `01 / 06`, chamada ciano, título, descrição e 3 pontos.
  - Celular: abas viram chips roláveis na horizontal acima do painel.
  - Painéis empilhados na mesma célula do grid: a caixa tem a altura do maior e o CTA não pula.
  - Acessibilidade: `role=tablist/tab/tabpanel`, setas/Home/End navegam (`initServiceTabs` em `main.js`). Sem JS, abas somem e os 6 painéis aparecem empilhados.
  - CTA abaixo: "Quero um Diagnóstico Gratuito".

### 3.4 Timeline Evolutiva da Gestão de Leads (`EvolutionTimeline`)
- Linha do tempo interativa e comparativa inspirada na tela `tess.im4.png`:
  - **2016 (Chatbot)**: Respostas mecânicas por script e botões numéricos.
  - **2021 (Copilot)**: Sugestões reativas para o atendente.
  - **2024 (Agent)**: Execução de comandos isolados.
  - **HOJE (IX AI — Agentes Autônomos)**: Aprendizado das rotinas da PME, atendimento 24/7 humanizado e integração com a operação.

### 3.5 Seção "Mission Control" com Aurora Glow (`MissionControl`)
- Painel escuro estilizado simulando o painel de controle operacional do gestor:
  - Fundo com gradiente radial suave simulando a aurora boreal.
  - Demonstração do princípio "Humano no Controle": regras de segurança, aprovações prévias e controle total sobre orçamentos.

### 3.6 Grid de Setores PME (`SectorGrid`)
- Cards dedicados com ícones vetoriais elegantes e dores específicas resolvidas:
  - Clínicas de Estética, Clínicas Odontológicas, Escritórios de Advocacia e Imobiliárias.

### 3.7 Rodapé Corporativo e Redes Sociais (`FooterMaster`)
- Links para LinkedIn, Instagram e Facebook estruturados para captação orgânica.
- Selo de Prova Social real da **ViaSeg Corretora**.
- Informações de SEO Local, direitos reservados e alternador de tema.

---

## 4. Engenharia de SEO & Dados Estruturados (Google Search Central)

### 4.1 Schemas JSON-LD Estruturados
O arquivo HTML incluirá no `<head>` um script único consolidado com:
1. `Organization`: Dados corporativos, logo e perfis de redes sociais (sameAs).
2. `LocalBusiness` / `ProfessionalService`: Telefone oficial (+55 21 98370-1900), localização e horário de funcionamento.
3. `Service` único (Inteligência Artificial para Atendimento e Vendas): lista os 6 serviços.
5. `FAQPage`: Perguntas e respostas mais buscadas sobre IA para PMEs.

### 4.2 Otimizações de Core Web Vitals
- Metatags de Pré-conexão (`preconnect`) para fontes do Google.
- Carregamento assíncrono de folhas de estilo e scripts (`defer`).
- Imagens em `.webp` com `width` e `height` (sem CLS) e `decoding="async"`. Os 4 avatares da hero não levam `loading="lazy"` de propósito: estão acima da dobra e adiar o download atrasaria o LCP.
- Meta tags Open Graph e Twitter Cards completas na home e nas 3 páginas legais.

### 4.3 Endereço canônico
- `<link rel="canonical">` em todas as páginas, sempre na forma sem `www` e com `https`.
- O `.htaccess` redireciona `http` e `www` para essa mesma forma, para o Google não ver quatro endereços onde existe um.
- `<meta name="theme-color" content="#0E0F11">` em todas as páginas.
- `sitemap.xml` com as 4 páginas e `lastmod` conferido a cada publicação. `robots.txt` libera tudo e aponta o sitemap.

## 5. Servidor (`.htaccess`)

Apache na raiz da `public_html`. Sobe junto com o site; sem ele nada disso vale.

| Bloco | Efeito |
| :--- | :--- |
| Reescrita | Força `https` e remove o `www` |
| `X-Content-Type-Options: nosniff` | Navegador não adivinha o tipo do arquivo |
| `X-Frame-Options: SAMEORIGIN` | Impede embutir o site em iframe de terceiro |
| `Referrer-Policy: strict-origin-when-cross-origin` | Só o domínio sai como referência |
| `Permissions-Policy` | Câmera, microfone, localização, pagamento e USB negados |
| `Strict-Transport-Security` | 2 anos, com `includeSubDomains`, só sob HTTPS |
| `Content-Security-Policy` | `default-src 'self'`; estilos e fontes só do Google Fonts; `object-src 'none'`. `'unsafe-inline'` em script e style é exigido pelo Consent Mode v2, pelo marcador `.js`, pelo JSON-LD e pelos atributos `style=""` do HTML |
| `mod_deflate` | Compressão de HTML, CSS, JS, XML, JSON e SVG |
| `mod_expires` + `Cache-Control` | Estáticos 1 ano `immutable`; HTML sempre revalidado |

**Ao ligar o GTM:** a CSP barra as tags enquanto `https://www.googletagmanager.com` e `https://www.google-analytics.com` não entrarem em `script-src` e `connect-src`.
