// Problem 1
// Count and print how many times "dog" appears in the list.
let animals = ["lion", "dog", "cat", "dog", "dog"]
console.log(animals);

let counter = 0
for (let i = 0; i < animals.length; i++) { 
    let item = animals[i];
    if(item === "dog") {  
        counter = counter + 1;
    }
}
console.log(counter, "dogs")


// Problem 2
// Count and print how many numbers are odd in the list (a number is odd if it's not divisible by 2).
let numbers = [2, 5, 76, 12, 47];
counter = 0;
for (let i = 0; i < numbers.length; i++) {
    let numbers = numbers[i];
    if (numbers[i] % 2 === 1) {
        counter += 1;
    }
}
console.log(counter, " are odd");


// Problem 3
// Search for "monkey" in the list and print its index if it's found.



// Problem 4
// Search for 99 in the list and print if is found.



// Problem 5
// Count and print how many numbers are even in the list (a number is even if it's divisible by 2).
