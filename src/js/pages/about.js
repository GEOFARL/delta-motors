import $ from "jquery";
import "../components/cardSwiper";
import { initMobileMenu } from "../components/mobileMenu";
import { initHeader } from "../components/header";
import { initModal } from "../components/modal";

$(function () {
  initMobileMenu();
  initHeader();

  initModal({
    openModalSelectors: [
      "#open-contact-modal",
      "#open-contact-modal-1",
      "#open-contact-modal-2",
    ],
  });
  console.log("About page initialized");
});
