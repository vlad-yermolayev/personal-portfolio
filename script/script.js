const HEADER = document.querySelector('.header');
const BUTTON = HEADER.querySelector('.header__button');
const YEAR_ELEMENT = document.querySelector('.footer__year');
const CURRENT_YEAR = new Date().getFullYear();

YEAR_ELEMENT.textContent = CURRENT_YEAR;

BUTTON.addEventListener('click', (e) => {
  HEADER.classList.toggle('header--menu-open');
  console.log('Add');
});