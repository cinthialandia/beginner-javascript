//export function as a default
export { formatCurrency as default };

function formatCurrency(amount, currency) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(amount);
}
