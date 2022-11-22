const HTML = document.querySelector('html');
const MENU = document.querySelector('.menu');
const NAV_TOGGLE = document.querySelector('.menu__toggle');
const NAV_LIST = document.querySelector('.navigation__list');

const addsStyles = () => {
  if (HTML.style.getPropertyValue('overflow-y') === 'auto') {
    HTML.style.setProperty('overflow-y', 'hidden');
  } else {
    HTML.style.setProperty('overflow-y', 'auto');
  }
};

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

  NAV_TOGGLE.addEventListener('click', () => {
    addsStyles();
  });

  NAV_LIST.addEventListener('click', () => {
    MENU.classList.remove('menu--opened');
    MENU.classList.add('menu--closed');
    HTML.style.setProperty('overflow-y', 'auto');
  });

  HTML.addEventListener('click', (e) => {
    if (e.target === MENU && MENU.classList.contains('menu--opened')) {
      MENU.classList.remove('menu--opened');
      MENU.classList.add('menu--closed');

      addsStyles();
    }
  });
};


export {showMenu};
