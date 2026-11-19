// JavaScript (JS) Practice

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
console.log(1 + 2)
// Output: 3
console.log(5 * 10)
// Output: 50
console.log("Hello" + " World")
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
let userName = "Fayaz";
console.log(userName);
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
// Creating a variable and assigning a value
let agee = 23;
let namee = "Tony Stark";
let isStudentt = true;
// You can also declare without assigning (value will be undefined)
let scoree;
console.log(scoree); // Output: undefined
//Later assign a value
score = 95;
console.log(score); // Output: 95

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
let message = `Hello, ${Nname}!`;
let aGe= 54;
let info = `i am ${aGe} years old` ; // Template literals (backticks) allow for embedded expressions    
console.log(Nname);
console.log(greeting);
console.log(message)
console.log(info);

//output : fizaz
// hello world
//  Hello, fizaz!
//i am 54 years old

//3. Boolean

//Represents logical values - only two possibilities: true or false .

let isStudenttt = true;
let isLogged = false;
let hasPermission = true;

//often used in conditions

if (isStudenttt){
    console.log("student discount appliced");
}

//4. Undefined
//A variable that has been declared but not assigned a value.

let score1;
console.log(score1);
console.log(typeof score1); //o/p : undefined

//5. Null
// Represents the intentional absence of any value. It's an assignment value meaning "no value" or "empty".
let data = null; // Explicitly saying "this has no value right now"
// Common use case
let user = null; // No user logged in yet
// Later, when user logs in
user = { name: "Alice", id: 101 };
console.log(data);
console.log(user); 
// o/p :{name: 'Alice', id: 101}
// id: 101
// name:"Alice"
// [[Prototype]]:Object

//6. BigInt

// Used for very large integers that exceed the safe integer limit.
let bigNumber = 9007199254740991n; // Note the 'n' at the end
let huge = 12345678901234567890n;
console.log(bigNumber)
console.log(huge);

//Checking Data Types
// Use the typeof operator:
console.log(typeof 25); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a JavaScript quirk!)
console.log(typeof 123n); // "bigint"

// Arithmetic Operations

// JavaScript provides standard mathematical operators to perform calculations.

// Basic Operators
let sumAdd= 1+10;
console.log(sumAdd); //Addition //o/p : 11
let sumMul= 1* 10
console.log(sumMul); //Multiplication //o/p : 10
let sumSub = 1 - 10
console.log(sumSub);//Subtraction //o/p : -9
let sumDiv = 10 / 100;
console.log(sumDiv); //Division //o/p : 0.1
let sumModulo = 10 % 100; //Modulo : returns the REMAINDER of a division.
console.log(sumModulo);//o/p : 10
//more examples
let remainder = 12 % 5; // 2 (12 ÷ 5 = 2 remainder 2)
let check = 10 % 3; // 1 (10 ÷ 3 = 3 remainder 1)
let even = 8 % 2; // 0 (no remainder - 8 is even)
// example : check if no. is even or odd
let num= 7;
if (num % 2 === 0){
    console.log("even")
}else {
    console.log("odd");
} //% (Modulo / Remainder operator): number % 2 divides number by 2 and gives you only the remainder.  
// === 0 (Strict equality): Checks if that remainder is equal to 0.   An even number divided by 2 always leaves a remainder of 0, while an odd number leaves a remainder of 1: With 7 (from your code): 7 % 2 equals 1 (because 2 goes into 7 three times with 1 left over). JavaScript then checks 1 === 0, which is false, so it jumps to the else block and logs "Odd".   With an even number like 8: 8 % 2 equals 0. JavaScript checks 0 === 0, which is true, so it logs "Even".

//6. EXPONENTIATION (**)

//Raises a number to a power.(2^2)
let squared = 5 ** 2;
let cubed = 2**3;
let power= 10**2;
console.log(squared); //o/p : 25
console.log(cubed); //o/p : 8
console.log(power); //o/p : 100

//Combining Operations

//Operation Precedence
//() -> ** -> /,%,* -> +,-
let results = 5 + 3 **2 * 5 -(2 % 4) / 10+ (1-2)
console.log(results); //o/p : 49.8
//(1-2)+ 10 /(2 % 4)-5*3**2+5
//(1)+10/(2%4)-5*9+5
//1+5-45+5
//6-40
//34 //console answer:48.8

//string Concatenation with +
let firstName="tony";
let lastName="toe";
let fullname = firstName + lastName ;
console.log(fullname)//tonytoe
let age2=23;
let msg= "i am " + age + "years old"; 
console.log(msg);//i am 25years old

//NaN (not a number)

// NaN is a special value in JavaScript that represents an invalid or undefined numerical result.
let result = 0/0;
console.log(result); // NaN

// Invalid mathematical operations
// let result2 = Math.sqrt(--1); // NaN (square root of negative)

// Converting non-numeric strings to numbers
let result3 = Number("abc"); // NaN
console.log( result3 = parseInt("hello")); // NaN

// Operations with undefined
let A;
let result5 = A * 5; //NaN

// Important Characteristics

// 1. NaN Propagates
// Any operation involving NaN results in NaN:
let a = NaN;
console.log(a + 1); // NaN
console.log(a * 5); // NaN
console.log(a / 2); // NaN
console.log(a - 10); // NaN

// 2. Type of NaN is "number"
console.log(typeof NaN); // "number"
// This is a quirk of JavaScript!

// 3. NaN is Not Equal to Itself
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

// Checking for NaN

// To check if a value is NaN, use:
console.log(isNaN(NaN)); // true
console.log(Number.isNaN(NaN)); // true (more reliable)

// Practical Tip
// Always validate user input and handle potential NaN scenarios in your code to avoid unexpected bugs!

let value = 0 / 0;

// Method 1: isNaN() - converts value to number first
console.log(isNaN(value)); // true

// Method 2: Number.isNaN() - doesn't convert (recommended)
console.log(Number.isNaN(value)); // true

// Why Number.isNaN() is better:
console.log(isNaN("hello")); // true (converts "hello" to number first)
console.log(isNaN("WORLD"));//true
console.log(Number.isNaN("hello")); // false (doesn't convert)

//OPERATURE PRECEDANCE
//When an expression has multiple operators, JavaScript follows a specific order of evaluation, similar to "BODMAS/PEMDAS" in mathematics.

// Order of Precedence (Highest to Lowest)
// 1. Parentheses ()
// 2. Exponentiation **
// 3. Multiplication * , Division / , Modulo %
// 4. Addition + , Subtraction -

// Example 1: Multiplication before addition
let result1 = 5 + 3 * 2;
// Step 1: 3 * 2 = 6
// Step 2: 5 + 6 = 11
console.log(result1); // 11
// Example 2: Using parentheses to change order
let result2 = (5 + 3) * 2;
// Step 1: (5 + 3) = 8
// Step 2: 8 * 2 = 16
console.log(result2); // 16
// Example 3: Complex expression
let result6 = (5 + 2) / 7 + 1 * 2;
// Step 1: (5 + 2) = 7
// Step 2: 7 / 7 = 1
// Step 3: 1 * 2 = 2
// Step 4: 1 + 2 = 3
console.log(result6); // 3
// Example 4: Exponentiation has high precedence
let result4 = 2 + 3 ** 2;
// Step 1: 3 ** 2 = 9
// Step 2: 2 + 9 = 11
console.log(result4); // 11
// Example 5: Same precedence, left to right
let result12 = 10 / 2 * 3;
// Step 1: 10 / 2 = 5 (left to right)
// Step 2: 5 * 3 = 15
console.log(result12); // 15

//Key Rules
// 1. Use parentheses when in doubt - they make code clearer
// 2. Same precedence operators evaluate left to right
// 3. Exponentiation is right-to-left: 2 ** 3 ** 2 = 2 ** (3 ** 2) = 2 ** 9 = 512

//Pro Tip
// When writing complex expressions, use parentheses liberally to make your intentions clear, even if they're not
// technically required:
// Less clear
let taxRate= 1;
let total21 = price + price * taxRate;
// More clear
let total1 = price + (price * taxRate);

//Assignment Operators

//Assignment operators provide shorthand ways to update variable values.

// Basic Assignment (=)
let b = 10; // Assigns 10 to x

//Compound Assignmnet Operators

//Addition Assignment +=
let ageee = 20;
ageee +=5 ;// Same as: age = age + 5
console.log(ageee); //25

// Equivalent to:
let scoreee = 100;
scoreee = scoreee + 50; 
//vs
scoreee += 50;
console.log(scoreee);//150

// Subtraction Assignment (-=)
let balance = 100;
balance -= 100;// Same as: balance = balance - 200
console.log(balance);//0

// Multiplication Assignment (*=)
let git=10;
git *=10;
console.log(git);//100

//Division
let numm=25;
numm /=5;
console.log(numm)//5

//Modulo 
let mul= 45;
mul %= 5;
console.log(mul);//0

//exponential 
let ex=5;
ex **=2;
console.log(ex)//25

// When to Use
// These operators make code more concise and readable, especially in loops and calculations:

//accumulating total
let total=0;
total += 100;
total += 100;
console.log(total);//200
let value1= 2;
value1 *=10;
value1 *=10;
console.log(value1);//200

//Unary Operations

//Unary Operators
// Unary operators work with a single operand (unlike binary operators like + or - which need two operands).

// Increment Operator (++)
// Increases a value by 1.

// Post-increment (variable++)
// Uses the current value first, then increments.

let count = 5;
let result0 = count++;
console.log(result0); // 5 (uses old value)
console.log(count); // 6 (now incremented)
let res=10;
val= res++
console.log(val)//10
console.log(res)//11 //adds new value later 
// Step by step:
// 1. result = count (result gets 5)
// 2. count = count + 1 (count becomes 6)

// Pre-increment (++variable)
// Increments first, then uses the new value.

let countt= 10;
let final=++countt;
console.log(final);//11 //adds new value before
console.log(countt);//11 

//Decrement Operator (--)
// Decreases a value by 1. Works the same way as increment.

//Post-decrement (variable--)
let score2= 100;
let tol= score2 --;
console.log(tol);//100
console.log(score2);//99

//Pre-decrement (--variable)
let sco = 230;
let toll= -- sco;
console.log(sco);//299
console.log(toll);//299

//common use cases

//1.loop counters
let i=0;
while(i<10){
    console.log(i);
    i++
}//o/p : 0 -> 9

//2. Counting down
let countdown = 10;
while (countdown >0){
    console.log(countdown)
    countdown--; // decrement
}
console.log("blast off") //countdown before launch

//3. Increment

let pageView=100;
pageView++;
console.log(pageView);//101

let countup = 0;
while(countup<10){
    console.log(countup)
    countup++
}
console.log("jumps");// jumps 0 -> 9

//clear and neat

let c = 10;
c++;
++c;
let y = c + c;
console.log(y);//24(12+12)
console.log(c);//12

//Quick Reference Card

// Variables
let age = 23;
const PI = 3.14;
// Data Types
typeof 42 // "number"
typeof "hello" // "string"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" (quirk)
// Arithmetic
10 + 5 // 15
10 -- 5 // 5
10 * 5 // 50
10 / 5 // 2
10 % 3 // 1
2 ** 3 // 8
// Assignment
x += 5 // x = x + 5
x -= 5 // x = x - 5
x *= 5 // x = x * 5
x /= 5 // x = x / 5

// Increment/Decrement
x++ // x = x + 1 (post)
++x // x = x + 1 (pre)
x-- // x = x - 1 (post)
--x // x = x - 1 (pre)
// Checking for NaN
isNaN(value) // true if NaN
Number.isNaN(value) // better method