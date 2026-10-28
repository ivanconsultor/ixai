# Product Requirements Document (PRD) — Agência IX AI

**Documento de Requisitos do Produto**  
**Versão:** 1.2.0  
**Data:** 19/10/2026 (reposicionamento: só IA e automações)  
**Status:** Aprovado após Pesquisa e Decomposição de Referências  
**Metodologia:** Protocolo V.L.A.E.G. (Vision, Logic, Architecture, Execution, Governance)  
**Benchmarks Integrados:** `tess.im/pt-BR`, Awwwards, Dribbble e `plano_diretor_apresentacao.md`

---

## 1. Visão do Produto & Proposta de Valor

A **Agência IX AI** é uma **agência de inteligência artificial**, uma oferta única, concebida para atender pequenas e médias empresas (PMEs) de serviços qualificados. A proposta de valor é colocar a IA para trabalhar no atendimento, nas vendas e na organização da empresa, eliminando a perda de vendas por lentidão e o trabalho repetitivo da equipe. Desde 19/10/2026 a IX AI **não** oferece serviços de agência digital (tráfego pago, gestão de anúncios, SEO/GMN).

### 1.1 Declaração do Problema Real de Mercado
1. **O Funil Quebrado das PMEs**: Empresas investem em anúncios, mas não atendem o lead a tempo. Se o lead não é respondido em menos de 5 minutos, a chance de conversão cai em mais de 80%.
2. **Chatbots Antigos Obsoletos**: Menus numéricos ("digite 1 para...") irritam o cliente e geram abandono imediato.
3. **Operação Manual e Desconectada**: WhatsApp, agenda e CRM que não conversam entre si, com follow-up e cadastro feitos à mão.

### 1.2 A Solução IX AI: uma agência só, serviços pelo resultado
Sem divisão entre "agentes de IA" e "automações" (termos técnicos, ficam fora do site). Os serviços são apresentados pelo resultado que entregam, no formato da referência `playbooklab.com.br` ("Onde a IA faz diferença para você"):

1. **Atendimento 24h** — Atendimento no WhatsApp: resposta em segundos, no tom da empresa, equipe assume quando quiser.
2. **Qualificação** — Qualificação de clientes: entende procura, urgência e perfil antes de passar adiante.
3. **Agendamento** — Agenda cheia, sem faltas: marca, confirma, lembra e remarca.
4. **Recuperação de vendas** — Recuperação de orçamentos: retoma quem parou de responder.
5. **Organização** — Cadastro e histórico sempre em dia: conversa vira cadastro sem digitação.
6. **Rotinas** — Rotinas no piloto automático: avisos, relatórios, publicações e tarefas repetitivas.

---

## 2. Decomposição da Pesquisa de Referências (Benchmark `tess.im` & Awwwards)

Com base na inspeção aprofundada dos arquivos da pasta `referências/` ([plano_diretor_apresentacao.md](file:///c:/Users/ivanc/Documents/Antigraviry/AG05%20Web/AG%2005%20IX%20AI/refer%C3%AAncias/plano_diretor_apresentacao.md) e imagens `tess.im.png` a `tess.im9.png`), foram incorporados os seguintes padrões visuais e conceituais de nível internacional:

### 2.1 Identidade Visual & Atmosfera de "Centro de Comando" (`tess.im`, `tess.im5`)
- **Fundo Escuro Profundo e Elegante**: Paleta base `#0E0F11` com superfícies em camadas `#16181B` e linhas de demarcação ultrafinas de 1px (`#2A2E33`).
- **Acento Ciano Elétrico / Água**: `#6FC3D3` no modo escuro e `#1F7F91` no modo claro, comunicando tecnologia e precisão de IA.
- **Aurora Glow Sutil**: Efeito etéreo de degradê suave de luz no fundo das seções operacionais, criando profundidade visual sem impactar a performance.
- **Monograma Minimalista**: Logo "IX" em vetor SVG com barra em ciano e tipografia limpa em DM Sans 500.

### 2.2 Hero Section com "Constelação de Agentes" (`tess.im.png`)
- **Headline Monumental**: Frase de abertura com termos-chave grifados por sublinhados finos ciano (ex: *"Contrate um **Agente SDR** que **qualifica e atende** cada lead no **WhatsApp**"*).
- **Badge Cápsula no Topo**: Elemento sutil de novidade (`NEW` / `NOVIDADE`) com link para o diferencial da agência.
- **Órbita de Agentes Especializados**: Avatares circulares orbitando o headline, exibindo:
  - Nome da função (*Agente SDR de Vendas*, *Agente de Tráfego*, *Agente de Agendamento*).
  - Badges das ferramentas conectadas (WhatsApp, Google Agenda, CRM, n8n).
  - Badges mono de status em tempo real com luz pulsante (`● RODANDO`, `● AGENDANDO`, `● ONLINE`).
- **Botões Pílula (999px)**: Chamadas para ação compactas com setas indicativas direcionando para o canal oficial de WhatsApp.

### 2.3 Timeline da Evolução Tecnológica (`tess.im4.png`)
Uma seção horizontal de alto valor educativo comparando a transição das soluções:
1. **2016 — Chatbot**: Respostas mecânicas a partir de scripts fechados e opções numéricas.
2. **2021 — Copilot**: Sugestões e correções enquanto o profissional trabalha.
3. **2024 — Agent**: Execução de uma tarefa pontual por vez.
4. **Hoje — Agente de IA Integrado (IX AI)**: Atuação autônoma contínua 24/7, que aprende com as rotinas da empresa e executa dentro dos fluxos reais.

### 2.4 "Mission Control" & Governança "Humano no Controle" (`tess.im3.png`, `tess.im6.png`)
- O cliente de uma clínica ou escritório não quer uma "IA desgovernada". O site demonstrará que a IA qualifica e prepara, mas o gestor/profissional possui controle total sobre a base de conhecimento, permissões, histórico de cada ação e aprovação final de agendamentos.

### 2.5 Lista de Serviços e Nichos (`tess.im7.png`, `tess.im8.png`)
- Cards técnicos de 1px de borda com ícones em traço fino e selos de conformidade **LGPD**, segurança de dados e criptografia de ponta a ponta.

---

## 3. Escopo Funcional dos Serviços

Seção `#servicos` em abas (lista à esquerda, painel à direita; chips roláveis no celular). Cada painel: chamada de resultado, título, descrição e 3 pontos, sem jargão técnico (nada de SDR, n8n, lead, workflow).

1. **Atendimento 24h** — Atendimento no WhatsApp: resposta em segundos, no tom da empresa, equipe assume quando quiser.
2. **Qualificação** — Qualificação de clientes: entende procura, urgência e perfil antes de passar adiante.
3. **Agendamento** — Agenda cheia, sem faltas: marca, confirma, lembra e remarca.
4. **Recuperação de vendas** — Recuperação de orçamentos: retoma quem parou de responder.
5. **Organização** — Cadastro e histórico sempre em dia: conversa vira cadastro sem digitação.
6. **Rotinas** — Rotinas no piloto automático: avisos, relatórios, publicações e tarefas repetitivas.

> Fora do escopo desde 19/10/2026: tráfego pago (Google Ads, Meta Ads e demais), Google Meu Negócio/SEO local e qualquer serviço de agência digital.

---

## 4. Nichos de Mercado Prioritários (ICP)

- **Clínicas de Estética & Dermatologia**: Captação para procedimentos de alto ticket e redução drástica do *no-show* (faltas em consultas).
- **Clínicas Odontológicas**: Captação para implantes e alinhadores com triagem prévia.
- **Escritórios de Advocacia**: Prospecção ética e consultiva em conformidade com o Código de Ética da OAB.
- **Imobiliárias & Corretores**: Filtro automático de capacidade financeira e agendamento de visitas presenciais.

---

## 5. Diretrizes de Conversão, Prova Social e Canais Sociais

- **WhatsApp Oficial da IX AI**: `+55 21 98370-1900` ([https://wa.me/5521983701900](https://wa.me/5521983701900)). Ponto de contato principal presente no Header, no Hero, na seção final e no botão flutuante com badge de notificação.
- **Prova Social Real**: Automação operacional desenvolvida para a **ViaSeg Corretora** (conforme estipulado no plano diretor, sem depoimentos fictícios).
- **Canais Sociais de Tráfego Orgânico**: Links oficiais integrados para LinkedIn, Instagram e Facebook com OpenGraph para pré-visualização refinada.

---

## 6. Critérios de Aceitação e Boas Práticas do Google

- [ ] LCP < 1.8s, CLS < 0.05, INP < 150ms.
- [ ] Marcação semântica HTML5 estrita e dados estruturados Schema.org JSON-LD (`Organization`, `LocalBusiness`, `Service`, `FAQPage`).
- [ ] Imagens convertidas para formato WebP com dimensões explícitas e lazy loading nativo.
- [ ] Design totalmente responsivo (Mobile, Tablet e Desktop) com alternador de tema Dark/Light.
- [ ] Fidelidade de acabamento estético em relação ao benchmark internacional `tess.im`.
