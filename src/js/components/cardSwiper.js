import $ from "jquery";
import Swiper from "swiper/bundle";

const stylePaginationBullets = (swiperInstance) => {
  const bullets = swiperInstance.pagination.bullets;
  bullets.forEach((bullet, index) => {
    const distance = Math.abs(swiperInstance.realIndex - index);
    bullet.classList.remove(
      "bullet-distance-0",
      "bullet-distance-1",
      "bullet-distance-2",
      "bullet-distance-far"
    );

    if (distance === 0) {
      bullet.classList.add("bullet-distance-0");
    } else if (distance === 1) {
      bullet.classList.add("bullet-distance-1");
    } else if (distance === 2) {
      bullet.classList.add("bullet-distance-2");
    } else {
      bullet.classList.add("bullet-distance-far");
    }
  });
};

$(document).ready(function () {
  const initSwiper = (
    selector,
    spaceBetween = 40,
    slidesPerView = 3,
    breakpoints
  ) => {
    const $container = $(selector);
    const $prev = $container.find(".swiper-button-prev");
    const $next = $container.find(".swiper-button-next");

    new Swiper(selector, {
      slidesPerView,
      spaceBetween,
      loop: false,
      navigation: {
        nextEl: $next[0],
        prevEl: $prev[0],
      },
      pagination: {
        el: $container.find(".swiper-pagination")[0],
        clickable: true,
      },
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
          stylePaginationBullets(swiperInstance);
        },
        slideChange(swiperInstance) {
          toggleNavigation(swiperInstance);
          stylePaginationBullets(swiperInstance);
        },
        resize(swiperInstance) {
          toggleNavigation(swiperInstance);
        },
      },
    });

    function toggleNavigation(swiper) {
      if (window.matchMedia("(max-width: 768px)").matches) return;
      const $prevButton = $(swiper.params.navigation.prevEl);
      const $nextButton = $(swiper.params.navigation.nextEl);

      if (swiper.isBeginning) {
        $prevButton.hide();
      } else {
        $prevButton.show();
      }

      if (swiper.isEnd) {
        $nextButton.hide();
      } else {
        $nextButton.show();
      }
    }
  };

  initSwiper(".available-cars-swiper", 20, 3, {
    350: { slidesPerView: 1, spaceBetween: 20 },
    1024: { slidesPerView: 2, spaceBetween: 20 },
  });

  initSwiper(".auction-cars-swiper", 20, 3, {
    350: { slidesPerView: 1, spaceBetween: 20 },
    1024: { slidesPerView: 2, spaceBetween: 20 },
  });

  initSwiper(".cars-for-u-swiper", 20, 2, {
    350: { slidesPerView: 1, spaceBetween: 20 },
    1024: { slidesPerView: 2, spaceBetween: 20 },
    1680: { slidesPerView: 3, spaceBetween: 20 },
  });

  initSwiper(".main-image-swiper", 40, 1);
  initSwiper(".gallery-swiper", 0, 1);

  initSwiper(".testimonials-swiper", 28, 3, {
    350: { slidesPerView: 1, spaceBetween: 40 },
    768: { slidesPerView: 2, spaceBetween: 40 },
  });
});
