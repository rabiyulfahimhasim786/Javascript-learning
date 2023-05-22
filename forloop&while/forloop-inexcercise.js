//
// The For In Loop
// The JavaScript for in statement loops through the properties of an Object:
// syntax
// for (variable in array) {
//     code
//   }

const cars = ["bmw", "audi", "mercedes"];

text = "";
for (let x in cars){
  text+= cars[x] +" ";
  console.log(x);
  console.log(cars[x])
}
console.log(text);