//export function as a default
export { convert as default };
import fetchRates from "./fetchRates.js";

const ratesByBase = {};

async function convert(amount, from, to) {
  if (!ratesByBase[from]) {
    console.log(
      `oh no! we dont have ${from} to convert to ${to}. So gets go get it!`
    );
    const rates = await fetchRates(from);
    console.log(rates);
    //store them for next time
    ratesByBase[from] = rates;
  }
  // convert that amount that they passed it
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}
