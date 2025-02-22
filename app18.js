let url="https://catfact.ninja/fact";
async function getFacts3() {
    try{
    let res=await axios.get(url);//axios:-library to make https requests.
    return res.data.fact;}
    catch(e){
        return "No fact found";
    }
}//as axios gives exact data while fetch data we need to parse and fetch does not give json data
console.log(getFacts3())

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{

    let fact=await getFacts3()
    //console.log(fact)

    let p=document.querySelector("#result")
    p.innerText=fact;
})


//sending header with api requests.
let url2="https://icanhazdadjoke.com/";
async function getJokes() {
    try {
        const config={headers:{Accept:"application/json"}};//passing header within our axios requests.
        let res=await axios.get(url2,config)
        console.log(res.data)
    } catch(err) {
        console.log(err)
    }
}
//getJokes(); write it in console this data is in json format


let url3="http://universities.hipolabs.com/search?name=";
let btn2 =document.querySelector("#btn2");
btn2.addEventListener("click",async () => {
    let country=document.querySelector("input").value
    console.log(country)
    let colleges=await getcolleges(country);
    console.log(colleges)
})

async function getcolleges(country) {
    try {
        let res2=await axios.get(url3+country)
        return res2.data;
    } catch (e) {
        console.log("err -",e)
        return []
    }
}