//call stack every website has its call stack,
//this is useful for track which is function is calling.
function one(){
    return 1;
}
function two(){
    return one()+one()
}
function three(){
    let ans=two()+one()
    console.log(ans)
}
three()

//JS is single threaded means it executes only one thing at a time.

setTimeout(()=>{//browser executes set timeout.,after 2 sec browser add this function into call stack.
    console.log("apna college")
},2000)
console.log("hello...")//as it is executing this line first.


let h1=document.querySelector("h1")//shortcut to change color in delay or settimeout.
function changecolor(color, delay,nextcolorchange){
    setTimeout(() => {
        h1.style.color=color
        if(nextcolorchange) nextcolorchange()
    }, delay);
    
}

changecolor("red",1000,()=>{//callback hell
    changecolor("green",1000,()=>{
        changecolor("orange",1000);//callbacks nesting -> callback hell which is a problem, to prevent from them we use promises,async and await keyword.
    })
})
// changecolor("green",1000)
// changecolor("orange",1000)


function savedb(data){//promises ya hoga ya nahi hoga
    return new Promise((resolve,rejected)=> {//success and failure are called resolve and rejected. 
        let internetspeed=Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            resolve("Success:data was saved");
        }
        else{
            rejected("failure:weak connection");
        }
    })
}
//let request=savedb("apna collgeg");//promise object


// savedb("apna")
// //then and catch:-promises methods
//   .then(()=>{//if request completes
//     console.log("promise was resolved");
//     //console.log(request);
//   })
//   .catch(()=>{//if not completed
//     console.log("promise was rejected");
//     //console.log(request);
// });


//promise chaining(multiple then and catch) help for readable form of code.
savedb("apna clg")
  .then((result)=>{//if request completes
    console.log("data1 saved.promise1 resolved");
    console.log("result of promise1,",result);
    return savedb("hello world");
  })
  .then((result)=>{
    console.log("data2 saved ,promise2 resolved");
    console.log("result of promis2,",result);
    return savedb("abcd");
  })
  .then((result)=>{
    console.log("data3 saved ,promise3 resolved");
    console.log("result of promise3,",result);
  })
  
  .catch((error)=>{//if not completed
    console.log("promise was rejected");
    console.log("error of promise",error);
});




