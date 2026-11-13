// 3. JavaScript (JS)

// Adds behavior and interactivity
// Enables dynamic content, user interactions, and real-time updates
// Think of it as the brain that makes things happen

// Important Note
// A website is essentially a collection of HTML, CSS, and JavaScript files, along with media assets like images,videos, and fonts. The browser downloads and interprets these files to display the web page.

//REPL Pattern
// The console follows a REPL (Read-Evaluate-Print-Loop) pattern:
// 1. Read: The console takes your input (JavaScript code)
// 2. Evaluate: It processes and executes the code
// 3. Print: It displays the result
// 4. Loop: It waits for your next input

// Try this in the console:
1 + 2
// Output: 3
5 * 10
// Output: 50
"Hello" + " World"
// Output: "Hello World"

//Declaring and assigning variables

// Variables are used to store data values. In JavaScript, you can declare variables using var, let, or const.
// The Box Analogy
// Imagine variables as labeled boxes in a warehouse:
// The box label is the variable name (e.g., age , name )
// The contents of the box is the value (e.g., 23 , "Tony Stark" )
// You can put things in the box, take them out, or replace them

//Creating a variable and assigning a value
let age =25 ;
let name = "fiaz";
let studentname = "fiaz";
let isStudent = true;

console.log(age);
console.log(name); //Deprecated means something is outdated or no longer recommended for use.
console.log(studentname);
console.log(isStudent);

// In programming, a deprecated variable, function, or feature:
// - Still exists and may continue to work.
// - Is no longer recommended.
// - May be removed in a future version.
// - Usually has a newer or better alternative.

// In your JavaScript example:
// `name` is recognized by VS Code as a deprecated browser property (`window.name`) in that context.

// Instead, use:

// ```
// let userName = "Fayaz";
// console.log(userName);
// ```

// Remember:

// - Deprecated ≠ Deleted.
// - Deprecated ≠ Broken.
// - Deprecated = Still available, but avoid using it in new code.

// Think of it as an old road that is still open but has a better alternative.

// You can also declare without assigning (value will be undefined)
let score;
console.log(score); // Output: undefined
//Null is a special value that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object reference is empty. In contrast, undefined means that a variable has been declared but has not yet been assigned a value.
let footballScore = null;
console.log(footballScore); // Output: null
// Later assign a value
score = 95;
console.log(score); // Output: 95
// Assignment Operator (=)
// The = symbol is used to assign a value to a variable. It's NOT the same as mathematical equality.
let x = 10; // Assigns the value 10 to variable x
// Variable Names - Best Practices
// Use meaningful names: studentAge instead of sa
// Start with a letter, underscore, or dollar sign
// Can contain letters, numbers, underscores, and dollar signs
// Cannot use reserved keywords (like let , if , while )
// Use camelCase for multi-word names: firstName , totalScore

// 1. Number
// Represents numeric values, both integers and decimals.
// // Creating a variable and assigning a value
// let age = 23;
// let name = "Tony Stark";
// let isStudent = true;
// // You can also declare without assigning (value will be undefined)
// let score;
// console.log(score); // Output: undefined
// // Later assign a value
// score = 95;
// console.log(score); // Output: 95

let Aage= 23 //it is not important to use semicolon at the end of the statement in javascript but it is a good practice to use it
let price =12.22 //Decimal numbers are also valid in JavaScript
let temperature = -12; //Negative numbers are also valid in JavaScript
let distance = 1.5e6; //Scientific notation (1.5 * 10^6)

console.log(Aage)
console.log(price)
console.log(temperature)
console.log(distance)   

// Important: JavaScript doesn't distinguish between integers and floats - they're all just "numbers".

//2. String
// Represents textual data. Strings must be enclosed in quotes.
let Nname = "fizaz"; // Double quotes
let greeting = "hello world"; // Single quotes
let message = `Hello, ${Nname}!`; // Template literals (backticks) allow for embedded expressions    
console.log(Nname);
console.log(greeting);
console.log(message)

//output : fizaz
// hello world
//  Hello, fizaz!

