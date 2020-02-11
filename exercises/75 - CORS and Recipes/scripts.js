const baseEndPoint = "http://www.recipepuppy.com/api";
const proxy = `https://cors-anywhere.herokuapp.com`;
const form = document.querySelector("form.search");
const recipesGrid = document.querySelector(".recipes");

function fixData(data) {
  const [json, yunk] = data.split("<!DOCTYPE");

  return JSON.parse(json);
}

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}/${baseEndPoint}?q=${query}`);
  const data = await res.text().then(fixData);
  return data;

  console.log(data);
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  console.log(el.query.value);
  //turn de form off
  el.submit.disabled = true;
  //submit the search
  const recipes = await fetchRecipes(el.query.value);
  console.log(recipes);
  el.submit.disabled = false;
  displayRecipes(recipes.results);
}
function displayRecipes(recipes) {
  console.log("creating recipes");
  const html = recipes.map(
    recipe => `<div class="recipe">
  <h2>${recipe.title}</h2>
  <p>${recipe.ingredients}</p>
  ${recipe.thumbnail &&
    `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
    <a href="${recipe.href}">View Recipe 🍕  
  </div>`
  );
  recipesGrid.innerHTML = html.join("");
}

form.addEventListener("submit", handleSubmit);

fetchRecipes("pizza");
