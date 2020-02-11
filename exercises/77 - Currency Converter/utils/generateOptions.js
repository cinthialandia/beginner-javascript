//export function as a default
export { generateOptions as default };

function generateOptions(options) {
  console.log(Object.entries(options));

  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    )
    .join("");
}
