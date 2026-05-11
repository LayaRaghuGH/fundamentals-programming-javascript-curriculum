// Problem 1
// Ask the user to enter a number.
// Print "Even" if the number is divisible by 2, otherwise print "Odd".
const prompt = require("prompt-sync")();
let number = Number(prompt("Please enter a number: "));
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Problem 2
// Ask the user for the day of the week (all lowercase).
// Print "Weekend" if the day is "saturday" or "sunday",
// else print "Weekday".

let day = prompt("What day of the week is it?");

if (day === "saturday") {
    console.log("Its the weekend");
} else if (day === "sunday") { 
    console.log("Its the weekend");
} else {
    console.log("It is a weekday");  
}

// Problem 3
// Generate a random number between 1 and 10 (inclusive).
// Ask the user to guess the number.
// Print "Correct!" if the guess matches the random number, else print "Try again!".
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = Number(prompt("I am going to generate a number from 1 to 10 inclusive and you are going to try guessing. Please enter a guess: "));
if ("guess" === "randomNumber") {
    console.log("Correct"); 
} else { 
    console.log("Try again");
}


// Problem 4
// Ask the user for a positive integer.
// If the number is divisible by 2 and greater than 10, print "Big even number".
// Otherwise print "Number does not meet criteria".



// Problem 5
// Ask the user for two numbers.
// Print which number is larger.
// If the numbers are equal, print "Numbers are equal".
