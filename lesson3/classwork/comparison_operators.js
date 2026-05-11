// comparison operators are used to compare two values and return a boolean(true or false)

console.log(5 > 3); // Greater than 
console.log(5 < 3); // Lesser than
console.log(5 >= 3); // Greater than or equal to
console.log(4 <= 4); // less than or equal to
console.log(5 === 5); // incorrect as you have to use three equal to signs to figure out whether it is true or false, Strict equality: checks if the values are equal and of the same type
console.log(0 == false); // Loose equality: checks if the values are equal but does not check the type
console.log(0 !== false); // Strict equality: checks whether the values are not equal and not of the same type
console.log(5 !==  3); // Loose equality: checks if the values are not equal but does not check the type

// you can also compare variables
let a = 10;
let b = 7
console.log(a > b);
console.log(a === b);

// you can also take input and then create this

console.log("apple" === "apple"); 
console.log("Apple" === "apple"); // String comparison is case - sensitive
console.log("apple" !== "banana");
console.log("bat" > "cat"); // string comparison is based on unicode values of characters
console.log("dog" < "zebra");