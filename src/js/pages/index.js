import $ from "jquery";
import initHeader from "../components/header";
import initContact from "../components/contact";
import "../components/cardSwiper";
import "../components/serviceItem";

$(function () {
  initHeader();
  initContact();

  console.log("Index page initialized");
});
