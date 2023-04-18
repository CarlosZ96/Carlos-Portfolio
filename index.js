const ham = document.querySelector('.hamburguer');
const img = document.querySelector('.img-close');
const menu = document.querySelector('.dsk-menu');

ham.addEventListener('click', () => {
    menu.classList.toggle('dsk-menu_visible');
});
img.addEventListener('click', () => {
    menu.classList.toggle('dsk-menu_visible');
});