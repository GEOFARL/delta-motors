import $ from "jquery";
import Swiper from "swiper/bundle";

$(document).ready(function () {
  const initSwiper = (selector, spaceBetween = 40) => {
    new Swiper(selector, {
      slidesPerView: 3,
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
  initSwiper(".testimonials-swiper", 28);
});
