// Eloquent Javascript Problem One -- Create a loop to console.log to output an 8-high pyramid

//My solution
for (let hashtag= "#", hashtag = "########"; hashtag += "#") {
    console.log(hashtag);
}

//Given solution
for (let line= "#" line.length < 8; line += "#") {
    console.log(line);
}

// Loops Practice -- A loop is a mechanism that allows the program to run a piece of code multiple times without doing more work.

// EVEN NUMBER LOOP //
let number = 0 ;                //establishes beginning -- creates a binding named 'number' with an established value of 0.
while (number <= 12) {          //establishes ending -- while number has a value < or = to 12.
    console.log (number);       // console.log will execute the function number = number + 2 (and then returns back to check if the number still meets the qualification in the 2nd line)
    number = number + 2
}

// 2 TO THE 10TH POWER LOOP //
let num = 1 ;                   // establishes the binding 'num' with a value of 1.
let exponent = 0 ;              // establishes the binding 'exponent' with a value of 0.
while (exponent < 10) {         // establishes ending -- while exponent has a value less than 10.
    num = num * 2               // the num binding's value will be multiplied by 2.
    exponent = exponent + 1     // and the value of the exponent will increase by 1 per loop (with a maximum of 10 loops)
}
console.log (num);              // console.log will execute the function as a reesult of 2 to the power of 10.

                        // difference between a while and a do loop? //

// what are if statements?
//equality operators
// logical operators

// to write  it in another much cleaner way

var num = prompt("Enter a number.");
if (num > 0) {
  alert("The number is positive")
}
else if (num < 0){
  alert("The number is negative")
}

else {
  alert("The number is zero.")
}

var isRaining = prompt ("Is it raining?");
console.log (isRaining)
if (isRaining === "yes") {
  alert ("Bring an umbrella")
}
else {
  alert ("It's okay! You don't need anything.")
}

// RULES FOR LOGICAL OPERATORS
// &&(and), ||(or), !(not) -- also called logical operators
/*
true && true === true
true && false === false (as well as flase && true === false)
false && flase === false

true || true === true 
true || false === true 
false || true === true
false || false === flase

!true === flase
!false === true
*/

var name = "China";
var age = prompt ("how old are you?");
var highSchool = true;

if (age >= 18 && highSchool === true)
alert ("You are an adult!")