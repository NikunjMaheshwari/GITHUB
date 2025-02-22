//for loop
for(let i=1;i<=5;i++){
    console.log(i)
}

//print odd numbers
for(let i=1;i<=15;i=i+2){
    console.log(i)
}

//print even numbers
for(let i=2;i<=15;i=i+2){
    console.log(i)
}

//print multiplication table
n=prompt("enter number")
n=parseInt(n)
for(let i=n;i<=n*10;i=i+n){
    console.log(i)
}

//nested loops
for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`)
    for(let j=1;j<=3;j++){
        console.log(j)
    }
}

//while loop
let i=1
while (i<=5){
    console.log(i);
    i++;
}

//break keyword
let j=1
while (j<=5){
    if(j==1){break;}
    console.log(j);
    j++;
}

//loops with arrays
let fruits=["mango","banana","papaya","grapes","apple"]
for(let k=0;k<fruits.length;k++){
    console.log(k,fruits[k]);
}

//nested loops with nested arrays
let heroes=[["ironman","thor","batman"],["superman","spiderman","grapes"]]
for(let l=0;l<heroes.length;l++){
    console.log(`List #${l}`)
    for(let m=0;m<heroes[l].length;m++){
        console.log(heroes[l][m])
    }
}