
// Note

// As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius; 
  console.log(value)