let a = document.getElementById('mobile-menu-is-open');
let b = document.getElementById('mobile-menu');
let c = document.getElementById('mobile-menu-close');
let aboutCloseMobile = document.getElementById('about-close-mobile-menu');

function closeModal() {
  a.classList.toggle('hidann');
  c.classList.toggle('hidann');
  b.classList.toggle('is-open');
}
a.addEventListener('click', e => {
  a.classList.toggle('hidann');
  c.classList.toggle('hidann');
  b.classList.toggle('is-open');
});
c.addEventListener('click', e => {
  a.classList.toggle('hidann');
  c.classList.toggle('hidann');
  b.classList.toggle('is-open');
});

for (let i = 0; i < aboutCloseMobile.children.length; i++) {
  aboutCloseMobile.children[i].children[0].addEventListener('click', e => {
    a.classList.toggle('hidann');
    c.classList.toggle('hidann');
    b.classList.toggle('is-open');
  });
}
