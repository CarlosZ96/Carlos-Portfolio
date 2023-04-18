const ham = document.querySelector('.hamburguer');
const img = document.querySelector('.img-close');
const menu = document.querySelector('.mbl-menu');

ham.addEventListener('click', () => {
  menu.classList.toggle('mbl-menu_visible');
});
img.addEventListener('click', () => {
  menu.classList.toggle('mbl-menu_visible');
});