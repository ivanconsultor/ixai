/**
 * AGÊNCIA IX AI — CONTROLADOR PRINCIPAL (ES6+)
 * Versão: 1.0.0
 * Padrão de Engenharia: Zero Dependências Externas / Zero Runtime Lag
 */

/* Preferência de movimento do sistema: consultada por todas as animações */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initIntersectionObserver();
  initSmoothScroll();
  initHeroConnectors();
  initDynamicAgentStatus();
  initServiceTabs();
});

/**
 * 1. Alternador de Tema Dark / Light com persistência em LocalStorage
 */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const root = document.documentElement;
  
  // Recupera preferência salva ou respeita preferência do sistema
  const savedTheme = localStorage.getItem('ixai-theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      root.setAttribute('data-theme', newTheme);
      localStorage.setItem('ixai-theme', newTheme);
      
      // Feedback sonoro sutil ou acessibilidade
      toggleBtn.setAttribute('aria-label', `Alternar para tema ${currentTheme}`);
    });
  }
}

/**
 * 2. Menu gaveta das telas pequenas (abre, fecha no Esc e fecha ao escolher um link)
 */
function initMobileNav() {
  const header = document.getElementById('main-header');
  const toggleBtn = document.getElementById('nav-toggle');
  const panel = document.getElementById('mobile-nav');

  if (!header || !toggleBtn || !panel) return;

  function setOpen(isOpen) {
    header.setAttribute('data-nav-open', String(isOpen));
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    toggleBtn.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
  }

  setOpen(false);

  toggleBtn.addEventListener('click', () => {
    setOpen(header.getAttribute('data-nav-open') !== 'true');
  });

  panel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.getAttribute('data-nav-open') === 'true') {
      setOpen(false);
      toggleBtn.focus();
    }
  });

  // Ao passar para a largura de desktop o menu volta ao estado fechado
  window.matchMedia('(min-width: 860px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}

/**
 * 3. Intersection Observer para Revelação Suave (Scroll Reveal) sem Layout Shift
 */
function initIntersectionObserver() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  if (!('IntersectionObserver' in window)) {
    // Fallback gracioso para navegadores antigos
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * 4. Navegação com Scroll Suave e offset de cabeçalho fixo
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const header = document.getElementById('main-header');
  const headerHeight = header ? header.offsetHeight : 72;

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
        });
      }
    });
  });
}

/**
 * 5. Conectores da hero: ligam cada agente ao centro da headline no desktop e,
 *    no celular e no tablet, descem ate o inicio da secao de servicos.
 *    Os tracos saem da posicao real de cada no, entao acompanham qualquer
 *    largura de tela e a flutuacao. Sem JS, a hero simplesmente nao tem linhas.
 */
var redesenharConectores = function () {};

function initHeroConnectors() {
  var svg = document.getElementById('hero-conectores');
  var constelacao = document.querySelector('.hero-agents-constellation');
  var centro = document.querySelector('.hero-content');
  // Destino no celular e no tablet: o badge que abre a secao de servicos
  var cabecalhoServicos = document.querySelector('#servicos .section-header');
  var badgeServicos = document.querySelector('#servicos .badge-capsule');
  var nos = document.querySelectorAll('.agent-node');

  if (!svg || !constelacao || !centro || !nos.length) return;

  var NS = 'http://www.w3.org/2000/svg';
  var caminhos = [];

  // Um caminho e um ponto de ancoragem por agente
  nos.forEach(function () {
    var path = document.createElementNS(NS, 'path');
    var ponto = document.createElementNS(NS, 'circle');
    ponto.setAttribute('r', '2.5');
    svg.appendChild(path);
    svg.appendChild(ponto);
    caminhos.push({ path: path, ponto: ponto });
  });

  function desenhar() {
    // Fora do breakpoint da constelacao nao ha o que ligar
    if (getComputedStyle(svg).display === 'none') return;

    // Na orbita (desktop) as linhas apontam ao centro do texto; na faixa de
    // celular e tablet elas descem juntas ate o inicio dos servicos
    var modoOrbita = window.innerWidth >= 1200;
    var base = constelacao.getBoundingClientRect();
    var alvo = (modoOrbita || !badgeServicos ? centro : badgeServicos).getBoundingClientRect();
    var destino = {
      x: alvo.left + alvo.width / 2 - base.left,
      y: alvo.top + alvo.height / 2 - base.top
    };

    svg.setAttribute('viewBox', '0 0 ' + base.width + ' ' + base.height);

    nos.forEach(function (no, i) {
      var r = no.getBoundingClientRect();
      var origem = {
        x: r.left + r.width / 2 - base.left,
        y: r.top + r.height / 2 - base.top
      };

      var fracao;

      if (modoOrbita) {
        // A linha para na borda da coluna de texto, com folga, em vez de invadi-la
        var folgaX = 28;
        var folgaY = 18;
        var caixa = {
          esq: alvo.left - base.left - folgaX,
          dir: alvo.right - base.left + folgaX,
          topo: alvo.top - base.top - folgaY,
          baixo: alvo.bottom - base.top + folgaY
        };

        fracao = 0.55;
        for (var t = 0.06; t <= 0.55; t += 0.02) {
          var px = origem.x + (destino.x - origem.x) * t;
          var py = origem.y + (destino.y - origem.y) * t;
          if (px > caixa.esq && px < caixa.dir && py > caixa.topo && py < caixa.baixo) {
            fracao = Math.max(0.08, t - 0.03);
            break;
          }
        }
      } else {
        // Desce inteira e encosta logo acima do badge de servicos
        var parada = alvo.top - base.top - 12;
        fracao = (parada - origem.y) / (destino.y - origem.y || 1);
        fracao = Math.min(1, Math.max(0.1, fracao));
      }

      var fim = {
        x: origem.x + (destino.x - origem.x) * fracao,
        y: origem.y + (destino.y - origem.y) * fracao
      };

      // Curva suave: controle deslocado na perpendicular do trecho
      var meio = { x: (origem.x + fim.x) / 2, y: (origem.y + fim.y) / 2 };
      var dx = fim.x - origem.x;
      var dy = fim.y - origem.y;
      var curva = 0.12;
      var controle = { x: meio.x - dy * curva, y: meio.y + dx * curva };

      caminhos[i].path.setAttribute(
        'd',
        'M' + origem.x.toFixed(1) + ' ' + origem.y.toFixed(1) +
        ' Q' + controle.x.toFixed(1) + ' ' + controle.y.toFixed(1) +
        ' ' + fim.x.toFixed(1) + ' ' + fim.y.toFixed(1)
      );
      caminhos[i].ponto.setAttribute('cx', fim.x.toFixed(1));
      caminhos[i].ponto.setAttribute('cy', fim.y.toFixed(1));
    });
  }

  redesenharConectores = desenhar;

  desenhar();
  window.addEventListener('resize', desenhar);
  // O cabecalho dos servicos nasce deslocado (data-reveal); ao assentar, redesenha
  if (cabecalhoServicos) {
    cabecalhoServicos.addEventListener('transitionend', desenhar);
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(desenhar);
  }
}

/**
 * 6. Flutuação orbital dos agentes na hero.
 *    Só roda quando a constelação está visível na tela, a aba está em foco,
 *    a largura ativa a constelação e o sistema não pede menos movimento.
 */
function initDynamicAgentStatus() {
  const constellation = document.querySelector('.hero-agents-constellation');
  const agentNodes = document.querySelectorAll('.agent-node');

  if (!constellation || !agentNodes.length) return;
  if (prefersReducedMotion.matches || window.innerWidth < 1200) return;

  let angle = 0;
  let frameId = null;
  let isInView = false;

  function orbit() {
    angle += 0.008;
    agentNodes.forEach((node, index) => {
      const offset = Math.sin(angle + index * 1.5) * 4;
      node.style.transform = `translateY(${offset}px)`;
    });
    redesenharConectores();
    frameId = requestAnimationFrame(orbit);
  }

  function sync() {
    const shouldRun = isInView && !document.hidden;

    if (shouldRun && frameId === null) {
      frameId = requestAnimationFrame(orbit);
      return;
    }

    if (!shouldRun && frameId !== null) {
      cancelAnimationFrame(frameId);
      frameId = null;
      agentNodes.forEach(node => { node.style.transform = ''; });
      redesenharConectores();
    }
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      isInView = entries[0].isIntersecting;
      sync();
    }, { threshold: 0 }).observe(constellation);
  } else {
    isInView = true;
  }

  document.addEventListener('visibilitychange', sync);
  sync();
}

/**
 * 7. Abas da seção de serviços.
 *    Sem JS todos os painéis ficam visíveis; aqui só um aparece por vez.
 *    Setas do teclado navegam entre as abas (padrão WAI-ARIA de tabs).
 */
function initServiceTabs() {
  const tabs = [...document.querySelectorAll('.service-tab')];
  if (!tabs.length) return;

  function select(tab, focus) {
    tabs.forEach(t => {
      const ativo = t === tab;
      t.setAttribute('aria-selected', ativo ? 'true' : 'false');
      t.tabIndex = ativo ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !ativo;
    });
    if (focus) tab.focus();
    tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(tab, false));
    tab.addEventListener('keydown', e => {
      const passo = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (e.key === 'Home') { e.preventDefault(); select(tabs[0], true); return; }
      if (e.key === 'End') { e.preventDefault(); select(tabs[tabs.length - 1], true); return; }
      if (!passo) return;
      e.preventDefault();
      select(tabs[(i + passo + tabs.length) % tabs.length], true);
    });
  });

  select(tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0], false);
}
