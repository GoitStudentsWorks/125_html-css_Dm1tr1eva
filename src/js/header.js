async function initMobileMenu() {
  const a = document.getElementById('mobile-menu-is-open');
  const b = document.getElementById('mobile-menu');
  const c = document.getElementById('mobile-menu-close');
  const aboutCloseMobile = document.getElementById('about-close-mobile-menu');

  const toggleMenu = () => {
    requestAnimationFrame(() => {
      a.classList.toggle('hidann');
      c.classList.toggle('hidann');
      b.classList.toggle('is-open');
    });
  };

  a.addEventListener('click', toggleMenu);
  c.addEventListener('click', toggleMenu);

  for (const item of aboutCloseMobile.children) {
    const link = item.querySelector('a');
    if (link) link.addEventListener('click', toggleMenu);
  }
}

document.addEventListener('DOMContentLoaded', initMobileMenu);
export default initMobileMenu;
