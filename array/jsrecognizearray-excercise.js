// How to Recognize an Array
// A common question is: How do I know if a variable is an array?

// The problem is that the JavaScript operator typeof returns "object":
const fruits=["Banana", "apple", "orange"]
let type = typeof fruits;
console.log(type);
console.log(fruits);
// The typeof operator returns object because a JavaScript array is an object.

// Solution 1:
// To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
let y = Array.isArray(fruits);// boolean checks
console.log(y);
// The instanceof Operator
// The instanceof operator returns true when used on an array:
// Solution 2:
// The instanceof operator returns true if an object is created by a given constructor:
let x = fruits instanceof Array;
console.log(x);
