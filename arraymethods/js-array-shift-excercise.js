
// The shift() Method
// The shift() method removes the first element of an array (and "shifts" the other elements to the left):

// Banana,Orange,Apple,Mango

// Orange,Apple,Mango
const fruits = ["Mangoes", "orange", "banana", "orange", "apple"];
console.log(fruits.shift())
console.log(fruits);
const x = fruits.pop();
console.log(x);
console.log(fruits.shift());
const y = fruits.push("kiwi");
console.log(y);
console.log(fruits.shift());
const z = fruits.splice(1,2);
console.log(z);
console.log(fruits.shift());