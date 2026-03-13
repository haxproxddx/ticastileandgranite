// Core interactions: navbar behavior, scroll animations, counters, parallax

(function () {
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (!navbar) return;

    function onScroll() {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll);
    onScroll();

    if (navToggle && navLinks) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
      });

      navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          navToggle.classList.remove('open');
          navLinks.classList.remove('open');
        });
      });
    }
  }

  function initScrollAnimations() {
    const animated = document.querySelectorAll('[data-animate]');
    if (!animated.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    animated.forEach((el) => observer.observe(el));
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter') || '0', 10);
          if (!target || el.dataset.counterDone) return;
          el.dataset.counterDone = 'true';

          let current = 0;
          const duration = 800;
          const start = performance.now();

          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            current = Math.floor(progress * target);
            el.textContent = progress < 1 ? `${current}+` : `${target}+`;
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((el) => observer.observe(el));
  }

  function initParallax() {
    const text = document.querySelector('.hero-parallax-text');
    if (!text) return;

    window.addEventListener('scroll', () => {
      const offset = window.scrollY * 0.15;
      text.style.transform = `translateY(${offset}px)`;
    });
  }

  function initSmoothAnchorScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href')?.slice(1);
        const target = targetId ? document.getElementById(targetId) : null;
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function init() {
    initNavbar();
    initScrollAnimations();
    initCounters();
    initParallax();
    initSmoothAnchorScrolling();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

