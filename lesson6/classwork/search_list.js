let fruit = ["banana", "peach", "apple"];

// Find if apple in array
if (fruit.includes("apple")) {
    console.log("Found apple");
} else {
    console.log("No apples found")
}

// Find if apple in an array and print its index

let found = false;
let index = -1;

for (let i = 0; i < fruit.length; i++) { // go through each index of the array
    if (fruit[i] === "apple") { // if current item is apple
        found = true; // mark as found
        index = i; // save the index
        break; // exit loop after finding
    }
}

if (found === true) {
    console.log("found apple at", index); 
} else {
    console.log("No apples in the array");
}