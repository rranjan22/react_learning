// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// function changeColour(event){
//     // event is an object, it is provided to us automatically by the web browser when something happens or when an event occurs (like when i click on something)
//     // event is an object that contains information about something that happens(that event)

    
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH!🤕";
// }


// myBox.addEventListener("click", changeColour);

//using call back
// myBox.addEventListener("click", function(event) {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "Don't beat me!😟";
// });

//using arrow function. including call back
myBox.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!🤕";
});

//an element can have more than one eventListener
//Mouseover
myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 🥲"
})

//Mouseout
myBox.addEventListener("mouseout", (event) => {
    event.target.textContent = "Click Me 😀";
    event.target.style.backgroundColor = "lightgreen";
})


//for the buttom functionaliy
myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH!🤕";
});

myButton.addEventListener("mouseover", (event) => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 🥲"
})

myButton.addEventListener("mouseout", (event) => {
    myBox.textContent = "Click Me 😀";
    myBox.style.backgroundColor = "lightgreen";
})