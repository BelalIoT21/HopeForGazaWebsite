// Shared behaviour used on every page: mobile nav, submenus, footer year,
// header scroll shadow, and the newsletter signup form.

(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');
  const scrim = document.getElementById('navScrim');

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    scrim.classList.remove('is-visible');
    document.body.classList.remove('nav-open');
  }

  function openNav() {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    scrim.classList.add('is-visible');
    document.body.classList.add('nav-open');
  }

  if (toggle && nav && scrim) {
    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeNav() : openNav();
    });
    scrim.addEventListener('click', closeNav);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeNav();
    });
  }

  // Mobile submenu accordions (desktop uses CSS hover/focus instead).
  document.querySelectorAll('.has-submenu > .submenu-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.closest('.has-submenu');
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.has-submenu.is-open').forEach(function (open) {
        if (open !== item) {
          open.classList.remove('is-open');
          open.querySelector('.submenu-toggle').setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // Close the mobile nav after following a link.
  nav && nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('is-scrolled', window.scrollY > 4);
    }, { passive: true });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Newsletter signup — demo only, nothing is sent anywhere.
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    const feedback = newsletterForm.querySelector('.form-feedback');
    newsletterForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!newsletterForm.checkValidity()) {
        feedback.textContent = 'Please fill in every field with a valid email address.';
        feedback.className = 'form-feedback error';
        return;
      }
      const firstName = newsletterForm.elements.firstName.value.trim();
      feedback.textContent = `Thanks, ${firstName}! You're on the list (this is a demo — no email was sent).`;
      feedback.className = 'form-feedback success';
      newsletterForm.reset();
    });
  }
})();
