const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.querySelector('#year');
const form = document.querySelector('#signup-form');
const formMessage = document.querySelector('#form-message');
const faqItems = document.querySelectorAll('.faq-list details');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (form && formMessage) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const email = String(data.get('email') || '').trim();

    if (!email || !email.includes('@')) {
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    formMessage.textContent = 'Thanks! You are on the VintageTrips founders waitlist.';
    form.reset();
  });
}

if (faqItems.length > 0) {
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) {
        return;
      }

      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    });
  });
}
