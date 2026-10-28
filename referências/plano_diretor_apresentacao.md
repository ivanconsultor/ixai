# Plano Diretor e Apresentação Executiva — IX AI

Documento de alinhamento estratégico, arquitetura técnica e plano de execução para o desenvolvimento do site institucional da IX AI, aprovado em 09/10/2026.

---

## 1. Análise da Documentação e Pilares do Negócio

- **Proposta de Valor**: Agência de inteligência artificial aplicada que projeta e implanta automações de processos (n8n), agentes de qualificação e prospecção (SDR) e agentes de atendimento e agendamento para pequenas e médias empresas prestadoras de serviços.
- **Mercado Alvo**: Gestores e proprietários de PMEs que perdem vendas e tempo com rotinas manuais (WhatsApp, qualificação, agendamento e follow-up). Nichos de lançamento validados: Clínicas de Estética, Clínicas Odontológicas, Escritórios de Advocacia e Imobiliárias.
- **Voz da Marca**: Direta, confiante, profissional e pragmática. Foco absoluto na entrega de resultados de negócio e produtividade, eliminando jargões vazios e promessas mágicas de IA.
- **Canal de Conversão**: WhatsApp institucional oficial da IX AI (+55 21 98370-1900 / https://wa.me/5521983701900). Todo ponto de contato relevante direciona o visitante para o canal direto.
- **Prova Social Real**: Automação operacional desenvolvida para a ViaSeg Corretora (case de amostra). Proibida a invenção de números fictícios ou depoimentos fabricados.
- **Identidade da Marca**: Monograma vetorial minimalista "IX" em SVG (com barra ciano e X em cor neutra), acompanhado da tipografia "IX AI" em texto puro DM Sans 500 para leitura semântica do Google e leitores de tela.

---

## 2. Desconstrução Visual da Referência (tess.im)

1. **Atmosfera de Centro de Controle**: Fundo escuro profundo (#0E0F11), superfícies escuras refinadas (#16181B) com bordas ultrafinas de 1px (#2A2E33), contrastadas pelo ciano-água (#6FC3D3 no tema escuro e #1F7F91 no claro).
2. **Hero com Constelação de Agentes**: Frase de abertura de grande impacto com termos-chave grifados em ciano e termos de apoio atenuados. Retratos de agentes orbitando o headline, exibindo anéis finos, badges de status mono em tempo real (RODANDO, AGUARDANDO) e linhas curvas conectoras.
3. **Timeline da Evolução**: Linha do tempo horizontal contrastando a transição de Chatbots mecânicos (2016) até Agentes de IA integrados (Atual).
4. **Aurora Glow e Janela Operacional**: Fundo com degradê etéreo suave sobre o qual repousa o painel do centro de controle ("Mission Control"), reforçando o princípio "Humano no Controle".
5. **Cards de Setores e Serviços**: Grid sóbrio com ícones em traço fino (Lucide), micro-interações de hover suaves e badges mono em caixa alta.
6. **Alternância de Tema e Navegação**: Header fixo com efeito glass sutil, seletor de idiomas (PT / EN), toggle Dark/Light e botões estilo pílula sólida (999px border-radius).

---

## 3. Diretrizes de Performance, Google SEO e Segurança

- **Core Web Vitals**: Metas de LCP < 2,0s, CLS < 0,1 e INP < 200ms. Imagens convertidas para WebP moderno com tags `<picture>`, lazy loading para itens fora da dobra e dimensões explícitas para prevenir layout shifts.
- **Google SEO**: Estrutura semântica rigorosa (um único `<h1>`, seguido de `<h2>` e `<h3>`), dados estruturados Schema.org em JSON-LD (Organization, LocalBusiness, Service), `sitemap.xml`, `robots.txt` e meta tags Open Graph / Twitter Cards.
- **Segurança**: Configuração de `.htaccess` para servidores Apache/Hostinger com cabeçalhos HSTS, X-Frame-Options, X-Content-Type-Options, Content Security Policy e isolamento de links externos (`rel="noopener noreferrer"`).

---

## 4. Roteiro de Execução em Etapas (Protocolo V.L.A.E.G.)

- **Etapa 1**: Estrutura de pastas, tokens de design em CSS puro (variáveis Dark/Light), reset e esqueleto semântico.
- **Etapa 2**: Barra de navegação responsiva e Hero Section com Constelação de Agentes e headline dinâmico.
- **Etapa 3**: Seções de conversão: Timeline Evolutiva, Centro de Controle (Mission Control), 4 Setores PME, Serviços e Chamada Final.
- **Etapa 4**: Micro-interações, orquestração de animações com GSAP + ScrollTrigger, controle de tema e botão flutuante de WhatsApp.
- **Etapa 5**: Otimização técnica de SEO, Schemas JSON-LD, Sitemap, Robots e cabeçalhos de segurança (.htaccess).
- **Etapa 6**: Versão em inglês (/en/index.html), testes de responsividade em múltiplas resoluções e homologação final.
