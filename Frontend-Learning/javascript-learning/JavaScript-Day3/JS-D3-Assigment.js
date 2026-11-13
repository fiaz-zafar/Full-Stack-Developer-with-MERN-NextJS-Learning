//Part A: if-else Statements

// Problem 1: Number Sign

let num = -5;
if(num > 0){
    console.log("positive number");
} else if (num < 0){
    console.log("negative number")
}

//Problem 2: Eligible for License

let age = 17;
if (age > 18){
    console.log("personis eligible for a driving license");
} else if (age < 18){
    console.log("not eligible for a driving license")
}

//Problem 3: Grade Calculator

let grade = 85;
if (grade > 90){
    console.log("A")
} else if( grade > 80 - 89){
    console.log("B")
}else if( grade > 70 - 79){
    console.log("C")
}else if ( grade > 60 - 69){
    console.log("D")
}else if(grade > 60){
console.log("F")
}else {
    console.log("Failed")
}

// Part B: Logical Operators

// Problem 4: Login System

let username = "admin"
let password = "12345"
if (username === "admin" && password === 12345) {
    console.log( "login successful");
}else {
    console.log("FAILED LOGIN!");
}
//0/P : FAILED LOGIN

//PROBLEM-5

let day= "monday"
if (day == "saturday" && "sunday"){
    console.log("weekend");
}else {
    console.log("WEEKDAY");
}

//probelm-6

let age1 = 25;
if (age1 < 12){
    console.log("$5");
}else if (age1 >= 12 && age1<60){
    console.log("$8");
}else if(age1>= 60){
    console.log("$6");
}else {
    console.log("no entry");
}

//probelem -7

let orderTotal = 40;
let isPremium = true;
if (orderTotal>50 || "isPremium"){
    console.log("free shipping")
}else {
    console.log("no free shipping")
}

//Part C: Nested Conditionals

// Problem 8: Pass or Fail with Distinction

let marks= 75;
if (marks>= 33 ){
    if(marks >= 80){
        console.log("passed with distinction")
    }else {
        console.log("pass")
    }
}else if(marks< 33){
    console.log("failed");
}

//problem -9

let temperature = 25;
let isRaining = false;
if (temperature > 30){
    console.log("hot day");
}else if (temperature >= 20-30){
    if(true){
console.log("plesant but raining")
    } if(false){
        console.log("perfect weather");
    }
}else if(temperature < 20){
    console.log("cold day")
}
//output: plesant but raining

// let temperature = 25;
// let isRaining = false;
// if (temperature > 30){
//     console.log("hot day");
// }else if (temperature >= 20-30){
//     if("its raining" ){
// console.log("plesant but raining")
//     } if("not raining"){
//         console.log("perfect weather");
//     }
// }else if(temperature < 20){
//     console.log("cold day")
// }

//Part D: Switch Statement

//problem 10
let dayNum=3;
switch (dayNum){
    case 1: console.log("monday");
    break;
    case 2: console.log("tuesday");
    break;
    case 3: console.log("wednesday");
    break;
    case 4: console.log("thusday");
    break;
    case 5: console.log("friday");
    break;
    case 6: console.log("saturday");
    break;
    case 7: console.log("sunday");
    break;
    default:console.log("invalid day no.") //we should write this logic
}

//problem -11

let signal = "yellow";
switch (signal){
    case "red": console.log("stop");
    break;
    case "yellow": console.log("slow-down");
    break;
    case "green": console.log("go");
    break;
    default: console.log("invalid signal");
}

//problem 12
let month=7;
switch(month){
    case 12,1,2 : console.log("winter");
    break;
    case 3,4,5 : console.log("spring");
    break;
    case 6,7,8 :console.log("summer");
    break;
    case 9,10,11 : console.log("fail")
    break;
    default : console.log("invalid input")
} //invalid input

// Part E: Truthy and Falsy

// Problem 13: Username Check

let userName= " ";
if (userName === ""){
    console.log('welcome ${userName}')

}else (
    console.log("please enter username")
)

//problem 14 

let score = 0;
if (score > 0){
    console.log("0")
}else {
    console.log("no score yet")
}

//Part F: Combining Everything

// Problem 15: Voting Eligibility

let age2 = 16;
let isCitizen = true;
let hasVoted =false;
switch (age2 >= 18){
    case isCitizen : console.log("can vote")
    break;
    case hasVoted : console.log("cant vote")
    // default: console.log("invalid input");
}

//problem 16:
let total = 120;
let isPremium1 = false;
// switch (total || isPremium1){
//     case total : console.log("")
if (isPremium1){
    console.log(20% "discount");

}else if(total > 100){
    console.log(15%"discount");
} else if(total > 50){
    console.log(10% "discount")
}else {
    console.log("no discount")
}
//NaN

//problem 17
let num1 = 15;

if (num1 % 15 === 0) {
    console.log("fizzbuzz");
} else if (num1 % 3 === 0) {
    console.log("fizz");
} else if (num1 % 5 === 0) {
    console.log("buzz");
} else {
    console.log(num1);
}

//part G :  User Interface

problem 18
let age3 = prompt("Enter your age:");
if (age3 >= 18){
    alert("you are eligible");
}else {
    alert("not eligible to work")
}

//problem 19 
// let age4 = prompt("enter")
// switch(age4){
//     case age4++ : alert(age4);
//     break;
// case age-- : alert(age4);
// break;
// case age4** : alert (age4);
// break;
// case age4 / : alert(age4);
// default: alert(invalid input)
// }


