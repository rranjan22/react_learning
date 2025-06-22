
// element selectors = Methods used to target and manipulate HTML elements
//                      They allow you to select one or multiple HTML elements
//                      from the DOM (Document object Model)
// 1. document.getElementById()             // ELEMENT OR NULL
// 2. document.getElementsClassName()       // HTML COLLECTION
// 3. document.getElementsByTagName()       // HTML COLLECTION
// 4. document.querySelector()              // FIRST ELEMENT OR NULL
// 5. document.querySelectorA11()           //NODELIST


//getElementById() // ELEMENT OR NULL
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "centre";

console.log(myHeading);


//getElementsClassName() // HTML COLLECTION
const fruits = document.getElementsByClassName("fruits");
fruits[1].style.backgroundColor="lightgreen";

// for(let i = 0; i<fruits.length; i++){
//     fruits[i].style.backgroundColor = "pink";
// }

for(let fruit of fruits){
    fruit.style.backgroundColor="olive";
}

//html collections donot have forEach method.
// fruits.forEach();   -> it will give an error!!

//but we can typecast an html collection as an array
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "purple";
});

console.log(fruits);


//getElementsByTagName()  // HTML COLLECTION
const liElements = document.getElementsByTagName("li");
const h4Elements = document.getElementsByTagName("h4");

console.log(liElements);
console.log(h4Elements);

h4Elements[1].style.backgroundColor = "yellow";

for(let i = 0; i<h4Elements.length; i++){
    h4Elements[i].style.backgroundColor = "lightblue";
}

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "orange";
}

//html collections -> typecasted to arrays, because forEach method is not applicable to html collections
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "pink";
})

//for li elements
//html collections -> typecasted to arrays, because forEach method is not applicable to html collections
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightblue";
})



//querySelector()    //ELEMENT OR NULL
//query selector -> return the first match


//to select an element by classname we use ".NameOfTheClass"
const element = document.querySelector(".fruits"); //fruits is the class -> ".fruits"

element.style.backgroundColor ="lightgreen";

//if want to select a tag -> then "tagName". ex- "h4"
const h4Heading = document.querySelector("h4");
h4Heading.style.backgroundColor ="lightgreen";

//if want to select a tag -> then "tagName". ex- "ul"
const ulHeading = document.querySelector("ul");
ulHeading.style.backgroundColor ="yellow"; //the list elements is selected in the above, so the bullet points is only changes and the content is not changed

//if you wriiten something which is not exist. then it return a null
const olHeading = document.querySelector("ol");
console.log(olHeading);  // output is: null


//querySelectorA11()   //NODELIST
//this returns a nodelist
//it is smililar to html collection. but it has bultin methods similar to arrays.
//however nodelists are static. but html collections are live.
//since nodelists are static. so, they donot update automatically in the DOM.
//html collections are live, so they will update automatically in the DOM.
const allFruits = document.querySelectorAll(".fruits");
console.log(allFruits);
allFruits[2].style.backgroundColor = "gray";

allFruits.forEach(a => {
    a.style.backgroundColor = "brown";
})