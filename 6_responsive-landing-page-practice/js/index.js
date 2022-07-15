const hamburgerMenu = document.querySelector('.nav__menu--hamburger');
const navBar = document.querySelector('.nav__menu');

hamburgerMenu.addEventListener('click', () => {
  navBar.classList.toggle('open');
});
