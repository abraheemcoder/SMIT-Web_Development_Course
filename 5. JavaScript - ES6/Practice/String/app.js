// Practice

// ===================================

// Q1
// What will this print?
const text = "JavaScript";
console.log(text[0]);
console.log(text[4]);
console.log(text.length);

// Output:
// "J"
// "S"
// 10

// ===================================

// Q2
// What is the output?
const name = "   Abdul   ";
console.log(name.trim().toUpperCase());

// Output:
// "ABDUL"

// ===================================

// Q3
// Create a string:
// I am learning JavaScript
// Then check whether it contains:
// JavaScript
const learn = "I am learning JavaScript";
console.log(learn.includes("JavaScript")); // true

// ===================================

// Q4
// Given:
// const email = "abdul@example.com";
// Check whether the email ends with:
// .com
const email = "abdul@example.com";
console.log(email.endsWith(".com")); // true

// ===================================

// Q5
// Convert:
// const skills = "HTML,CSS,JavaScript,React";
// into:
// ["HTML", "CSS", "JavaScript", "React"]
// using a string method.
const skills = "HTML,CSS,JavaScript,React";
console.log(skills.split(",")); // ["HTML", "CSS", "JavaScript", "React"]

// ===================================