const menuLink = document.querySelector('.nav__link_arrow');
const subMenu = document.querySelector('.nav__submenu');
const arrowBtn = document.querySelector('.nav__arrow');
menuLink.addEventListener('click', function (e) {
   e.preventDefault();
   subMenu.classList.toggle('open');
   arrowBtn.classList.toggle('active');
});