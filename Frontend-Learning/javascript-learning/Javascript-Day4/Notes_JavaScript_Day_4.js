/* ==================================================================
   JavaScript Day 4: String Methods & Arrays - Study Notes
   Run with:  node Notes_JavaScript_Day_4.js
   Every example is wrapped in its own { } block so variable names
   never clash. Expected output is shown in comments.
   ================================================================== */

const section = (t) => console.log("\n==================== " + t + " ====================");


/* ------------------------------------------------------------------
   1. Introduction to Methods
   Methods are built-in functions that can be performed on specific
   data types. They allow you to manipulate and work with data
   efficiently.
   Syntax: variable.methodName()
------------------------------------------------------------------ */
section("1. Introduction to Methods");

{ // Example 1: Using console.log() method
  console.log("Hello World");
}
{ // Example 2: Using alert() method (alert only exists in browsers)
  if (typeof alert === "function") {
    alert("Welcome to JavaScript!");
  } else {
    console.log("alert('Welcome to JavaScript!') - works only in a browser");
  }
}
{ // Example 3: Calling methods on strings
  let text = "JavaScript";
  text.toUpperCase();
}
{ // Example 4: Methods can return values
  let message = "  hello  ";
  let cleaned = message.trim();
  console.log(cleaned); // "hello"
}
{ // Example 5: Some methods take arguments
  let word = "Mountains";
  console.log(word.slice(0, 5)); // "Mount"
}


/* ------------------------------------------------------------------
   2. The .trim() Method
   Removes whitespace (spaces, tabs, newlines) from both the beginning
   and end of a string. Especially useful for cleaning up user input.
   Syntax: string.trim()
------------------------------------------------------------------ */
section("2. The .trim() Method");

{ // Example 1: Basic trimming
  let username = "  coding_wizard  ";
  let clean = username.trim();
  console.log(clean); // "coding_wizard"
}
{ // Example 2: Trimming user input
  let email = "  user@example.com  ";
  let cleanEmail = email.trim();
  console.log(cleanEmail); // "user@example.com"
}
{ // Example 3: Only removes leading and trailing spaces
  let text = "  hello world  ";
  console.log(text.trim()); // "hello world" (middle spaces remain)
}
{ // Example 4: Original string unchanged
  let original = "  test  ";
  let trimmed = original.trim();
  console.log(original); // "  test  " (still has spaces)
  console.log(trimmed);  // "test"
}
{ // Example 5: Trimming empty spaces
  let input = "   ";
  console.log(input.trim()); // "" (empty string)
}


/* ------------------------------------------------------------------
   3. Strings are Immutable
   In JavaScript, strings cannot be changed after they are created.
   When you use a method on a string, JavaScript creates a new string
   with the changes rather than modifying the original.
------------------------------------------------------------------ */
section("3. Strings are Immutable");

{ // Example 1: String methods return new strings
  let greeting = "hello";
  greeting.toUpperCase();
  console.log(greeting); // "hello" (unchanged)
}
{ // Example 2: Must store the result
  let message = "javascript";
  let upper = message.toUpperCase();
  console.log(message); // "javascript" (original unchanged)
  console.log(upper);   // "JAVASCRIPT" (new string)
}
{ // Example 3: Cannot change individual characters
  let word = "cat";
  word[0] = "b"; // This doesn't work!
  console.log(word); // "cat" (still unchanged)
}
{ // Example 4: Multiple operations create multiple strings
  let text = "  HELLO  ";
  let result = text.trim().toLowerCase();
  console.log(text);   // "  HELLO  " (original)
  console.log(result); // "hello" (new string)
}
{ // Example 5: Concatenation creates new strings
  let first = "Hello";
  let second = " World";
  let combined = first + second;
  console.log(first);    // "Hello" (unchanged)
  console.log(combined); // "Hello World" (new string)
}


/* ------------------------------------------------------------------
   4. Case Conversion Methods
   .toUpperCase() : Converts all characters to uppercase
   .toLowerCase() : Converts all characters to lowercase
------------------------------------------------------------------ */
section("4. Case Conversion Methods");

{ // Example 1: Converting to uppercase
  let msg = "JavaScript is Fun";
  console.log(msg.toUpperCase()); // "JAVASCRIPT IS FUN"
}
{ // Example 2: Converting to lowercase
  let shout = "STOP YELLING";
  console.log(shout.toLowerCase()); // "stop yelling"
}
{ // Example 3: Comparing user input (case-insensitive)
  let userInput = "YeS";
  if (userInput.toLowerCase() === "yes") {
    console.log("User agreed!");
  }
}
{ // Example 4: Mixed case conversion
  let mixed = "HeLLo WoRLd";
  console.log(mixed.toLowerCase()); // "hello world"
  console.log(mixed.toUpperCase()); // "HELLO WORLD"
}
{ // Example 5: Working with email addresses
  let email = "User@EXAMPLE.COM";
  console.log(email.toLowerCase()); // "user@example.com"
}


/* ------------------------------------------------------------------
   5. String Methods with Arguments - indexOf()
   Searches for a value in a string and returns the index (position)
   of its first occurrence. If the value is not found, it returns -1.
   Syntax: string.indexOf(searchValue)
------------------------------------------------------------------ */
section("5. indexOf()");

{ // Example 1: Finding a character
  let str = "Hello World";
  console.log(str.indexOf("W")); // 6
  console.log(str.indexOf("o")); // 4 (first occurrence)
}
{ // Example 2: Finding a substring
  let sentence = "I love JavaScript";
  console.log(sentence.indexOf("love")); // 2
  console.log(sentence.indexOf("Java")); // 7
}
{ // Example 3: Character not found
  let text = "Hello World";
  console.log(text.indexOf("z")); // -1
}
{ // Example 4: Case sensitivity
  let word = "JavaScript";
  console.log(word.indexOf("java")); // -1 (case matters!)
  console.log(word.indexOf("Java")); // 0
}
{ // Example 5: Checking if substring exists
  let message = "Welcome to coding";
  if (message.indexOf("coding") !== -1) {
    console.log("Found the word coding!");
  }
}


/* ------------------------------------------------------------------
   6. Method Chaining
   Call multiple methods on the same value in a single line. Methods
   run left to right, and each works on the result of the previous.
------------------------------------------------------------------ */
section("6. Method Chaining");

{ // Example 1: Basic chaining
  let msg = "  hello  ";
  let result = msg.trim().toUpperCase();
  console.log(result); // "HELLO"
}
{ // Example 2: Three methods chained
  let input = "  JAVASCRIPT  ";
  let clean = input.trim().toLowerCase().slice(0, 4);
  console.log(clean); // "java"
}
{ // Example 3: Cleaning user input
  let username = "  UserName123  ";
  let processed = username.trim().toLowerCase();
  console.log(processed); // "username123"
}
{ // Example 4: Complex chaining
  let text = "  Hello World  ";
  let output = text.trim().toUpperCase().replace("HELLO", "HI");
  console.log(output); // "HI WORLD"
}
{ // Example 5: Order matters in chaining
  let word = "javascript";
  console.log(word.slice(0, 4).toUpperCase()); // "JAVA"
  console.log(word.toUpperCase().slice(0, 4)); // "JAVA" (same result)
}


/* ------------------------------------------------------------------
   7. Slicing Strings
   .slice() extracts a portion of a string and returns it as a new
   string without modifying the original.
   Syntax: string.slice(startIndex, endIndex)
   - Start index is included
   - End index is NOT included
   - If only one argument is provided, slices from that index to the end
------------------------------------------------------------------ */
section("7. Slicing Strings");

{ // Example 1: Basic slicing
  let word = "Mountains";
  console.log(word.slice(0, 5)); // "Mount"
  console.log(word.slice(5));    // "ains"
}
{ // Example 2: Extracting middle portion
  let text = "JavaScript";
  console.log(text.slice(4, 10)); // "Script"
}
{ // Example 3: Slicing from an index to end
  let message = "Hello World";
  console.log(message.slice(6)); // "World"
}
{ // Example 4: Using negative indices (from end)
  let lang = "JavaScript";
  console.log(lang.slice(-6));    // "Script"
  console.log(lang.slice(0, -6)); // "Java"
}
{ // Example 5: Getting first and last characters
  let name = "Alexander";
  console.log(name.slice(0, 1)); // "A" (first)
  console.log(name.slice(-1));   // "r" (last)
}


/* ------------------------------------------------------------------
   8. Replacing Substrings
   .replace() searches for a value in a string and replaces it with a
   new value. It only replaces the FIRST occurrence it finds.
   Syntax: string.replace(oldValue, newValue)
------------------------------------------------------------------ */
section("8. Replacing Substrings");

{ // Example 1: Basic replacement
  let fruit = "I love apple pie";
  console.log(fruit.replace("apple", "cherry")); // "I love cherry pie"
}
{ // Example 2: Only first occurrence is replaced
  let text = "I love apple pie and apple juice";
  console.log(text.replace("apple", "orange"));
  // "I love orange pie and apple juice"
}
{ // Example 3: Case sensitivity
  let message = "Hello hello HELLO";
  console.log(message.replace("hello", "hi")); // "Hello hi HELLO"
}
{ // Example 4: Replacing spaces
  let sentence = "Hello World";
  console.log(sentence.replace(" ", "-")); // "Hello-World"
}
{ // Example 5: Chaining with replace
  let str = "  javascript  ";
  let result = str.trim().replace("java", "type");
  console.log(result); // "typescript"
}


/* ------------------------------------------------------------------
   9. Introduction to Arrays
   An array is a data structure that stores an ordered collection of
   values. Arrays can hold multiple items of any data type.
   Syntax: let arrayName = [item1, item2, item3];
------------------------------------------------------------------ */
section("9. Introduction to Arrays");

{ // Example 1: Creating a simple array
  let colors = ["red", "green", "blue"];
  console.log(colors); // ["red", "green", "blue"]
}
{ // Example 2: Accessing array elements (0-indexed)
  let fruits = ["apple", "banana", "mango"];
  console.log(fruits[0]); // "apple"
  console.log(fruits[2]); // "mango"
}
{ // Example 3: Arrays with different data types
  let mixed = ["hello", 42, true, 3.14];
  console.log(mixed[1]); // 42
  console.log(mixed[3]); // 3.14
}
{ // Example 4: Array length property
  let numbers = [10, 20, 30, 40];
  console.log(numbers.length); // 4
}
{ // Example 5: Accessing last element
  let items = ["first", "second", "third", "fourth"];
  let lastIndex = items.length - 1;
  console.log(items[lastIndex]); // "fourth"
}


/* ------------------------------------------------------------------
   10. Arrays are Mutable
   Unlike strings, arrays are mutable: you can change their contents
   directly. You can modify, add, or remove elements from the
   original array.
------------------------------------------------------------------ */
section("10. Arrays are Mutable");

{ // Example 1: Changing an element
  let fruits = ["mango", "apple", "litchi"];
  fruits[0] = "banana";
  console.log(fruits); // ["banana", "apple", "litchi"]
}
{ // Example 2: Modifying multiple elements
  let numbers = [1, 2, 3, 4];
  numbers[0] = 10;
  numbers[3] = 40;
  console.log(numbers); // [10, 2, 3, 40]
}
{ // Example 3: Changing last element
  let colors = ["red", "green", "blue"];
  colors[colors.length - 1] = "yellow";
  console.log(colors); // ["red", "green", "yellow"]
}
{ // Example 4: Arrays vs Strings mutability
  let arr = ["a", "b", "c"];
  arr[0] = "z"; // Works!
  console.log(arr); // ["z", "b", "c"]

  let str = "abc";
  str[0] = "z"; // Doesn't work
  console.log(str); // "abc" (unchanged)
}
{ // Example 5: Updating based on condition
  let scores = [85, 90, 75, 88];
  if (scores[2] < 80) {
    scores[2] = 80; // Bump up the low score
  }
  console.log(scores); // [85, 90, 80, 88]
}


/* ------------------------------------------------------------------
   11. Basic Array Methods (End/Start)
   .push(item)    : Add to the end
   .pop()         : Remove from the end (returns removed item)
   .unshift(item) : Add to the start
   .shift()       : Remove from the start (returns removed item)
------------------------------------------------------------------ */
section("11. push / pop / unshift / shift");

{ // Example 1: Using push() to add to end
  let fruits = ["apple", "banana"];
  fruits.push("mango");
  console.log(fruits); // ["apple", "banana", "mango"]
}
{ // Example 2: Using pop() to remove from end
  let colors = ["red", "green", "blue"];
  let removed = colors.pop();
  console.log(removed); // "blue"
  console.log(colors);  // ["red", "green"]
}
{ // Example 3: Using unshift() to add to start
  let numbers = [2, 3, 4];
  numbers.unshift(1);
  console.log(numbers); // [1, 2, 3, 4]
}
{ // Example 4: Using shift() to remove from start
  let items = ["first", "second", "third"];
  let firstItem = items.shift();
  console.log(firstItem); // "first"
  console.log(items);     // ["second", "third"]
}
{ // Example 5: Combining multiple operations
  let stack = [1, 2, 3];
  stack.push(4);    // [1, 2, 3, 4]
  stack.push(5);    // [1, 2, 3, 4, 5]
  stack.pop();      // [1, 2, 3, 4]
  stack.unshift(0); // [0, 1, 2, 3, 4]
  console.log(stack); // [0, 1, 2, 3, 4]
}


/* ------------------------------------------------------------------
   12. Search and Merge Methods
   .indexOf(item)  : Returns the index of an item (or -1 if not found)
   .includes(item) : Returns true if item exists, false otherwise
   .concat(array)  : Merges arrays into a new array
   .reverse()      : Reverses the array in place
------------------------------------------------------------------ */
section("12. Search and Merge Methods");

{ // Example 1: Using indexOf()
  let fruits = ["apple", "banana", "mango"];
  console.log(fruits.indexOf("banana")); // 1
  console.log(fruits.indexOf("grape"));  // -1
}
{ // Example 2: Using includes()
  let colors = ["red", "green", "blue"];
  console.log(colors.includes("green"));  // true
  console.log(colors.includes("yellow")); // false
}
{ // Example 3: Using concat()
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let combined = arr1.concat(arr2);
  console.log(combined); // [1, 2, 3, 4, 5, 6]
}
{ // Example 4: Using reverse()
  let numbers = [1, 2, 3, 4, 5];
  numbers.reverse();
  console.log(numbers); // [5, 4, 3, 2, 1]
}
{ // Example 5: Combining methods
  let items = ["a", "b", "c"];
  let moreItems = ["d", "e"];
  let all = items.concat(moreItems);
  console.log(all.includes("c"));  // true
  console.log(all.indexOf("d"));   // 3
}


/* ------------------------------------------------------------------
   13. The .splice() Method
   Can remove, replace, or add elements at any position in an array.
   It modifies the original array.
   Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
   - startIndex  : Where to start the operation
   - deleteCount : How many elements to remove
   - item1, ...  : Elements to add (optional)
------------------------------------------------------------------ */
section("13. The .splice() Method");

{ // Example 1: Inserting elements
  let months = ["Jan", "March", "April"];
  months.splice(1, 0, "Feb");
  console.log(months); // ["Jan", "Feb", "March", "April"]
}
{ // Example 2: Removing elements
  let colors = ["red", "green", "blue", "yellow"];
  colors.splice(2, 1); // Remove 1 element at index 2
  console.log(colors); // ["red", "green", "yellow"]
}
{ // Example 3: Replacing elements
  let fruits = ["apple", "banana", "mango"];
  fruits.splice(1, 1, "orange");
  console.log(fruits); // ["apple", "orange", "mango"]
}
{ // Example 4: Removing and adding multiple elements
  let numbers = [1, 2, 5, 6];
  numbers.splice(2, 0, 3, 4); // Insert 3 and 4 at index 2
  console.log(numbers); // [1, 2, 3, 4, 5, 6]
}
{ // Example 5: Removing multiple elements
  let items = ["a", "b", "c", "d", "e"];
  items.splice(1, 3); // Remove 3 elements starting at index 1
  console.log(items); // ["a", "e"]
}


/* ------------------------------------------------------------------
   14. Array References
   When you assign an array to a variable, you store a reference
   (memory address) to that array, not the actual values. Two
   variables can point to the same array.
------------------------------------------------------------------ */
section("14. Array References");

{ // Example 1: Arrays with same values are not equal
  console.log([1, 2] == [1, 2]);  // false (different references)
  console.log([1, 2] === [1, 2]); // false
}
{ // Example 2: Copying a reference
  let arr1 = [1, 2, 3];
  let arr2 = arr1; // arr2 points to same array as arr1
  arr2[0] = 99;
  console.log(arr1); // [99, 2, 3] (also changed!)
  console.log(arr2); // [99, 2, 3]
}
{ // Example 3: Both variables point to same array
  let colors = ["red", "green"];
  let palette = colors;
  palette.push("blue");
  console.log(colors);  // ["red", "green", "blue"]
  console.log(palette); // ["red", "green", "blue"]
}
{ // Example 4: Comparing references
  let a = [1, 2, 3];
  let b = a;
  console.log(a === b); // true (same reference)

  let c = [1, 2, 3];
  console.log(a === c); // false (different references)
}
{ // Example 5: Independent arrays
  let original = [1, 2, 3];
  let copy = [1, 2, 3]; // New array, same values
  copy[0] = 99;
  console.log(original); // [1, 2, 3] (unchanged)
  console.log(copy);     // [99, 2, 3]
}


/* ------------------------------------------------------------------
   15. Nested Arrays
   Arrays can contain other arrays as elements, creating
   multi-dimensional structures. Useful for grids, matrices, tables.
   Syntax: let grid = [[row1], [row2], [row3]];
------------------------------------------------------------------ */
section("15. Nested Arrays");

{ // Example 1: Basic nested array
  let grid = [[1, 2], [3, 4]];
  console.log(grid[0]);    // [1, 2]
  console.log(grid[0][1]); // 2
}
{ // Example 2: Tic-tac-toe board
  let board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
  ];
  console.log(board[0][0]); // "X" (top-left)
  console.log(board[2][2]); // "X" (bottom-right)
}
{ // Example 3: Student grades
  let grades = [
    ["Alice", 85, 90, 92],
    ["Bob", 78, 88, 84],
    ["Charlie", 92, 95, 88]
  ];
  console.log(grades[0][0]); // "Alice"
  console.log(grades[1][2]); // 88 (Bob's second grade)
}
{ // Example 4: Modifying nested arrays
  let matrix = [[1, 2], [3, 4]];
  matrix[0][1] = 20;
  console.log(matrix); // [[1, 20], [3, 4]]
}
{ // Example 5: Complex nested structure
  let data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(data[1][1]); // 5 (center element)
  console.log(data[2][0]); // 7 (bottom-left)
}

console.log("\nEnd of Day 4 study notes.");
