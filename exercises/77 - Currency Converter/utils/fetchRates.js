export { fetchRates as default };
const endpoint = "https://api.exchangeratesapi.io/latest";

async function fetchRates(base = "USD") {
  const res = await fetch(`${endpoint}?base=${base}`);
  const rates = await res.json();
  return rates;
}
