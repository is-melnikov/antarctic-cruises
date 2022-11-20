const MENU = document.querySelector('.menu');
const NAV_TOGGLE = document.querySelector('.menu__toggle');

const showMenu = () => {
  MENU.classList.remove('menu--nojs');

  NAV_TOGGLE.addEventListener('click', () => {
    if (MENU.classList.contains('menu--closed')) {
      MENU.classList.remove('menu--closed');
      MENU.classList.add('menu--opened');
    } else {
      MENU.classList.add('menu--closed');
      MENU.classList.remove('menu--opened');
    }
  });
};

export {showMenu};
