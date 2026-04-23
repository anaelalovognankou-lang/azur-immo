// ===== NAVBAR AU SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== FILTRES AUTOMATIQUES =====
function filtrer() {
  const type = document.getElementById('filtre-type').value;
  const transaction = document.getElementById('filtre-transaction').value;
  const ville = document.getElementById('filtre-ville').value;

  const cards = document.querySelectorAll('#biens-grid .bien-card');

  cards.forEach(card => {
    const matchType = type === 'tous' || card.dataset.type === type;
    const matchTransaction = transaction === 'tous' || card.dataset.transaction === transaction;
    const matchVille = ville === 'tous' || card.dataset.ville === ville;

    if (matchType && matchTransaction && matchVille) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

document.getElementById('filtre-type').addEventListener('change', filtrer);
document.getElementById('filtre-transaction').addEventListener('change', filtrer);
document.getElementById('filtre-ville').addEventListener('change', filtrer);

// ===== ANIMATIONS AU SCROLL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(
  '.bien-card, .service-card, .temoignage-card, .chiffre, .contact-item'
).forEach(el => {
  el.classList.add('animate');
  observer.observe(el);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
// ===== MENU BURGER MOBILE =====
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});