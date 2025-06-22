
function sum(num1, num2){
    if(num2 === undefined){
        return num1 + num1;
    }
    return num1 + num2;
}

console.log(sum(5, 10)); // 15
console.log(sum(5)); // 10


function getUserNameFromEmail(email = null){
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