const wes = document.querySelector(".wes");

wes.addEventListener("click", function (event) {
    const shouldChagePage = confirm("this website be malicius!, do you wish to proceed?")
    if (!shouldChagePage) {
        event.preventDefault();
    }
});


