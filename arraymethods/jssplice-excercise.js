const fruits = ["banana", "orange", "apple", "mangoes"];
let removed = fruits.splice(2, 2, "lemon", "kiwi"); 
console.log(fruits);
const x = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(x);
console.log(fruits);
// let removed = fruits.splice(2, 2, "lemon", "kiwi"); 
console.log(removed);
console.log(fruits);
// Splicing and Slicing Arrays
// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.

// JavaScript Array splice()
// The splice() method can be used to add new items to an array:
// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items: