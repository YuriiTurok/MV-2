let burgerBtn = document.querySelector(".header__burger-btn");
let menuList = document.querySelector(".header__menu-list");
const body = document.querySelector("body");

burgerBtn.addEventListener('click', function() {
  if (burgerBtn.classList.contains('active')) {
    burgerBtn.classList.remove('active');
    menuList.classList.remove('active');
    body.classList.remove('menu__mobile-opened');
  }
  else {
    body.classList.add('menu__mobile-opened')
    burgerBtn.classList.add('active');
    menuList.classList.add('active');
  }
});

/* ------------------------------------------ */


