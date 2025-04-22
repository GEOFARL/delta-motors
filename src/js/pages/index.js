import $ from "jquery";
import initContact from "../components/contact";
import { initAccordion } from "../components/accordion";
import "../components/cardSwiper";
import "../components/serviceItem";
import { initSmartForm } from "../components/form";

$(function () {
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
