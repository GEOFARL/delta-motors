import $ from "jquery";

$(document).ready(function () {
  const updateMedia = (index) => {
    const targets = [".media-img", ".media-content"];

    targets.forEach((selector) => {
      $(selector).removeClass("active").fadeOut(1200);
      $(`${selector}[data-index="${index + 1}"]`)
        .addClass("active")
        .fadeIn(1200);
    });
  };

  const isDesktop = () => window.matchMedia("(min-width: 769px)").matches;

  $(".service-item").each(function (index) {
    $(this).on("mouseenter", function () {
      if (!isDesktop()) return;

      if ($(this).hasClass("active")) {
        return;
      }

      $(".service-item").removeClass("active");
      $(this).addClass("active");
      updateMedia(index);
    });
  });
});
