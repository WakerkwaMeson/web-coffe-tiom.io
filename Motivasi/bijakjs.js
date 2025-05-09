// Toggle Menu Function for Mobile View
const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const navMenu = document.querySelector('.nav-menu');

// Toggle the visibility of the menu
menuOpenButton.addEventListener('click', () => {
  navMenu.classList.add('active');
});

menuCloseButton.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

// Optional: Close the menu if clicked outside of the menu (for better UX)
window.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !menuOpenButton.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});

// Smooth Scroll for Internal Links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Adjusted for fixed navbar
      behavior: 'smooth'
    });
  });
});
