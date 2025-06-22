// Create an empty array
const array = [];

// Adding different types of values at specific indexes
array[0] = "Dave"; // String
array[1] = 1001;  // Number
array[2] = false;  // Boolean
array[3] = "Hello World";  // String
array[4] = 3.14;  // Float
array[5] = null;  // Null (typeof null is "object" in JavaScript)
array[6] = undefined;   // Undefined
array[7] = { name: "John", age: 30 };  // Object
array[8] = [1, 2, 3, 4, 5];   // Nested Array
array[9] = function() { return "This is a function in an array"; };  // Function

// Adding a new element to the end of the array
array.push("New Element");  // Equivalent to array[array.length] = "New Element"

// Adding a new element to the beginning of the array
array.unshift("First Element");  // Moves all elements to the right by 1 and inserts at index 0

// Removing the last element of the array
array.pop();  // Removes the last element (which was "New Element")

// Removing the first element of the array
array.shift();  // Removes the first element (which was "First Element")

console.log("Original array after push, pop, unshift, shift:");
console.log(array);
console.log("Length of the array:", array.length);

// -----------------------------
// SPLICE METHOD EXPLANATION
// -----------------------------

// Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)

// Remove 1 element at index 1 (second element)
array.splice(1, 1);  // This will remove the value 1001 (which was originally at index 1)
console.log("After removing the second element (index 1):");
console.log(array);

// Insert elements without removing (insertion only)
array.splice(2, 0, "Inserted Element");  // Insert at index 2
console.log("After inserting 'Inserted Element' at index 2:");
console.log(array);

// Replace 1 element at index 4
array.splice(4, 1, "Replaced Element");  // Removes 1 element and adds a new one at index 4
console.log("After replacing element at index 4 with 'Replaced Element':");
console.log(array);

// Remove multiple elements
array.splice(5, 2);  // Removes 2 elements starting at index 5
console.log("After removing two elements starting from index 5:");
console.log(array);


const letters = ["A", "B", "C", "D", "E", "F"];
const newString = letters.join();
console.log("Joined string from letters array:", newString); // Default separator is a comma, output = "A,B,C,D,E,F"
const customString = letters.join(" - ");
console.log("Joined string with custom separator:", customString); // Custom separator, output = "A - B - C - D - E - F"

const newLetter = customString.split(" - ");
console.log("Split string back into array:", newLetter); // Splits the string back into an array

//concatenation
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const concatenatedArray = firstArray.concat(secondArray);
console.log("Concatenated array:", concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

//insted  of concat, you can also use the spread operator
const spreadConcatenatedArray = [...firstArray, ...secondArray];
console.log("Spread concatenated array:", spreadConcatenatedArray); // Output: [1, 2, 3, 4, 5, 6] 

//if you donot use spread operator
// it will create a nested array
const nestedConcatenatedArray = [firstArray, secondArray];
console.log("Nested concatenated array:", nestedConcatenatedArray); // Output: [[1, 2, 3], [4, 5, 6]]




// This code demonstrates the use of arrays to represent a sports store's inventory,
// with different shelves for equipment and clothes, and how to access specific items.
const equipShelfA = ["basketball", "soccer ball", "tennis racket"];
const equipShelfB = ["baseball glove", "golf club", "hockey stick"];

const clothesShelfA = ["t-shirt", "jeans", "jacket"];
const clothesShelfB = ["sweater", "shorts", "hat"];

// Accessing specific items from the shelves
console.log(equipShelfA[1]); // Output: "soccer ball"
console.log(clothesShelfB[2]); // Output: "hat"

// Creating departments by grouping shelves
const equipDept = [equipShelfA, equipShelfB]; 
const clothesDept = [clothesShelfA, clothesShelfB];

// Accessing items from the departments
console.log(equipDept);
console.log(clothesDept);

console.log(equipDept[0][1]); // Output: "soccer ball"
console.log(clothesDept[1][0]); // Output: "sweater"

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore);
console.log(sportsStore[0][1][2]); // Output: "hockey stick"
console.log(sportsStore[1][0][1]); // Output: "jeans"
