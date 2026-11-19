// ==================== 1. Comments ====================
// In JavaScript, use comments to explain code or to disable lines of code.
// Single-line comments start with `//`. Everything after `//` on the same line is ignored by JS.

console.log("This line will print"); // This message shows in the console.

// console.log("This line will NOT print"); // This is commented out, so it's ignored.

/*
   Multi-line comments start with /* and end with *\/.
   They can span multiple lines.
   Useful for longer explanations or commenting out blocks of code.
*/

// Example: The following line is commented out and won't run.
// console.log("Ignored code");

// ==================== 2. Variables and Console Output ====================
// Declare variables using `let` or `const`. (Use `var` for older code, but `let`/`const` are block-scoped.)
// Use `console.log()` to output values.

let message = "Hello, JavaScript!";  // A string variable
console.log(message);               // Prints: Hello, JavaScript!

// Without quotes, JS looks for a variable name:
let number = 42;
console.log(number);               // Prints: 42

// Common mistake: forgetting quotes for strings causes errors.
// let bad = Hello; // ReferenceError: Hello is not defined (should be in quotes)

// ==================== 3. For Loop Basics ====================
// A `for` loop repeats a block of code a certain number of times.
// Syntax: for (initialization; condition; update) { /* code */ }

for (let i = 1; i <= 5; i++) {
    // Explanation:
    // - `let i = 1` initializes the counter `i` to 1.
    // - `i <= 5` is the loop continuation condition.
    // - `i++` increments `i` by 1 after each iteration.
    console.log(i); // Prints the current value of i.
}
// Expected output (each on a new line): 1 2 3 4 5

/*
Dry-run of the loop:
i = 1 (initialize)
Check: 1 <= 5? Yes, run loop body => prints 1.
Update: i++ makes i = 2.
Check: 2 <= 5? Yes => prints 2, then i becomes 3.
...
Check: 5 <= 5? Yes => prints 5, then i becomes 6.
Check: 6 <= 5? No, stop loop.
*/

// Common mistake: forgetting the increment (or update step):
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     // If we forget i++, this loop never ends (infinite loop).
// }

// ==================== 4. For Loop – Counting Down ====================
for (let i = 5; i >= 1; i--) {
    // Now i starts at 5 and decrements down to 1.
    console.log(i); // Prints: 5, 4, 3, 2, 1
}
// Expected output: 5 4 3 2 1

// ==================== 5. For Loop – Custom Step ====================
// You can change the step with `i += step` or `i -= step`.
for (let i = 0; i <= 10; i += 2) {
    // i goes 0, 2, 4, 6, 8, 10
    console.log(i);
}
// Prints: 0, 2, 4, 6, 8, 10

// To print only odd numbers, start at 1 and step by 2:
for (let i = 1; i <= 9; i += 2) {
    console.log(i); // 1, 3, 5, 7, 9
}

// ==================== 6. If Statement and Modulus – Odd/Even ====================
for (let i = 1; i <= 10; i++) {
    // The modulus operator (%) gives the remainder of division.
    // i % 2 === 0 means i is even.
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
// Expected output:
// 1 is odd
// 2 is even
// 3 is odd
// ...
// 10 is even

// === Equality vs. Assignment Notes ===
// '='  is assignment. '==' and '===' are comparisons.
// '==' does type conversion, '===' is strict (no conversion).
console.log("2" == 2);  // true, because "2" is converted to 2 (not recommended)
console.log("2" === 2); // false, different types (recommended to use strict ===)


// ==================== 7. Multiplication Table ====================
let base = 5;
for (let i = 1; i <= 10; i++) {
    let product = base * i;
    // Using a template literal for nice formatting
    console.log(`${base} x ${i} = ${product}`);
}
// Expected output:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50

// ==================== 8. Accumulator – Sum of Numbers ====================
let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i; // same as: total = total + i
    console.log("Adding", i, "; running total =", total);
}
console.log("Total sum of 1 through 10 is", total);
// After loop, total should be 55.

// ==================== 9. While Loop ====================
// A `while` loop repeats as long as its condition is true.
let count = 1;
while (count <= 5) {
    console.log("While count is", count);
    count++; // important to avoid infinite loop
}
// Prints 1 through 5, similar to the for loop above.

// Infinite loop caution:
// while (true) { /* ... */ } // This would never end unless `break` is used.

// ==================== 10. While Loop – User Input (Simulation) ====================
// In browser JavaScript, use prompt() to get input. In Node.js, prompt doesn't exist by default.
// We'll simulate user input for demonstration.

// Browser example (won't run in Node):
// let input = prompt("Type something (or 'exit' to stop):");

// Node.js alternative (using prompt-sync library):
// const prompt = require('prompt-sync')();
// let input = prompt("Type something (or 'exit' to stop):");

let input = "";  // initial dummy value
while (input !== "exit") {
    // For an actual browser:
    // input = prompt("Type something (or 'exit' to stop):");
    input = "exit"; // (simulate user typing 'exit')
    console.log("You entered:", input);
}
console.log("Exited the loop.");

// === Converting Strings to Numbers ===
// User input via prompt is a string. Use Number() to convert.
let strNumber = "123";
console.log("String plus number:", strNumber + 5);    // "1235" (concatenation)
let realNumber = Number(strNumber);
console.log("Number plus number:", realNumber + 5);    // 128 (arithmetic)
console.log("Converted type:", typeof realNumber);     // "number"

// ==================== 11. Do...While Loop ====================
// A do...while loop executes once, then repeats while condition is true.
let k = 1;
do {
    console.log("Do...while iteration, k =", k);
    k++;
} while (k <= 0);
// In this case, the condition k <= 0 is false initially, but the block ran once.
// Expected output: one line with k = 1.

// If we used a normal while(k <= 0) here, nothing would run.

// ==================== 12. Loop Control: break and continue ====================
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping number 3");
        continue; // skip to next iteration (no further code below this in loop for i=3)
    }
    if (i === 5) {
        console.log("Breaking at 5");
        break;    // exit the loop entirely
    }
    console.log("Loop i =", i);
}
// Output sequence explanation:
// i=1: prints "Loop i = 1"
// i=2: prints "Loop i = 2"
// i=3: hits continue, prints "Skipping number 3", then skips to i=4
// i=4: prints "Loop i = 4"
// i=5: hits break, prints "Breaking at 5", then exits loop.

// ==================== 13. Nested Loops (2D Patterns) ====================
for (let row = 1; row <= 3; row++) {
    let line = "";
    for (let col = 1; col <= 3; col++) {
        line += "* ";
    }
    console.log(line.trim());
}
// Output:
// * * *
// * * *
// * * *
// (A 3x3 block of stars)

// Another nested loop example: printing coordinate pairs
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}
// Prints pairs (i,j) for all i,j from 1 to 3.

// ==================== 14. Arrays (1D) Traversal ====================
let arr = [10, 20, 30, 40, 50];
// Using a for loop with index:
for (let i = 0; i < arr.length; i++) {
    console.log(`arr[${i}] = ${arr[i]}`);
}
// Using for...of to iterate values directly:
for (const value of arr) {
    console.log("Value from arr:", value);
}

// ==================== 15. 2D Array Traversal ====================
// A 2D array (array of arrays). Access with matrix[row][col].
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Access examples:
console.log("matrix[0][0] is", matrix[0][0]); // 1
console.log("matrix[2][1] is", matrix[2][1]); // 8

// Traverse 2D array with nested loops:
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(`matrix[${row}][${col}] = ${matrix[row][col]}`);
    }
}

// Using for...of with nested arrays:
for (const rowArr of matrix) {
    for (const num of rowArr) {
        console.log("Number from matrix row:", num);
    }
}

// ==================== 16. Summing 2D Array Elements ====================
let sum2D = 0;
for (const rowArr of matrix) {
    for (const num of rowArr) {
        sum2D += num;
    }
}
console.log("Sum of all elements in matrix is", sum2D);
// (This should be 45 for the 3x3 matrix above.)

// ==================== 17. Finding Max in 2D Array ====================
let maxVal = matrix[0][0];
for (const rowArr of matrix) {
    for (const num of rowArr) {
        if (num > maxVal) {
            maxVal = num;
        }
    }
}
console.log("Maximum value in matrix is", maxVal);
// (This should be 9 in the example matrix.)

// ==================== 18. Flattening a 2D Array ====================
let flatManual = [];
for (const rowArr of matrix) {
    for (const num of rowArr) {
        flatManual.push(num);
    }
}
console.log("Flattened manually:", flatManual);
// Using Array.flat() (ES2019+), flattens one level by default:
let flatOnce = matrix.flat(); 
console.log("Flattened with flat():", flatOnce);

// ==================== 19. Searching in 2D Array ====================
let target = 5;
let found = false;
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] === target) {
            console.log(`Found ${target} at [${row}][${col}]`);
            found = true;
        }
    }
}
if (!found) {
    console.log(target, "not found in matrix.");
}

// ==================== 20. 2D Patterns: Right Triangle of Stars ====================
console.log("Right triangle of stars:");
let levels = 5;
for (let i = 1; i <= levels; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
// Output for levels=5:
// *
// **
// ***
// ****
// *****

// ==================== 21. Tic-Tac-Toe Board (Example) ====================
let ticTacToe = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", " ", "O"]
];
// Display the board:
console.log("Tic-Tac-Toe board:");
for (const row of ticTacToe) {
    console.log(row.join(" | "));
}
// Check a winning condition (example: diagonal X's):
if (
    ticTacToe[0][0] === "X" && 
    ticTacToe[1][1] === "X" && 
    ticTacToe[2][2] === "X"
) {
    console.log("X wins diagonally!");
}

// ==================== 22. Class Roster (2D Array of Names) ====================
let roster = [
    ["Alice", "Bob"],
    ["Charlie", "Diana"],
    ["Eve"]  // Eve is alone in this "class"
];
for (let classIndex = 0; classIndex < roster.length; classIndex++) {
    for (let studentIndex = 0; studentIndex < roster[classIndex].length; studentIndex++) {
        console.log(
            `Class ${classIndex}, Student ${studentIndex}:`, 
            roster[classIndex][studentIndex]
        );
    }
}

// ==================== 23. RGB Pixel (Array of 3 Values) ====================
// Representing a color as [R, G, B], each 0-255.
let pixel = [128, 0, 255]; // Purple-ish color
console.log(`RGB Pixel: R=${pixel[0]}, G=${pixel[1]}, B=${pixel[2]}`);

// ==================== 24. Sales Totals (2D Array of Numbers) ====================
// Each sub-array represents a day's sales for different items.
let sales = [
    [5, 3, 2],   // Day 1
    [10, 0, 7],  // Day 2
    [3, 2, 5]    // Day 3
];
for (let day = 0; day < sales.length; day++) {
    let dayTotal = 0;
    for (let item = 0; item < sales[day].length; item++) {
        dayTotal += sales[day][item];
    }
    console.log(`Total sales for Day ${day + 1}: ${dayTotal}`);
}

// ==================== 25. Cinema Seating (2D Boolean Array) ====================
// true = occupied, false = available
let cinema = [
    [true, false, true],
    [true, true, false],
    [false, false, true]
];
let availableSeats = 0;
for (const rowArr of cinema) {
    for (const seat of rowArr) {
        if (!seat) { // seat is false (available)
            availableSeats++;
        }
    }
}
console.log("Available seats:", availableSeats);

// ==================== 26. Exercises ====================
// Practice these tasks on your own. Solutions (in comments) are provided:

// 1. Print numbers from 1 to 100:
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// 2. Print all even numbers from 1 to 50:
// for (let i = 2; i <= 50; i += 2) {
//     console.log(i);
// }

// 3. Print the multiplication table for 6 (1 through 10):
// let base6 = 6;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${base6} x ${i} = ${base6 * i}`);
// }

// 4. Calculate the sum of numbers from 1 to 100:
// let sum100 = 0;
// for (let i = 1; i <= 100; i++) {
//     sum100 += i;
// }
// console.log("Sum of 1 to 100 is", sum100);

// 5. Ask user for a password until it matches a saved value (max 3 attempts):
// const prompt = require('prompt-sync')();
// const savedPassword = "password123";
// let attempt = 0;
// let inputPass;
// do {
//     inputPass = prompt("Enter password: ");
//     attempt++;
// } while (inputPass !== savedPassword && attempt < 3);
// console.log(
//     inputPass === savedPassword 
//     ? "Logged in successfully!"
//     : "Too many attempts!"
// );
// (Note: using `attempt < 3` allows 3 tries. Using `<= 3` would allow a 4th attempt - off-by-one issue.)

// 6. Create a simple calculator menu using do...while:
// const prompt = require('prompt-sync')();
// let choice;
// do {
//     console.log("Calculator Menu:\\n1. Add\\n2. Multiply\\n3. Exit");
//     choice = prompt("Choose (1-3): ");
//     if (choice === "1") {
//         let a = Number(prompt("Enter first number: "));
//         let b = Number(prompt("Enter second number: "));
//         console.log("Result:", a + b);
//     } else if (choice === "2") {
//         let a = Number(prompt("Enter first number: "));
//         let b = Number(prompt("Enter second number: "));
//         console.log("Result:", a * b);
//     }
// } while (choice !== "3");
// console.log("Goodbye!");

// 7. Print a right-angled triangle of stars (e.g., 4 rows):
// let rows = 4;
// for (let i = 1; i <= rows; i++) {
//     console.log("*".repeat(i)); 
// }
// Output for rows=4:
// *
// **
// ***
// ****

// 8. Draw a 3x3 grid of '*' characters:
// for (let i = 1; i <= 3; i++) {
//     console.log("* * *");
// }

// 9. Build a simple ATM with deposit, withdraw, check balance, and exit:
// const prompt = require('prompt-sync')();
// let balance = 1000;
// let option;
// do {
//     console.log("ATM Menu:\\n1. Deposit\\n2. Withdraw\\n3. Check Balance\\n4. Exit");
//     option = prompt("Choose (1-4): ");
//     if (option === "1") {
//         let amt = Number(prompt("Enter deposit amount: "));
//         if (amt > 0) {
//             balance += amt;
//             console.log(`Deposited ₹${amt}. New balance: ₹${balance}`);
//         } else {
//             console.log("Invalid amount.");
//         }
//     } else if (option === "2") {
//         let amt = Number(prompt("Enter withdrawal amount: "));
//         if (amt <= 0) {
//             console.log("Invalid amount.");
//         } else if (amt > balance) {
//             console.log("Insufficient funds!");
//         } else {
//             balance -= amt;
//             console.log(`Withdrew ₹${amt}. New balance: ₹${balance}`);
//         }
//     } else if (option === "3") {
//         console.log("Current balance: ₹" + balance);
//     }
// } while (option !== "4");
// console.log("Thank you! Please take your card.");

// === End of JavaScript study guide examples ===
