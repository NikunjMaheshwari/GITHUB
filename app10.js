//array methods
//1.for each
let arr=[1,2,3,4,5]
function print(el){
    console.log(el);
}
arr.forEach(print)
//OR
arr.forEach(function(el) {
    console.log(el)
});

let arr2=[
    {
    name:"aman",
    marks:95,
    },
    {
        name:"shradha",
        marks:94.4,
    },{
    name:"rajat",
    marks:92,
    },
];
arr2.forEach((student)=>{
    console.log(student.marks)
})

//map function
let num=[1,2,3,4]
let double=num.map(function(el){
    return el*el
});
console.log(double)

let gpa=arr2.map((el)=>{
    return el.marks/10;
})
console.log(gpa)

//filter function
let nums=[2,4,1,5,6,2,7,8,9]
let even=nums.filter((num)=>(num%2==0))
console.log(even)//filters all even no.s

//every method-returns true if every element of array gives true for some function.else returns false.
console.log([1,2,3,4].every((el)=>(el%2==0)))
console.log([2,4].every((el)=>(el%2==0)))

//reduce method-reduces the array to a single value-arr.reduce(reducer function e=with two variables for (accumulator,element))
console.log([1,2,3,4,5].reduce((res,el)=>(res+el)))

//maximum in array
let arr3=[1,4,7,9,3,5,6];
let max=-1;
for(let i=0;i<=arr3.length;i++){
    if(max<arr3[i]){
        max=arr3[i]
    }
}
console.log(max)
//by reduce method
let max2=arr3.reduce((max2,el)=>{
    if(max2<el){
        return el
    }
    else{
        return max2
    }
})
console.log(max2)

//ques1. check if all no. in our array are multiples of 10
console.log([10,20,30,40].every((el)=>(el%10==0)))

//default parameters-giving a default b=value to the agruments.
function sum(a,b=3){//default value of b becomes 3. 
    return a+b;
}
console.log(sum(2))
console.log(sum(2,4))//it takes b=4

//spread-expands an iterable into multiple values.
let data={
    email:"ironman@gmail.com",
    password:"abcd",
}
let datacopy={
    ...data,id:123//id added into data
}
console.log(datacopy)
let arr4=[1,2,3,4,5]
let obj1={...arr4}
let obj2={..."hello"}
console.log(obj2)

//rest:-allows a function to take an indefinite number of arguments and bundle them in an array.
function sum2(...args){
    return args.reduce((sum2,el)=>sum2+el);
}
console.log(sum2(1, 2, 3, 4));//=10

function min(...args){
    return args.reduce((min,el)=>{
        if(min>el){return el}
        else{return min}
    })
}
console.log(min(1,2,3,4)) 

//destructuring=storing values of array into multiple variables
let names=["tony","bruce","steve","peter"]
// let winner=names[0]
// let runner=names[1]
// let secondrunnerup=names[3]
let [winner,runner,secondrunnerup]=names
console.log(winner)

//destructuring for objects
const student2={
    name:"karan",
    age:14,
    class:9,
    subject:["hindi","english","math","science"],
    username:"karan@123",
    password:"abcd"
}

let {username:user,password:secret,city: place="mumbai"}=student2;//can give default value as it is given for city
// console.log(username) gives error=>as username is undefined
console.log(user)
console.log(secret)
console.log(place)