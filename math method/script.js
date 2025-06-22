//math method
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(-1)); // NaN (not a number, since square root of negative number is not defined in real numbers) 
console.log(Math.pow(2, 3)); // 8
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.random()); // Random number between 0 and 1 where 0 is inclusive and 1 is exclusive
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.abs(-5)); // 5
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(5)); // 1 o
console.log(Math.trunc(4.9)); // 4 it removes the decimal part
console.log(Math.trunc(-4.9)); // -4 it removes the decimal part
console.log(Math.log(10)); // 2.302585092994046 natural logarithm, base e
console.log(Math.log10(100)); // 2 logarithm, base 10
console.log(Math.log2(8)); // 3 logarithm, base 2

//different use of math random method
console.log(Math.random()); // Random number between 0 and 1 where 0 is inclusive and 1 is exclusive
console.log(Math.random() * 100); // Random number between 0 and 100 where 0 is inclusive and 100 is exclusive
console.log(Math.floor(Math.random() * 100)); // Random integer between 0 and 99 where 0 is inclusive and 99 is inclusive
console.log(Math.floor(Math.random() * 100) + 1); // Random integer between 1 and 100 where 1 is inclusive and 100 is inclusive 

//return a random letter of my name
const myName = "John";
let randomIndex = Math.floor(Math.random()  * myName.length);
console.log(myName[randomIndex]); // Random letter from the name "John"
console.log(myName.charAt(randomIndex)); // Random letter from the name "John" using charAt method
//return a random letter of my name using charAt method
