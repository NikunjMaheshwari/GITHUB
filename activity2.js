let btn=document.querySelector("button")
let inp=document.querySelector("input")
let ul=document.querySelector("ul")
// let li=document.querySelector("li")

btn.addEventListener("click",function(){
    //console.log("task added")
    let item=document.createElement("li")
    item.innerText=inp.value

    let dltbtn=document.createElement("button")
    dltbtn.innerText="delete"
    dltbtn.classList.add("delete")
    item.appendChild(dltbtn)

    ul.appendChild(item)  
    console.log("added ")  
    inp.value=""
   
});

//event delegation
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement
        listitem.remove()
        console.log("deleted")
    }
})//this code can remove Eat and Sleep


// let deltebtns=document.querySelectorAll(".delete")
// for(delbtn of deltebtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement
//         console.log(par)
//         par.remove()
//     });
// }
