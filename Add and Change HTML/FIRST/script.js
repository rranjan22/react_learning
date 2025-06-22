//------------- EXAMPLE 1 <h1> -------------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);  //appended as last child of the body element
// document.body.prepend(newH1); //appended as first child of the body element
document.getElementById("box1").append(newH1);
// document.getElementById("box3").prepend(newH1);

//if we want our h1 element between box1 and box2 
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2); //(newElement, currentElement)
                        

//what if we don't have the id in the div element, then how would we select them.
// we have to use querySelectorAll
//it returns a Nodelist
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[3]);

// STEP 4
// IF YOU WANT TO REMOVE HTML ELEMENT
//first select the direct parent where the newElement is present, Then follow with the remove child method, Then pass the element you want to remove as an argument
document.getElementById("box1").removeChild(newH1);

