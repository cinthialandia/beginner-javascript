const butts = document.querySelector(".butts");
const cool = document.querySelector(".cool");

function handleClick() {
    console.log("wohooooooooooo!!!")
}
const hooray = () => console.log("HOORAY");

cool.addEventListener("click", hooray);

butts.removeEventListener("click", handleClick)

//listen on multiples items 
const buyButtons = document.querySelectorAll("button.buy");

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

    event.stopPropagation();

}

buyButtons.forEach(function (buyButton) {
    buyButton.addEventListener("click", handleBuyButtonClick);
});

window.addEventListener("click", function () {
    console.log("you click bitch!!!!!!!!")
    console.log(even.target);
    console.log(even.type);
    console.log(event.bubbles)
});

const photEl = document.querySelector(".photo");

photEl.addEventListener("mouseenter", function (e) {
    console.log(e.currentTarget);
    console.log(this); // No lo uses con array function 
})