// Tahun otomatis di footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animasi muncul saat di-scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Highlight menu nav sesuai section yang lagi dilihat
const links = document.querySelectorAll('.nav nav a');
const sections = [...links].map((a) => document.querySelector(a.getAttribute('href')));
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach((s) => s && navObserver.observe(s));

// Ikon musik berputar tiap diklik, dan ganti simbol
const icon = document.getElementById('musicIcon');
const notes = ['♪', '♫', '♬', '♩'];
let n = 0;
icon.style.cursor = 'pointer';
icon.addEventListener('click', () => {
  n = (n + 1) % notes.length;
  icon.textContent = notes[n];
  icon.classList.add('spin');
  setTimeout(() => icon.classList.remove('spin'), 400);
});
