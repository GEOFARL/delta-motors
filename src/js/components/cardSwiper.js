import $ from "jquery";
import Swiper from "swiper/bundle";

$(document).ready(function () {
  const initSwiper = (
    selector,
    spaceBetween = 40,
    slidesPerView = 3,
    breakpoints
  ) => {
    const swiper = new Swiper(selector, {
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
      on: {
        afterInit(swiperInstance) {
          toggleNavigation(swiperInstance);
        },
        slideChange(swiperInstance) {
          toggleNavigation(swiperInstance);
        },
        resize(swiperInstance) {
          toggleNavigation(swiperInstance);
        },
      },
    });

    function toggleNavigation(swiper) {
      const $prev = $(swiper.params.navigation.prevEl);
      const $next = $(swiper.params.navigation.nextEl);

      if (swiper.isBeginning) {
        $prev.hide();
      } else {
        $prev.show();
      }

      if (swiper.isEnd) {
        $next.hide();
      } else {
        $next.show();
      }
    }
  };

  initSwiper(".available-cars-swiper", 20, 3, {
    350: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  });
  initSwiper(".auction-cars-swiper", 20, 3, {
    350: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  });
  initSwiper(".cars-for-u-swiper", 20, 2, {
    350: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1680: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  });
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
