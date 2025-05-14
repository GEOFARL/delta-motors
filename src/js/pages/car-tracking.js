import $ from "jquery";
import { initSmartForm } from "../components/form";
import { initMobileMenu } from "../components/mobileMenu";
import { initHeader } from "../components/header";
import { initModal } from "../components/modal";

$(function () {
  initSmartForm();
  initMobileMenu();
  initHeader();
  initModal({
    openModalSelectors: [
      "#open-contact-modal",
      "#open-contact-modal-1",
      "#open-contact-modal-2",
      "#open-contact-modal-3",
    ],
  });
  console.log("Car tracking page initialized");
});
