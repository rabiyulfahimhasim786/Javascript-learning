const fruits = ["Banana", "orange", "apple", "mangoes"];
let flen = fruits.length;

let text ="<ul>";

for (let i=0; i< flen; i++){
   text+="<li>"+fruits[i]+"<li/>";

}

text+="</ul>"
console.log(text);