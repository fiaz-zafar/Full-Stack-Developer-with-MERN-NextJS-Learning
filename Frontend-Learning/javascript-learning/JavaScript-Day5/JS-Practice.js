//for loop
// syntax :for (initialization , condition , updation)
for (let i = 1 ; i <=10 ; i++){
    console.log(i);
} //o/p : 1 2 3....10

//issues:
// Notice the semicolon (;) right after the closing parenthesis ).

// Why this happens
// In JavaScript, a semicolon right after a for loop statement ends the loop immediately. This means the loop runs its entire sequence (from i = 1 up to when i becomes 11), but it does not execute the code block { console.log(i); } inside it.

// Once the loop finishes, let i (which was block-scoped inside the loop initialization) no longer exists in the outer scope. When your code then tries to run line 4 (console.log(i)), JavaScript throws a ReferenceError: i is not defined because i is out of scope.

//logical Examples

//odd numbers
for (let i=1;i<=15;i+=2){
    console.log(i);
}
//even numbers
for (let i=2 ;i<=10;i+=2){
    console.log(i);
}
//multiplication table of 5
for(let i=5;i<=50;i+=5){
    console.log(i);
}
//Nested for loops
for (let i =1; i<=3; i++){
    console.log("Outer:", i);
    for (let j=1;j<=3;j++){
        console.log("inner:", j)
    }
}
//While loop
//syntax: while(condition){}
let i =1 ; //initialization outside
while(i<=5){
    console.log(i);
    i++;//updation inside
}
//Do While loop
//syntax: do {} while (condition);
let j =0;
do {
    console.log(j);
    j++;
}while(j<5); //runs atleast once,even if i starts >5
//o/p: 0...4

//loop Control : break :- Exit the loop
for(let i=0; i<10; i++){
    if (i === 5){
        break; //stops loop
    }
    console.log(i);
}//o/p: 0 ... 4
//ex=2
for (let j=10; j<=20 ; j+3){
    if (j ===19){
        break;
    }
    console.log(j);
}
//Continue - Skip Iteration
for (let z=1;z<10;z++){
    if (z === 5){
        continue; //skips 5
    }
    console.log(z);
} // o/p : 1 2 3 4 6 7 8 9 

//Iterating Over Array
let cities = ["london","paris","tokya","newY"];
for (let i =0 ; i < cities.length; i++){
    console.log(i , cities[i])
}

//Nested arrays with loops
let teams = [
    ["player1","player2"],
    ["player3","player4"]
];
for (let i=0;i<teams.length; i++){
    for (let j=0; j<team[i].lenght; j++){
        console.log(teams[i][j])
    }
}
