

// ==========================================================
// 1. INTRODUCTION TO LOOPS
// ==========================================================
// Loops execute code multiple times without rewriting it (iteration).
//
// Without a loop:
//   console.log("Hello");
//   console.log("Hello");
//   ... 97 more times!
//
// With a loop:
console.log("\n=== 1. Introduction to Loops ===");
for (let i = 0; i < 3; i++) {   // (3 instead of 100 to keep output short)
  console.log("Hello");
}
// Key Concept: Loops save time, reduce duplication, and make code more maintainable.


// ==========================================================
// 2. THE for LOOP
// ==========================================================
// Best when you know exactly how many times to repeat something.
//
// Syntax:
// for (initialization; condition; updation) {
//   // Code to execute repeatedly
// }
//
// 1. Initialization: starting point (runs once at the beginning)
// 2. Condition: loop continues while this is true (checked before each iteration)
// 3. Updation: changes the counter after each iteration
console.log("\n=== 2. The for Loop ===");

// Example 1: Print numbers 1 to 5
console.log("--- Example 1: 1 to 5 ---");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5
// let i = 1  -> start at 1
// i <= 5     -> continue while i is 5 or less
// i++        -> add 1 to i after each loop

// Example 2: Odd numbers from 1 to 15
console.log("--- Example 2: Odd numbers 1 to 15 ---");
for (let i = 1; i <= 15; i += 2) {
  console.log(i);
}
// Output: 1, 3, 5, 7, 9, 11, 13, 15

// Example 3: Even numbers from 2 to 10
console.log("--- Example 3: Even numbers 2 to 10 ---");
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
// Output: 2, 4, 6, 8, 10

// Example 4: Multiplication table of 5
console.log("--- Example 4: Table of 5 ---");
for (let i = 1; i <= 10; i++) {
  console.log(`5 × ${i} = ${5 * i}`);
}
// Output: 5 × 1 = 5 ... 5 × 10 = 50

// Example 5: Countdown from 10 to 1
console.log("--- Example 5: Countdown ---");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Blast off!");


// ==========================================================
// 3. INFINITE LOOPS (WARNING!)
// ==========================================================
// An infinite loop occurs when the condition never becomes false.
// It can crash your browser or freeze your program!
// (Everything "BAD" below is commented out - don't run it!)
console.log("\n=== 3. Infinite Loops ===");

// Cause 1: Missing updation
// for (let i = 1; i <= 5; ) {
//   console.log(i);
//   // i never changes, so i <= 5 is always true
// }

// Cause 2: Wrong updation direction
// for (let i = 1; i >= 0; i++) {
//   console.log(i);
//   // i keeps increasing, so i >= 0 is always true
// }

// Cause 3: Omitting the condition
// for (let i = 1; ; i++) {
//   console.log(i);
//   // No condition means "always true"
// }

// Example 1: Fixed version - proper updation
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Runs 5 times and stops

// Example 2: Fixed version - correct direction
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
// Counts down from 10 to 0 and stops

// Example 3: How to detect infinite loops
// If your browser freezes after running a loop, check:
//  1. Is the counter variable being updated? (i++ or i--)
//  2. Will the condition eventually become false?
//  3. Is the updation moving toward the stopping condition?

// Example 4: Infinite loop with while
// let count = 0;
// while (count < 5) {
//   console.log(count);
//   // Forgot to increment count!
// }

// Example 5: Fixed while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++; // Now it will stop at 5
}
// Pro Tip: Always double-check your loop conditions and counter updates!


// ==========================================================
// 4. NESTED for LOOPS
// ==========================================================
// A loop inside another loop. The inner loop completes ALL its
// iterations for every single iteration of the outer loop.
//
// Syntax:
// for (let i = 1; i <= outerLimit; i++) {
//   for (let j = 1; j <= innerLimit; j++) {
//     // Inner loop code
//   }
// }
console.log("\n=== 4. Nested for Loops ===");

// Example 1: Basic nested loop
console.log("--- Example 1: Basic nested loop ---");
for (let i = 1; i <= 3; i++) {
  console.log(`Outer loop: ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`  Inner loop: ${j}`);
  }
}

// Example 2: Multiplication table (1 to 5)
// Outer loop = rows, inner loop = columns. Each cell is i * j.
console.log("--- Example 2: Multiplication table ---");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i * j) + "\t";
  }
  console.log(row);
}

// Example 3: Pattern printing - right triangle
console.log("--- Example 3: Right triangle ---");
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// Example 4: Number grid (useful for 2D arrays / game boards)
console.log("--- Example 4: Number grid ---");
for (let row = 1; row <= 4; row++) {
  let line = "";
  for (let col = 1; col <= 4; col++) {
    line += `(${row},${col}) `;
  }
  console.log(line);
}

// Example 5: Inverted triangle pattern
console.log("--- Example 5: Inverted triangle ---");
for (let i = 5; i >= 1; i--) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}
// Key Insight: Nested loops are powerful for 2D data (tables, grids, matrices) and patterns.


// ==========================================================
// 5. THE while LOOP
// ==========================================================
// Executes code as long as a condition is true. Best when you
// don't know in advance how many iterations you'll need.
//
// Syntax:
// let i = 1;              // Initialization (outside the loop)
// while (condition) {
//   // Code to execute
//   i++;                  // Updation (inside the loop)
// }
//
// for loop:   best when you know the number of iterations
// while loop: best when iterations depend on a condition
console.log("\n=== 5. The while Loop ===");

// Example 1: Count from 1 to 5
console.log("--- Example 1: Count 1 to 5 ---");
let w1 = 1;
while (w1 <= 5) {
  console.log(w1);
  w1++;
}

// Example 2: Sum numbers until target reached
console.log("--- Example 2: Sum until >= 50 ---");
let sum = 0;
let num = 1;
while (sum < 50) {
  sum += num;
  console.log(`Added ${num}, sum is now ${sum}`);
  num++;
}
console.log(`Final sum: ${sum}`);

// Example 3: Password validation (simplified) - needs prompt()
function passwordValidation() {
  let password = "";
  let attempts = 0;

  while (password !== "secret123" && attempts < 3) {
    password = prompt("Enter password:");
    attempts++;

    if (password === "secret123") {
      console.log("Access granted!");
    } else if (attempts < 3) {
      console.log(`Wrong password. ${3 - attempts} attempts remaining.`);
    } else {
      console.log("Access denied. Too many attempts.");
    }
  }
}
// passwordValidation();

// Example 4: Halving until below threshold
console.log("--- Example 4: Halving ---");
let number = 1000;
while (number > 1) {
  number = number / 2;
  console.log(number);
}

// Example 5: First power of 2 greater than a value
console.log("--- Example 5: First power of 2 > 1000 ---");
let target = 1000;
let power = 1;
let exponent = 0;
while (power <= target) {
  exponent++;
  power = 2 ** exponent;
}
console.log(`2^${exponent} = ${power} is the first power of 2 greater than ${target}`);


// ==========================================================
// 6. THE do...while LOOP
// ==========================================================
// Like while, but executes the block AT LEAST ONCE before checking the condition.
//
// Syntax:
// do {
//   // Code to execute (runs at least once)
// } while (condition);
//
// while:       check condition first, then execute (might not run at all)
// do...while:  execute first, then check condition (always runs once)
console.log("\n=== 6. The do...while Loop ===");

// Example 1: Menu system - needs prompt()
function menuSystem() {
  let choice;
  do {
    console.log("Menu:");
    console.log("1. Play");
    console.log("2. Settings");
    console.log("3. Exit");
    choice = prompt("Enter your choice:");

    if (choice === "1") {
      console.log("Starting game...");
    } else if (choice === "2") {
      console.log("Opening settings...");
    }
  } while (choice !== "3");
  console.log("Goodbye!");
}
// menuSystem();

// Example 2: Dice roll until six
console.log("--- Example 2: Dice roll until six ---");
let roll;
let rollAttempts = 0;
do {
  roll = Math.floor(Math.random() * 6) + 1; // Random 1-6
  rollAttempts++;
  console.log(`Roll ${rollAttempts}: ${roll}`);
} while (roll !== 6);
console.log(`Got a 6 after ${rollAttempts} attempts!`);

// Example 3: Input validation - must be positive - needs prompt()
function positiveNumberInput() {
  let value;
  do {
    value = prompt("Enter a positive number:");
    value = Number(value);

    if (value <= 0 || isNaN(value)) {
      console.log("Invalid input. Please enter a positive number.");
    }
  } while (value <= 0 || isNaN(value));

  console.log(`You entered: ${value}`);
}
// positiveNumberInput();

// Example 4: Runs at least once even if the condition is initially false
console.log("--- Example 4: Runs at least once ---");
let c = 0; // Even though c is 0...
do {
  console.log(`Count: ${c}`);
  c++;
} while (c < 0); // ...condition is false from the start
// Output: Count: 0

// Example 5: ATM withdrawal - needs prompt()
function atmWithdrawal() {
  let balance = 1000;
  let continueTransaction;

  do {
    let amount = Number(prompt(`Balance: $${balance}. Enter withdrawal amount:`));

    if (amount > 0 && amount <= balance) {
      balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${balance}`);
    } else {
      console.log("Invalid amount.");
    }

    continueTransaction = prompt("Another transaction? (yes/no)");
  } while (continueTransaction === "yes" && balance > 0);

  console.log(`Final balance: $${balance}`);
}
// atmWithdrawal();


// ==========================================================
// 7. LOOP CONTROL: break AND continue
// ==========================================================
console.log("\n=== 7. break and continue ===");

// ---- break: immediately exit the loop completely ----

// Example 1: First number divisible by 7
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(`First number divisible by 7: ${i}`);
    break; // Stop searching once found
  }
}

// Example 2: Search in array
let fruits = ["apple", "banana", "orange", "grape", "mango"];
let searchFor = "orange";
let found = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === searchFor) {
    console.log(`Found ${searchFor} at index ${i}`);
    found = true;
    break; // No need to continue searching
  }
}
if (!found) {
  console.log(`${searchFor} not found`);
}

// Example 3: Password attempts limit - needs prompt()
function passwordAttemptsLimit() {
  let correctPassword = "secret123";
  let maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    let password = prompt(`Attempt ${attempt}: Enter password`);

    if (password === correctPassword) {
      console.log("Access granted!");
      break; // Exit loop on successful login
    } else if (attempt === maxAttempts) {
      console.log("Access denied. No more attempts.");
    } else {
      console.log("Wrong password. Try again.");
    }
  }
}
// passwordAttemptsLimit();

// ---- continue: skip the current iteration, jump to the next ----

// Example 4: Print numbers, skip 3
console.log("--- continue: skip 3 ---");
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip when i is 3
  }
  console.log(i);
}
// Output: 0, 1, 2, 4, 5

// Example 5: Print only even numbers using continue
console.log("--- continue: even numbers only ---");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue; // Skip odd numbers
  }
  console.log(i);
}
// Output: 2, 4, 6, 8, 10

// Comparison:
//  break     -> exit loop completely  (when you've found what you need or must stop)
//  continue  -> skip this iteration   (when you want to skip certain values but keep looping)


// ==========================================================
// 8. ITERATING OVER ARRAYS
// ==========================================================
// Using a for loop with .length is the most common pattern.
console.log("\n=== 8. Iterating Over Arrays ===");

// Example 1: Print all array elements
console.log("--- Example 1: Print all elements ---");
let cities = ["London", "Paris", "Tokyo", "New York", "Sydney"];
for (let i = 0; i < cities.length; i++) {
  console.log(`${i}: ${cities[i]}`);
}
// i ranges from 0 to cities.length - 1

// Example 2: Sum and average
console.log("--- Example 2: Sum and average ---");
let scores = [85, 92, 78, 95, 88];
let scoreSum = 0;
for (let i = 0; i < scores.length; i++) {
  scoreSum += scores[i];
}
let average = scoreSum / scores.length;
console.log(`Total: ${scoreSum}, Average: ${average}`);
// Output: Total: 438, Average: 87.6

// Example 3: Find maximum value
console.log("--- Example 3: Maximum value ---");
let numbers = [23, 67, 12, 89, 45, 91, 34];
let max = numbers[0]; // Start with first element
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(`Maximum value: ${max}`);
// Output: Maximum value: 91

// Example 4: Reverse print an array
console.log("--- Example 4: Reverse print ---");
let colors = ["red", "green", "blue", "yellow"];
console.log("Original order:");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
console.log("\nReverse order:");
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

// Example 5: Filter array (new array with conditions)
console.log("--- Example 5: Filter adults ---");
let ages = [12, 25, 17, 30, 15, 40, 19];
let adults = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    adults.push(ages[i]);
  }
}
console.log("Adults:", adults);
// Output: Adults: [25, 30, 40, 19]

// ---- Nested arrays (2D arrays) ----

// Example 6: Iterate through a 2D array
console.log("--- Example 6: 2D array (teams) ---");
let teams = [
  ["Alice", "Bob"],
  ["Charlie", "David"],
  ["Eve", "Frank"]
];
for (let i = 0; i < teams.length; i++) {
  console.log(`Team ${i + 1}:`);
  for (let j = 0; j < teams[i].length; j++) {
    console.log(`  - ${teams[i][j]}`);
  }
}

// Example 7: 2D array - student grades
console.log("--- Example 7: Student grades ---");
let grades = [
  [85, 90, 78], // Student 1's scores
  [92, 88, 95], // Student 2's scores
  [76, 82, 80]  // Student 3's scores
];
for (let student = 0; student < grades.length; student++) {
  let studentSum = 0;
  for (let test = 0; test < grades[student].length; test++) {
    studentSum += grades[student][test];
  }
  let studentAvg = studentSum / grades[student].length;
  console.log(`Student ${student + 1} average: ${studentAvg.toFixed(2)}`);
}
// Output: 84.33, 91.67, 79.33

// Example 8: Matrix addition
console.log("--- Example 8: Matrix addition ---");
let matrix1 = [[1, 2], [3, 4]];
let matrix2 = [[5, 6], [7, 8]];
let result = [];
for (let i = 0; i < matrix1.length; i++) {
  result[i] = [];
  for (let j = 0; j < matrix1[i].length; j++) {
    result[i][j] = matrix1[i][j] + matrix2[i][j];
  }
}
console.log(result);
// Output: [[6, 8], [10, 12]]


// ==========================================================
// 9. THE for...of LOOP
// ==========================================================
// A cleaner way to iterate through collections (arrays, strings)
// without a counter variable.
//
// Syntax:
// for (let element of collection) {
//   // Use element directly
// }
//
// Advantages: simpler syntax, fewer off-by-one errors, more readable
// Disadvantage: no direct access to the index
console.log("\n=== 9. The for...of Loop ===");

// Example 1: Iterate through an array
console.log("--- Example 1: Colors ---");
let colorList = ["Red", "Blue", "Green", "Yellow"];
for (let color of colorList) {
  console.log(color);
}

// Example 2: Sum array elements
console.log("--- Example 2: Sum prices ---");
let prices = [19.99, 29.99, 49.99, 9.99];
let total = 0;
for (let price of prices) {
  total += price;
}
console.log(`Total: $${total.toFixed(2)}`);
// Output: Total: $109.96

// Example 3: Iterate through a string
console.log("--- Example 3: String characters ---");
let word = "JavaScript";
for (let char of word) {
  console.log(char);
}

// Example 4: Count vowels in a string
console.log("--- Example 4: Count vowels ---");
let sentence = "Hello World";
let vowels = "aeiouAEIOU";
let vowelCount = 0;
for (let char of sentence) {
  if (vowels.includes(char)) {
    vowelCount++;
  }
}
console.log(`Number of vowels: ${vowelCount}`);
// Output: Number of vowels: 3

// Example 5: Nested for...of with a 2D array
console.log("--- Example 5: Departments ---");
let departments = [
  ["Alice", "Bob", "Charlie"],
  ["David", "Eve"],
  ["Frank", "Grace", "Henry", "Ivy"]
];
for (let department of departments) {
  for (let employee of department) {
    console.log(employee);
  }
}

// When to use for vs for...of
//  for:     you need the index / modify elements by index / iterate in reverse / skip by index
//  for...of: you only need values / just reading values / iterating forward / want cleaner code


// ==========================================================
// 10. PRACTICAL APPLICATION: GUESSING GAME
// ==========================================================
// All games below use prompt(), so they are wrapped in functions.
// Call one at a time (see commented calls) in a browser or with prompt-sync.
console.log("\n=== 10. Guessing Games (wrapped in functions) ===");

// Example 1: Favorite movie guessing game
function movieGame() {
  let favoriteMovie = "Inception";
  let guess = "";

  while (guess !== favoriteMovie && guess !== "quit") {
    guess = prompt("Guess my favorite movie (or type 'quit' to give up):");

    if (guess === favoriteMovie) {
      console.log("🎉 Correct! You guessed it!");
    } else if (guess === "quit") {
      console.log(`You gave up. It was ${favoriteMovie}.`);
    } else {
      console.log("❌ Wrong! Try again.");
    }
  }
}
// movieGame();
// How it works: loop while guess is wrong AND user hasn't quit;
// update guess inside the loop to avoid an infinite loop.

// Example 2: Number guessing game with hints
function numberGame() {
  let secretNumber = Math.floor(Math.random() * 100) + 1; // Random 1-100
  let guess = 0;
  let attempts = 0;

  while (guess !== secretNumber) {
    guess = Number(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (guess === secretNumber) {
      console.log(`🎉 Correct! You guessed it in ${attempts} attempts!`);
    } else if (guess < secretNumber) {
      console.log("📈 Too low! Try higher.");
    } else {
      console.log("📉 Too high! Try lower.");
    }
  }
}
// numberGame();
// Features: random number generation, higher/lower hints, attempt counter

// Example 3: Word scramble game
function wordScramble() {
  let words = ["javascript", "programming", "computer", "developer"];
  let word = words[Math.floor(Math.random() * words.length)];
  let scrambled = word.split("").sort(() => Math.random() - 0.5).join("");

  console.log(`Unscramble this word: ${scrambled}`);
  let guess = "";

  while (guess !== word) {
    guess = prompt("Your answer:").toLowerCase();

    if (guess === word) {
      console.log("✅ Correct!");
    } else {
      console.log("❌ Try again!");
    }
  }
}
// wordScramble();
// How it works: pick a random word, scramble letters, keep asking until correct

// Example 4: Rock Paper Scissors (best of 3)
function rockPaperScissors() {
  let playerWins = 0;
  let computerWins = 0;
  let choices = ["rock", "paper", "scissors"];

  while (playerWins < 2 && computerWins < 2) {
    let playerChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(`You: ${playerChoice}, Computer: ${computerChoice}`);

    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerWins++;
      console.log(`You win this round! Score: You ${playerWins} - ${computerWins} Computer`);
    } else {
      computerWins++;
      console.log(`Computer wins this round! Score: You ${playerWins} - ${computerWins} Computer`);
    }
  }

  if (playerWins > computerWins) {
    console.log("🎉 You won the game!");
  } else {
    console.log("💻 Computer won the game!");
  }
}
// rockPaperScissors();
// Game logic: first to win 2 rounds wins; random computer choice; win-condition checks

// Example 5: Simple quiz game
function quizGame() {
  let questions = [
    { q: "What is 5 + 3?", a: "8" },
    { q: "Capital of France?", a: "paris" },
    { q: "How many days in a week?", a: "7" }
  ];
  let score = 0;

  for (let item of questions) {
    let answer = prompt(item.q).toLowerCase();

    if (answer === item.a.toLowerCase()) {
      console.log("✅ Correct!");
      score++;
    } else {
      console.log(`❌ Wrong! The answer was ${item.a}`);
    }
  }
  console.log(`Final Score: ${score}/${questions.length}`);
}
// quizGame();
// Features: multiple questions, score tracking, case-insensitive answers


/*
==========================================================
 KEY TAKEAWAYS
==========================================================
 Loop selection guide
 1. for loop        -> known number of iterations, need the index, iterating arrays by index
 2. while loop      -> unknown number of iterations, condition-based, interactive programs
 3. do...while loop -> code must run at least once, menus / input validation
 4. for...of loop   -> only need values, cleaner code, iterating arrays/strings forward

 Common pitfalls
 1. Infinite loops: make sure the condition eventually becomes false
 2. Off-by-one errors: arrays are 0-indexed, length is 1-indexed
 3. Modifying the loop counter inside a for loop body
 4. Forgetting to update the condition variable in while loops

 Best practices
 1. Descriptive names (i for simple counters, studentIndex for clarity)
 2. Keep loops simple and focused on one task
 3. Use break to exit early when appropriate
 4. Use continue to skip unnecessary processing
 5. Comment complex nested loops

 Practice exercises (try these below!)
 1. FizzBuzz: 1-100; multiples of 3 -> "Fizz", of 5 -> "Buzz", of both -> "FizzBuzz"
 2. Factorial calculator using a loop (5! = 120)
 3. Palindrome checker
 4. Prime number finder up to 100
 5. Array reverser without built-in methods

 Next steps: Functions, Array Methods (.map/.filter/.reduce),
 Objects, Nested Data Structures
==========================================================
*/


// ==========================================================
// QUICK REFERENCE
// ==========================================================
console.log("\n=== Quick Reference ===");

// For loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// While loop
let qi = 0;
while (qi < 3) {
  console.log(qi);
  qi++;
}

// Do-while loop
let qj = 0;
do {
  console.log(qj);
  qj++;
} while (qj < 3);

// For...of loop
let arr = [1, 2, 3];
for (let n of arr) {
  console.log(n);
}

// Break
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0,1,2,3,4
}

// Continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0,1,3,4
}
