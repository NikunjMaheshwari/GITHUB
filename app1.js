let a=5;
let b=10;
console.log(`Your pay ${a+b} rupees`); //template literals ex1

let pencilprice=10;
let erasorprice=15;
let output="total price = "+(pencilprice+erasorprice)+" rupees";
console.log(output) //ex 2

//arithmetic operators
let c=10;
let d=5;
let e=15;
let f=20;
console.log(c+d);
console.log(c-d);
console.log(c*d);
console.log(c/d);
console.log(c%d);
console.log(c**d);

//unary operatos
console.log(c++);
console.log(++d);
console.log(e--);
console.log(--f);

//assignment operators
let g=10;
let h=15;
g=h;
console.log(g);

//comparison operators
let age=18;
console.log(age>20); //similarily or bhi operators h.

//conditional statement
let age1=19;
if(age1>18){
    console.log("eligible for vote");
}
else{
    console.log("not eligible");
}//similarily also if,else if,nested if else means if else inside if cond.

//switch statement
let color="green";
switch(color){
    case "red":console.log("stop");
    break;
    case "yellow":console.log("slow down");
    break;
    case "green":console.log("go");
    break;
    default:console.log("broken light");
}

// alert("something is wrong");
// prompt("please enter your name");

let fn=prompt("enter your first name");
let ln=prompt("enter your last name");
let msg="Welcome "+ fn + ln;
alert(msg);