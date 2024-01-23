export const removeHtmlElements = (selectors) => {
  if (!document){}

  selectors.forEach((selector) => {
    document.querySelector(selector).remove()
  });
}