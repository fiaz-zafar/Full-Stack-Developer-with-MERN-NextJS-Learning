// Instructions
// Complete all the problems below
// Write your code in a JavaScript file or directly in the browser console
// Test your solutions to verify they work correctly
// Show all your work and include comments explaining your logic
// Submit your completed assignment by the deadline

// Part A: Variable Declaration and Data Types (20 points)

// Problem 1:

// Create Variables (4 points)
// Declare variables with appropriate names and assign the following values:
// Your first name (string)
// Your age (number)
// Whether you're a student (boolean)
// Your favorite color (string)
// Number of siblings you have (number)

let name= "fiz"; // Your first name
let age=23; // Your age
let isStudent=true; // Whether you're a student
let favoriteColor="black"; // Your favorite color
let numberOfSiblings=2; // Number of siblings you have

console.log(name);
console.log(age)
console.log(isStudent);
console.log(favoriteColor);
console.log(numberOfSiblings);

//Problem 2:

//Type checking (4 points)
// For each variable you created in Problem 1, use the typeof operator to check and log its data type. 

typeof 23 //number
typeof "fiz" //string
console.log(typeof name); // string
console.log(typeof age);

typeof true //boolean
console.log(typeof isStudent);

typeof "black" //string
console.log(typeof favoriteColor); 
typeof numberOfSiblings //number
console.log(typeof numberOfSiblings);   //case sensitive

//Problem 3: Understanding Undefined and Null (4 points)

// a) Declare a variable named score without assigning a value. Log its value and type. 
// b) Create a variable named winner and assign it the value null . Log its value and type. c) Explain in your own words: What's the difference between undefined and null?

let score;
console.log(score);
typeof score 
console.log(typeof score);

//output :
//js: 56 undefined
// JavaScript-assignment.js:58 undefined

let winner=null;
console.log(winner);
typeof winner
console.log(typeof winner);

//output:
//js:65 null
// JavaScript-assignment.js:67 object

// Problem 4: Working with Strings (4 points)

// Create three variables:
// firstName with your first name
// lastName with your last name
// fullName that combines both with a space in between

// Log the fullName to the console.

let firstname ="fiaz";
let lastname= "zafar";
console.log(firstname + lastname);
console.log(typeof (firstname + lastname)) //string

// Problem 5: Type Conversion Challenge (4 points)

// What will be the output of the following? Try to predict before running the code:

//let a = "5";
// let b = 3;
// let result = a + b;
// console.log(result);
// console.log(typeof result);

a= "5" //google console output
'5'
b=3
3
a+b
'53'
typeof (a+b)
'string'
result = a+b;
'53'
typeof result
'string'
// The output will be '53' and the type will be 'string' because when you use the + operator with a string and a number, JavaScript converts the number to a string and concatenates them.
//Concatenation means joining separate elements, items, or data strings end-to-end into a single, continuous series or chain


// Part B: Arithmetic Operations (25 points)

// Problem 6: Basic Calculator (5 points)

// Create two variables num1 = 45 and num2 = 12 . Calculate and store:
// Sum
// Difference
// Product
// Quotient
// Remainder (using modulo)

// Log all five results with descriptive labels.

