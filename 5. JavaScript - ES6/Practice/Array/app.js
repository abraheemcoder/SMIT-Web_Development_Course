// // Level 1 - Fundamentals

// // ===================================

// // Q1
// // const fruits = ["Apple", "Banana", "Mango", "Orange"];

// // Write code that:
// // Prints the first fruit.
// // Prints the last fruit without hardcoding its index.
// // Changes "Banana" to "Grapes".
// // Prints the updated array.
// // Prints the total number of fruits using length.

// // Expected Output:
// // Apple
// // Orange
// // ["Apple", "Grapes", "Mango", "Orange"]
// // 4

// // Rules:
// // Use array indexing.
// // Use length for finding the last element.
// // Do not use any Array methods yet.
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);
// fruits[1] = "Grapes";
// console.log(fruits);
// console.log(fruits.length);

// // ===================================

// // Q2
// // Given:
// // const numbers = [10, 20, 30, 40, 50];

// // Write code that:
// // Prints the first element.
// // Prints the last element using length.
// // Changes the middle element (30) to 100.
// // Prints the updated array.
// // Prints the new length.

// // Expected Output:
// // 10
// // 50
// // [10, 20, 100, 40, 50]
// // 5

// // Rules:
// // Use indexing.
// // Use length where appropriate.
// // No Array methods.
// // Don't hardcode the last index.
// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers[0]);
// console.log(numbers[numbers.length - 1]);
// numbers[2] = 100;
// console.log(numbers);
// console.log(numbers.length);

// ===================================

// Q3
// Given:
// const nums = [10, 20, 30];

// Using only indexing and length:
// Add 40 to the end of the array.
// Add 5 to the beginning of the array.
// Remove the last element.
// Print the final array.
// Print its length.

// Expected Output:
// [5, 10, 20, 30]
// 4

// Rules:
// No push()
// No pop()
// No shift()
// No unshift()
// No other Array methods
// Use indexing and length
// You may use assignment and delete

const nums = [10, 20, 30];
nums[3] = 40;
console.log(nums);
nums[-1];
console.log(nums);