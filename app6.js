//object literal:- used to store keyed collections & complex entities.
//property => (key,value) pair
//objects are a collection of properties.

//creating object literals.
const student={
    name:"Shradha",
    age:"25",
    marks:"94.4",
    skill:["java","html"]
} 
console.log(student);

//creating a post
const post={
username:"nkunj",
content:"This is my first post",
likes:"30",
reposts:"2",
tags:["apna college","delta"]
}
console.log(post)

//get values or access values
let studen={
    name:"nikunj",
    age:"20"
}
console.log(studen["name"])//or
console.log(studen.name)
//js automatically converts objects keys to string.
//even if made the number as a key,the number will converted to string.


//add/update value
const students={
    name:"shradha",
    age:23,
    marks:94.4,
    city:"Delhi"
};
students.city="Mumbai";//update value
console.log(students.city)
students.gender="female"//add value
console.log(students)
students.marks="A";//can update to string from a integer value.
console.log(students.marks)
students.marks=[99,89,74];
console.log(students.marks)
delete students.city//can delete any key.
console.log(students)

//nested objects
//object of objects 
const classInfo={
    aman : {
        grade:"A+",
        city:"Delhi"
    },
    shradha:{
        grade:"A",
        city:"Pune"
    },
    karan:{
        grade:"0",
        city:"Mumbai"
    }
}
console.log(classInfo.karan)
console.log(classInfo.aman.grade)

//array of objects
const classinfo=[
    {
        grade:"A+",
        city:"Delhi"
    },
    {
        grade:"A",
        city:"Pune"
    },
    {
        grade:"0",
        city:"Mumbai"
    }
]
console.log(classinfo[0].grade)
classinfo[0].city="Mumbai";//changing value
classinfo[0].gender="female"//adding nnew value
console.log(classinfo[0])

//math object.
console.log(Math)
console.log(Math.PI)
console.log(Math.abs(-12))//absolute function used to convert negetive value to positive value.
Math.pow(2,3);//power function
Math.floor(3.9)//floor value=3
Math.ceil(3.9)//ceil value=4
Math.random()//gives random value between 0 and 1  

//generate a random number between 1 and 100
Math.floor(Math.random()*100)+1