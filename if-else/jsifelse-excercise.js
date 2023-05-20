// if (condition1) {
//     //  block of code to be executed if condition1 is true
//   } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
//   } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
// //   }

const time = new Date().getHours();
let greeting;
if (time<10){
    greetings="Good morning";
}
else{
    greetings="Good evening";
}
console.log(greetings);