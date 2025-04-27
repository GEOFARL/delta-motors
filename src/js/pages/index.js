import $ from "jquery";
import initContact from "../components/contact";
import { initAccordion } from "../components/accordion";
import "../components/cardSwiper";
import "../components/serviceItem";
import { initSmartForm } from "../components/form";
import { initModal } from "../components/modal";

$(function () {
  initContact();
  initSmartForm();
  initModal({
    openModalSelector: "#open-contact-modal",
  });

  initAccordion({
    itemSelector: ".faq-item",
    headerSelector: ".faq-item__header",
    contentSelector: ".faq-item__content",
    allowMultiple: false,
  });

  console.log("Index page initialized");
});
