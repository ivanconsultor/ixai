/**
 * AGÊNCIA IX AI — AVISO DE CONSENTIMENTO DE COOKIES (LGPD)
 * Versão: 1.0.0
 *
 * Regras adotadas:
 * - Nada de medição ou publicidade antes do aceite. O padrão negado é definido
 *   no <head> de cada página (Consent Mode v2), antes de qualquer tag carregar.
 * - Aceitar e recusar têm o mesmo peso visual, como manda a boa prática de LGPD.
 * - A decisão vale 12 meses e pode ser trocada pelo link "Preferências de cookies".
 */

(function () {
  'use strict';

  var CHAVE = 'ixai-consentimento';
  var VERSAO = 1;
  var VALIDADE_DIAS = 365;

  /* ------------------------------------------------------------------
     Estado gravado no navegador
     ------------------------------------------------------------------ */
  function lerDecisao() {
    try {
      var bruto = localStorage.getItem(CHAVE);
      if (!bruto) return null;

      var d = JSON.parse(bruto);
      if (!d || d.versao !== VERSAO || !d.data) return null;

      var idadeDias = (Date.now() - d.data) / 86400000;
      if (idadeDias > VALIDADE_DIAS) return null;

      return d;
    } catch (e) {
      // Navegador em modo privado ou armazenamento bloqueado
      return null;
    }
  }

  function gravarDecisao(estado) {
    try {
      localStorage.setItem(CHAVE, JSON.stringify({ estado: estado, data: Date.now(), versao: VERSAO }));
    } catch (e) {
      // Sem armazenamento, a escolha vale só para esta visita
    }
  }

  /* ------------------------------------------------------------------
     Repasse para as ferramentas de medição
     ------------------------------------------------------------------ */
  function aplicar(estado) {
    var permissao = estado === 'aceito' ? 'granted' : 'denied';

    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: permissao,
        ad_user_data: permissao,
        ad_personalization: permissao,
        analytics_storage: permissao
      });
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'consentimento_definido', consentimento: estado });
  }

  /* ------------------------------------------------------------------
     Banner
     ------------------------------------------------------------------ */
  var banner = null;

  function montar() {
    if (banner) return banner;

    banner = document.createElement('div');
    banner.className = 'consentimento';
    banner.id = 'consentimento';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-modal', 'false');
    banner.setAttribute('aria-labelledby', 'consentimento-titulo');

    banner.innerHTML =
      '<div class="consentimento-caixa">' +
        '<div class="consentimento-texto">' +
          '<h2 id="consentimento-titulo" class="consentimento-titulo">Cookies e medição</h2>' +
          '<p>Usamos cookies de medição e publicidade para entender quais campanhas geram contato. ' +
          'Eles só entram se você autorizar. O site funciona normalmente sem eles. ' +
          'Detalhes na <a href="politica-de-cookies.html">Política de Cookies</a>.</p>' +
        '</div>' +
        '<div class="consentimento-acoes">' +
          '<button type="button" class="btn-pill btn-pill-secondary btn-pill-sm" data-consentimento="recusado">Recusar</button>' +
          '<button type="button" class="btn-pill btn-pill-cyan btn-pill-sm" data-consentimento="aceito">Aceitar</button>' +
        '</div>' +
      '</div>';

    banner.addEventListener('click', function (e) {
      var botao = e.target.closest('[data-consentimento]');
      if (!botao) return;

      var estado = botao.getAttribute('data-consentimento');
      gravarDecisao(estado);
      aplicar(estado);
      fechar();
    });

    document.body.appendChild(banner);
    return banner;
  }

  function abrir() {
    montar();
    // Força um quadro antes de animar, para a transição acontecer
    requestAnimationFrame(function () {
      banner.setAttribute('data-visivel', 'true');
      document.body.setAttribute('data-consentimento-aberto', 'true');
    });
  }

  function fechar() {
    if (!banner) return;
    banner.removeAttribute('data-visivel');
    document.body.removeAttribute('data-consentimento-aberto');
  }

  /* ------------------------------------------------------------------
     Partida
     ------------------------------------------------------------------ */
  function iniciar() {
    var decisao = lerDecisao();

    if (decisao) {
      aplicar(decisao.estado);
    } else {
      abrir();
    }

    // Link "Preferências de cookies" no rodapé de qualquer página
    document.querySelectorAll('[data-abrir-consentimento]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        abrir();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
