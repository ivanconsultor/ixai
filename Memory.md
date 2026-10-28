# Memory & Change Log (Memory.md) — Agência IX AI

**Memória Viva do Projeto, Decisões de Arquitetura e Registro de Mudanças**  
**Projeto:** Agência IX AI — Landing Page Institucional de Alta Performance  
**Início:** 12/10/2026  
**Metodologia de Governança:** V.L.A.E.G. (Vision, Logic, Architecture, Execution, Governance)  
**Status Atual:** Etapa 0 Concluída e Aprovada com Alinhamento de Referências

---

## 1. Registro de Parâmetros e Decisões Críticas de Engenharia

| ID Decisão | Data | Categoria | Descrição da Decisão | Motivo Técnico / Negócio |
| :--- | :--- | :--- | :--- | :--- |
| **DEC-001** | 12/10/2026 | Arquitetura | Adoção de Vanilla HTML5 + CSS3 + JS Modular (Zero Framework Bloat) | Eliminar tempo de compilação, atingir LCP < 1.8s e notas 95+ no Google Lighthouse sem dependências quebradiças. |
| **DEC-002** | 12/10/2026 | Design System | Paleta Dark Luxury (`#0E0F11`) com Acentos Ciano (`#6FC3D3`) e Glassmorphism | Baseado nas 9 telas do benchmark `tess.im` e premiações Awwwards, transmitindo autoridade em IA e engenharia de software. |
| **DEC-003** | 12/10/2026 | Conversão | Ponto de contato unificado via WhatsApp oficial (+55 21 98370-1900) | Canal de maior conversão do mercado brasileiro de PMEs, com botões pílula e botão flutuante com notificação. |
| **DEC-004** | 12/10/2026 | Escopo | Apresentação em dois pilares integrados (Mídia Multicanal + Agentes IA) | Demonstrar que a agência soluciona a atração de demanda e a qualificação/agendamento dos leads simultaneamente. |
| **DEC-005** | 12/10/2026 | SEO Técnico | Schemas JSON-LD estruturados (`Organization`, `Service`, `FAQPage`) | Garantir elegibilidade a Rich Snippets na busca orgânica do Google e máxima relevância semântica. |
| **DEC-006** | 12/10/2026 | UI / UX | Incorporação dos componentes visuais do benchmark `tess.im` | Hero com Constelação de Agentes, termos com sublinhado ciano, Timeline Evolutiva (2016-Hoje) e painel "Mission Control" com Aurora Glow. |
| **DEC-007** | 13/10/2026 | Escopo Mídia & Social (substituída pela DEC-008) | Foco exclusivo em Google Ads e Meta Ads + Botões sociais destacados | Simplificar a esteira publicitária nas duas maiores plataformas com melhor ROI para PMEs e posicionar botões pílula de Facebook, Instagram e LinkedIn no rodapé. |
| **DEC-008** | 19/10/2026 | Escopo | IX AI deixa de ser agência híbrida: é UMA agência de IA | Decisão do Ivan. Sai todo serviço de agência digital (Google Ads, Meta Ads, GMN/SEO local). Sem divisão entre "agentes de IA" e "automações n8n" (termos técnicos): os serviços aparecem pelo resultado, em lista única no formato do `playbooklab.com.br`. Substitui DEC-004 e DEC-007. |

---

## 2. Status de Execução das Etapas (Protocolo V.L.A.E.G.)

- [x] **Etapa 0: Alinhamento Estratégico, Pesquisa de Referências & Documentação de Governança**
  - [x] Leitura e decomposição das 9 imagens de referência do benchmark `tess.im` e do `plano_diretor_apresentacao.md`.
  - [x] Atualização do [PRD.md](file:///c:/Users/ivanc/Documents/Antigraviry/AG05%20Web/AG%2005%20IX%20AI/PRD.md) (Requisitos com análise visual e dois pilares).
  - [x] Atualização do [SPEC.md](file:///c:/Users/ivanc/Documents/Antigraviry/AG05%20Web/AG%2005%20IX%20AI/SPEC.md) (Design system com tokens exatos e arquitetura de componentes).
  - [x] Atualização do [Memory.md](file:///c:/Users/ivanc/Documents/Antigraviry/AG05%20Web/AG%2005%20IX%20AI/Memory.md) (Log de decisões e referências validadas).
- [x] **Etapa 1: Estrutura de Diretórios, Design Tokens & Reset CSS**
  - [x] Criação de `assets/css/variables.css` (Tokens de cores, Aurora Glow e tipografia).
  - [x] Criação de `assets/css/base.css` (Reset semântico, fontes Google, scrollbar e acessibilidade).
  - [x] Criação de `assets/css/components.css` (Botões pílula, badges cápsula, avatares orbitais e scroll reveal).
  - [x] Criação de `assets/css/layout.css` (Container de 1240px, grids de 2 a 4 colunas e breakpoints).
  - [x] Criação de `assets/js/main.js` (Alternador de tema Dark/Light com persistência e Intersection Observer).
- [x] **Etapa 2: Header Fixo Translúcido & Hero Section com Constelação de Agentes**
  - [x] Header com efeito Glassmorphism, menu de âncoras e botão CTA pílula.
  - [x] Hero com headline dinâmico, termos sublinhados em ciano e constelação orbital de agentes com badges e luz pulsante de status.
- [x] **Etapa 3: Apresentação dos Dois Pilares de Serviços & Setores PME**
  - [x] Pilar 1: Mídia Paga (Google Ads, GMN, Meta Ads, TikTok, Taboola, Pinterest).
  - [x] Pilar 2: IA Aplicada (Agente SDR, agendamento 24/7, fluxos n8n).
  - [x] Grid de 4 Nichos: Clínicas de Estética, Odontologia, Advocacia, Imobiliárias.
- [x] **Etapa 4: Linha do Tempo Evolutiva & Prova Social / Canais Orgânicos**
  - [x] Comparativo visual "Chatbots Mecânicos (2016)" até "Agentes com IA Integrada (Hoje)".
  - [x] Seção "Mission Control" com efeito Aurora Glow e painel "Humano no Controle".
  - [x] Prova social real da ViaSeg Corretora e links para LinkedIn, Instagram e Facebook.
  - [x] Botão flutuante inteligente de WhatsApp com badge de notificação ativa.
  - [x] FAQ accordion em CSS nativo para tirar objeções frequentes.
- [x] **Etapa 5: Otimização de SEO Google, Schemas JSON-LD & Core Web Vitals**
  - [x] Inclusão dos dados estruturados completos em JSON-LD (`Organization`, `ProfessionalService`, `Service`, `FAQPage`).
  - [x] Metatags de pré-conexão, Open Graph e Twitter Cards integradas.
- [ ] **Etapa 6: Validação de Responsividade (Mobile/Tablet/Desktop) & Homologação Visual**
  - [x] Responsividade medida no navegador em 375, 768, 1024 e 1440px (19/10): sem rolagem lateral, sem erro de console, sem requisição quebrada.
  - [x] Varredura de código, SEO, schemas e segurança (19/10) — resultado e pendências na seção 4.
  - [ ] Auditoria de usabilidade visual e validação interativa com o usuário.

---

## 3. Log de Alterações (Change Log)

### [1.3.1] — 19/10/2026
- **Adicionado (a pedido do Ivan):** no celular e no tablet os traçados pontilhados da hero voltam a aparecer. Em vez de apontarem para o centro do texto, descem dos 4 agentes e convergem no badge `NOSSOS SERVIÇOS`, que abre a seção de serviços. Mesmo traço, mesma animação e mesmo SVG do desktop: `initHeroConnectors()` passou a escolher o destino pela largura da tela.
- **Removido:** a regra `.hero-conectores { display: none }` do bloco `max-width: 1199px` em `layout.css`.
- **Adicionado:** redesenho no `transitionend` do cabeçalho de serviços, porque ele nasce deslocado 24px por `data-reveal` e a linha precisava reencostar no badge.
- **Medido no navegador** (servidor estático local, página real) em 375, 768, 1024 e 1440px: sem rolagem lateral, sem erro de console, sem requisição quebrada, órbita do desktop intacta.
- **Varredura completa** de código, responsividade, SEO/Google, schemas e segurança: resultado na seção 4.
- **Corrigido na mesma rodada:** canonical nas 4 páginas, description da home em 151 caracteres, `lastmod` do sitemap, `theme-color`, Open Graph das páginas legais, 3 regras CSS mortas removidas e `.htaccess` novo com segurança, compressão e cache.

### [1.3.0] — 19/10/2026
- **Reposicionado (DEC-008):** removido tudo de agência digital e a divisão em dois pilares. A seção `#servicos` virou "Onde a IA faz diferença no seu negócio": 6 serviços em abas (Atendimento 24h, Qualificação, Agendamento, Recuperação de vendas, Organização, Rotinas), referência `playbooklab.com.br`.
- **Removido:** CSS `.pillar-*` (layout.css seção 4 agora é `.services-*`/`.service-*`). **Adicionado:** `initServiceTabs()` em `main.js`.
- **Hero:** headline nova ("Sua empresa atendendo, vendendo e organizando com inteligência artificial.") com os 4 agentes originais orbitando, a pedido do Ivan: Agente SDR, Agente de Follow-up (no lugar do Agente de Mídia; classe `.node-traffic` → `.node-followup`), Agente de Agenda, Triagem Especializada.
- **Responsivo:** os 4 agentes da hero agora aparecem também no celular (2x2) e no tablet (4 lado a lado), abaixo dos botões; antes sumiam abaixo de 1200px. Medido em 375, 768 e 1024px sem rolagem lateral.
- **Sem jargão (fora os nomes dos agentes da capa):** fora "Agente SDR", "lead", "n8n" e "automações" dos demais textos visíveis (FAQ, Mission Control, case ViaSeg, rodapé). Menu "Dois Pilares" → "Serviços".
- **Atualizado:** title, description, keywords, Open Graph, Twitter Cards e JSON-LD (um `Service` único).
- **Atualizado:** Termos de Uso (objeto do site e resultados) e Política de Privacidade (Google sem plataformas de anúncio). A Política de Cookies segue igual: os cookies de Google Ads/Meta são da medição do próprio site da IX AI.
- **Refeito:** `assets/images/og-cover.png` com a headline nova.

### [1.2.1] — 13/10/2026
- **Refatorado:** Remoção de TikTok Ads e Taboola Native das campanhas de mídia, refinando o foco exclusivamente para **Google Ads** (Pesquisa, Maps e Performance Max) e **Meta Ads** (Instagram e Facebook).
- **Adicionado:** Botões de redes sociais em formato de pílula destacados no rodapé para **Instagram**, **Facebook** e **LinkedIn** com ícones SVG e micro-interações de hover.
- **Atualizado:** Metatags, descrições Open Graph, Twitter Cards e Schemas JSON-LD para refletir o foco em Google Ads e Meta Ads.

### [1.2.0] — 13/10/2026
- **Implementado:** Código completo de todas as seções no [index.html](file:///c:/Users/ivanc/Documents/Antigraviry/AG05%20Web/AG%2005%20IX%20AI/index.html), abrangendo Dois Pilares de Serviços, Timeline Evolutiva (2016–Hoje), Setores PME, Mission Control (Humano no Controle), Prova Social ViaSeg Corretora, FAQ Accordion e Rodapé Corporativo.
- **Implementado:** Componentes CSS para Cockpit Mission Control, Case ViaSeg, FAQ e CTA Banner em [components.css](file:///c:/Users/ivanc/Documents/Antigraviry/AG05%20Web/AG%2005%20IX%20AI/assets/css/components.css).
- **Implementado:** Schema.org JSON-LD consolidado no `<head>` para máxima indexação no Google.
- **Criado:** Diretriz permanente de engenharia e postura em [.agents/rules/postura_e_engenharia.md](file:///c:/Users/ivanc/Documents/Antigraviry/AG05%20Web/AG%2005%20IX%20AI/.agents/rules/postura_e_engenharia.md).

### [1.1.0] — 12/10/2026
- **Atualizado:** `PRD.md` com a incorporação completa da pesquisa visual das 9 telas do benchmark `tess.im`, padrões Awwwards, plano diretor e detalhamento dos 2 pilares.
- **Atualizado:** `SPEC.md` com os tokens CSS exatos da referência (`#0E0F11`, `#16181B`, `#6FC3D3`, `#1F7F91`), efeito Aurora Glow em CSS puro e especificação dos componentes (Constelação de Agentes, Timeline Evolutiva e Mission Control).
- **Atualizado:** `Memory.md` registrando a decisão DEC-006 e formalizando a conclusão da Etapa 0.

### [1.0.0] — 12/10/2026
- **Criado:** Versão inicial da documentação de governança do projeto.

---

## 4. Varredura Técnica — 19/10/2026

Feita sobre as 4 páginas, os 5 CSS e os 2 JS, com leitura estática mais medição na página real servida localmente.

### 4.1 O que está em ordem

| Frente | Verificado |
| :--- | :--- |
| Código | Nenhum `console.log`, `TODO` ou handler `onclick` inline. JS com `defer`. CSS modular em 5 arquivos, 21 KB o maior. |
| Responsividade | 375, 768, 1024 e 1440px sem rolagem lateral. Abas de serviços rolam na horizontal por dentro do próprio trilho, de propósito. |
| Imagens | Os 4 avatares em `.webp`, com `alt`, `width` e `height` (sem CLS) e `decoding="async"`. Sem `loading="lazy"` por estarem acima da dobra, que é o correto para o LCP. |
| Schemas | JSON-LD válido e único no `<head>`: `Organization`, `ProfessionalService`, `Service`, `FAQPage`. |
| Hierarquia | Um `<h1>` por página, `h2`/`h3` encadeados. `lang="pt-BR"` e `viewport` nas 4 páginas. |
| robots/sitemap | `robots.txt` liberando tudo e apontando o sitemap. `sitemap.xml` com as 4 páginas. |
| Terceiros | Só Google Fonts, com `preconnect`. Nenhum outro script externo, nenhuma chave ou segredo no código. |
| Links | Os 15 links `target="_blank"` têm `rel` com `noopener`. |
| LGPD | Consent Mode v2 negado por padrão no `<head>`, antes de qualquer tag. Aceitar e recusar com o mesmo peso. Decisão guardada 12 meses. |
| Superfície de ataque | Site estático, sem formulário e sem backend. Contato só por `wa.me`. |

### 4.2 Pendências encontradas e corrigidas em 19/10

| # | Item | Situação |
| :--- | :--- | :--- |
| 1 | `<link rel="canonical">` | **Feito** — nas 4 páginas, sempre sem `www` |
| 2 | `meta description` da home com 197 caracteres | **Feito** — reescrita com 151, dentro do corte do Google |
| 3 | `lastmod` do sitemap | **Feito** — home, privacidade e termos em 2026-10-19; cookies segue em 15/10, que é a data real |
| 4 | Cabeçalhos de segurança e cache | **Feito** — `.htaccess` novo na raiz (seção 4.3) |
| 5 | `theme-color` | **Feito** — `#0E0F11` nas 4 páginas |
| 6 | Open Graph nas páginas legais | **Feito** — OG + Twitter Card nas 3, usando a `og-cover` da home |
| 7 | Classes CSS órfãs | **Parcial** — removidas as 3 mortas: `.agent-status-label`, `.case-metric-number` e `.hero-headline .dimmed` |
| 8 | `.claude/launch.json` | **Em aberto** — config local da prévia, não sobe para o ar; decidir se fica versionado |

Sobre o item 7: ficaram de propósito `.sr-only` (acessibilidade), `.pendente` (marcador amarelo de campo a preencher nas páginas legais), `.card-glass`, `.card-surface`, `.font-mono` e `.text-cyan/emerald/muted`. Não são sobra: são primitivas do design system, prontas para a próxima seção. Remover rende poucos bytes e custa a base de estilo.

Sobre a `meta keywords`: o Google ignora essa tag desde 2009. Ela não atrapalha e as palavras-chave que valem estão no `title`, na `description`, nos `h2` e no JSON-LD. Mantida.

### 4.3 `.htaccess` — o que ele faz

Arquivo novo na raiz, criado em 19/10. **Sobe junto com o site para a `public_html`; sem ele o servidor não aplica nada disso.**

| Bloco | Efeito |
| :--- | :--- |
| HTTPS e domínio único | Força `https` e tira o `www`, batendo com o `canonical` |
| `X-Content-Type-Options` | O navegador respeita o tipo declarado e não adivinha |
| `X-Frame-Options` | Ninguém embute o site num iframe de terceiro |
| `Referrer-Policy` | Só o domínio vai como referência ao sair para fora |
| `Permissions-Policy` | Bloqueia câmera, microfone, localização, pagamento e USB |
| `Strict-Transport-Security` | 2 anos, só com HTTPS ativo |
| `Content-Security-Policy` | `default-src 'self'`, fontes só do Google Fonts, `object-src 'none'`. Usa `'unsafe-inline'` em script e style porque o Consent Mode v2, o marcador `.js`, o JSON-LD e 16 atributos `style=""` são inline |
| Compressão e cache | Deflate nos textos; estáticos por 1 ano com `immutable`, HTML sempre revalidado |

**Atenção ao ligar o GTM:** a CSP vai barrar as tags. Antes de publicar o contêiner, acrescentar `https://www.googletagmanager.com` e `https://www.google-analytics.com` em `script-src` e `connect-src`. O comentário está no próprio `.htaccess`.
