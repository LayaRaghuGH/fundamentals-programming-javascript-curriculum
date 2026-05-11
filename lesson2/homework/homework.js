// Homework Problem 1
// Ask the user for two numbers.
// Print their quotient and remainder on separate lines.
const prompt = require("prompt-sync")();
let num1 = prompt("Give me a number: ");
let num2 = prompt("Give me another number: ");
console.log(num1 / num2);
console.log(num1 % num2);


// Homework Problem 2
// Ask the user for their favorite animal and favorite color.
// Print a sentence combining them like: "A blue tiger would be awesome!"
let animal = prompt("What is your favoutite animal? ");
let colour = prompt("What is your favourite colour ");
console.log("A " + colour  +  animal + " would be awesome! ");


// Homework Problem 3
// Use a for loop to print all the even numbers from 0 to 10 (including 10).
for (let i = 0; i < 11; i++) { 
    console.log(i);
}

// Homework Problem 4
// Ask the user how many push-ups they can do.
// Multiply it by 7 and print how many they could do in a week.
let pushups_day = prompt("How many pushups can you do in a row maximum?");
console.log(pushups_day * 7);



// Homework Problem 5
// Use a for loop to print the square of each number from 1 to 6.
// (Example: 1*1=1, 2*2=4, etc.)
console.log("hey");
for (let i = 0; i < 7; i++) {
    console.log(i ** i);  
}