// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileMenu.style.maxHeight = '400px';
    mobileMenu.style.opacity = '1';
    menuBtn.innerHTML = '&#10005;';
    menuBtn.style.transform = 'rotate(90deg)';
  } else {
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.opacity = '0';
    menuBtn.innerHTML = '&#9776;';
    menuBtn.style.transform = 'rotate(0deg)';
  }
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.opacity = '0';
    menuBtn.innerHTML = '&#9776;';
    menuBtn.style.transform = 'rotate(0deg)';
  });
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-up-fast');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

// Menu tabs
function switchTab(tab) {
  document.querySelectorAll('.menu-tab').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active-tab'));
  document.getElementById(tab).classList.remove('hidden');
  document.getElementById('tab-' + tab).classList.add('active-tab');
}

// Reservation form
function submitReservation() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  if (!name || !email || !date || !time || !guests) {
    alert('Please fill in all required fields.');
    return;
  }

  const form = document.getElementById('reservationForm');
  const success = document.getElementById('successMsg');

  form.style.opacity = '0';
  form.style.transition = 'opacity 0.4s ease';

  setTimeout(() => {
    form.classList.add('hidden');
    success.classList.remove('hidden');
    success.style.opacity = '0';
    success.style.transition = 'opacity 0.4s ease';
    setTimeout(() => success.style.opacity = '1', 50);
  }, 400);
}