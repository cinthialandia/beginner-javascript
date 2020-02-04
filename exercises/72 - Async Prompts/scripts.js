function destroyPopup(popup) {
  popup.classList.remove("open");
  setTimeout(function() {
    popup.remove();
  }, 1000);
}

function ask(options) {
  // usar como parametro un objeto cuando tienes muchas opciones como argumetnos
  return new Promise(function(resolve) {
    // aqui no ponemos rechazo porque, la otr alternativa es un boton de cancelar
    //firts we need to create a popup with all the fields in it
    const popup = document.createElement("form"); // utilizamos el createElement, para poder agregar eventos, creamos un form en el dom
    popup.classList.add("popup");
    popup.insertAdjacentHTML(
      "afterbegin",
      `<fieldset>
    <label>${options.title}</label>
    <input type="text" name="input"/>
    <button type="submit">Submit</button>
    </fieldset>`
    );
    console.log(popup);

    //chech if the want the cancel button

    if (options.cancel) {
      const skipButton = document.createElement("button");
      skipButton.type = "button"; // si no le pones el tipo de boton, js asume que es de submit
      skipButton.textContent = "Cancel";
      popup.firstElementChild.appendChild(skipButton);
      skipButton.addEventListener(
        "click",
        function() {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );

      // listen for a click on that cancel button
    }

    //listen for the submit event in the input
    popup.addEventListener(
      "submit",
      function(e) {
        e.preventDefault();
        console.dir(e.target);
        resolve(e.target.input.value);
        destroyPopup(popup);
      },
      { once: true }
    );
    //

    //when someone does submit it, resolve the data, that was in the input box!
    // insert the popup into de DOM
    document.body.appendChild(popup);
    setTimeout(function() {
      popup.classList.add("open");
    }, 10);
  });
}

async function askQuestion(e) {
  const button = e.currentTarget;
  console.log(button.dataset);
  // const shouldCancel = button.dataset.cancel != undefined; // esto es igual a la siguiente linea
  const shouldCancel = "cancel" in button.dataset;
  const answer = await ask({
    title: button.dataset.question,
    cancel: shouldCancel
  });
  console.log({ answer });
}

const buttons = document.querySelectorAll("[data-question]");
buttons.forEach(button => button.addEventListener("click", askQuestion));

/**
 * Funcion que hace varias preguntas, una tras otra
 * @param listOfQuestions lista de preguntas para preguntar
 */
async function askMany(listOfQuestions) {
  const listOfAnswers = [];

  for (const question of listOfQuestions) {
    const answer = await ask(question);
    listOfAnswers.push(answer);
  }

  return listOfAnswers;
}

// Llamamos la funcion con una lista de preguntas
const myListOfQuestions = [
  {
    title: "Cúal es tu nombre?"
  },
  {
    title: "Cúal es tu edad?"
  },
  {
    title: "Dónde vives?",
    cancel: true
  }
];

askMany(myListOfQuestions).then(console.log);
