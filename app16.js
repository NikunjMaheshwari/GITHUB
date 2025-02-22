async function greet(){
    //throw("error found");
    return "hello world";
}
greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was : ",result);
})
.catch((err)=>{
    console.log("promise was rejected with error",err);
})
// let demo=async()=>{ //using arrow functions
//     return 5;
// }
// console.log(demo());



// //await function
// function getnum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();

//         },1000);
//     })
// }
// async function demo() {
//     await getnum();//it will print numbers after one by one second.await means to wait for previous one.
//     await getnum();
//     await getnum();
//     await getnum();
// }
// console.log(demo());


//handling rejections
h1=document.querySelector("h1")
function changeColour(color,delay){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            let num=Math.floor(Math.random() * 5)+1;
            if(num>3){ 
                reject("promise rejected");
            }
            h1.style.color=color;
            console.log(`color changed to ${color}!`)
            resolve("color changed");
        },delay);


    });
}

async function demo2() {
    try{
        await changeColour("red",1000)
        await changeColour("orange",1000)
        await changeColour("green",1000)
        await changeColour("blue",1000)
    }
    catch(err){
        console.log("error caught")
        console.log(err)
    }
    let a=5
    console.log(a)
    
}
console.log(demo2())


