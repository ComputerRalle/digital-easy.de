'use strict';

// Progressive enhancement: navigation stays visible if JavaScript is unavailable.
(() => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-navigation');
  if (!header || !menu || !nav) return;
  const desktop = window.matchMedia('(min-width: 64rem)');
  const setMenu = (open, returnFocus = false) => {
    header.classList.toggle('nav-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    if (returnFocus) menu.focus();
  };
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  header.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      setMenu(false, true);
    }
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });
  desktop.addEventListener('change', () => {
    const focusInsideNav = nav.contains(document.activeElement);
    setMenu(false, !desktop.matches && focusInsideNav);
  });
  header.classList.add('nav-enhanced');
  menu.hidden = false;
})();

// Deliberately not persisted: no cookies or Web Storage.
(() => {
  const toggle = document.querySelector('.contrast-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const enabled = document.documentElement.classList.toggle('high-contrast');
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.setAttribute('aria-label', enabled ? 'Hohen Kontrast ausschalten' : 'Hohen Kontrast einschalten');
  });
  toggle.hidden = false;
})();

// A mailto handoff prepares a draft; it cannot confirm opening or delivery.
(() => {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const name = form.elements.namedItem('name');
  const message = form.elements.namedItem('message');
  const status = document.getElementById('contact-status');
  for (const field of [name, message]) {
    field.addEventListener('input', () => field.setCustomValidity(''));
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    for (const field of [name, message]) {
      field.setCustomValidity(field.value.trim() ? '' : 'Bitte füllen Sie dieses Feld aus.');
    }
    if (!form.reportValidity()) return;
    const body = [
      `Name: ${name.value.trim()}`,
      '', 'Nachricht:',
      message.value.trim().replace(/\r\n|\r|\n/g, '\r\n'),
    ].join('\r\n');
    const uri = 'mailto:kontakt@ralf-peter-kleinert.de'
      + '?subject=' + encodeURIComponent('Kontaktformular digital-easy.de')
      + '&body=' + encodeURIComponent(body);
    status.textContent = 'Die Übergabe an Ihr Mailprogramm wurde angefordert. '
      + 'Die Nachricht wurde noch nicht versendet. Falls sich kein Mailprogramm öffnet '
      + 'oder Text fehlt, kopieren Sie Ihre Eingaben und schreiben Sie an '
      + 'kontakt@ralf-peter-kleinert.de. Ihre Eingaben bleiben hier erhalten.';
    window.location.href = uri;
  });
  form.hidden = false;
})();
