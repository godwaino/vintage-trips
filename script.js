/* ============================================================
   VintageTrips – Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll-aware sticky nav ─────────────────────────────── */
  const globalNav = document.getElementById('global-nav');

  if (globalNav) {
    const onScroll = () => {
      globalNav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initialise
  }

  /* ── Active nav link highlighting ───────────────────────── */
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  navLinks.forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') || '/';
    if (linkPath === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ── Mobile menu toggle ──────────────────────────────────── */
  const menuToggle = document.querySelector('.menu-toggle');
  const navList    = document.querySelector('.nav-links');

  const hamburgerSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  const closeSVG     = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.innerHTML = isOpen ? closeSVG : hamburgerSVG;
    });

    // Close when a link is clicked
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = hamburgerSVG;
      });
    });

    // Close when clicking outside
    document.addEventListener('click', e => {
      if (!e.target.closest('.nav') && navList.classList.contains('open')) {
        navList.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = hamburgerSVG;
      }
    });

    // Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navList.classList.contains('open')) {
        navList.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = hamburgerSVG;
        menuToggle.focus();
      }
    });
  }

  /* ── Scroll-to-top button ────────────────────────────────── */
  const scrollTopBtn = document.getElementById('scroll-top');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Scroll-reveal animation ─────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal, .card, .section-header');

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    revealEls.forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Smooth scroll for anchor links ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Footer year ─────────────────────────────────────────── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Newsletter form (legacy fallback) ───────────────────── */
  const signupForm   = document.getElementById('signup-form');
  const formMessage  = document.getElementById('form-message');

  if (signupForm && !signupForm.hasAttribute('data-handled')) {
    signupForm.addEventListener('submit', async e => {
      if (!signupForm.hasAttribute('data-netlify')) {
        e.preventDefault();
        const email = signupForm.email?.value || '';
        if (!email || !email.includes('@')) {
          showMsg('Please enter a valid email address.', 'error');
          return;
        }
        showMsg('Thank you! Check your inbox for confirmation.', 'success');
        signupForm.reset();
      }
    });
  }

  function showMsg(msg, type) {
    if (!formMessage) return;
    formMessage.textContent = msg;
    const colours = { error: '#dc2626', success: '#059669', info: '#3d2db8' };
    formMessage.style.color = colours[type] || colours.info;
    if (type === 'success') setTimeout(() => { formMessage.textContent = ''; }, 5000);
  }

})();
