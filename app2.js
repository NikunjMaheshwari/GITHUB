let msg="    Hello  ";
console.log(msg.trim());//string methods
console.log(msg.toLowerCase());
console.log(msg.toUpperCase());

//index of
let str = "nikunj";
console.log(str.indexOf("n"));//0
console.log(str.indexOf("m"));//-1
console.log(str.indexOf("km"));//-1
console.log(str.indexOf("nj"));//4

//methodchaining
console.log(msg.toLowerCase().trim()); //used to apply two methods.

//slice method
let str1="ILoveCoding";
console.log(str1.slice(5));//index 5 se start hoga
console.log(str1.slice(1,5));//ending index not included
console.log(str1.slice(-1));//length-num=11-1=10 or mean last word print hoga


//replace & repeat method
console.log(str1.replace("Love","Do"));
console.log(str1.replace("o","x"));
console.log(str1.repeat(2));

