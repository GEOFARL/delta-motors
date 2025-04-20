import $ from "jquery";
import initHeader from "../components/header";
import initContact from "../components/contact";
import { initAccordion } from "../components/accordion";
import "../components/cardSwiper";
import "../components/serviceItem";
import { initSmartForm } from "../components/form";

$(function () {
  initHeader();
  initContact();
  initSmartForm();

  initAccordion({
    itemSelector: ".faq-item",
    headerSelector: ".faq-item__header",
    contentSelector: ".faq-item__content",
    allowMultiple: false,
  });

  console.log("Index page initialized");
});
