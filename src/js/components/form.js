import $ from "jquery";

export function initSmartForm(selector = ".smart-form") {
  const $form = $(selector);
  let formHasBeenSubmitted = false;

  const updateFieldState = ($input) => {
    const $field = $input.closest("[data-field]");
    const hasValue = $input.val().trim() !== "";

    $field.toggleClass("filled", hasValue);
    $field.toggleClass("active", $input.is(":focus") || hasValue);
  };

  const validateField = ($input) => {
    const isValid = $input[0].checkValidity();
    const $field = $input.closest("[data-field]");
    const $error = $field.find(".form-error");

    $field.toggleClass("error", !isValid);
    $error.toggle(!isValid);

    return isValid;
  };

  $form.find("input").each(function () {
    updateFieldState($(this));
    $(this).data("has-blurred", false);
  });

  $form.on("focus input blur", "input", function (e) {
    const $input = $(this);
    const $field = $input.closest("[data-field]");

    updateFieldState($input);

    if (e.type === "blur") {
      $input.data("has-blurred", true);
      validateField($input);
    }

    if (
      e.type === "input" &&
      (formHasBeenSubmitted || $input.data("has-blurred"))
    ) {
      validateField($input);
    }
  });

  $form.on("submit", function (e) {
    formHasBeenSubmitted = true;
    let isFormValid = true;

    $form.find("input[required]").each(function () {
      const $input = $(this);
      updateFieldState($input);

      if (!validateField($input)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) e.preventDefault();
  });
}
