import $ from "jquery";
import { initSmartForm } from "../components/form";
import { initMobileMenu } from "../components/mobileMenu";
import { initHeader } from "../components/header";

$(function () {
  initSmartForm();
  initMobileMenu();
  initHeader();
  console.log("Car tracking page initialized");
});
