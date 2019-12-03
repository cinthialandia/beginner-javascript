// select the elements on the page - canvas , shake button

const canvas = document.querySelector("#etch-a-sketch"); // Canvas selection in the DOM
const ctx = canvas.getContext("2d"); // The browser is informed that the canvas will be 2d, that is, it only works on the Cartesian axis x and Cartesian axis y
const shakebutton = document.querySelector(".shake"); // shake button selection in the DOM
const MOVE_AMOUNT = 20; // variable with the value of the pointer thickness

//setup out canvas for drawing

//make a variable called height and width  from the same properties on our canvas. 
//create  a random x and y starting points on the canvas. 
const { width, height } = canvas;
let x = Math.floor(Math.random() * width); // it was saved in a variable, the width multiplied, by the math random function and the floor that returns a random number, this to have different cursor points when it refreshes
let y = Math.floor(Math.random() * height);// it was saved in a variable, the width multiplied, by the math random function and the floor that returns a random number, this to have different cursor points when it refreshes

//property of the Canvas 2D API determines the shape used to join two line segments where they meet.
ctx.lineJoin = "round"; // Rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments.

//property of the Canvas 2D API determines the shape used to draw the end points of lines.
ctx.lineCap = "round"; // The ends of lines are rounded

//property of the Canvas 2D API sets the thickness of lines.
ctx.lineWidth = MOVE_AMOUNT; // has the value of the pointer thickness variable

//the hue is initialized at 0, since we are increasing, so that it changes color
let hue = 0;

//property of the Canvas 2D API specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes. The default is #000 (black).
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // We assign a value, and the first value of it, we replace it with the variable hue, so that it is dynamic and can be changed, as the function is executed.

//APIs in the canva
//That is the first point that is drawn, that is, the initial
ctx.beginPath(); // we call the method
ctx.moveTo(x, y); // we call the method using the variables, being random variables, always call the method in different connections.
ctx.lineTo(x, y); // we call the method using random variables, always call the method in different connections.
ctx.stroke(); // we call the method


//write a draw function
//the methods are repeated, because they are the ones that carry out the rest of the drawing, every time the function is executed
function draw({ key }) { //This has as a parameter the key object because it is being deconstructed, it must be taken into account exactly, the name of the property of the object to be searched.
    //increment de hue
    hue = hue + 5; // The hue is being increased from 5 to 5, this is increased because for each click, he returns to the function.
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
    //start the path 
    ctx.beginPath();
    ctx.moveTo(x, y);

    //Move our x and values dependin what the user did
    //We use a switch because we have to do something different in each case
    //Set the key we are pressing as a parameter and according to this it will move
    //Keep in mind that it is turned, because the canvas starts on the left side.
    switch (key) {
        case "ArrowUp":
            y = y - MOVE_AMOUNT;
            break;
        case "ArrowRight":
            x = x + MOVE_AMOUNT;
            break;
        case "ArrowDown":
            y = y + MOVE_AMOUNT;
            break;
        case "ArrowLeft":
            x = x - MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y)
    ctx.stroke();
};

//write a handler for the keys
//In function, it is being described that it generates an event every time the arrow keys are pressed, and it draws.
function handleKey(e) {
    if (e.key.includes("Arrow")) {
        e.preventDefault();
        draw({ key: e.key }); // Here the key object is being deconstructing that its value is the key that the event had
        console.log(e.key);
        console.log("HANDLE KEYY!!")
    };
}
// clear/ shake  fucntion
//the shake class is added to the button, and the method is added so that it deletes what has been dubbed
function clearCanvas() {
    canvas.classList.add("shake");
    ctx.clearRect(0, 0, width, height);
    //the animation event is added and in the same function the class is removed from the button when the function ends.
    canvas.addEventListener("animationend", function () {
        console.log("done the shake!");
        canvas.classList.remove("shake"); // the animation class is in css, and that animation only runs, when the class is first put on, therefore it has to be added and removed from the function, so that the animation works on the button, every time I know how to click
        //This third parameter is used, to tell the function, that the animation is only done once if the action was true.
    }, { once: true });
}

// listen for arroy keys 
window.addEventListener("keydown", handleKey);
shakebutton.addEventListener("click", clearCanvas)