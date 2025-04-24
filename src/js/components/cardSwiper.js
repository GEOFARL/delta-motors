import $ from "jquery";
import Swiper from "swiper/bundle";

$(document).ready(function () {
  const initSwiper = (selector, spaceBetween = 40, slidesPerView = 3) => {
    new Swiper(selector, {
      slidesPerView,
      spaceBetween: spaceBetween,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: false,
    });
  };

  initSwiper(".available-cars-swiper");
  initSwiper(".auction-cars-swiper");
  initSwiper(".cars-for-u-swiper", 20);
  initSwiper(".main-image-swiper", 40, 1);
  initSwiper(".testimonials-swiper", 28);
});
