// Problem 1
// Ask the user for their age.
// Calculate and print how many decades old they are, rounded to the nearest whole number.
const prompt = require("prompt-sync")();
let age = Number(prompt("How old are you? "));
console.log("You have lived for " + (age / 10) + " decades.");

// Problem 2
// Ask the user to enter a number.
// Print the result of multiplying that number by 5.
let num = Number(prompt("Enter a number: "));
console.log(num * 5);


// Problem 3
// Use a for loop to print "I will learn JavaScript!" 3 times.
for(let i = 0; i < 3; i++){
    console.log("I will learn Javascript!");
}

// Problem 4
// Ask the user for their name and age.
// Print their name and how old they will be one year in a single sentence.
let name = prompt("What is your name: ");
let age2 = prompt("How old are you: ");
let y = Number(age2);
console.log("Your name is " + name + " and you will be " + (y + 1) + " in 1 year");


// Problem 5
// Use a for loop to print the numbers from 2 to 8, one per line.
for (let i = 2; i < 9; i++) {  
    console.log(i);
}