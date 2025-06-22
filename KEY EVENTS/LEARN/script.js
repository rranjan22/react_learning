// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup
//                 there is another event called "keypress" ->  but this event is incompatible with all web browsers, 
//                 so we should avoid using "keypress"
//                 document.addEventListener(event, callback);

//keydown event occurs when you press down on a key
//keyup event occurs when you release a key
//by adding an eventListener to the DOM document, we can detect when we press down or release a key


//LEARNING PHASE....
// document.addEventListener("keydown", (event) => {
//     console.log(`Key down = ${event.key}`);
// });

// document.addEventListener("keyup", (event) => {
//     console.log(`Key up = ${event.key}`);
// });





// Get the element with the ID "myBox" from the DOM
const myBox = document.getElementById("myBox");

// Listen for any key being pressed down on the keyboard
document.addEventListener("keydown", event => {
    // Change the emoji to a surprised face when a key is pressed
    myBox.textContent = "😯";

    // Change the background color to tomato when a key is pressed
    myBox.style.backgroundColor = "tomato";
});

// Listen for any key being released on the keyboard
document.addEventListener("keyup", event => {
    // Change the emoji back to a smiling face when the key is released
    myBox.textContent = "😄";

    // Change the background color to yellow when the key is released
    myBox.style.backgroundColor = "yellow";
});
