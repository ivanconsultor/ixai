# RETOMAR — site da IX AI

Atualizado em 06/11/2026.

## Onde o trabalho parou

O site está pronto e medido. O código está versionado aqui mesmo (`C01 site`,
branch `main`), e o pacote para subir está montado em
`CA15 IX AI\site-ixai.zip` — 28 arquivos, 258 KB, tudo na raiz do zip.

O que impede ir ao ar não é código: é que `ixai.com.br` ainda não existe no DNS,
e o site inteiro aponta para esse endereço.

## O que o Ivan vai entregar

Ele avisa quando cada item estiver pronto. Nada aqui depende de mim.

| # | Item | Por que trava o site |
|---|------|----------------------|
| 1 | **Domínio registrado** no Registro.br (`ixai.com.br`) | O `canonical` das 5 páginas, o `og:image`, o `sitemap.xml` e o `robots.txt` apontam para ele |
| 2 | **DNS na Cloudflare**, apontando para a Hostinger | Sem isso o domínio não resolve. Se ligar o proxy, o modo SSL tem que ser **Full (strict)**, nunca Flexible |
| 3 | **E-mail `contato@ixai.com.br`** criado na Hostinger | O endereço está escrito no rodapé, nas 3 páginas legais e na 404 |
| 4 | **Perfis de mídia social** criados | O schema e os botões declaram os 3 endereços da tabela abaixo |

Perfis declarados no site (endereços definidos pelo Ivan em 06/11/2026; Facebook e Instagram ficaram `ixai.br`; o LinkedIn de empresa não aceita ponto, por isso é `ixai`):

| Rede | Endereço no site |
|------|------------------|
| Facebook | `facebook.com/ixai.br` |
| Instagram | `instagram.com/ixai.br` |
| LinkedIn | `linkedin.com/company/ixai` |

A ordem é sempre Facebook, Instagram, LinkedIn, nos três lugares do `index.html`:
schema `sameAs`, botões pílula da coluna 4 do rodapé e barra de ícones inferior.

## O que eu faço quando cada coisa chegar

| Chegou | Eu faço |
|--------|---------|
| Domínio + DNS respondendo | Confiro o DNS, abro `https://ixai.com.br`, testo o redirecionamento de `www` e de `http`, e refaço as medições na URL real |
| Site no ar | Testo a página 404 com um endereço inexistente, rodo PageSpeed Insights e o Teste de Resultados Aprimorados, e reporto |
| Search Console criado | Envio o `sitemap.xml` e acompanho a indexação |
| Perfis sociais criados | Confiro se batem com o schema e corrijo se mudou |
| Uma semana de HTTPS estável | Devolvo o HSTS para 2 anos (a linha pronta está comentada no `.htaccess`) |

## Também pendente, independente do domínio

- **GitHub.** O repositório existe só aqui no PC. O `gh` não está instalado nesta
  máquina. Ou o Ivan instala o `gh` e eu crio o repositório privado e empurro, ou
  ele cria o repositório vazio e me passa o endereço.
- **GTM.** Quando entrar, a CSP do `.htaccess` precisa mudar **na mesma publicação**:
  acrescentar `https://www.googletagmanager.com` e `https://www.google-analytics.com`
  em `script-src` e `connect-src`. Se o container subir antes, o navegador bloqueia
  a tag em silêncio e a medição não existe. O lembrete está escrito no `.htaccess`.
- **Revisão jurídica** das 3 páginas legais.
- **4ª foto de avatar** (Agente SDR, homem de 32 anos, barba curta). As outras 3
  já estão aplicadas.

## Como subir o zip, quando chegar a hora

1. Extrair **pelo gerenciador de arquivos da Hostinger**, não no PC — o `.htaccess`
   começa com ponto e o Windows o esconde.
2. Extrair na raiz da `public_html`, conferindo que os arquivos ficaram na raiz e
   não dentro de uma subpasta.
3. Ligar "mostrar arquivos ocultos" no gerenciador e confirmar que o `.htaccess`
   está lá. Sem ele não há HTTPS forçado, cache, cabeçalho de segurança nem a 404.

O relatório completo, com as medições, está no artefato **Publicação do site IX AI**.
