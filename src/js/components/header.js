import $ from "jquery";

export function initHeader() {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });
}

function updateActiveHeaderLinks() {
  const currentPath = window.location.pathname + window.location.hash;

  const normalized =
    currentPath === "/catalog.html#available"
      ? "available"
      : currentPath === "/catalog.html#auction"
      ? "auction"
      : currentPath === "/car-tracking.html"
      ? "tracking"
      : currentPath === "/about.html"
      ? "about"
      : null;

  $(".header-menu a, .mobile-menu__list a").removeClass("active");

  $(".header-menu a, .mobile-menu__list a").each(function () {
    const href = $(this).attr("href");

    if (
      (normalized === "available" && href === "catalog.html#available") ||
      (normalized === "auction" && href === "catalog.html#auction") ||
      (normalized === "tracking" && href === "car-tracking.html") ||
      (normalized === "about" && href === "about.html")
    ) {
      $(this).addClass("active");
    }
  });
}

$(document).ready(function () {
  updateActiveHeaderLinks();

  $(window).on("hashchange", function () {
    updateActiveHeaderLinks();
  });
});
