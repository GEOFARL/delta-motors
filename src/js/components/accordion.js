import $ from "jquery";

export function initAccordion({
  itemSelector,
  headerSelector,
  contentSelector,
  allowMultiple = false,
}) {
  $(document).on("click", headerSelector, function () {
    const $item = $(this).closest(itemSelector);
    const $content = $item.find(contentSelector);
    const isActive = $item.hasClass("active");

    if (!allowMultiple) {
      $(itemSelector)
        .not($item)
        .each(function () {
          const $otherItem = $(this);
          const $otherContent = $otherItem.find(contentSelector);

          $otherItem.removeClass("active");
          $otherContent.stop(true, true).slideUp(200);
        });
    }

    if (isActive) {
      $content.stop(true, true).slideUp(200, () => {
        $item.removeClass("active");
      });
    } else {
      $content.stop(true, true).slideDown(200, () => {
        $item.addClass("active");
      });
    }
  });
}
