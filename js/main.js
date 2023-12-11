let burgerBtn = document.querySelector(".header__burger-btn");
let menuList = document.querySelector(".header__menu-list");

burgerBtn.addEventListener('click', function() {
  if (burgerBtn.classList.contains('active')) {
    burgerBtn.classList.remove('active');
    menuList.classList.remove('active');
  }
  else {
    burgerBtn.classList.add('active');
    menuList.classList.add('active');
  }
});