import $ from "jquery";

export const initMobileMenu = () => {
  $(".burger").on("click", function () {
    $(".mobile-menu").addClass("open");
    $("body").addClass("menu-open");
  });

  $(".mobile-menu__close").on("click", function () {
    $(".mobile-menu").removeClass("open");
    $("body").removeClass("menu-open");
  });
};
