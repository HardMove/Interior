let menuLink = document.querySelector('.nav__link_arrow');
let subMenu = document.querySelector('.nav__submenu');
let arrowBtn = document.querySelector('.nav__arrow');
menuLink.addEventListener('click', function (e) {
   e.preventDefault();
   subMenu.classList.toggle('open');
   arrowBtn.classList.toggle('active');
});