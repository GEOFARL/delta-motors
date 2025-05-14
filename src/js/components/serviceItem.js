import $ from "jquery";

$(document).ready(function () {
  const isDesktop = () => window.matchMedia("(min-width: 769px)").matches;
  $(".service-item.active").each(function () {
    if (isDesktop()) return;
    const $body = $(this).find(".service-item__body");
    $body.css("height", $body[0].scrollHeight + "px");
    $body.css("margin-top", 16 + "px");
  });

  const updateMedia = (index) => {
    const targets = [".media-img", ".media-content"];

    targets.forEach((selector) => {
      $(selector).removeClass("active").fadeOut(800);
      $(`${selector}[data-index="${index + 1}"]`)
        .addClass("active")
        .fadeIn(800);
    });
  };

  const closeAllItems = () => {
    $(".service-item").removeClass("active");
    $(".service-item__body").each(function () {
      closeItem($(".service-item"));
    });
  };

  const closeItem = ($item) => {
    const $body = $item.find(".service-item__body");
    const currentHeight = $body[0].scrollHeight;
    $body.css("height", currentHeight + "px");
    $body[0].offsetHeight;
    $body.css("height", "0px");
    $body.css("margin-top", 0 + "px");
    $item.removeClass("active");
  };

  const openItem = ($item) => {
    if (!isDesktop()) {
      const $body = $item.find(".service-item__body");
      $body.css("height", $body[0].scrollHeight + "px");
      $body.css("margin-top", 16 + "px");
      $body.one("transitionend", function () {
        if ($item.hasClass("active")) {
          $(this).css("height", "auto");
        }
      });
    }
    $item.addClass("active");
  };

  $(".service-item").each(function (index) {
    const $item = $(this);
    $item.on("mouseenter", function () {
      if (!isDesktop() || $item.hasClass("active")) return;

      closeAllItems();
      openItem($item);
      updateMedia(index);
    });
    $item.on("click", function () {
      if (isDesktop()) return;
      const isActive = $item.hasClass("active");

      if (isActive) {
        closeItem($item);
      } else {
        closeAllItems();
        openItem($item);
      }
    });
  });
});
