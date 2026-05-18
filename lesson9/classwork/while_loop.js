let i = 1; // Start with an i equal to 1.
while (i < 5) {  // Repeats loop while i is less than 5.
    console.log("Hello"); // Print "Hello!" each time the loop runs.
    i = i + 1; // increase i by 1 each time the loop runs.
}

// Error: Infinite loop
// i = 1;
// while (i < 5) { // Without changing i the condition (i < 5) is always true.
//     console.log("beep!"); 
// }

let j = 1; // Start with j equal to 1.
while (j < 10) { // Repeats the loop while j is less than 10.
    console.log("woof!");
    j = j + 1; // Increase j by 1 each time the loop runs so the loop eventually stops.
}
 
let k = 1;
while (k < 1) { // This never runs because k < 1 initially.
    console.log("Hello!");
    k = k + 1;
}