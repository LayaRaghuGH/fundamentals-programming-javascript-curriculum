// Problem 1
// Write a function that returns your favorite fruit and print it.

function favourite_fruit() {
    let fruit = "apple";
    return fruit; 
}    

let message = favourite_fruit(); 
console.log("My favourite fruit is " + message);



// Problem 2
// Write a function that returns a smiley face and print it.

function build_face() {
    let face = ":)";
    return face; 
}

let face = build_face(); 
console.log("Meet our human:", face);


// Problem 3
// Write a function that takes three parameters: length, width, and height.
// It should return the volume (length * width * height).

function object_volume(length, width, height) { 
    let volume = length * width * height;
    return volume;
}

console.log("The volume of a 5x3x9 object is", object_volume(5, 3, 9));

// Problem 4
// Create a variable for a book, then print it.
// Modify it inside a function and print it again.

let book = "The Enemy";


function modify_book() {
    cook = "Lord of the Rings";
}
 
modify_book();
console.log(book);

// Problem 5
// Write a function that takes one parameter num.
// The function should return the value of num multiplied by 2.
function double(num) {
    return num * 2;
}
console.log(double(2));