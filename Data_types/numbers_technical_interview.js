                                                                                //Technical Interview Session: JavaScript - Rounding Numbers
//Interviewer: Welcome to the session! We’ll begin with some technical questions about rounding numbers in JavaScript. Feel free to explain your thought process as you answer. Let's get started!

// Question 1: Rounding Basics
// Given the number -2.7, use each of the following methods to round the number. Provide the rounded results and explain the differences:

// Math.floor
// Math.ceil
// Math.round
// Math.trunc


// Question 2: Precision Rounding
// Write a function roundToNth that rounds a given number to n decimal places. Use the multiply-and-divide method for this implementation.
// Here’s the function signature for reference:

function roundToNth(num, n) {
  // Your implementation here
}


// Question 3: Real-World Application
// Imagine you’re building a finance app where every transaction amount must be shown with two decimal places. Which rounding method would you choose, and why? Additionally, demonstrate how to format the number 1234.5678 to two decimal places.


// Question 4: Edge Cases
// Consider the number 1.005. It is a common issue in JavaScript rounding due to floating-point precision.
// What is the output of the following code? Why? How would you fix it?
let num = 1.005;
console.log(Math.round(num * 100) / 100);


// Question 5: Conversion with toFixed
// If toFixed returns a string, why is this useful in certain cases? When would you need to convert the result back to a number?


// Question 6: Code Challenge
// Write a function formatNumber that takes a number and a number of desired decimal places as input. It should return a string formatted with the specified decimal places, including trailing zeros if needed.
// For example:
formatNumber(12.34, 5); // "12.34000"
formatNumber(12.36, 2); // "12.36"
