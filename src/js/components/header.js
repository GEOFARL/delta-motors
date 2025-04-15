import $ from "jquery";

export default function initHeader() {
  $(".site-header").addClass("loaded");

  $(".menu-toggle").on("click", function () {
    $(".site-header nav ul").toggleClass("open");
  });
}
