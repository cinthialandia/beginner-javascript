// Make a div
//Se tiene que crear con el createElement y poner dentro de () cualquiera elemento que quieras agregar.
const divCreate = document.createElement("div");
console.log(divCreate);
// add a class of wrapper to it
//Se agrega una clase con el nombre del elemento ya creado se pone class list add y el nombre de la clase
divCreate.classList.add("wrapper");

// put it into the body
//Se pone un elemento en en alguna parte del html con el documento.donde quieras ponerlo
//Tambien se debe tener en cuenta que no se guarda en una variable porque ya este sabe en donde exactamentre se guardara.
document.body.appendChild(divCreate);

// make an unordered list
// add three list items with the words "one, two three" in the
//Se realizo con el template de string, para crear un elmento.
const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
`;
// put that list into the above wrapper
//Lo que hicimos aqui fue, que el innerHTML es para meter elementos html en otros elementos 
//Asi que en el div le pusimos inner verga y le metimos el elemento anteriormente creado ul 
divCreate.innerHTML = ul;
console.log(ul);

// create an image
//Creamos con el tipico documento.create una imagen como hicimos en los anteriores.
const img = document.createElement("img");
console.log(img);

// set the source to an image
//Creamos con el .src le pusimos la direccion de una foto 
img.src = "https://picsum.photos/500";

// set the width to 250
// Se crea directo el width tambien se puede poner si tuviera el template
img.width = 250;

// add a class of cute
//Recordar que las clases no tienen nombres con espacio pendeja
//se le agrega una clase como a cualquier elemento, asi sea una foto
img.classList.add("Cute");

// add an alt of Cute Puppy
//Tampoco poner espacio en los alts pendeja 
//Se pone el alt como a cualquiera 
img.alt = "Cute-Puppy";

// Append that image to the wrapper
divCreate.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
//Aqui se creo el div con el template string
const myHtml = `
<div class="myDiv">
<p>Paragraph one</p>
<p>Paragraph two</p>
</div>
`;

// put this div before the unordered list from above
//Para realizar este paso, necesitabamos hacer varias cosas 
//La primera es que para poner encima del ul, tenemos que tener referencia de el.
//Por eso lo buscamos con el queryselector 
//Luego que vimos eso, lo agregamos arriba con el inserAdjancent pero habiamos usado el de elementos 
//Que pasa que con ese no funciono, ya que nuestro div no es un elemento, es uns tring
//Asi que funciono, el adjavne html verga.
const ulElement = divCreate.querySelector("ul");
console.log(ulElement);
ulElement.insertAdjacentHTML("beforebegin", myHtml);

// add a class to the second paragraph called warning
//Lo que hicimos fue primero seleccionar el div, y le pusimos la clase mydiv al div de arriba
//guardamos en una variable el div seleccionando con la clase que pusimos arriba
//para elegir el parrafo y poner la clase warning
//Puisimos el div, mas propiedad children class list add para adicionar a clase y warning
//El uno fue porque era para el parrafo 2, y el 2 esta en la posicion 1.
const myDiv = divCreate.querySelector(".myDiv");
myDiv.children[1].classList.add("warning");
console.log(myDiv);

// remove the first paragraph
//hay 2 maneras de hacer esto la primera es 
//se guarda el buscado del primer parrafo y se le pone a eso eleminar 
const paragrahp2 = myDiv.querySelector("p");
paragrahp2.remove();
//el segundo es myDiv.firstElementChild.remove(); el cual hace exactamente lo mismo
console.log(paragrahp2);

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
//Ok aqui hicimos varias cosas 
//se hizo una funcion con 3 argumentos 
//luego creamos un div dentro de la funcion que tendra el siguiente mensaje cuando metas informaicon de los 3 argumentos.
//pusimos los argumentos como el template que me ensenaron y retornamos con la informacion.
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height, num) {
    const html = `
    <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age * 7} years old. That would be a tall dog</p>
    <button class="delete" type="button">&times; Delete</button>
    </div> 
    
    `;
    return html;
}

// make a new div with a class of cards
const players = [
    {
        name: "wes",
        age: 12,
        height: 150
    },
    {
        name: "scott",
        age: 12,
        height: 150
    }
];

//creamos unas cartas con un div no se para que 
const cards = document.createElement("div");
cards.classList.add("cards");

// Have that function make 4 cards
// let cardsHTML = generatePlayerCard('wes', 12, 150);
// cardsHTML += generatePlayerCard('scott', 12, 150);
// cardsHTML += generatePlayerCard('kait', 12, 150);
// cardsHTML += generatePlayerCard('snickers', 12, 150);

const cardsHTML = players.map(function (player) {
    return generatePlayerCard(player.name, player.age, player.height)
}).join('');

cards.innerHTML = cardsHTML;

// append those cards to the div
divCreate.insertAdjacentElement("beforebegin", cards);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    // buttonThatGotClicked.parentElement.remove();
    buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));