const butts = document.querySelector(".butts");
const cool = document.querySelector(".cool");


//Esto es una buena practica, porque cuando hacemos el evelistener son funcionas anonimas
//Asi que hacemos la funcion antes describiendo lo que esta haciendo ese evento 
//Luego hacemos toda la logica de lo que se hara en nuestra funcion 
// y se pasa directamente en el callback del eveliste el nombre de la funcion directamente.
function handleClick() {
    console.log("wohooooooooooo!!!")
}
//Busca algo, escucha algo y dentro de la funcion es haz algo son los 3 pasos para un evento
butts.addEventListener("click", handleClick);
//Se puede reutilizar la misma funcion, para 2 eventos distintos
//Tener en cuenta que anonimas funciones no se les puede remover el evenlister 
//SE tiene que llamar a una funcion, por su nombre variable o lo que sea para que se pueda remover el listener
cool.addEventListener("click", handleClick);

//No se puede eliminar eventos de funciones anonimas 
butts.removeEventListener("click", function () {
    console.log("NO FUNCIONA")
})

//Agregadno evento a un varios botones al mismo tiempo.
const buyButtons = document.querySelectorAll("button.buy");
function buyItem() {
    console.log("BUY ITEM");
}
function handleBuyButtonClick(buyButton) {
    console.log("no se que dice ahi");
    buyButton.addEventListener("click", buyItem)
}
console.log(buyButtons);
console.dir(butts);

buyButtons.forEach(handleBuyButtonClick);


// OTRA EXPLICACION DE LA PARTE DE TARGET EVENT 


//Para saber que boton estamos clicketando se utiliza el target
//Aqui hicimos una funcion, donde estamos guardando en una varibale el evento.target
function handleBuyButtonClick(event) {
    const button = event.target;
    console.log(button.textContent);
    //El data set y price, es data verga que se le puso en el html para poder acceder a el de manera mas facil.
    console.log(parseFloat(event.target.dataset.price));

}
//Aqui estamos haciendo el foreach para que cada boton tenga la funcion de clickear 
buyButtons.forEach(function (buyButton) {
    buyButton.addEventListener("click", handleBuyButtonClick);
});

// QUIEN FUE ESCUCHADO EN EL EVENTO 

//Como saber que esta siendo clickeado? 
//Pues hay 2 maneras de saberlo, la primera es con even.target 
//La segunda es even.currentTarget 
//Los 2 van a mostrar en consola quien esta siendo clickeado 
//Los 2 son iguales? NO 
//Porque event.targe dice quien fue clickeado, o sea el nodo o elemento. 
//El event.currentTarge dice quien fue el que escucho el evento
//Porlo tanto depende de quien quieras ver se utiliza una o otra, no siempre lo que fue clickeado es quien lo escucho. 

function handleBuyButtonClick(event) {
    const button = event.target;
    //console.log(button.textContent);
    //console.log(parseFloat(event.target.dataset.price));
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);

}
//Aqui estamos haciendo el foreach para que cada boton tenga la funcion de clickear 
buyButtons.forEach(function (buyButton) {
    buyButton.addEventListener("click", handleBuyButtonClick);
});

// TIPOS DE EVENTOS 
window.addEventListener("click", function () {
    console.log("you click bitch!!!!!!!!")
    console.log(even.target); // Quien fue clickeado 
    console.log(even.type); // Que tipo de evento fue ejemplo click
    console.log(event.bubbles) // true o false si hay o no propagacion y eso va a depender de que haya un stop propagation
})

// COMO VER CUANTAS VECES SE MOVIO UN MOUSE 

const photEl = document.querySelector(".photo");

photEl.addEventListener("mousemove", function (e) { // Estamos haciendo un funcion con un add listener que ve cuantas veces se movio el mouse en la imagen.
    console.log(e.currentTarget);
})

photEl.addEventListener("mousemove", function (e) { // Estamos haciendo un funcion con un add listener que ve cuantas veces se movio el mouse en la imagen.
    console.count(e.currentTarget); // Se puede contar la cantidad de veces que pasa el mouse
})


photEl.addEventListener("mouseenter", function (e) { // Cuantas veces el mouse entra a la foto
    console.count(e.currentTarget);
})

photEl.addEventListener("mouseenter", function (e) {
    console.log(e.currentTarget);
    console.log(this); // No lo uses con array function 
})