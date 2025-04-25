import $ from "jquery";
import { initDropdown } from "../components/dropdown";

$(function () {
  console.log("Catalog page initialized");
  updateCatalogPage();
  initDropdown();
  $(window).on("hashchange", updateCatalogPage);
});

function updateCatalogPage() {
  const hash = window.location.hash;

  const $breadcrumbStatus = $("#breadcrumb-status");
  if (hash === "#available") {
    $breadcrumbStatus.text("В наявності");
  } else if (hash === "#auction") {
    $breadcrumbStatus.text("На аукціоні");
  }

  const $tabs = $(".catalog__tab");
  $tabs.removeClass("active");

  if (hash === "#available") {
    $tabs.eq(0).addClass("active");
  } else if (hash === "#auction") {
    $tabs.eq(1).addClass("active");
  }
}
