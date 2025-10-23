// Retrieving elements from the DOM
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const menuOverlay = document.getElementById('menuOverlay');

// Open/Close Menu Function
function toggleMenu() {
  navMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  hamburger.innerHTML = navMenu.classList.contains('active') ? '×' : '☰';
}

// Clicking the hamburger
hamburger.addEventListener('click', toggleMenu);

// Close the menu after clicking the link
document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    hamburger.innerHTML = '☰';
  });
});

// Close the menu when clicking outside the menu (overlay)
menuOverlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
  hamburger.innerHTML = '☰';
});

// Close the menu by pressing Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    hamburger.innerHTML = '☰';
  }
});

// Opening/closing the menu with the "M" key
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'm') {
    toggleMenu();
  }
});
