import $ from "jquery";
import "../components/cardSwiper";
import { initMobileMenu } from "../components/mobileMenu";
import { initHeader } from '../components/header';

$(function () {
  initMobileMenu();
  initHeader();
  console.log("About page initialized");
});
