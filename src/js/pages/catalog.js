import $ from "jquery";
import { initDropdown } from "../components/dropdown";
import { initMobileMenu } from "../components/mobileMenu";

$(function () {
  console.log("Catalog page initialized");
  updateCatalogPage();
  initMobileMenu();
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

$(document).ready(function () {
  $(".custom-select__header").on("click", function (e) {
    e.stopPropagation();
    $(".custom-select").not($(this).parent()).removeClass("open");
    $(this).parent().toggleClass("open");
  });

  $(".custom-select__option").on("click", function (e) {
    e.stopPropagation();
    const selectedText = $(this).text();
    const selectedValue = $(this).data("value");

    const select = $(this).closest(".custom-select");
    select.find(".custom-select__current").text(selectedText);
    select.removeClass("open");

    console.log("Selected value:", selectedValue);
  });

  $(document).on("click", function () {
    $(".custom-select").removeClass("open");
  });
});
