// The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
// syntax
// for (variable of iterable) {
//   // code block to be executed
// }

const cars = ["bmw", "audi", "mercedes"];

text = "";
for (let x of cars){
  text+= x +" ";
  console.log(x)
}
console.log(text);