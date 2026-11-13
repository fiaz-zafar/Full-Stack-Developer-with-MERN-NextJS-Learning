/* ==================================================================
   JavaScript Day 4.1: Advanced Array Methods - Assignment
   Run with:  node JavaScript_Day_4_1_-_Assignment.js
   Each question is written as a comment, followed by its solution
   inside its own { } block.
   ================================================================== */

const section = (t) => console.log("\n==================== " + t + " ====================");
const q = (t) => console.log("\n--- " + t + " ---");


/* ==================================================================
   Section 1: Array slice() Method
   ================================================================== */
section("Section 1: Array slice()");

/* Question 1: Create an array numbers = [10, 20, 30, 40, 50, 60, 70].
   Then:
   - Use slice() to get elements from index 2 to 5 (not including 5)
   - Use slice() to get the last 3 elements
   - Store both results in separate variables and print them
   - Verify that the original array is unchanged */
q("Q1");
{
  let numbers = [10, 20, 30, 40, 50, 60, 70];
  let middle = numbers.slice(2, 5);
  let lastThree = numbers.slice(-3);
  console.log("Index 2 to 5:", middle);     // [30, 40, 50]
  console.log("Last 3     :", lastThree);  // [50, 60, 70]
  console.log("Original   :", numbers);    // unchanged
}

/* Question 2: You have a playlist:
   songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"].
   Then:
   - Use slice() to create a "morning playlist" with the first 3 songs
   - Use slice() to create an "evening playlist" with the last 2 songs
   - Use slice() with negative index to get all songs except the
     first one
   - Print all three playlists */
q("Q2");
{
  let songs = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"];
  let morningPlaylist = songs.slice(0, 3);
  let eveningPlaylist = songs.slice(-2);
  let allExceptFirst = songs.slice(-5); // negative index: all songs except the first
  console.log("Morning playlist  :", morningPlaylist);
  console.log("Evening playlist  :", eveningPlaylist);
  console.log("All except first  :", allExceptFirst);
}


/* ==================================================================
   Section 2: Advanced splice() Usage
   ================================================================== */
section("Section 2: Advanced splice()");

/* Question 1: Create an array
   colors = ["red", "green", "blue", "yellow", "purple", "orange"].
   Then:
   - Use splice() to remove "blue" and "yellow" (2 elements starting
     at index 2)
   - Store the removed elements in a variable
   - Print both the removed elements and the modified array */
q("Q1");
{
  let colors = ["red", "green", "blue", "yellow", "purple", "orange"];
  let removed = colors.splice(2, 2);
  console.log("Removed :", removed); // ["blue", "yellow"]
  console.log("Modified:", colors);  // ["red", "green", "purple", "orange"]
}

/* Question 2: You have an array numbers = [1, 2, 3, 7, 8, 9].
   Use splice() to:
   - Insert 4, 5, and 6 at index 3 (without deleting anything)
   - Print the corrected array
   - Verify that the array now contains [1, 2, 3, 4, 5, 6, 7, 8, 9] */
q("Q2");
{
  let numbers = [1, 2, 3, 7, 8, 9];
  numbers.splice(3, 0, 4, 5, 6);
  console.log("Corrected array:", numbers);
  console.log("Contains [1..9]?",
    JSON.stringify(numbers) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])); // true
}


/* ==================================================================
   Section 3: Array sort() Method
   ================================================================== */
section("Section 3: Array sort()");

/* Question 1: Create an array
   fruits = ["banana", "apple", "mango", "cherry", "orange"]. Then:
   - Sort the array alphabetically
   - Print the sorted array
   - Try creating another array with numbers nums = [5, 10, 1, 100, 25]
     and sort it
   - Notice the result and print it (observe how numbers are sorted
     as strings) */
q("Q1");
{
  let fruits = ["banana", "apple", "mango", "cherry", "orange"];
  fruits.sort();
  console.log("Sorted fruits:", fruits);

  let nums = [5, 10, 1, 100, 25];
  nums.sort();
  console.log("nums (default sort):", nums); // [1, 10, 100, 25, 5]
  // Default sort() converts items to strings, so "100" comes before "25".
}

/* Question 2: Create an array scores = [78, 92, 85, 88, 95, 73]. Then:
   - Sort the array in ascending order using sort((a, b) => a - b)
   - Print the sorted scores
   - Now sort the same array in descending order using
     sort((a, b) => b - a)
   - Print the highest and lowest scores */
q("Q2");
{
  let scores = [78, 92, 85, 88, 95, 73];
  scores.sort((a, b) => a - b);
  console.log("Ascending :", scores); // [73, 78, 85, 88, 92, 95]
  scores.sort((a, b) => b - a);
  console.log("Descending:", scores); // [95, 92, 88, 85, 78, 73]
  console.log("Highest score:", scores[0]);
  console.log("Lowest score :", scores[scores.length - 1]);
}


/* ==================================================================
   Section 4: Array join() Method
   ================================================================== */
section("Section 4: Array join()");

/* Question 1: Create an array words = ["JavaScript", "is", "awesome"].
   Then:
   - Use join(" ") to create a sentence with spaces
   - Use join("-") to create a hyphenated string
   - Use join("") to concatenate all words without spaces
   - Print all three results */
q("Q1");
{
  let words = ["JavaScript", "is", "awesome"];
  console.log(words.join(" "));  // JavaScript is awesome
  console.log(words.join("-"));  // JavaScript-is-awesome
  console.log(words.join(""));   // JavaScriptisawesome
}

/* Question 2: You have a date stored as
   dateArray = ["2024", "12", "25"]. Then:
   - Use join("/") to create a date string in format: "2024/12/25"
   - Use join("-") to create a date string in format: "2024-12-25"
   - Create a time array time = ["14", "30", "00"] and use join(":")
     to format it
   - Print all formatted strings */
q("Q2");
{
  let dateArray = ["2024", "12", "25"];
  console.log(dateArray.join("/")); // 2024/12/25
  console.log(dateArray.join("-")); // 2024-12-25
  let time = ["14", "30", "00"];
  console.log(time.join(":"));      // 14:30:00
}


/* ==================================================================
   Section 5: Array toString() Method
   ================================================================== */
section("Section 5: Array toString()");

/* Question 1: Create an array numbers = [1, 2, 3, 4, 5]. Then:
   - Use toString() to convert it to a string
   - Print the result and check its type using typeof
   - Compare the result with join() without arguments
   - Explain the difference in a comment */
q("Q1");
{
  let numbers = [1, 2, 3, 4, 5];
  let str = numbers.toString();
  console.log(str);              // "1,2,3,4,5"
  console.log(typeof str);       // "string"
  console.log(numbers.join());   // "1,2,3,4,5"
  // DIFFERENCE: toString() always joins with a comma. join() with no
  // argument gives the same result, but join(separator) lets you choose
  // any separator, so join() is more flexible.
}

/* Question 2: Create a nested array grid = [[1, 2], [3, 4], [5, 6]].
   Then:
   - Use toString() on the nested array
   - Print the result
   - Notice how nested arrays are flattened
   - Try the same with join() and observe the difference */
q("Q2");
{
  let grid = [[1, 2], [3, 4], [5, 6]];
  console.log(grid.toString());    // "1,2,3,4,5,6" (flattened)
  console.log(grid.join());        // "1,2,3,4,5,6" (same with default separator)
  console.log(grid.join(" | "));   // "1,2 | 3,4 | 5,6" (separator only between inner arrays)
}


/* ==================================================================
   Section 6: Array() Constructor
   ================================================================== */
section("Section 6: Array() Constructor");

/* Question 1: Create arrays using the Array constructor:
   - Create an empty array using new Array()
   - Create an array with length 5 using new Array(5)
   - Create an array with elements [10, 20, 30] using
     new Array(10, 20, 30)
   - Print all three arrays and their lengths */
q("Q1");
{
  let a = new Array();
  let b = new Array(5);
  let c = new Array(10, 20, 30);
  console.log(a, "length:", a.length); // [] length: 0
  console.log(b, "length:", b.length); // [ <5 empty items> ] length: 5
  console.log(c, "length:", c.length); // [10, 20, 30] length: 3
}

/* Question 2: Create an array using new Array(4). Then:
   - Fill it manually by assigning values at each index:
     "a", "b", "c", "d"
   - Print the filled array
   - Now create the same array using array literal ["a", "b", "c", "d"]
   - Compare which method is easier */
q("Q2");
{
  let arr = new Array(4);
  arr[0] = "a";
  arr[1] = "b";
  arr[2] = "c";
  arr[3] = "d";
  console.log(arr);
  let literal = ["a", "b", "c", "d"];
  console.log(literal);
  // COMPARISON: The array literal is easier and shorter. new Array(4)
  // needs a separate assignment for each index, and new Array(5) with a
  // single number makes empty slots instead of an element.
}


/* ==================================================================
   Section 7: Array.isArray() Method
   ================================================================== */
section("Section 7: Array.isArray()");

/* Question 1: Test Array.isArray() on different values:
   - Test it on [1, 2, 3]
   - Test it on "hello"
   - Test it on 123
   - Test it on { name: "John" }
   - Print all results with appropriate labels */
q("Q1");
{
  console.log("[1, 2, 3]        :", Array.isArray([1, 2, 3]));         // true
  console.log("'hello'          :", Array.isArray("hello"));           // false
  console.log("123              :", Array.isArray(123));               // false
  console.log("{ name: 'John' } :", Array.isArray({ name: "John" })); // false
}

/* Question 2: Create a variable data that could be either an array or
   a string. Set it to [1, 2, 3]. Then:
   - Use Array.isArray() to check if it's an array
   - If it's an array, print "It's an array with X elements"
     (where X is the length)
   - If it's not an array, print "Not an array"
   - Now change data to "hello" and test again */
q("Q2");
{
  let data = [1, 2, 3];
  if (Array.isArray(data)) {
    console.log("It's an array with " + data.length + " elements");
  } else {
    console.log("Not an array");
  }

  data = "hello";
  if (Array.isArray(data)) {
    console.log("It's an array with " + data.length + " elements");
  } else {
    console.log("Not an array");
  }
}


/* ==================================================================
   Section 8: Multi-dimensional Arrays - Part 1
   ================================================================== */
section("Section 8: Multi-dimensional Arrays - Part 1");

/* Question 1: Create a 2D array representing a simple grid:
   let matrix = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]
   ];
   Then:
   - Print the element at row 0, column 2
   - Print the element at row 2, column 0
   - Print the center element (row 1, column 1)
   - Change the center element to 50 and print the entire matrix */
q("Q1");
{
  let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log("Row 0, Col 2:", matrix[0][2]); // 3
  console.log("Row 2, Col 0:", matrix[2][0]); // 7
  console.log("Center      :", matrix[1][1]); // 5
  matrix[1][1] = 50;
  console.log(matrix);
}

/* Question 2: Create a seating chart:
   let seats = [
     ["Alice", "Bob", "Charlie"],
     ["David", "Eve", "Frank"]
   ];
   Then:
   - Print who is sitting at row 0, column 1
   - Print who is sitting at row 1, column 2
   - Swap the positions of Alice and Frank
   - Print the updated seating chart */
q("Q2");
{
  let seats = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Eve", "Frank"]
  ];
  console.log("Row 0, Col 1:", seats[0][1]); // Bob
  console.log("Row 1, Col 2:", seats[1][2]); // Frank
  // Swap Alice (row 0, col 0) and Frank (row 1, col 2)
  let temp = seats[0][0];
  seats[0][0] = seats[1][2];
  seats[1][2] = temp;
  console.log("Updated seating chart:");
  console.log(seats);
}


/* ==================================================================
   Section 9: Multi-dimensional Arrays - Part 2
   ================================================================== */
section("Section 9: Multi-dimensional Arrays - Part 2");

/* Question 1: Create a student grades array:
   let grades = [
     ["John", 85, 90, 88],
     ["Sarah", 92, 88, 95],
     ["Mike", 78, 85, 80]
   ];
   Then:
   - Print John's second test score
   - Print Sarah's name
   - Calculate Mike's total score (sum of all three test scores)
   - Print the results */
q("Q1");
{
  let grades = [
    ["John", 85, 90, 88],
    ["Sarah", 92, 88, 95],
    ["Mike", 78, 85, 80]
  ];
  console.log("John's second test score:", grades[0][2]); // 90
  console.log("Sarah's name            :", grades[1][0]); // Sarah
  let mikeTotal = grades[2][1] + grades[2][2] + grades[2][3];
  console.log("Mike's total score      :", mikeTotal);    // 243
}

/* Question 2: Create a 2D array for a tic-tac-toe game:
   let game = [
     ["X", "O", "X"],
     ["O", "X", "O"],
     ["O", "X", "X"]
   ];
   Then:
   - Print the top-left corner (row 0, column 0)
   - Print the center position (row 1, column 1)
   - Change the bottom-right corner to "O"
   - Print each row on a separate line */
q("Q2");
{
  let game = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
  ];
  console.log("Top-left:", game[0][0]); // X
  console.log("Center  :", game[1][1]); // X
  game[2][2] = "O";
  console.log(game[0].join(" "));
  console.log(game[1].join(" "));
  console.log(game[2].join(" "));
}


/* ==================================================================
   Section 10: Array Length Property
   ================================================================== */
section("Section 10: Array Length Property");

/* Question 1: Create an array items = [10, 20, 30, 40, 50]. Then:
   - Print its length
   - Manually change the length to 3 using items.length = 3
   - Print the array and observe what happened
   - Try to access items[4] and print the result */
q("Q1");
{
  let items = [10, 20, 30, 40, 50];
  console.log("Length:", items.length); // 5
  items.length = 3;
  console.log("After length = 3:", items); // [10, 20, 30]
  console.log("items[4]:", items[4]);      // undefined
  // OBSERVATION: Reducing length truncates the array. Elements past the
  // new length are removed for good.
}

/* Question 2: Create an array numbers = [1, 2, 3]. Then:
   - Add an element at index 10: numbers[10] = 99
   - Print the array and its length
   - Print the element at index 5
   - Explain what you observe about the empty slots */
q("Q2");
{
  let numbers = [1, 2, 3];
  numbers[10] = 99;
  console.log(numbers);
  console.log("Length:", numbers.length);  // 11
  console.log("numbers[5]:", numbers[5]);  // undefined
  // OBSERVATION: Assigning beyond the end creates empty slots (holes) for
  // indexes 3 to 9. They read as undefined and length becomes the
  // highest index + 1.
}


/* ==================================================================
   Section 11: Combining Multiple Array Methods
   ================================================================== */
section("Section 11: Combining Multiple Array Methods");

/* Question 1: Create an array
   words = ["  hello  ", "  WORLD  ", "  JavaScript  "]. Then:
   - Trim each element manually and store in a new array
   - Sort the new array alphabetically
   - Join the sorted array with spaces
   - Print the final result */
q("Q1");
{
  let words = ["  hello  ", "  WORLD  ", "  JavaScript  "];
  let trimmed = [];
  trimmed.push(words[0].trim());
  trimmed.push(words[1].trim());
  trimmed.push(words[2].trim());
  // Case-insensitive alphabetical sort (plain sort() would put
  // uppercase letters before lowercase ones)
  trimmed.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  console.log(trimmed.join(" ")); // hello JavaScript WORLD
}

/* Question 2: You have two arrays:
   morningTasks = ["Exercise", "Breakfast", "Study"]
   eveningTasks = ["Dinner", "Reading", "Sleep"]
   Combine them using concat(), then:
   - Add "Lunch" at index 3 using splice()
   - Sort the entire task list alphabetically
   - Print the final organized task list */
q("Q2");
{
  let morningTasks = ["Exercise", "Breakfast", "Study"];
  let eveningTasks = ["Dinner", "Reading", "Sleep"];
  let allTasks = morningTasks.concat(eveningTasks);
  allTasks.splice(3, 0, "Lunch");
  allTasks.sort();
  console.log("Final organized task list:", allTasks);
}


/* ==================================================================
   Section 12: Array Copying vs References
   ================================================================== */
section("Section 12: Array Copying vs References");

/* Question 1: Create an array original = [1, 2, 3, 4, 5]. Then:
   - Create reference by assigning original to it
   - Create copy using original.slice()
   - Modify reference[0] to 99
   - Modify copy[0] to 88
   - Print all three arrays and explain what happened */
q("Q1");
{
  let original = [1, 2, 3, 4, 5];
  let reference = original;     // same array in memory
  let copy = original.slice();  // new, independent array
  reference[0] = 99;
  copy[0] = 88;
  console.log("original :", original);   // [99, 2, 3, 4, 5]
  console.log("reference:", reference);  // [99, 2, 3, 4, 5]
  console.log("copy     :", copy);       // [88, 2, 3, 4, 5]
  // EXPLANATION: reference points to the same array as original, so the
  // change through reference shows up in both. slice() made a separate
  // copy, so changing copy[0] affected only the copy.
}

/* Question 2: Create an array colors = ["red", "green", "blue"]. Then:
   - Create two variables palette1 and palette2, both pointing to colors
   - Use palette1.push("yellow")
   - Print colors, palette1, and palette2
   - Explain why all three arrays have "yellow" */
q("Q2");
{
  let colors = ["red", "green", "blue"];
  let palette1 = colors;
  let palette2 = colors;
  palette1.push("yellow");
  console.log("colors  :", colors);
  console.log("palette1:", palette1);
  console.log("palette2:", palette2);
  // EXPLANATION: colors, palette1 and palette2 are three names for ONE
  // array. A change made through any name is visible through all of them.
}


/* ==================================================================
   Section 13: Array Manipulation Patterns
   ================================================================== */
section("Section 13: Array Manipulation Patterns");

/* Question 1: Create an array numbers = [10, 20, 30, 40, 50]. Perform
   the following operations:
   - Remove the first element using shift() and save it
   - Add that element to the end using push()
   - Print the rotated array
   - Repeat the process one more time */
q("Q1");
{
  let numbers = [10, 20, 30, 40, 50];
  let first = numbers.shift();
  numbers.push(first);
  console.log("After 1st rotation:", numbers); // [20, 30, 40, 50, 10]

  first = numbers.shift();
  numbers.push(first);
  console.log("After 2nd rotation:", numbers); // [30, 40, 50, 10, 20]
}

/* Question 2: You have an array
   items = ["apple", "banana", "cherry", "date", "banana"]. Then:
   - Find the index of the first "banana"
   - Remove that "banana" using splice()
   - Print the modified array
   - Check if "banana" still exists using includes() */
q("Q2");
{
  let items = ["apple", "banana", "cherry", "date", "banana"];
  let index = items.indexOf("banana");
  console.log("Index of first banana:", index); // 1
  items.splice(index, 1);
  console.log("Modified array:", items); // ["apple", "cherry", "date", "banana"]
  console.log("Banana still exists?", items.includes("banana")); // true (second banana)
}


/* ==================================================================
   Section 14: Working with Array Methods Safely
   ================================================================== */
section("Section 14: Working with Array Methods Safely");

/* Question 1: Create an array data = [5, 10, 15, 20, 25]. Then:
   - Before accessing index 7, check if it exists
     (index < data.length)
   - If it exists, print the value
   - If it doesn't exist, print "Index out of bounds"
   - Try the same check with index 2 */
q("Q1");
{
  let data = [5, 10, 15, 20, 25];

  let index = 7;
  if (index >= 0 && index < data.length) {
    console.log(data[index]);
  } else {
    console.log("Index out of bounds"); // runs for index 7
  }

  index = 2;
  if (index >= 0 && index < data.length) {
    console.log(data[index]); // 15
  } else {
    console.log("Index out of bounds");
  }
}

/* Question 2: You receive data that might be an array or might be
   something else. Create a variable input = [1, 2, 3]. Then:
   - Use Array.isArray() to check if it's an array
   - If it is an array and has length > 0, print the first element
   - Change input to "hello" and run the same checks
   - Print appropriate messages for both cases */
q("Q2");
{
  let input = [1, 2, 3];
  if (Array.isArray(input) && input.length > 0) {
    console.log("First element:", input[0]);
  } else {
    console.log("Not a valid non-empty array");
  }

  input = "hello";
  if (Array.isArray(input) && input.length > 0) {
    console.log("First element:", input[0]);
  } else {
    console.log("Not a valid non-empty array");
  }
}


/* ==================================================================
   Section 15: Practical Array Applications
   ================================================================== */
section("Section 15: Practical Array Applications");

/* Question 1: Create a shopping cart system:
   - Start with an empty array cart
   - Add three items: "Laptop", "Mouse", "Keyboard" using push()
   - Print the total number of items
   - Remove the last item using pop() and print what was removed
   - Print the remaining items using join(", ") */
q("Q1");
{
  let cart = [];
  cart.push("Laptop");
  cart.push("Mouse");
  cart.push("Keyboard");
  console.log("Total items:", cart.length);
  let removed = cart.pop();
  console.log("Removed:", removed);
  console.log("Remaining items:", cart.join(", "));
}

/* Question 2: Create a high score system:
   - Start with an array highScores = [150, 200, 180, 220, 190]
   - Sort the scores in descending order
   - Print the top score (first element)
   - Use slice() to get the top 3 scores
   - Print "Top 3 scores: " followed by the scores joined with " | " */
q("Q2");
{
  let highScores = [150, 200, 180, 220, 190];
  highScores.sort((a, b) => b - a);
  console.log("Top score:", highScores[0]);
  let top3 = highScores.slice(0, 3);
  console.log("Top 3 scores: " + top3.join(" | "));
}


/* ==================================================================
   Section 16: Complex Multi-Step Problems
   ================================================================== */
section("Section 16: Complex Multi-Step Problems");

/* Question 1: You have a list of test scores:
   allScores = [85, 92, 78, 95, 88, 73, 90]. Then:
   - Create a copy of the array using slice()
   - Sort the copy in ascending order
   - Remove the lowest score (first element after sorting)
   - Remove the highest score (last element)
   - Calculate and print the average of the remaining scores */
q("Q1");
{
  let allScores = [85, 92, 78, 95, 88, 73, 90];
  let copy = allScores.slice();
  copy.sort((a, b) => a - b);
  copy.shift(); // remove lowest
  copy.pop();   // remove highest
  let sum = 0;
  for (let i = 0; i < copy.length; i++) {
    sum += copy[i];
  }
  console.log("Remaining scores:", copy);            // [78, 85, 88, 90, 92]
  console.log("Average:", sum / copy.length);        // 86.6
}

/* Question 2: Create a task management system:
   - Start with tasks = ["Task1", "Task2", "Task3", "Task4"]
   - Move the first task to the end (simulate completing and
     re-adding)
   - Insert "Task2.5" between "Task2" and "Task3" using splice()
   - Remove "Task3" from the list
   - Print the final task list with numbered format: "1. Task2" etc.
     using a counter */
q("Q2");
{
  let tasks = ["Task1", "Task2", "Task3", "Task4"];
  tasks.push(tasks.shift()); // ["Task2", "Task3", "Task4", "Task1"]
  tasks.splice(tasks.indexOf("Task2") + 1, 0, "Task2.5"); // between Task2 and Task3
  tasks.splice(tasks.indexOf("Task3"), 1);                // remove Task3
  let counter = 1;
  for (let i = 0; i < tasks.length; i++) {
    console.log(counter + ". " + tasks[i]);
    counter++;
  }
}


/* ==================================================================
   Section 17: Array Edge Cases
   ================================================================== */
section("Section 17: Array Edge Cases");

/* Question 1: Create an array numbers = [1, 10, 2, 20, 3, 30]. Then:
   - Sort it without a compare function and print the result
   - Now sort it with sort((a, b) => a - b) and print the result
   - Explain in a comment why the results are different */
q("Q1");
{
  let numbers = [1, 10, 2, 20, 3, 30];
  numbers.sort();
  console.log("Without compare function:", numbers); // [1, 10, 2, 20, 3, 30]
  numbers.sort((a, b) => a - b);
  console.log("With compare function   :", numbers); // [1, 2, 3, 10, 20, 30]
  // EXPLANATION: Without a compare function, sort() converts every element
  // to a string and compares them character by character, so "10" comes
  // before "2". The compare function (a, b) => a - b compares the actual
  // numeric values, giving the correct numeric order.
}

/* Question 2: Create an array with sparse elements:
   sparse = [1, , , 4, , 6]. Then:
   - Print the length of the array
   - Try to access index 2 and print the result
   - Use push() to add 7 to the end
   - Print the entire array and its new length */
q("Q2");
{
  let sparse = [1, , , 4, , 6];
  console.log("Length:", sparse.length);   // 6
  console.log("sparse[2]:", sparse[2]);    // undefined
  sparse.push(7);
  console.log(sparse);                     // [1, <2 empty items>, 4, <1 empty item>, 6, 7]
  console.log("New length:", sparse.length); // 7
}

console.log("\nEnd of Day 4.1 assignment.");
