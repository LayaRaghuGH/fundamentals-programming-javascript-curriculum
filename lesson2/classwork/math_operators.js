const prompt = require("prompt-sync")();

console.log(4 + 5); // Addition: adding 2 numbers

console.log(10 - 3); // Subtraction: subtracts the second number from the first

console.log(6 * 7); // Multiplication: multiplies two numbers

console.log(15 / 2); // Division: divides the first number by the second and gives youy a decimal result

console.log(15 % 2); // Modulus: gives the remainder when dividing the first number by the second number

console.log(2 ** 3); // Exponential: raises the first number to the power of the second number


let a = Number(prompt("Give me a number:"));
let b = 9;

console.log(a + b); // you can use math operaters on variables too.
console.log(a + b * 2); // Javascript follows order of operations(PEDMAS)