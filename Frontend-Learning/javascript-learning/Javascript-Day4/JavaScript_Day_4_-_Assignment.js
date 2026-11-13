/* ==================================================================
   JavaScript Day 4: String Methods & Arrays - Assignment
   Run with:  node JavaScript_Day_4_-_Assignment.js
   Each question is written as a comment, followed by its solution
   inside its own { } block.
   ================================================================== */

const section = (t) => console.log("\n==================== " + t + " ====================");
const q = (t) => console.log("\n--- " + t + " ---");


/* ==================================================================
   Section 1: String Methods (.trim(), Case Conversion)
   ================================================================== */
section("Section 1: String Methods");

/* Question 1: Create a variable userInput with the value
   "  HeLLo JaVaScRiPt  ". Use string methods to:
   - Remove the extra spaces
   - Convert the entire string to lowercase
   - Store the result in a new variable called cleanInput
   - Print both userInput and cleanInput to see the difference */
q("Q1");
{
  let userInput = "  HeLLo JaVaScRiPt  ";
  let cleanInput = userInput.trim().toLowerCase();
  console.log("userInput :", `"${userInput}"`);
  console.log("cleanInput:", `"${cleanInput}"`);
}

/* Question 2: You have a variable email with the value
   "  USER@EXAMPLE.COM  ". Clean this email by:
   - Removing leading and trailing spaces
   - Converting it to all lowercase
   - Store the result in a variable called formattedEmail
   - Print the result */
q("Q2");
{
  let email = "  USER@EXAMPLE.COM  ";
  let formattedEmail = email.trim().toLowerCase();
  console.log(formattedEmail); // "user@example.com"
}


/* ==================================================================
   Section 2: indexOf() Method
   ================================================================== */
section("Section 2: indexOf() Method");

/* Question 1: Create a string
   sentence = "JavaScript is awesome and JavaScript is fun".
   Use the indexOf() method to:
   - Find the position of the word "awesome"
   - Find the position of the first occurrence of "JavaScript"
   - Try to find the word "Python" and see what value you get
   - Print all three results with appropriate labels */
q("Q1");
{
  let sentence = "JavaScript is awesome and JavaScript is fun";
  console.log("Position of 'awesome'    :", sentence.indexOf("awesome"));
  console.log("First 'JavaScript'       :", sentence.indexOf("JavaScript"));
  console.log("Position of 'Python'     :", sentence.indexOf("Python")); // -1 (not found)
}

/* Question 2: Create a variable message = "Welcome to coding class".
   Write code to:
   - Check if the word "coding" exists in the message using indexOf()
   - If it exists (hint: check if indexOf doesn't return -1),
     print "Found coding!"
   - If it doesn't exist, print "Coding not found" */
q("Q2");
{
  let message = "Welcome to coding class";
  if (message.indexOf("coding") !== -1) {
    console.log("Found coding!");
  } else {
    console.log("Coding not found");
  }
}


/* ==================================================================
   Section 3: Method Chaining
   ================================================================== */
section("Section 3: Method Chaining");

/* Question 1: Create a variable rawData = "  MESSY iNpuT  ".
   Use method chaining to:
   - Remove the spaces
   - Convert to lowercase
   - Do all of this in a single line
   - Store the result in a variable called processedData
   - Print both the original and processed versions */
q("Q1");
{
  let rawData = "  MESSY iNpuT  ";
  let processedData = rawData.trim().toLowerCase();
  console.log("Original :", `"${rawData}"`);
  console.log("Processed:", `"${processedData}"`);
}

/* Question 2: You have a password input:
   password = "  MyP@ssw0rd123  ". Use method chaining to:
   - Remove spaces
   - Convert to uppercase
   - Slice only the first 8 characters
   - Store the result in securePassword
   - Print the result */
q("Q2");
{
  let password = "  MyP@ssw0rd123  ";
  let securePassword = password.trim().toUpperCase().slice(0, 8);
  console.log(securePassword); // "MYP@SSW0"
}


/* ==================================================================
   Section 4: String Slicing
   ================================================================== */
section("Section 4: String Slicing");

/* Question 1: Create a variable fullName = "Alexander Hamilton".
   Use the slice() method to:
   - Extract just the first name (characters 0 to 9)
   - Extract just the last name (characters from index 10 onwards)
   - Store them in variables firstName and lastName
   - Print both names */
q("Q1");
{
  let fullName = "Alexander Hamilton";
  let firstName = fullName.slice(0, 9);
  let lastName = fullName.slice(10);
  console.log("First name:", firstName); // Alexander
  console.log("Last name :", lastName);  // Hamilton
}

/* Question 2: You have a phone number stored as phone = "9876543210".
   Use slice() to:
   - Extract the first 3 digits
   - Extract the last 4 digits
   - Store them in variables areaCode and lastFour
   - Print them in this format: "Area code: XXX, Last four: XXXX" */
q("Q2");
{
  let phone = "9876543210";
  let areaCode = phone.slice(0, 3);
  let lastFour = phone.slice(-4);
  console.log(`Area code: ${areaCode}, Last four: ${lastFour}`);
}


/* ==================================================================
   Section 5: Replace Method
   ================================================================== */
section("Section 5: Replace Method");

/* Question 1: Create a string
   announcement = "The event will happen on Monday and Monday only".
   Use the replace() method to:
   - Replace the first occurrence of "Monday" with "Friday"
   - Store the result in a variable called updatedAnnouncement
   - Print both the original and updated announcement
   - Notice that only the first "Monday" was replaced */
q("Q1");
{
  let announcement = "The event will happen on Monday and Monday only";
  let updatedAnnouncement = announcement.replace("Monday", "Friday");
  console.log("Original:", announcement);
  console.log("Updated :", updatedAnnouncement);
  // Only the FIRST "Monday" was replaced.
}

/* Question 2: You have a template message:
   template = "Hello NAME, welcome to our website".
   Use the replace() method to:
   - Replace "NAME" with "Alice"
   - Store the result in a variable called personalizedMessage
   - Print the personalized message */
q("Q2");
{
  let template = "Hello NAME, welcome to our website";
  let personalizedMessage = template.replace("NAME", "Alice");
  console.log(personalizedMessage);
}


/* ==================================================================
   Section 6: Basic Arrays
   ================================================================== */
section("Section 6: Basic Arrays");

/* Question 1: Create an array called colors with the values:
   "red", "green", "blue", "yellow". Then:
   - Print the entire array
   - Print the first color
   - Print the last color using the length property
   - Print the total number of colors */
q("Q1");
{
  let colors = ["red", "green", "blue", "yellow"];
  console.log("Entire array :", colors);
  console.log("First color  :", colors[0]);
  console.log("Last color   :", colors[colors.length - 1]);
  console.log("Total colors :", colors.length);
}

/* Question 2: Create an array called scores with the values:
   85, 92, 78, 90, 88. Then:
   - Print the score at index 2
   - Change the first score to 95
   - Print the modified array
   - Add up the first two scores and print the sum */
q("Q2");
{
  let scores = [85, 92, 78, 90, 88];
  console.log("Score at index 2:", scores[2]);
  scores[0] = 95;
  console.log("Modified array  :", scores);
  console.log("Sum of first two:", scores[0] + scores[1]);
}


/* ==================================================================
   Section 7: Array Methods (push, pop, shift, unshift)
   ================================================================== */
section("Section 7: push / pop / shift / unshift");

/* Question 1: Start with an empty array called playlist. Then:
   - Use push() to add "Song1" to the array
   - Use push() to add "Song2" to the array
   - Use pop() to remove the last song and store it in a variable
   - Use unshift() to add "Song0" to the beginning
   - Print the final playlist and the removed song */
q("Q1");
{
  let playlist = [];
  playlist.push("Song1");
  playlist.push("Song2");
  let removedSong = playlist.pop(); // "Song2"
  playlist.unshift("Song0");
  console.log("Final playlist:", playlist);    // ["Song0", "Song1"]
  console.log("Removed song  :", removedSong); // "Song2"
}

/* Question 2: Create an array queue = ["First", "Second", "Third"].
   Then:
   - Use shift() to remove the first person and store it in a
     variable served
   - Use push() to add "Fourth" to the end of the queue
   - Use shift() again to remove the next person
   - Print the remaining queue and all the people who were served */
q("Q2");
{
  let queue = ["First", "Second", "Third"];
  let served = queue.shift();   // "First"
  queue.push("Fourth");
  let served2 = queue.shift();  // "Second"
  console.log("Remaining queue:", queue);            // ["Third", "Fourth"]
  console.log("People served  :", [served, served2]); // ["First", "Second"]
}


/* ==================================================================
   Section 8: Search Methods (indexOf, includes)
   ================================================================== */
section("Section 8: indexOf / includes");

/* Question 1: Create an array
   fruits = ["apple", "banana", "mango", "orange", "banana"]. Then:
   - Use indexOf() to find the position of "mango"
   - Use indexOf() to find the position of "banana" (first occurrence)
   - Use indexOf() to search for "grape" (not in array)
   - Print all three results */
q("Q1");
{
  let fruits = ["apple", "banana", "mango", "orange", "banana"];
  console.log("mango :", fruits.indexOf("mango"));   // 2
  console.log("banana:", fruits.indexOf("banana"));  // 1 (first occurrence)
  console.log("grape :", fruits.indexOf("grape"));   // -1
}

/* Question 2: Create an array
   inventory = ["laptop", "mouse", "keyboard", "monitor"]. Then:
   - Use includes() to check if "mouse" is in the inventory
   - Use includes() to check if "printer" is in the inventory
   - Print appropriate messages like "Mouse is available" or
     "Printer is not available" */
q("Q2");
{
  let inventory = ["laptop", "mouse", "keyboard", "monitor"];
  if (inventory.includes("mouse")) {
    console.log("Mouse is available");
  } else {
    console.log("Mouse is not available");
  }
  if (inventory.includes("printer")) {
    console.log("Printer is available");
  } else {
    console.log("Printer is not available");
  }
}


/* ==================================================================
   Section 9: Concat and Reverse
   ================================================================== */
section("Section 9: Concat and Reverse");

/* Question 1: Create two arrays:
   morningClasses = ["Math", "English", "Science"]
   afternoonClasses = ["History", "Art", "PE"]
   Then:
   - Use concat() to combine both arrays into a new array called
     fullSchedule
   - Print the full schedule
   - Print the total number of classes */
q("Q1");
{
  let morningClasses = ["Math", "English", "Science"];
  let afternoonClasses = ["History", "Art", "PE"];
  let fullSchedule = morningClasses.concat(afternoonClasses);
  console.log("Full schedule:", fullSchedule);
  console.log("Total classes:", fullSchedule.length); // 6
}

/* Question 2: Create an array numbers = [1, 2, 3, 4, 5]. Then:
   - Use reverse() to reverse the array
   - Print the reversed array
   - Notice: check if the original array was modified or not by
     printing numbers again */
q("Q2");
{
  let numbers = [1, 2, 3, 4, 5];
  numbers.reverse();
  console.log("Reversed:", numbers);        // [5, 4, 3, 2, 1]
  console.log("numbers again:", numbers);  // [5, 4, 3, 2, 1]
  // reverse() MODIFIES the original array (it works in place).
}


/* ==================================================================
   Section 10: The splice() Method
   ================================================================== */
section("Section 10: The splice() Method");

/* Question 1: Create an array
   months = ["Jan", "Feb", "Mar", "May", "Jun"]. Notice "Apr" is
   missing. Use splice() to:
   - Insert "Apr" at the correct position (index 3)
   - Print the corrected array
   - Verify that April is now between March and May */
q("Q1");
{
  let months = ["Jan", "Feb", "Mar", "May", "Jun"];
  months.splice(3, 0, "Apr");
  console.log("Corrected array:", months);
  let i = months.indexOf("Apr");
  console.log("April is between March and May:",
    months[i - 1] === "Mar" && months[i + 1] === "May"); // true
}

/* Question 2: Create an array
   students = ["Alice", "Bob", "Charlie", "David", "Eve"]. Then:
   - Use splice() to remove "Charlie" (at index 2)
   - Use splice() to add "Frank" and "Grace" at index 2
   - Print the final array */
q("Q2");
{
  let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
  students.splice(2, 1);                   // remove Charlie
  students.splice(2, 0, "Frank", "Grace"); // add Frank and Grace at index 2
  console.log(students); // ["Alice", "Bob", "Frank", "Grace", "David", "Eve"]
}


/* ==================================================================
   Section 11: Array References
   ================================================================== */
section("Section 11: Array References");

/* Question 1: Create an array original = [1, 2, 3]. Then:
   - Create a variable reference and assign original to it
   - Modify reference[0] to 99
   - Print both original and reference
   - Explain in a comment what happened and why */
q("Q1");
{
  let original = [1, 2, 3];
  let reference = original;
  reference[0] = 99;
  console.log("original :", original);   // [99, 2, 3]
  console.log("reference:", reference);  // [99, 2, 3]
  // EXPLANATION: Arrays are stored by reference. `reference` does not get
  // its own copy; it points to the SAME array in memory as `original`.
  // So changing reference[0] also changes original[0].
}

/* Question 2: Create two separate arrays:
   arr1 = [1, 2, 3]
   arr2 = [1, 2, 3]
   Then:
   - Compare arr1 == arr2 and print the result
   - Compare arr1 === arr2 and print the result
   - Explain in a comment why the comparisons return false even
     though the values are identical */
q("Q2");
{
  let arr1 = [1, 2, 3];
  let arr2 = [1, 2, 3];
  console.log("arr1 == arr2 :", arr1 == arr2);   // false
  console.log("arr1 === arr2:", arr1 === arr2);  // false
  // EXPLANATION: For arrays (objects), == and === compare memory
  // references, not contents. arr1 and arr2 are two different arrays in
  // memory, so they are not equal even though the values are identical.
}


/* ==================================================================
   Section 12: Nested Arrays
   ================================================================== */
section("Section 12: Nested Arrays");

/* Question 1: Create a nested array representing a simple tic-tac-toe
   board:
   let board = [
     ["X", "O", "X"],
     ["O", "X", "O"],
     ["X", "O", "X"]
   ];
   Then:
   - Print the value at row 0, column 1 (should be "O")
   - Print the value at row 2, column 2 (should be "X")
   - Change the center position (row 1, column 1) to "O"
   - Print the entire board */
q("Q1");
{
  let board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
  ];
  console.log("Row 0, Col 1:", board[0][1]); // "O"
  console.log("Row 2, Col 2:", board[2][2]); // "X"
  board[1][1] = "O";
  console.log("Updated board:");
  console.log(board);
}

/* Question 2: Create a nested array to store student test scores:
   let scores = [
     ["Alice", 85, 90, 92],
     ["Bob", 78, 85, 88],
     ["Charlie", 92, 88, 95]
   ];
   Then:
   - Print Alice's second test score (90)
   - Print Charlie's name
   - Calculate and print Bob's average score (all three scores added
     and divided by 3)
   - Change Bob's first score from 78 to 82 and print the updated
     array */
q("Q2");
{
  let scores = [
    ["Alice", 85, 90, 92],
    ["Bob", 78, 85, 88],
    ["Charlie", 92, 88, 95]
  ];
  console.log("Alice's second test score:", scores[0][2]); // 90
  console.log("Charlie's name           :", scores[2][0]);
  let bobAverage = (scores[1][1] + scores[1][2] + scores[1][3]) / 3;
  console.log("Bob's average score      :", bobAverage);    // 83.666...
  scores[1][1] = 82;
  console.log("Updated array:");
  console.log(scores);
}

console.log("\nEnd of Day 4 assignment.");
