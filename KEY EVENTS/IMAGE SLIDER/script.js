// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup
//                 there is another event called "keypress" ->  but this event is incompatible with all web browsers, 
//                 so we should avoid using "keypress"
//                 document.addEventListener(event, callback);

//keydown event occurs when you press down on a key
//keyup event occurs when you release a key
//by adding an eventListener to the DOM document, we can detect when we press down or release a key

const myBox = document.getElementById("myBox");
const moveAmount = 50;
let x = 0; //x for any horizontal movement
let y = 0; //y for any vertical movement

document.addEventListener("keydown", event => {
    myBox.textContent = "😯";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😄";
    myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {
    console.log(event.key);
    // if(event.key === "ArrowUp" || event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === "ArrowLeft"){

    // }

    //another way
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y = y - moveAmount;
                break;
            case "ArrowDown":
                y = y + moveAmount;
                break;
            case "ArrowLeft":
                x = x - moveAmount;
                break;
            case "ArrowRight":
                x = x + moveAmount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})



