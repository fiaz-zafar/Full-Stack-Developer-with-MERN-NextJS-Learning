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
 
/* ---------- Section 2: indexOf() ---------- */

 
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
 
/* ---------- Section 3: Method chaining ---------- */

 
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
 
/* ---------- Section 4: String slicing ---------- */

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