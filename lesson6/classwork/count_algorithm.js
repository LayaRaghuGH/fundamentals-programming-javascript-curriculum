animals = ["dog", "cat", "lion", "tiger", "cat"];
console.log(animals)

let counter = 0
for (let i = 0; i < animals.length; i++) { // In javascript we can always come back and change the number of elements in the list so if we use .length then we do not have to count all the elements once changed.
    let item = animals[i];
    if(item === "cat") {  // If item is "cat", add 1 to the counter
        counter = counter + 1;
    }
}
console.log(counter, "cats")

let numbers = [14, 1, 50, 4, 20, 12];
counter = 0;
for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    if (item > 10) {
        counter = counter + 1;
    }
}
console.log(counter, "numbers above 10");
