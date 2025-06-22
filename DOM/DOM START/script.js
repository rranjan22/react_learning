// DOM = DOCUMENT OBJECT MODEL
//       object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the content, structure, and style of a web page.


//GetElementById()
const title = document.getElementById('main-heading');
console.log(title);

//GetElementByClassName()
const classItems = document.getElementsByClassName('list-items');
console.log(classItems);

//GetElementByTagName()
const listItems = document.getElementsByTagName('li');
console.log(listItems);

//querySelector()
const container = document.querySelector('div');
console.log(container);

//querySelectorAll()
const newContainer = document.querySelectorAll('div');
console.log(newContainer);

document.body.style.backgroundColor = "olive";