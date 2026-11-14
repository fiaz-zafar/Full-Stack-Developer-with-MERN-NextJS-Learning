// title("DAY 4: STRING METHODS & ARRAYS");
 
//  Section 1: trim() and case conversion 

 
// q("Q1");
{
  let userInput = "  HeLLo JaVaScRiPt  ";
  let cleanInput = userInput.trim().toLowerCase();
  console.log("userInput :", `"${userInput}"`);
  console.log("cleanInput:", `"${cleanInput}"`);
}
 
// q("Q2");
{
  let email = "  USER@EXAMPLE.COM  ";
  let formattedEmail = email.trim().toLowerCase();
  console.log(formattedEmail); // "user@example.com"
}
 
//  Section 2: indexOf() 

 
// q("Q1");
{
  let sentence = "JavaScript is awesome and JavaScript is fun";
  console.log("Position of 'awesome':", sentence.indexOf("awesome"));
  console.log("First 'JavaScript'  :", sentence.indexOf("JavaScript"));
  console.log("Position of 'Python':", sentence.indexOf("Python")); // -1
}
 
// q("Q2");
{
  let message = "Welcome to coding class";
  if (message.indexOf("coding") !== -1) {
    console.log("Found coding!");
  } else {
    console.log("Coding not found");
  }
}
 
// Section 3: Method chaining

 
// q("Q1");
{
  let rawData = "  MESSY iNpuT  ";
  let processedData = rawData.trim().toLowerCase();
  console.log("Original :", `"${rawData}"`);
  console.log("Processed:", `"${processedData}"`);
}
 
// q("Q2");
{
  let password = "  MyP@ssw0rd123  ";
  let securePassword = password.trim().toUpperCase().slice(0, 8);
  console.log(securePassword); // "MYP@SSW0"
}
 
//  Section 4: String slicing 

// q("Q1");
{
  let fullName = "Alexander Hamilton";
  let firstName = fullName.slice(0, 9);
  let lastName = fullName.slice(10);
  console.log("First name:", firstName); // Alexander
  console.log("Last name :", lastName);  // Hamilton
}
 
// q("Q2");
{
  let phone = "9876543210";
  let areaCode = phone.slice(0, 3);
  let lastFour = phone.slice(-4);
  console.log(`Area code: ${areaCode}, Last four: ${lastFour}`);
}
 
//  Section 5: replace()

 
// q("Q1");
{
  let announcement = "The event will happen on Monday and Monday only";
  let updatedAnnouncement = announcement.replace("Monday", "Friday");
  console.log("Original:", announcement);
  console.log("Updated :", updatedAnnouncement);
  // Only the FIRST "Monday" is replaced.
}
 
// q("Q2");
{
  let template = "Hello NAME, welcome to our website";
  let personalizedMessage = template.replace("NAME", "Alice");
  console.log(personalizedMessage);
}

   // section("Section 6: Basic Arrays");


// q("Q1");
{
  let colors = ["red", "green", "blue", "yellow"];
  console.log("Entire array :", colors);
  console.log("First color  :", colors[0]);
  console.log("Last color   :", colors[colors.length - 1]);
  console.log("Total colors :", colors.length);
}


// q("Q2");
{
  let scores = [85, 92, 78, 90, 88];
  console.log("Score at index 2:", scores[2]);
  scores[0] = 95;
  console.log("Modified array  :", scores);
  console.log("Sum of first two:", scores[0] + scores[1]);
}

   // section("Section 7: push / pop / shift / unshift");


// q("Q1");
{
  let playlist = [];
  playlist.push("Song1");
  playlist.push("Song2");
  let removedSong = playlist.pop(); // "Song2"
  playlist.unshift("Song0");
  console.log("Final playlist:", playlist);    // ["Song0", "Song1"]
  console.log("Removed song  :", removedSong); // "Song2"
}


// q("Q2");
{
  let queue = ["First", "Second", "Third"];
  let served = queue.shift();   // "First"
  queue.push("Fourth");
  let served2 = queue.shift();  // "Second"
  console.log("Remaining queue:", queue);            // ["Third", "Fourth"]
  console.log("People served  :", [served, served2]); // ["First", "Second"]
}

// section("Section 8: indexOf / includes");


// q("Q1");
{
  let fruits = ["apple", "banana", "mango", "orange", "banana"];
  console.log("mango :", fruits.indexOf("mango"));   // 2
  console.log("banana:", fruits.indexOf("banana"));  // 1 (first occurrence)
  console.log("grape :", fruits.indexOf("grape"));   // -1
}


// q("Q2");
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



// section("Section 9: Concat and Reverse");

{
  let morningClasses = ["Math", "English", "Science"];
  let afternoonClasses = ["History", "Art", "PE"];
  let fullSchedule = morningClasses.concat(afternoonClasses);
  console.log("Full schedule:", fullSchedule);
  console.log("Total classes:", fullSchedule.length); // 6
}


// q("Q2");
{
  let numbers = [1, 2, 3, 4, 5];
  numbers.reverse();
  console.log("Reversed:", numbers);        // [5, 4, 3, 2, 1]
  console.log("numbers again:", numbers);  // [5, 4, 3, 2, 1]
  // reverse() MODIFIES the original array (it works in place).
}

// section("Section 10: The splice() Method");


// q("Q1");
{
  let months = ["Jan", "Feb", "Mar", "May", "Jun"];
  months.splice(3, 0, "Apr");
  console.log("Corrected array:", months);
  let i = months.indexOf("Apr");
  console.log("April is between March and May:",
    months[i - 1] === "Mar" && months[i + 1] === "May"); // true
}


// q("Q2");
{
  let students = ["Alice", "Bob", "Charlie", "David", "Eve"];
  students.splice(2, 1);                   // remove Charlie
  students.splice(2, 0, "Frank", "Grace"); // add Frank and Grace at index 2
  console.log(students); // ["Alice", "Bob", "Frank", "Grace", "David", "Eve"]
}



// section("Section 11: Array References");


// q("Q1");
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

// q("Q2");
{
  let arr1 = [1, 2, 3];
  let arr2 = [1, 2, 3];
  console.log("arr1 == arr2 :", arr1 == arr2);   // false
  console.log("arr1 === arr2:", arr1 === arr2);  // false

}



// section("Section 12: Nested Arrays");


// q("Q1");
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


// q("Q2");
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

