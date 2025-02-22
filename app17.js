//accessing data from json which is eventually a string
let jsonres='{"fact":"abcd."}';
let validRes=JSON.parse(jsonres);
console.log(validRes.fact);//it is now converted into javascript object
console.log(validRes);

let student={
    name:"abc",
    marks:95
}
//console.log(JSON.stringify(student))=>run this in console as it returning data into string

let url="https://catfact.ninja/fact";

console.log(fetch(url));//fetch returns a promise

fetch(url)
.then((response)=>{//response from api
    //console.log(response);
    return response.json()
})
.then((data)=>{//this will give the actual response
    console.log("data 1 = "+data.fact)
    return fetch(url)
})
.then((response)=>{
    return response.json()
})
.then((data2)=>{//this will give the actual response
    console.log("data 2 = "+data2.fact)
})
.catch((err)=>{
    console.log("ERROR - ",err);
})

console.log("i am happy")//javascript is not waiting to resolving promises.

//using fetch with async/await
async function getFacts() {
    let res=await fetch(url)
    let data=await res.json()
    console.log("data 3 = "+data.fact)
    
}
console.log(getFacts())

//agar url galat ho to code ko try and catch mai kardo continuos execution ke liye
// async function getFacts() {
//     try{let res=await fetch(url)
//         let data=await res.json()
//         console.log(data.fact)}
//     catch(e){
//         console.log("err",e)
//     }
//}