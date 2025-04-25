import $ from "jquery";

export const initDropdown = () => {
  $(".custom-dropdown__header").on("click", function () {
    const dropdown = $(this).closest(".custom-dropdown");
    dropdown.toggleClass("open");
  });
};
