
let txt = "Hello World";
console.log(txt);
txt = txt.replace("Hello", "Welcome");
console.log(txt);
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);
let text1 = "Please visit Microsoft!";

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let newText1 = text1.replace(/MICROSOFT/i, "W3Schools");
console.log(newText1);
// To replace all matches, use a regular expression with a /g flag (global match):
let text2 = "Please visit Microsoft and Microsoft!";
let newText2 = text2.replace(/Microsoft/g, "W3Schools");
console.log(newText2);

