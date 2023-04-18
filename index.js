const ham = document.querySelector('.hamburguer');
const img = document.querySelector('.img-close');
const menu = document.querySelector('.mbl-menu');
const mtag1 = document.querySelector('.m-menu-tag1');
const mtag2 = document.querySelector('.m-menu-tag2');
const mtag3 = document.querySelector('.m-menu-tag3');

ham.addEventListener('click', () => {
  menu.classList.toggle('mbl-menu_visible');
});
img.addEventListener('click', () => {
  menu.classList.toggle('mbl-menu_visible');
});
function hidde() {
  menu.classList.toggle('mbl-menu_visible');
}
mtag1.addEventListener('click', hidde);
mtag2.addEventListener('click', hidde);
mtag3.addEventListener('click', hidde);