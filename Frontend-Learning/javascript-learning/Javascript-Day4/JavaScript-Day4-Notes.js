/* ==================================================================
   JavaScript Day 4: String Methods & Arrays - Study Notes
   Run with:  node Notes_JavaScript_Day_4.js
   Every example is wrapped in its own { } block so variable names
   never clash. Expected output is shown in comments.
   ================================================================== */

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
