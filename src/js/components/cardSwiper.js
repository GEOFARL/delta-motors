import $ from "jquery";
import Swiper from "swiper/bundle";

$(document).ready(function () {
  const initSwiper = (selector) => {
    new Swiper(selector, {
      slidesPerView: 3,
      spaceBetween: 40,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: false,
    });
  };

  initSwiper(".available-cars-swiper");
  initSwiper(".auction-cars-swiper");
});
