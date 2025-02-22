//event listeners for elements.
let para=document.querySelector("p")
para.addEventListener("click",function (){
    console.log("para was clicked")
})

let box=document.querySelector(".box")
box.addEventListener("mouseenter",function(){
    console.log("mouse inside box")
})


//this keyword can be used to reduce redundancy incode
let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let p=document.querySelector("#p");

function changeColor(){
    console.dir(this.innerText)
    this.style.backgroundColor="lightblue"
}  
btn.addEventListener("click",changeColor)
h1.addEventListener("click",changeColor)
h3.addEventListener("click",changeColor)
p.addEventListener("click",changeColor)

//keyboard events
let btn2=document.querySelector("#btn2");
btn2.addEventListener("click",function (event){
    console.log(event)
    console.log("button was clicked")
})

//keydown
let inp=document.querySelector("input")
inp.addEventListener("keydown",function(event){
    console.log("Key = "+event.key)
    console.log("code = "+event.code)
    //console.log(event)
    console.log("key was pressed")})

//keydown
let inp2=document.querySelector("#in") 
inp2.addEventListener("keydown", function(event){
    console.log("code = ",event.code)
    if(event.code=="ArrowUp"){
        console.log("character moves forward")
    }
    else if(event.code=="ArrowDown"){
        console.log("character moves backward")
    }
    else if(event.code=="ArrowLeft"){
        console.log("character moves left")
    }
    else if(event.code=="ArrowRight"){
        console.log("character moves right")
    }
})

//form events
let form=document.querySelector("form")
form.addEventListener("submit",function (event) {
    event.preventDefault() //as it prevents from to open new url action
    
    let input=this.elements[0]//or previous is the short way ..document.querySelector("#in2") or form.elements[0]
    let pass=this.elements[1]//or document.querySelector("#pass")
    //console.dir(input)
    console.log(input.value)
    console.log(pass.value)
    alert(`Hi ${input.value} , your password is set to ${pass.value}`) 
})


//change event event occurs when the value of an element has been changed
let form2=document.querySelector("#form2")
form2.addEventListener("submit",function(event){
    event.preventDefault()
})
let user2=document.querySelector("#in3")
let pass2=document.querySelector("#pass2")

user2.addEventListener("change",function(){//change event
    console.log("change event")
    console.log("final value = ",this.value)
})
user2.addEventListener("input",function(){//input event
    console.log("input event")
    console.log("final value = ",this.value)
})

let in4=document.querySelector("#in4")
let p4=document.querySelector("#p4")

in4.addEventListener("input",function(){
    console.log(in4.value)
    p4.innerText=in4.value
})