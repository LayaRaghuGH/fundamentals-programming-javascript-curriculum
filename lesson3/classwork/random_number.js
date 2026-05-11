// Generating a random number from 1 to 10 inclusive and asking the user to guess
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = Number(prompt("I am going to generate a number from 1 to 10 inclusive and you are going to try guessing. Please enter a guess: "));
if ("guess" === "randomNumber") {
    console.log("Correct"); 
} else { 
    console.log("Try again");
}
  