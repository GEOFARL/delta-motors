import $ from "jquery";

export const initCookieConsent = () => {
  const delay = 3000;

  if (
    !localStorage.getItem("cookiesAccepted") ||
    localStorage.getItem("cookiesAccepted") !== "true"
  ) {
    setTimeout(() => {
      $(".cookie-consent, .cookie-overlay").addClass("show");
    }, delay);
  }

  $(".cookie-consent__accept, .cookie-consent__close").on("click", function () {
    const isAccepted = $(this).hasClass("cookie-consent__accept");
    localStorage.setItem("cookiesAccepted", isAccepted ? "true" : "false");
    $(".cookie-consent, .cookie-overlay").removeClass("show");
  });
};
