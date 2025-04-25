import $ from "jquery";

$(function () {
  console.log("Catalog page initialized");

  function updateBreadcrumb() {
    const hash = window.location.hash;
    const $status = $("#breadcrumb-status");

    if (hash === "#available") {
      $status.text("В наявності");
    } else if (hash === "#auction") {
      $status.text("На аукціоні");
    } else {
      $status.text("");
    }
  }

  updateBreadcrumb();
  $(window).on("hashchange", updateBreadcrumb);
});
