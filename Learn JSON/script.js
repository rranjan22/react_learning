//JSON: JavaScript Object Notation
// JSON is used to send and receive data.
// JSON is a text format that is completely language independent.
// Meaning JSON is used to send & receive data in many languages ...not just in JavaScript.
const myObj = {
    name: "Aman",
    age: 30,
    hobbies: ["reading", "gaming"],
    beverages: {
        morning: "coffee",
        afternoon: "iced tea"
    },
    hello: function(){
        console.log("Hello, I am " + this.name + " and I am " + this.age + " years old.");
    }
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj.age);
myObj.hello();
console.log(myObj.hobbies);
console.log(myObj.hobbies[0]);
console.log(myObj.hobbies[1]);
console.log(myObj.beverages.morning);
console.log(myObj.beverages.afternoon);  

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);

console.log(typeof sendJSON); // string

// Parsing the JSON string back to an object
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);