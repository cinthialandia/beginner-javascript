import currencies from "./utils/currency.js";
import generateOptions from "./utils/generateOptions.js";
import convert from "./utils/convert.js";
import formatCurrency from "./utils/formatCurrency.js";

const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('[class="to_amount"]');
const form = document.querySelector(".app form");

const optionsHtml = generateOptions(currencies);

async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

//populate the options elements
fromSelect.innerHTML = optionsHtml;
toSelect.innerHTML = optionsHtml;

form.addEventListener("input", handleInput);
