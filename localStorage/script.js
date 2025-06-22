const myObject = {
    name: "ranjan",
    age: 22,
    address: "Kolkata, West Bengal",
    hobbies: ["reading", "gaming", "coding"],
    beverages: {
        morning: "tea",
        afternoon: "coffee"
    }
}

localStorage.setItem('user', JSON.stringify(myObject));
let getUser = localStorage.getItem('user');
console.log(getUser);

let userObject = JSON.parse(getUser);
console.log (userObject);
console.log(userObject.name);

if(localStorage.getItem('user') !== null) {
    console.log("User data exists in localStorage.");
}
else{
    console.log("User data does not exist in localStorage.");
}