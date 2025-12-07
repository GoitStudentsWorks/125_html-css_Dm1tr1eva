let a = document.getElementById('mobile-menu-is-open');
let b = document.getElementById('mobile-menu');
let c = document.getElementById('mobile-menu-close');
let aboutCloseMobile = document.getElementById('about-close-mobile-menu');
let advantagesCloseMobile = document.getElementById(
  'advantages-close-mobile-menu'
);
let assortmentCloseMobile = document.getElementById(
  'assortment-close-mobile-menu'
);
let galleryCloseMobile = document.getElementById('gallery-close-mobile-menu');
let feedbacksCloseMobile = document.getElementById(
  'feedbacks-close-mobile-menu'
);
let supportCloseMobile = document.getElementById('support-close-mobile-menu');

aboutCloseMobile.addEventListener('click', e => {
  a.classList.toggle('hidann');
  c.classList.toggle('hidann');
  b.classList.toggle('is-open');
});
advantagesCloseMobile.addEventListener('click', e => {
  a.classList.toggle('hidann');
  c.classList.toggle('hidann');
  b.classList.toggle('is-open');
});
assortmentCloseMobile.addEventListener('click', e => {
  a.classList.toggle('hidann');
  c.classList.toggle('hidann');
  b.classList.toggle('is-open');
});
galleryCloseMobile.addEventListener('click', e => {
  a.classList.toggle('hidann');
  c.classList.toggle('hidann');
  b.classList.toggle('is-open');
});
feedbacksCloseMobile.addEventListener('click', e => {
  a.classList.toggle('hidann');
  c.classList.toggle('hidann');
  b.classList.toggle('is-open');
});
supportCloseMobile.addEventListener('click', e => {
  a.classList.toggle('hidann');
  c.classList.toggle('hidann');
  b.classList.toggle('is-open');
});

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
