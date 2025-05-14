import $ from "jquery";

export const initModal = ({ openModalSelectors }) => {
  openModalSelectors.forEach((openModalSelector) => {
    $(openModalSelector).on("click", function () {
      $("#contact-modal").addClass("active");
      $("#filters-modal").addClass("active");
      $(".mobile-menu").removeClass("open");
      $("body").removeClass("menu-open");
    });

    $("#open-packet-modal").on("click", function () {
      $("#packet-modal").addClass("active");
      $(".mobile-menu").removeClass("open");
      $("body").removeClass("menu-open");
    });
  });

  $(".modal__close, .modal-overlay").on("click", function (e) {
    $(".modal-overlay").removeClass("active");
  });

  $(".modal").on("click", function (e) {
    e.stopPropagation();
  });

  const $form = $(".contact-us-modal-content .smart-form");
  $form.on("submit", function (e) {
    e.preventDefault();
    const isSuccess = Math.random() < 0.7;
    $(".modal-overlay").removeClass("active");
    $form.find(".error").removeClass("error");

    setTimeout(() => {
      const modalId = isSuccess ? "#success-modal" : "#failure-modal";
      $(modalId).addClass("active");
    }, 300);
  });
};
