const prompt = require("prompt-sync")();

// prompt ALWAYS returns a string
let name = prompt("What is your name? ");
let input = prompt("Give me a number: ");

// In Javascript, when you add a number and a string, it always concatenates the string
console.log(input);

let number = Number(input);
console.log(number + 1); 
