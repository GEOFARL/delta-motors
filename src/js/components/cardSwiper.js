import $ from "jquery";
import Swiper from "swiper/bundle";

$(document).ready(function () {
  console.log("Card Swiper initialized");
  new Swiper(".available-cars-swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: false,
  });
});
