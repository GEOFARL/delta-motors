import $ from "jquery";
import { initSmartForm } from "../components/form";
import { initMobileMenu } from "../components/mobileMenu";

$(function () {
  initSmartForm();
  initMobileMenu();
  console.log("Car tracking page initialized");
});
