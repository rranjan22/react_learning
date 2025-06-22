//  DOM Navigation - The process of navigating through the structure
//                   of an HTML document using JavaScript.
//  .firstElementChild
//  .lastElementChild
//  .nextElementSibling
//  .previousElementSibling
//  .parentElement
//  .children


//------------ .firstElementChild ------------
const element = document.getElementById("desserts");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";


const ulElements = document.querySelectorAll("ul");
console.log(ulElements);
ulElements.forEach(ulElement => {
    const firstChild1 = ulElement.firstElementChild;
    firstChild1.style.backgroundColor = "lightgreen";
})


//------------ .lastElementChild ------------
const ele = document.getElementById("fruits");
const lastEle = ele.lastElementChild;
lastEle.style.backgroundColor = "orange";


const ulElements_last = document.querySelectorAll("ul");
ulElements_last.forEach(ulElement_last => {
    const last_child_of_ul_elemets = ulElement_last.lastElementChild;
    last_child_of_ul_elemets.style.backgroundColor = "pink";
})


//------------ .nextElementSibling ------------
//if i'm selecting my unordered list of fruits, then apple orange and banana are it's children. They all are siblings to each other!
//if i select apple, then the next sibling would be orange
//if i select carrot, then the next sibling would be onion
//if i select cake, then the next sibling would be pie

//if i select banana, well banana doesn't have a next sibling

const myElement = document.getElementById("cake");
//remember the unordered lists fruits, vegetables and desserts are also siblings and there parent is body. 
const nextSibling = myElement.nextElementSibling;
console.log(nextSibling);
nextSibling.style.backgroundColor = "gray";



//------------ .previousElementSibling ------------
//if i select orange, then the previous sibling would be apple
//if i select banana, then the previous sibling would be orange
//if i select potatoes, then the previous sibling would be onion

//if i select cake, well cake doesn't have a previous sibling
const newElement = document.getElementById("orange");
const previousElement = newElement.previousElementSibling;
console.log(previousElement);
previousElement.style.backgroundColor="lightblue";


//------------ .parentElement ------------
//returns the parent of the selected element
const newEle = document.getElementById("banana");
const parent = newEle.parentElement;
parent.style.backgroundColor = "brown";


//------------ .children ------------
//returns all of the children of the selected element
//it returns an html collections. html collections doesnot has builtin methods
//i need to typecast as a array, using "from" methods of arrays
const xyz = document.getElementById("fruits");
const children = xyz.children;
console.log(children);
// children.style.backgroundColor = "brown"; -> WRONG , ERROR

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
})

children[1].style.backgroundColor  = "orange";

