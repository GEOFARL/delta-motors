import $ from "jquery";
import initContact from "../components/contact";
import { initAccordion } from "../components/accordion";
import "../components/cardSwiper";
import "../components/serviceItem";
import { initSmartForm } from "../components/form";
import { initModal } from "../components/modal";
import { initCookieConsent } from "../components/cookieConsent";
import { initMobileMenu } from "../components/mobileMenu";
import { initHeader } from "../components/header";

$(function () {
  initContact();
  initSmartForm();
  initModal({
    openModalSelectors: [
      "#open-contact-modal",
      "#open-contact-modal-1",
      "#open-contact-modal-2",
      "#open-contact-modal-3",
      "#open-contact-modal-4",
      "#open-contact-modal-5",
      "#open-contact-modal-6",
      "#open-contact-modal-7",
      "#open-contact-modal-8",
      "#open-contact-modal-9",
    ],
  });
  initCookieConsent();
  initMobileMenu();

  initAccordion({
    itemSelector: ".faq-item",
    headerSelector: ".faq-item__header",
    contentSelector: ".faq-item__content",
    allowMultiple: false,
  });

  initHeader();

  console.log("Index page initialized");
});
