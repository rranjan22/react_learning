
const sum = (num1, num2) =>{
    if(num2 === undefined){
        return num1 + num1;
    }
    return num1 + num2;
}

console.log(sum(5, 10)); // 15
console.log(sum(5)); // 10


const getUserNameFromEmail = (email) => {
    if(email === null || email === undefined || email === ""){
        return "No email provided";
    }
    if(email.includes('@')){
        return email.slice(0, email.indexOf('@'));
    }
    return "Invalid email";
}

console.log(getUserNameFromEmail("")); // "No email provided"
console.log(getUserNameFromEmail()); //  "No email provided"
console.log(getUserNameFromEmail(null)); // "No email provided"
console.log(getUserNameFromEmail("John655@hotmail.com")); // "John655"
console.log(getUserNameFromEmail("John655")); // "Invalid email"


const toProperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(toProperCase("hello world")); // "Hello world"
console.log(toProperCase("JAVA SCRIPT")); // "Java script"

const abc = "rashmi ranjan dalai".split(" "); //
const toProperCaseWords = (str) => {
  return str.split(" ").map(word => toProperCase(word)).join(" ");
}

console.log(toProperCaseWords("hello world")); // "Hello World"
console.log(toProperCaseWords("JAVA SCRIPT")); // "Java Script"