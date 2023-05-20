const fruits = ["Banana", "orange", "apple", "mangoes"];
let text = "<ul>";

fruits.forEach(myfunction);
text+="</ul>";

function myfunction(value){
   text+="<li>"+value+"</li>"
}

console.log(text);