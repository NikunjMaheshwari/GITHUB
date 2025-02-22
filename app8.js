//functions
function hello(){
    console.log("hello");
}
hello();
function rolldice(){
    let random=Math.floor(Math.random()*6)+1;
    console.log(random)
}
rolldice()
rolldice()
rolldice()
rolldice()

//functions with arguments.
function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("nikunj","20");

//question1
function avg(a,b,c){
    console.log(`average = ${(a+b+c)/3}`);
}
avg(4,6,2)
//question2
function printTable(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
    }
}
printTable(5)

//return keyword
function sum(a,b){
    return a+b;
}
console.log(sum(4,5))
console.log(sum(sum(1,2),3))
function isadult(age){
    if(age>18){
        return "adult";
    }
    else{
        return "not adult";
    }
}
console.log(isadult(17))

//ques of nos from 1 to n
function sumofnos(n){
    let sum=0
    for(let i=1;i<=n;i++){
        sum=sum+i 
    }
    return sum
}
console.log(sumofnos(3))

//ques. sum of concatenation of strings
let str=["hello","hii","bye","!"];
function concstr(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result=result+str[i]
    }
    return result
}
console.log(concstr(str))

//scope determines the accessibility if variables,objects,and functions from different parts of the code
//function scope-variables defined inside a function are not accessible(visible) from outside the function
function calsum(a,b){
    let sum=a+b//function scope
    console.log(sum)
}
calsum(1,2);
//block scope variables declared inside a () block cannot be accessed from outside the block.
//lexical scope-a variable defined outside a function can be accessed inside another function defined after the variable declaration. 
//what is hoisting

//functions expressions - storing functions in a variable
let sum1=function(c,d){return c+d}
console.log(sum1(4,3))

//higher order functions.
//-takes one or multiple functions as agruments
function multiplegreet(func,n){
    for(let i=1;i<= n;i++){
        func()
    }
}

let greet = function(){
    console.log("hello")
}
multiplegreet(greet,4)

//higher order functions that return a function.
function oddevenTest(request){
    if (request=="odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2 == 0);
        }
    }else{
        console.log("wrong request")
    }
}
let request="even";
let func1=oddevenTest(request)
console.log(func1(4))

//methods -actions that can be performed on an object
const calculater={
    add:function(a,b){
        return a+b
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b
    }
}
console.log(calculater.add(2,3))
console.log(typeof["1","2","3"])

//methods shorthand
const calculatar={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}



