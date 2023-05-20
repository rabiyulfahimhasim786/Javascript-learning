// Reversing an Array
// The reverse() method reverses the elements in an array.

// You can use it to sort an array in descending order:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
let x = fruits.sort();
let y = fruits.reverse();
console.log(x);
console.log(y);
console.log(fruits);
//numeric sort
// Use the same trick to sort an array descending:
// descending - eranguvarisai
const points = [40, 100, 1, 5, 25, 10];
let zee = points.sort(function(a, b){return b - a});
console.log(zee);
// output =  [100, 40, 25, 10, 5, 1]
//ascending - eruvarisai

let ascending = points.sort(function(a, b){return a - b});
console.log(ascending);


