import $ from "jquery";
import "../components/cardSwiper";
import { initMobileMenu } from "../components/mobileMenu";
import { initHeader } from "../components/header";
// import "../components/cardSwiper";

$(function () {
  initMobileMenu();
  initHeader();
  console.log("Car details page initialized");
});

$(window).on("scroll", function () {
  const isMobile = () => window.matchMedia("(max-width: 1024px)").matches;
  if (isMobile()) return;
  const scrollTop = $(window).scrollTop();
  const $imageContainer = $(".car-details__images-container");
  const $container = $(".car-details__container");

  const containerTop = $container.offset().top;
  const containerHeight = $container.outerHeight();
  const imageHeight = $imageContainer.outerHeight();

  const maxOffset = containerHeight - imageHeight;
  const scrollOffset = scrollTop - containerTop + 100;

  let marginTop = 0;
  if (scrollOffset > 0) {
    marginTop = Math.min(scrollOffset, maxOffset);
  }
  $imageContainer.css("margin-top", `${marginTop}px`);
});

$(document).ready(function () {
  const $modal = $("#galleryModal");
  const $openBtn = $(".car-details__more-images-item-more");
  const $closeBtn = $(".gallery-modal__close, .gallery-modal__overlay");

  $openBtn.on("click", function () {
    $modal.addClass("active");
  });

  $closeBtn.on("click", function () {
    $modal.removeClass("active");
  });
});
