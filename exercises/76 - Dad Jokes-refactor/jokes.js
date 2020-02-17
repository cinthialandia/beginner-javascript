const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke P");

const buttonText = [
  "Ugh.",
  "🤦🏻‍♂️",
  "omg dad.",
  "you are the worst",
  "seriously",
  "stop it.",
  "please stop",
  "that was the worst one"
];
console.log(buttonText);

async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json"
    }
  });
  const data = await response.json();
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent
  );
}

jokeButton.addEventListener("click", handleClick);