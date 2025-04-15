import $ from "jquery";

export default function initContact() {
  $(".contact button").on("click", function () {
    alert("Наш менеджер звʼяжеться з вами найближчим часом!");
  });
}
