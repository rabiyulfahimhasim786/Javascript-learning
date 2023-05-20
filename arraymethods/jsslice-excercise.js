const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits);
const citrus = fruits.slice(1);
console.log(citrus);
const x = citrus.splice(0, 1);
console.log(x);
console.log(citrus);
// remove first element using splice and slice methods

// Using splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

// The first parameter (0) defines the position where new elements should be added (spliced in).

// The second parameter (1) defines how many elements should be removed.

// The rest of the parameters are omitted. No new elements will be added.