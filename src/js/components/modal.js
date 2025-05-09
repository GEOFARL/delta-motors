import $ from "jquery";

export const initModal = ({ openModalSelector }) => {
  $(openModalSelector).on("click", function () {
    $("#contact-modal").addClass("active");
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
