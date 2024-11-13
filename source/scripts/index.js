/* в этот файл добавляет скрипты*/
const buttonMenu = document.querySelector('.button-toggle');
const menu = document.querySelector('.main-nav__list');
const nav = document.querySelector('.main-nav');
nav.classList.remove('main-nav--no-js');


buttonMenu.classList.remove('button-toggle--open');
buttonMenu.classList.remove('button-toggle--no-js');

buttonMenu.addEventListener('click', () => {
  buttonMenu.classList.toggle('button-toggle--close');
  menu.classList.toggle('main-nav__list--open');
});
