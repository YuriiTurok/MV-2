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


const sliderItem = document.querySelector('.slider__item');
const sliderLine = document.querySelector('.demo__slider-line');
const btnPrev = document.querySelector('.demo__slider-btn-prev');
const btnNext = document.querySelector('.demo__slider-btn-next');

let sliderCount = 0;
let sliderWidth;

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

function showSlide() {
  sliderWidth = sliderItem.offsetWidth;
  sliderLine.style.width = sliderWidth * sliderItem.length + 'px';

  rollSlider();
}
showSlide();


function nextSlide() {
  sliderCount++;
  if (sliderCount > 2) sliderCount = 2;

  rollSlider();
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < -2) sliderCount = -2;

  rollSlider();
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}