let text = "Outside: " + typeof carName;
// document.getElementById("demo1").innerHTML = text;
console.log(text)
function myFunction() {
  let carName = "Volvo";
  let year = 1996;
  let text = "Inside: " + typeof carName + " " +typeof year+ " " + carName+" "+ year; 
  console.log(text)
//   document.getElementById("demo2").innerHTML = text;
}
myFunction();