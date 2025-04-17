import $ from "jquery";

$(document).ready(function () {
  $(".service-item").each(function (index) {
    $(this).on("mouseenter", function () {
      $(".media-img").removeClass("active").fadeOut(600);
      $(`.media-img[data-index="${index + 1}"]`)
        .addClass("active")
        .fadeIn(600);
    });
  });
});
