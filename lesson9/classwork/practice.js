const prompt = require('prompt-sync')();
// Problem 1
// Use a while loop to print the numbers from 1 to 7 (inclusive).
let numbers = 1;

while (numbers <= 7) {
  console.log(numbers);
  numbers = numbers + 1; 
}


// Problem 2
// Use a while loop to count down from 3 to -3 (inclusive), printing each number.
let number = 3;

while (number >= -3) {
  console.log(number);
  number = number - 1; 
}


// Problem 3
// Ask the user to input a number less than 50.
// Use a while loop to print numbers starting from that number, going up by 2 each time, until you reach 50 (inclusive).


let num1 = Number(prompt("Give me a number less than 50:")); 
 while (num1 <= 50) { 
    console.log(num1); 
    num1 = num1 + 2; 
}

console.log(num1); 



// Problem 4
// Ask the user to input a number.
// Use a while loop to count down by 3 each time until you reach 0 or less (inclusive).

let num = Number(prompt("Give me a number less than 50:")); // While the number is greater than 0, keep counting down
while (num > 0) {
    console.log(num); 
    num = num - 3; // Subtract 3 to count down
}

console.log(num); // Outputs the final number (0 or less)


// Problem 5
// Use a while loop to print each element in the list.

// let animals = ["dog", "cat", "lion"];
// i = 0;
// while (i < animals.length()) {
//     console.log(animals[i]);
// } 


let user = Number(prompt("Give me a positive number:"));
let sum = 0;
i = 1;
while (i <= number) {
    sum = sum + i;
    i = i + 1;
}



let password = prompt("Please enter a password: ");
while (password !== "javascript") {
    password = prompt("Please enter a password: ")
    tries = 
}