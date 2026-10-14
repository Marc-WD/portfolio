(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (!toggle || !nav) return;
  const close = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { close(); toggle.focus(); } });
  document.addEventListener('click', e => { if (!e.target.closest('.site-header')) close(); });
  window.matchMedia('(min-width:901px)').addEventListener('change', close);
  if (window.lucide) window.lucide.createIcons();
  const top = document.querySelector('#scrollTopBtn');
  if (top) {
    top.setAttribute('href', '#'); top.setAttribute('aria-label', 'Back to top');
    window.addEventListener('scroll', () => top.classList.toggle('show', window.scrollY > 300), { passive: true });
  }
})();
