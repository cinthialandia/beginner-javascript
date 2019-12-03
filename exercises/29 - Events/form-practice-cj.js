const wes = document.querySelector(".wes");

wes.addEventListener("click", function (event) {
    console.log(event); // Esto es un comportamiento por default, es decir al darle el click a wes el mismo se va a la otra pagina.
});

wes.addEventListener("click", function (event) {
    event.preventDefault(); // Esto previene que el comportamiento por defoult pase cuando haya un click.
});

// para errores  
wes.addEventListener("click", function (event) {
    const shouldChagePage = confirm("this website be malicius!, do you wish to proceed?")
    if (!shouldChagePage) { // Si cancelo ir a otro sitio web 
        event.preventDefault(); // Activar el prevent 
    } // Sino que pase a la proxima pagina 
});