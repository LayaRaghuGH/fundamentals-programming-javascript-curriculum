let nums = [1, 2, 3];
 
let biggest = nums[0]; // Start by assuming the first element is the biggest
for (let i = o; i < nums.length; i++) {
    let item = nums[i];
    if (item > biggest) { // If we find smething bigger weupdate our guess
        biggest = item; 
    }
}
console.log("the biggest item is:",)