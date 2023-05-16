function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
  
let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";

console.log(text)

let text1 = "The temperature is " + toCelsius(77) + " Celsius";
console.log(text1)