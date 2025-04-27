import $ from "jquery";

export const initModal = ({ openModalSelector }) => {
  $(openModalSelector).on("click", function () {
    $(".modal-overlay").addClass("active");
  });

  $(".modal__close, .modal-overlay").on("click", function (e) {
    $(".modal-overlay").removeClass("active");
  });

  $(".modal").on("click", function (e) {
    e.stopPropagation();
  });
};
