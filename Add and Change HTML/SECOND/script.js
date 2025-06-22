//------------- EXAMPLE 2 <h1> -------------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent="cake";
newListItem.id="cake";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor="orange"

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").prepend(newListItem);
document.getElementById("fruits").append(newListItem);

//to insert cake between any two
// const currentElement = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem,currentElement);

//what if these list items donot have ids
const items = document.querySelectorAll("#fruits li"); // NodeList of 3 items
document.getElementById("fruits").insertBefore(newListItem, items[2]);


// STEP 4
// IF YOU WANT TO REMOVE HTML ELEMENT
//first select the direct parent where the newElement is present, Then follow with the remove child method, Then pass the element you want to remove as an argument
document.getElementById("fruits").removeChild(newListItem);
