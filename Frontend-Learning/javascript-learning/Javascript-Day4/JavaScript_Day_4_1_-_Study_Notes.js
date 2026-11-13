/* ==================================================================
   JavaScript Day 4.1: Advanced Array Methods - Study Notes
   Run with:  node JavaScript_Day_4_1_-_Study_Notes.js
   Every example is wrapped in its own { } block so variable names
   never clash. Expected output is shown in comments.
   ================================================================== */

const section = (t) => console.log("\n==================== " + t + " ====================");


/* ------------------------------------------------------------------
   1. Array slice() Method
   Returns a shallow copy of a portion of an array into a new array.
   It does NOT modify the original array.
   Syntax: array.slice(startIndex, endIndex)
   - Start index is included
   - End index is NOT included
   - If only one argument, slices from that index to end
   - Returns a new array
------------------------------------------------------------------ */
section("1. Array slice()");

{ // Example 1: Basic slicing
  let numbers = [1, 2, 3, 4, 5];
  let sliced = numbers.slice(1, 4);
  console.log(sliced);  // [2, 3, 4]
  console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)
}
{ // Example 2: Slicing from index to end
  let fruits = ["apple", "banana", "mango", "orange", "grape"];
  let lastThree = fruits.slice(2);
  console.log(lastThree); // ["mango", "orange", "grape"]
}
{ // Example 3: Getting first few elements
  let colors = ["red", "green", "blue", "yellow", "purple"];
  let firstTwo = colors.slice(0, 2);
  console.log(firstTwo); // ["red", "green"]
}
{ // Example 4: Using negative indices
  let letters = ["a", "b", "c", "d", "e"];
  console.log(letters.slice(-2));    // ["d", "e"] (last 2)
  console.log(letters.slice(1, -1)); // ["b", "c", "d"] (exclude first and last)
}
{ // Example 5: Creating a copy of entire array
  let original = [10, 20, 30];
  let copy = original.slice();
  copy[0] = 99;
  console.log(original); // [10, 20, 30] (unchanged)
  console.log(copy);     // [99, 20, 30]
}


/* ------------------------------------------------------------------
   2. Array splice() - Advanced Usage
   Beyond basic insertion and deletion, splice() can perform complex
   array modifications. It modifies the original array and returns an
   array of removed elements.
   Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
------------------------------------------------------------------ */
section("2. Array splice() - Advanced");

{ // Example 1: Removing and capturing deleted elements
  let colors = ["red", "green", "blue", "yellow", "purple"];
  let removed = colors.splice(1, 2);
  console.log(removed); // ["green", "blue"]
  console.log(colors);  // ["red", "yellow", "purple"]
}
{ // Example 2: Replacing multiple elements
  let numbers = [1, 2, 3, 4, 5];
  numbers.splice(1, 3, 10, 20, 30);
  console.log(numbers); // [1, 10, 20, 30, 5]
}
{ // Example 3: Inserting multiple elements without deletion
  let arr = [1, 5];
  arr.splice(1, 0, 2, 3, 4);
  console.log(arr); // [1, 2, 3, 4, 5]
}
{ // Example 4: Removing from end using negative index
  let items = ["a", "b", "c", "d", "e"];
  items.splice(-2, 2);
  console.log(items); // ["a", "b", "c"]
}
{ // Example 5: Replacing single element
  let fruits = ["apple", "banana", "mango"];
  fruits.splice(1, 1, "orange");
  console.log(fruits); // ["apple", "orange", "mango"]
}


/* ------------------------------------------------------------------
   3. Array sort() Method
   Sorts the elements of an array in place and returns the sorted
   array. By default, it converts elements to strings and sorts them
   alphabetically.
   IMPORTANT: sort() modifies the original array!
------------------------------------------------------------------ */
section("3. Array sort()");

{ // Example 1: Sorting strings alphabetically
  let fruits = ["banana", "apple", "mango", "cherry"];
  fruits.sort();
  console.log(fruits); // ["apple", "banana", "cherry", "mango"]
}
{ // Example 2: Sorting numbers (WARNING: unexpected behavior!)
  let numbers = [10, 5, 40, 25, 1000];
  numbers.sort();
  console.log(numbers); // [10, 1000, 25, 40, 5] (sorted as strings!)
}
{ // Example 3: Sorting numbers correctly with compare function
  let scores = [85, 92, 78, 95, 88];
  scores.sort((a, b) => a - b);
  console.log(scores); // [78, 85, 88, 92, 95]
}
{ // Example 4: Sorting in descending order
  let values = [3, 1, 4, 1, 5, 9, 2, 6];
  values.sort((a, b) => b - a);
  console.log(values); // [9, 6, 5, 4, 3, 2, 1, 1]
}
{ // Example 5: Case-insensitive string sorting
  let names = ["charlie", "Alice", "bob", "David"];
  names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  console.log(names); // ["Alice", "bob", "charlie", "David"]
}


/* ------------------------------------------------------------------
   4. Array join() Method
   Creates and returns a new string by concatenating all elements of
   an array, separated by a specified separator.
   Syntax: array.join(separator)
   - Default separator is comma (,)
   - Returns a string, not an array
------------------------------------------------------------------ */
section("4. Array join()");

{ // Example 1: Basic join with default separator
  let colors = ["red", "green", "blue"];
  let result = colors.join();
  console.log(result); // "red,green,blue"
}
{ // Example 2: Join with space separator
  let words = ["Hello", "World", "JavaScript"];
  let sentence = words.join(" ");
  console.log(sentence); // "Hello World JavaScript"
}
{ // Example 3: Join with hyphen
  let date = ["2024", "12", "25"];
  let formatted = date.join("-");
  console.log(formatted); // "2024-12-25"
}
{ // Example 4: Join with empty string
  let letters = ["J", "a", "v", "a"];
  let word = letters.join("");
  console.log(word); // "Java"
}
{ // Example 5: Join with custom separator
  let items = ["apple", "banana", "mango"];
  let list = items.join(" | ");
  console.log(list); // "apple | banana | mango"
}


/* ------------------------------------------------------------------
   5. Array toString() Method
   Converts an array to a string with comma-separated values. It's
   similar to join() without arguments.
------------------------------------------------------------------ */
section("5. Array toString()");

{ // Example 1: Basic toString
  let numbers = [1, 2, 3, 4, 5];
  let str = numbers.toString();
  console.log(str);        // "1,2,3,4,5"
  console.log(typeof str); // "string"
}
{ // Example 2: toString with nested arrays
  let nested = [[1, 2], [3, 4]];
  console.log(nested.toString()); // "1,2,3,4"
}
{ // Example 3: toString vs join
  let fruits = ["apple", "banana", "mango"];
  console.log(fruits.toString()); // "apple,banana,mango"
  console.log(fruits.join());     // "apple,banana,mango" (same result)
}
{ // Example 4: toString with mixed types
  let mixed = [1, "hello", true, 3.14];
  console.log(mixed.toString()); // "1,hello,true,3.14"
}
{ // Example 5: Using toString for display
  let colors = ["red", "green", "blue"];
  console.log("Colors: " + colors.toString()); // "Colors: red,green,blue"
}


/* ------------------------------------------------------------------
   6. Creating Arrays with Array() Constructor
   Besides array literals [], you can create arrays using the
   Array() constructor.
------------------------------------------------------------------ */
section("6. Array() Constructor");

{ // Example 1: Creating empty array
  let arr1 = new Array();
  console.log(arr1);        // []
  console.log(arr1.length); // 0
}
{ // Example 2: Creating array with specific length
  let arr2 = new Array(5);
  console.log(arr2);        // [empty x 5]
  console.log(arr2.length); // 5
}
{ // Example 3: Creating array with elements
  let arr3 = new Array(1, 2, 3, 4);
  console.log(arr3); // [1, 2, 3, 4]
}
{ // Example 4: Array literal vs constructor
  let literal = [5];             // Array with one element: 5
  let constructor = new Array(5); // Array with length 5
  console.log(literal);     // [5]
  console.log(constructor); // [empty x 5]
}
{ // Example 5: Filling array after creation
  let numbers = new Array(3);
  numbers[0] = 10;
  numbers[1] = 20;
  numbers[2] = 30;
  console.log(numbers); // [10, 20, 30]
}


/* ------------------------------------------------------------------
   7. Checking if Something is an Array
   Array.isArray() checks if a value is an array. Important because
   typeof returns "object" for arrays.
------------------------------------------------------------------ */
section("7. Array.isArray()");

{ // Example 1: Basic array check
  let arr = [1, 2, 3];
  console.log(Array.isArray(arr)); // true
}
{ // Example 2: Checking non-arrays
  console.log(Array.isArray("hello")); // false
  console.log(Array.isArray(123));     // false
  console.log(Array.isArray(true));    // false
}
{ // Example 3: Why typeof doesn't work
  let numbers = [1, 2, 3];
  console.log(typeof numbers);          // "object" (not helpful!)
  console.log(Array.isArray(numbers));  // true (correct!)
}
{ // Example 4: Checking empty array
  let empty = [];
  console.log(Array.isArray(empty)); // true
}
{ // Example 5: Using in conditional
  let data = [10, 20, 30];
  if (Array.isArray(data)) {
    console.log("It's an array with " + data.length + " elements");
  } else {
    console.log("Not an array");
  }
}


/* ------------------------------------------------------------------
   8. Multi-dimensional Arrays (Deep Dive)
   Arrays within arrays. Useful for grids, matrices, tables, and
   complex data structures.
------------------------------------------------------------------ */
section("8. Multi-dimensional Arrays");

{ // Example 1: 2D array - Simple grid
  let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(grid[0][0]); // 1
  console.log(grid[1][2]); // 6
  console.log(grid[2][1]); // 8
}
{ // Example 2: Student records with multiple data
  let students = [
    ["Alice", 20, [85, 90, 92]],
    ["Bob", 21, [78, 85, 88]],
    ["Charlie", 19, [92, 88, 95]]
  ];
  console.log(students[0][0]);    // "Alice"
  console.log(students[1][2][0]); // 78 (Bob's first score)
}
{ // Example 3: Seating arrangement
  let classroom = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Eve", "Frank"],
    ["Grace", "Henry", "Iris"]
  ];
  console.log(classroom[0][1]); // "Bob" (front row, middle seat)
  console.log(classroom[2][2]); // "Iris" (back row, right seat)
}
{ // Example 4: Modifying nested arrays
  let matrix = [
    [1, 2],
    [3, 4]
  ];
  matrix[0][1] = 20;
  matrix[1][0] = 30;
  console.log(matrix); // [[1, 20], [30, 4]]
}
{ // Example 5: Iterating through 2D array
  let numbers = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  console.log("Row 0:", numbers[0]); // [1, 2, 3]
  console.log("Row 1:", numbers[1]); // [4, 5, 6]
}


/* ------------------------------------------------------------------
   9. Array Length and Empty Elements
   Understanding array length, empty slots, and how to work with
   array size.
------------------------------------------------------------------ */
section("9. Array Length and Empty Elements");

{ // Example 1: Length property
  let arr = [10, 20, 30, 40];
  console.log(arr.length); // 4
}
{ // Example 2: Changing length manually (truncates array)
  let numbers = [1, 2, 3, 4, 5];
  numbers.length = 3;
  console.log(numbers); // [1, 2, 3]
}
{ // Example 3: Increasing length creates empty slots
  let items = [1, 2];
  items.length = 5;
  console.log(items);    // [1, 2, empty x 3]
  console.log(items[3]); // undefined
}
{ // Example 4: Adding element beyond current length
  let colors = ["red", "green"];
  colors[5] = "blue";
  console.log(colors);        // ["red", "green", empty x 3, "blue"]
  console.log(colors.length); // 6
}
{ // Example 5: Clearing an array
  let data = [1, 2, 3, 4, 5];
  data.length = 0;
  console.log(data); // []
}


/* ------------------------------------------------------------------
   10. Combining Multiple Array Methods
   Real-world scenarios often require chaining or combining multiple
   array methods to achieve complex operations.
------------------------------------------------------------------ */
section("10. Combining Multiple Array Methods");

{ // Example 1: Clean, sort, and join
  let tags = ["  javascript  ", "  HTML  ", "  css  ", "  React  "];
  let cleaned = [];
  cleaned.push(tags[0].trim().toLowerCase());
  cleaned.push(tags[1].trim().toLowerCase());
  cleaned.push(tags[2].trim().toLowerCase());
  cleaned.push(tags[3].trim().toLowerCase());
  cleaned.sort();
  let result = cleaned.join(", ");
  console.log(result); // "css, html, javascript, react"
}
{ // Example 2: Slice and reverse
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let middle = numbers.slice(2, 6); // [3, 4, 5, 6]
  middle.reverse();
  console.log(middle); // [6, 5, 4, 3]
}
{ // Example 3: Concat and sort
  let list1 = ["zebra", "apple"];
  let list2 = ["mango", "banana"];
  let combined = list1.concat(list2);
  combined.sort();
  console.log(combined); // ["apple", "banana", "mango", "zebra"]
}
{ // Example 4: Splice and push
  let queue = ["first", "second", "third"];
  let removed = queue.splice(0, 1); // Remove first
  queue.push(removed[0]);           // Add to end
  console.log(queue); // ["second", "third", "first"]
}
{ // Example 5: Multiple operations on array
  let scores = [85, 92, 78, 95, 88];
  scores.push(90);                    // Add new score
  scores.sort((a, b) => b - a);       // Sort descending
  let top3 = scores.slice(0, 3);      // Get top 3
  console.log(top3); // [95, 92, 90]
}


/* ------------------------------------------------------------------
   11. Array Best Practices and Common Patterns
   Important patterns and practices when working with arrays.
------------------------------------------------------------------ */
section("11. Array Best Practices and Common Patterns");

{ // Example 1: Checking array before operations
  let data = [1, 2, 3];
  if (Array.isArray(data) && data.length > 0) {
    console.log("First element:", data[0]);
  }
}
{ // Example 2: Safe access to array elements
  let colors = ["red", "green", "blue"];
  let index = 5;
  if (index >= 0 && index < colors.length) {
    console.log(colors[index]);
  } else {
    console.log("Index out of bounds");
  }
}
{ // Example 3: Creating a copy before modifying
  let original = [1, 2, 3, 4, 5];
  let copy = original.slice();
  copy.reverse();
  console.log(original); // [1, 2, 3, 4, 5] (unchanged)
  console.log(copy);     // [5, 4, 3, 2, 1]
}
{ // Example 4: Building arrays incrementally
  let evenNumbers = [];
  evenNumbers.push(2);
  evenNumbers.push(4);
  evenNumbers.push(6);
  evenNumbers.push(8);
  console.log(evenNumbers); // [2, 4, 6, 8]
}
{ // Example 5: Removing duplicates manually
  let nums = [1, 2, 2, 3, 3, 3, 4];
  let unique = [];
  if (unique.indexOf(nums[0]) === -1) unique.push(nums[0]);
  if (unique.indexOf(nums[1]) === -1) unique.push(nums[1]);
  if (unique.indexOf(nums[2]) === -1) unique.push(nums[2]);
  // Continue pattern...
  console.log(unique);
}


/* ------------------------------------------------------------------
   12. Working with Array Copies vs References
   Understanding the difference between copying values and copying
   references is crucial for avoiding bugs.
------------------------------------------------------------------ */
section("12. Array Copies vs References");

{ // Example 1: Simple values vs array references
  let num1 = 5;
  let num2 = num1;
  num2 = 10;
  console.log(num1); // 5 (unchanged)

  let arr1 = [1, 2, 3];
  let arr2 = arr1;
  arr2[0] = 99;
  console.log(arr1); // [99, 2, 3] (changed!)
}
{ // Example 2: Creating true copy with slice
  let original = [1, 2, 3];
  let copy = original.slice();
  copy[0] = 99;
  console.log(original); // [1, 2, 3] (unchanged)
  console.log(copy);     // [99, 2, 3]
}
{ // Example 3: Nested arrays - shallow copy issue
  let nested = [[1, 2], [3, 4]];
  let copy2 = nested.slice();
  copy2[0][0] = 99;
  console.log(nested); // [[99, 2], [3, 4]] (inner array changed!)
}
{ // Example 4: Multiple references to same array
  let colors = ["red", "green", "blue"];
  let palette1 = colors;
  let palette2 = colors;
  palette1.push("yellow");
  console.log(colors);   // ["red", "green", "blue", "yellow"]
  console.log(palette2); // ["red", "green", "blue", "yellow"]
}
{ // Example 5: Comparing arrays
  let a = [1, 2, 3];
  let b = [1, 2, 3];
  let c = a;
  console.log(a === b); // false (different references)
  console.log(a === c); // true (same reference)
}


/* ------------------------------------------------------------------
   13. Array Manipulation Patterns
   Common patterns for manipulating arrays effectively.
------------------------------------------------------------------ */
section("13. Array Manipulation Patterns");

{ // Example 1: Swapping elements
  let arr = ["a", "b", "c", "d"];
  let temp = arr[0];
  arr[0] = arr[3];
  arr[3] = temp;
  console.log(arr); // ["d", "b", "c", "a"]
}
{ // Example 2: Rotating array (move first to last)
  let numbers = [1, 2, 3, 4, 5];
  let first = numbers.shift();
  numbers.push(first);
  console.log(numbers); // [2, 3, 4, 5, 1]
}
{ // Example 3: Removing specific value
  let items = ["apple", "banana", "mango", "banana"];
  let index = items.indexOf("banana");
  if (index !== -1) {
    items.splice(index, 1);
  }
  console.log(items); // ["apple", "mango", "banana"]
}
{ // Example 4: Inserting at specific position
  let list = ["a", "c", "d"];
  list.splice(1, 0, "b");
  console.log(list); // ["a", "b", "c", "d"]
}
{ // Example 5: Building array from pieces
  let part1 = [1, 2];
  let part2 = [3, 4];
  let part3 = [5, 6];
  let complete = part1.concat(part2).concat(part3);
  console.log(complete); // [1, 2, 3, 4, 5, 6]
}


/* ------------------------------------------------------------------
   14. Array Edge Cases and Gotchas
   Important edge cases to be aware of when working with arrays.
------------------------------------------------------------------ */
section("14. Array Edge Cases and Gotchas");

{ // Example 1: Empty array is truthy
  let arr = [];
  if (arr) {
    console.log("Empty array is truthy!"); // This runs!
  }
  if (arr.length === 0) {
    console.log("But length is 0"); // Check length instead
  }
}
{ // Example 2: Negative indices don't work for access
  let numbers = [1, 2, 3, 4, 5];
  console.log(numbers[-1]);                 // undefined (not last element!)
  console.log(numbers[numbers.length - 1]); // 5 (correct way)
}
{ // Example 3: Sort without compare function
  let nums = [1, 10, 2, 20, 3, 30];
  nums.sort();
  console.log(nums); // [1, 10, 2, 20, 3, 30] (sorted as strings!)
}
{ // Example 4: Modifying array during iteration
  let items = [1, 2, 3, 4, 5];
  // Be careful when modifying array you're iterating over
  items.pop();
  items.pop();
  console.log(items); // [1, 2, 3]
}
{ // Example 5: Array with holes
  let sparse = [1, , , 4];
  console.log(sparse.length); // 4
  console.log(sparse[1]);     // undefined
  console.log(sparse[2]);     // undefined
}


/* ------------------------------------------------------------------
   15. Practical Array Applications
   Real-world use cases for arrays.
------------------------------------------------------------------ */
section("15. Practical Array Applications");

{ // Example 1: Shopping cart
  let cart = [];
  cart.push("Laptop");
  cart.push("Mouse");
  cart.push("Keyboard");
  console.log("Cart items:", cart.length);
  console.log("Items:", cart.join(", "));
}
{ // Example 2: Playlist management
  let playlist = ["Song1", "Song2", "Song3"];
  console.log("Now playing:", playlist[0]);
  let played = playlist.shift();
  console.log("Played:", played);
  console.log("Remaining:", playlist);
}
{ // Example 3: High score tracking
  let scores = [150, 200, 180, 220, 190];
  scores.sort((a, b) => b - a);
  console.log("High score:", scores[0]);
  console.log("Top 3:", scores.slice(0, 3));
}
{ // Example 4: Task list
  let tasks = ["Buy groceries", "Clean room", "Study JavaScript"];
  console.log("Total tasks:", tasks.length);
  let completed = tasks.splice(1, 1);
  console.log("Completed:", completed[0]);
  console.log("Remaining tasks:", tasks);
}
{ // Example 5: Contact list
  let contacts = [];
  contacts.push("Alice: 1234567890");
  contacts.push("Bob: 9876543210");
  contacts.push("Charlie: 5555555555");
  let found = contacts[contacts.indexOf("Bob: 9876543210")];
  if (found) {
    console.log("Found contact:", found);
  }
}

console.log("\nEnd of Day 4.1 study notes.");
