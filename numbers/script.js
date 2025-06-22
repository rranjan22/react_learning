//numbers
const myNumber = 42;
console.log(myNumber);
console.log(typeof myNumber); // "number"
console.log(myNumber + 8); // 50
const myFloat = 3.14;
const myString = "3.14";
console.log(myFloat); // 3.14
console.log(typeof myFloat); // "number"
console.log(myFloat===myString); // false
console.log(myFloat==myString); // true
console.log(myFloat.toString()); // "3.14"
console.log(parseFloat(myString)); // 3.14
console.log(parseInt(myString)); // 3
console.log(Number(myString)); // 3.14
console.log(Number.isInteger(myNumber)); // true
console.log(Number.isInteger(myFloat)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(myNumber)); // false
console.log(Number.isFinite(myFloat)); // true 
console.log(Number.isFinite(Infinity)); // false
console.log(Number("Hello")); // NaN
console.log(Number("123abc")); // NaN
console.log(Number(undefined)); // NaN
console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(Number("123")); // 123

// Number methods
// The Number.isInteger() method determines whether the passed value is an integer.

// The Number.parseFloat() method parses an argument and returns a floating point number. If a number canot be parsed from the argument, it returns NaN.
