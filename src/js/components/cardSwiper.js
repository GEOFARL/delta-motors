import $ from "jquery";
import Swiper from "swiper/bundle";

$(document).ready(function () {
  const initSwiper = (
    selector,
    spaceBetween = 40,
    slidesPerView = 3,
    breakpoints
  ) => {
    new Swiper(selector, {
      slidesPerView,
      spaceBetween: spaceBetween,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: false,
      breakpoints: {
        1536: {
          slidesPerView: slidesPerView,
          spaceBetween: spaceBetween,
        },
        ...breakpoints,
      },
    });
  };

  initSwiper(".available-cars-swiper", 40, 3, {
    350: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  });
  initSwiper(".auction-cars-swiper", 40, 3, {
    350: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  });
  initSwiper(".cars-for-u-swiper", 20);
  initSwiper(".main-image-swiper", 40, 1);
  initSwiper(".testimonials-swiper", 28, 3, {
    350: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  });
});
