let btn=document.querySelector("#btn2");
console.dir(btn)
btn.onclick=function (){
    alert("button was clicked!!!");
};

function sayhello(){
    alert("hello!!")
}
let btn3=document.querySelector("#btn3");
btn3.onclick=sayhello;//onclick

let btn4=document.querySelector('#btn4')//mouseenter
btn4.onmouseenter=function(){console.dir("you visited onmouseenter")}

let btn5=document.querySelector('#btn5')
btn5.addEventListener("click",eventlistener)//add event listener.//multiple events at a time
function eventlistener(){
    alert("event listener called!!")
    alert("event listener called 2")
}

let btn6=document.querySelector('#btn6') //double click
btn6.addEventListener("dblclick",function(){console.log("you double clicked me!!")})


