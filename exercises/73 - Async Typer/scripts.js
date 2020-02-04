function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms)); // principal function with the promese
}

function getRandomBetween(min = 20, max = 150, radomNumber = Math.random()) {
  // this function that will give a random number according to numbers given as parameters
  return Math.floor(radomNumber * (max - min) + min);
}

// async for of loop first way

/* async function draw(el) { // we do an asynchronous function with the parameter the
  const text = el.textContent; // we create the text variable where we will save the text of each element that is being extracted in the forech
  let soFar = ""; // set the variable with an empty string to start and add to this the letters that add
  for (const letter of text) { // we use the for of that are used in an array, where we set the loop of each letter on the text that the foreach has given us
    console.log(letter);
    soFar += letter; // in the variable created above, the letters that are added in the "for of" are added
    el.textContent = soFar; // overwrite variable
    // wait for some amount of time
    const { typeMin, typeMax } = el.dataset; // deconstruct, we make 2 new variables with the value of the dataset properties
    const amountOfTime = getRandomBetween(typeMin, typeMax); //we create a new variable with the values of the function and replace with the values of the new variables
    await wait(amountOfTime); // we return asynchronous the function, with await and we call the function with the parameter with the new values
  }
}
*/

//recursion, second way
document.querySelectorAll("[data-type]").forEach(draw); // select all of the document, with the data type attribute and apply the forEach method with the logic of the draw function

function draw(el) {
  let index = 1; // set the index variable to start with a letter
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index); // will cut the string starting from 0 and by adding, it will include the rest of the letters of the string
    index += 1;
    const amountOfTime = getRandomBetween(typeMin, typeMax);

    //exit condition
    await wait(amountOfTime);
    if (index <= text.length) {
      // If the index is not longer than its length, then let the function continue calling //
      drawLetter();
      //wait for some time
    }
  }
  //when this function draw() runs, kick off drawletter
  drawLetter();
}
