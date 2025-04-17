import $ from "jquery";

$(document).ready(function () {
  const updateMedia = (index) => {
    const targets = [".media-img", ".media-content"];

    targets.forEach((selector) => {
      $(selector).removeClass("active").fadeOut(600);
      $(`${selector}[data-index="${index + 1}"]`)
        .addClass("active")
        .fadeIn(600);
    });
  };

  $(".service-item").each(function (index) {
    $(this).on("mouseenter", () => {
      $(".service-item").removeClass("active");
      $(this).addClass("active");
      updateMedia(index);
    });
  });
});
