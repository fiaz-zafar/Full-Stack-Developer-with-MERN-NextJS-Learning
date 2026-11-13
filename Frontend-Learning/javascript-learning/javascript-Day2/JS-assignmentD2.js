// Part A : Idnetifiers and Naming
// Problem 1 : Valid or Invalid Identifiers

let firstName; // Valid identifier
let 2ndPlace; //invalid identifier
let  user_email; //Valid identifier
let total-price; //invalid identifier
let $amount; //Valid identifier
let my variable; //invalid identifier
let _privateData; //Valid identifier
let //reservedWord; //invalid identifier

//Problem 2: Fix the Variable Names
// Rewrite these variable names following proper JavaScript conventions (camelCase):

// Current (incorrect or non-standard)

// let user name = "Alice";
// let 1stprize = 1000;
// let total--cost = 250;
// let USERAGE = 25;

// // Your corrected versions:
// let userName = "Alice"; // Corrected to camelCase
// let firstPrize = 1000; // Corrected to camelCase and removed invalid starting digit
// let totalCost = 250;
// let userAge = 25;




//Problem 3: Naming Convention Practice
// // Create appropriate variable names for the following (use camelCase):

// Store a person's email address
// let emailAddress = "john@example.com";
// // Store whether a user is logged in (boolean)
// let isLogged = true;
// // Store the maximum number of attempts
// const maxLoginAttempt = 3;
// // Store a student's final grade
// let totalGrade = 85;
// // Store a product's price in dollars
// let $price = 99.99;

// // Part B: Booleans and Data Types

// // Problem 4: Boolean Practice
// // Create variables and assign appropriate boolean values:

// age = 25;
// console.log(age);
// // Create a variable for "is it raining?" - Set it to false
// let istraining = false ;
// console.log(istraining);
// // Create a variable for "is the user an adult?" (age >= 18) - Set it to true
// let istheuseranadult? = 18
// console.log(age >= 18 )
// // Create a variable for "does the password match?" - Set it to false
// let doesthepasswordmatch? = false;


// // Problem 5: Dynamic Typing
// // What will be the output? Write your prediction:

// let x = 10;
// console.log(typeof x); // int
// x = "Hello";
// console.log(typeof x); // string
// x = true;
// console.log(typeof x); // boolean

// // Part C: Strings and Indexing

// // Problem 6: String Indexing
// // Given the string:

// let language = "JavaScript";

// // What is the first character?
// language[0] = _______________
// // What is the character at index 4?
// language[4] = _______________
// // What is the last character? (use length)
// language[_______________ _______________] = _______________
// // What is the length of the string?
// language.length = _______________

// // Problem 7: String Creation
// // Create strings using different quote styles:

// // Create a string with double quotes
// let message1 = ________________________________;
// // Create a string with single quotes that says: It's a sunny day
// let message2 = ________________________________;
// // Create a string with double quotes that says: He said, "Hello!"
// let message3 = ________________________________;

// // Problem 8: String Concatenation
// // Complete the following:

// let firstName = "John";
// let lastName = "Doe";
// // Concatenate to create "John Doe"
// let fullName = ________________________________;
// // Create a message: "Hello, John Doe!"
// let greeting = ________________________________;
// let age = 25;
// // Create: "John is 25 years old"
// let info = ________________________________;

// // Part D: Template Literals
// // Problem 9: Convert to Template Literals
// // Rewrite these using template literals (backticks and ${}):

// let name = "Alice";
// let score = 95;
// let message = "Student " + name + " scored " + score + " points.";
// // Your template literal version:
// let message = ________________________________;

// // Original
// let product = "Laptop";
// let price = 999;
// let quantity = 2;
// let total = price * quantity;
// let receipt = "Item: " + product + ", Quantity: " + quantity + ", Total: $" + total;
// // Your template literal version:
// let receipt = ________________________________;

// // Problem 10: Template Literal Practice
// // Create template literals for these scenarios:

// let cityName = "Paris";
// let temperature = 25;
// // Create: "The temperature in Paris is 25 degrees."
// let weather = ________________________________;

// let hourOfDay = 14;
// let userName = "Bob";
// // Create: "Good afternoon, Bob! It's 14:00."
// let greeting = ________________________________;

// // Part E: Null and Undefined

// // Problem 11: Null vs Undefined
// // Write the correct value (null or undefined):

// // A variable declared but not assigned
// let score;
// console.log(score); // Output: _______________
// // A variable intentionally set as empty
// let winner = ___________;
// console.log(winner); // Output: _______________
// // Accessing a non-existent property
// let user = { name: "Alice" };
// console.log(user.age); // Output: _______________

// // Part F: Comparison Operators

// // Problem 12: Predict the Output
// // Write true or false for each comparison:

// console.log(10 > 5); // _______________
// console.log(3 < 2); // _______________
// console.log(5 >= 5); // _______________
// console.log(8 <= 10); // _______________
// console.log(7 != 7); // _______________
// console.log(15 > 20); // _______________

// // Problem 13: Write Comparisons
// // Write the comparison that produces the given result:

// let age = 18;
// // Write a comparison that returns true (age is greater than or equal to 18)
// ___________________ // true
// let temperature = 30;
// // Write a comparison that returns true (temperature is greater than 25)
// ___________________ // true
// let score = 75;
// // Write a comparison that returns false (score is less than 60)
// ___________________ // false

// // Part G: Loose vs Strict Equality

// // Problem 14: == vs ===
// // Predict the output (true or false):

// console.log(5 == 5); // _______________
// console.log(5 === 5); // _______________
// console.log(5 == "5"); // _______________
// console.log(5 === "5"); // _______________
// console.log(true == 1); // _______________
// console.log(true === 1); // _______________
// console.log(0 == false); // _______________
// console.log(0 === false); // _______________

// // Problem 15: Fix the Code
// // Rewrite these comparisons using strict equality (===):

// // Current code with loose equality
// let userInput = "10";
// if (userInput == 10) {
// console.log("Input is 10");
// }
// // Your corrected version with strict equality:
// ___________________________________________ ___________________________________________
// ___________________________________________ ___________________________________________

// // Part H: String Comparison

// // Problem 16: String Comparison Prediction
// // Predict true or false:

// console.log('a' > 'A'); // _______________
// console.log('b' < 'c'); // _______________
// console.log('apple' < 'banana'); // _______________
// console.log('Z' < 'a'); // _______________
// console.log("10" < "2"); // _______________

// //Explain why "10" < "2" gives that result:


// // Problem 17: Case-Insensitive Comparison
// // Write code to compare two strings ignoring case:

// let str1 = "Hello";
// let str2 = "HELLO";
// // Write a comparison that returns true (comparing in lowercase)
// ___________________________________________ ___________________________________________

// // Part I: Practical Challenges

// // Problem 18: User Greeting
// // Write code to create a personalized greeting:

// let userName = "Sarah";
// let hour = 9; // 9 AM
// // Create a greeting: "Good morning, Sarah!"
// // Hint: Use template literals
// let greeting = ________________________________;
// console.log(greeting);

// // Problem 19: Age Checker
// // Complete this age verification program:

// let userAge = 16;
// let minimumAge = 18;
// // Write a comparison to check if user is old enough
// let isOldEnough = ________________________________;
// console.log(isOldEnough); // Should print: false

// // Problem 20: Email Validator
// // Check if an email starts with a letter (not a number or special character):

// let email = "alice@example.com";
// // Get the first character
// let firstChar = ________________________________;
// // Check if it's a lowercase letter (between 'a' and 'z')
// let isValid = ________________________________;
// console.log(isValid);

// // Problem 21: String Builder
// // Build a product description using template literals:

// let productName = "Wireless Mouse";
// let productPrice = 29.99;
// let inStock = true;
// // Create: "Product: Wireless Mouse | Price: $29.99 | In Stock: true"
// let description = ________________________________;
// console.log(description);

// // Problem 22: Initial Generator
// // Extract initials from a name:

// let firstName = "John";
// let middleName = "Robert";
// let lastName = "Smith";
// // Create initials: "J.R.S."
// let initials = ________________________________;
// console.log(initials);

// // Part J: Debugging Practice

// // Problem 23: Find and Fix Errors
// // Find the errors in this code and write the corrected version:

// // Code with errors:
// let 1stPlace = "Gold";
// let user name = "Alice";
// let total--cost = 100;
// if (age = 18) {
// console.log("You can vote");
// }
// let message = 'It's a beautiful day';

// //Corrected Code:

// // Problem 24: Logic Error
// // This code has a logic error. Find and fix it:

// let userInput = "25";
// if (userInput === 25) {
// console.log("Input is correct");
// } else {
// console.log("Input is incorrect");
// }

// //whats wrong

// //corrected code:

