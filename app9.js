//this keyword-refers to an object that is executing the current piece of code/method
const student={
    name:"nikunj",
    age:20,
    eng:95,
    math:96,
    phy:90,
    getAvg(){
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
        console.log(this);
    }
}
console.log(student.getAvg());

//try&catch
//the try statement allows you to define a block of code to be tested for error while it is being executed.
//the catch statement allows you to define a block of code to be executed ,if an error occurs in the try block.
try{
    console.log(a)
}
catch(err){
    console.log("caught an error.. a is not defined")
    console.log(console.error)
}
console.log(5)//5 is printed even after an error

//Arrow functions:-Arrow functions are a shorthand way of writing functions in JavaScript
const sum=(a,b)=>{
    console.log(a+b);
}
sum(3,4);
const cube=n=>{
    console.log(n*n*n)
}
cube(3)
const pow=(a,b)=>{
    console.log(a** b)
}
pow(2,3)

//arrow functions implicit return
const mul=(a,b)=>a*b
console.log(mul(2,3))

//set timeout function-inbuilt function
console.log("hi there!")
setTimeout(() => {
    console.log("Apna college")
}, 6000);//apnacollege willbe printed after 6 seconds.
console.log("welcome to")

//set interval
let id=setInterval(() => {
    console.log("set interval 1")
    console.log("set interval 2")//apnacollge will print after every 2 seconds.
}, 4000);
console.log(id) //can stop this using clearinterval writing in console by its id.

//this keyword with arrow functions.
const student2={
    name:"nikunj",
    marks:"95",
    prop:this,//global scope
    getname:function(){
        console.log(this)
        return this.name;
    },
    getmarks:()=>{//arrow func.
        console.log(this);
        return this.marks//for arrow func. this keyword means parent's scope which is window.
    },
    getInfo:function(){
        setTimeout(() => {
            console.log(this)//student bcoz this is a arrow func.
        }, 6000);
    },
    getInfo2:function(){
        setTimeout(function() {
            console.log(this)//window or undefined
        }, 6000);
    }
};
console.log(student2.getname())
console.log(student2.getmarks())
console.log(student2.getInfo())
console.log(student2.getInfo2())

//ques-arrow function that returns the square of a number 'n'
const sq=n=>{
    console.log(n*n);
}
sq(4)