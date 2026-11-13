//Identifier Rules
//An identifier is a unique name assigned to variables, functions, or objects in JavaScript. Understanding therules for valid identifiers is crucial for writing error-free code.
//Think of identifiers as labels or names you give to different parts of your code. Just like how you have a name, every variable, function, or object in your code needs a unique identifier.

//The Five essential rules for valid identifiers in JavaScript are:

//1. An identifier must start with a letter (a-z or A-Z), an underscore (_), or a dollar sign ($). It cannot start with a number.

let 123name; //  Cannot start with digit (invalid identifier)
let 9lives; //  Cannot start with digit (invalid identifier)
let _private; //  Starts with underscore (valid identifier)
let $price; //  Starts with dollar sign (valid identifier)

//2. After the first character, an identifier can contain letters, digits (0-9), underscores (_), or dollar signs ($).

//3. Identifiers are case-sensitive, meaning that uppercase and lowercase letters are treated as different characters. For example, myVariable and myvariable are considered distinct identifiers.

let userAge = 25;
let userage = 30;
let UserAge = 35;
let USERAGE = 40;
// These are FOUR DIFFERENT variables!
console.log(userAge); // 25
console.log(userage); // 30
console.log(UserAge); // 35
console.log(USERAGE); // 40
//Be consistent with your casing to avoid confusion. If you name a variable userName , don't refer to it later as username or UserName .

//4. Reserved words (keywords) in JavaScript cannot be used as identifiers. These reserved words have special meanings in the language and are used for specific purposes.
//Common reserved words include:
// let , const , var (variable declarations)
// if , else , while , for (control structures)
// function , return (function-related)
// true , false , null , undefined (special values)
// class , extends , import , export (advanced features)

// Invalid - using reserved words
let let = 10; //  Error
let if = 20; //  Error
let function = 30; // Error

let letVariable = 10; // Valid identifier (not a reserved word)
let ifCondition = 20; // Valid identifier (not a reserved word)
let functionName = 30; // Valid identifier (not a reserved word)

//5. Identifiers should not contain spaces or special characters (except for underscores and dollar signs). They should be descriptive and meaningful to enhance code readability.

let user name = "John"; // Invalid identifier (contains a space)
let 1age = 25; // Invalid identifier (starts with a number)
let total-amount = 100; // Invalid identifier (contains a hyphen)
let myVariable = "Hello"; // Valid identifier ( Uses camelCase and starts with a letter)
let _myVariable = "Hello"; // Valid identifier (starts with an underscore)
let SCORE = 90; // Valid identifier (all uppercase letters [PASCAL_CASE] and starts with a letter)

//No other special characters are allowed. Characters like @ , # , % , & , - , + , etc., will cause errors.

let userName = "John"; // Valid identifier
let _age = 25; // Valid identifier
let $salary = 50000; // Valid identifier
let total_AMOUNT = 100; // Valid identifier

console.log(userName); // Output: John
console.log(_age); // Output: 25
console.log($salary); // Output: 50000
console.log(total_AMOUNT); // Output: 100

//Common mistakes to avoid :
//1 Hyphens vs Underscores: Hyphens (-) are not allowed in identifiers, while underscores (_) are valid. Use underscores for multi-word identifiers instead of hyphens.

let user-name = "John"; // Invalid identifier (contains a hyphen)
let user_name = "John"; // Valid identifier (uses underscore)

//2. Starting with Numbers: Identifiers cannot start with a number. Always begin with a letter, underscore, or dollar sign.

let 1stPlace = "Alice"; // Invalid identifier (starts with a number)
let 99balloons = 99; // Invalid identifier (starts with a number)
let place1st = "Alice"; // Valid identifier (starts with a letter)
let firstPlace = "Alice"; // Valid identifier (starts with a letter)

//3. Special Characters: Avoid using special characters (except for underscores and dollar signs) in identifiers. Stick to letters, digits, underscores, and dollar signs.

let user@name = "John"; // Invalid identifier (contains a special character)
let user#age = 25; // Invalid identifier (contains a special character)
let user$name = "John"; // Valid identifier (uses dollar sign) //output: John
let user_name = "John"; // Valid identifier (uses underscore)
// Remember: Only _ and $ are allowed as special characters

