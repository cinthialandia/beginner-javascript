function createPopup(options) {
  // crear el formulario
  const popup = document.createElement("form"); // utilizamos el createElement, para poder agregar eventos, creamos un form en el dom
  popup.classList.add("popup");
  popup.insertAdjacentHTML(
    "afterbegin",
    `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input" />
        <button type="submit">Submit</button>
      </fieldset>`
  );

  // crear el botón cancel, si se necesita
  let skipButton;
  if (options.cancel) {
    skipButton = document.createElement("button");
    skipButton.type = "button"; // si no le pones el tipo de boton, js asume que es de submit
    skipButton.textContent = "Cancel";
    popup.firstElementChild.appendChild(skipButton);
  }

  // render el formulario en la página
  document.body.appendChild(popup);
  setTimeout(function() {
    popup.classList.add("open");
  }, 10);

  // return referencias al formulario y el botón de cancel (si existe)
  return {
    popup,
    skipButton
  };
}

function destroyPopup(popup) {
  popup.classList.remove("open");
  setTimeout(function() {
    popup.remove();
  }, 1000);
}

async function ask(options) {
  return new Promise(function(resolve) {
    const { popup, skipButton } = createPopup(options);

    //listen for the submit event in the input
    popup.addEventListener(
      "submit",
      function(e) {
        e.preventDefault();
        resolve(e.target.input.value);
        destroyPopup(popup);
      },
      { once: true }
    );

    // listen for the cancel button click
    if (skipButton) {
      skipButton.addEventListener(
        "click",
        function() {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
  });
}

async function askQuestion(e) {
  const button = e.currentTarget;
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
