const max=prompt("enter the maximum number")

const random =Math.floor(Math.random() * max)+1;


let guess=prompt("guesss the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("you are right");
        break;
    }
    else if(guess<random){
        guess=prompt("hint:your guess is too small.pls try again.")
    }
    else{
        guess=prompt("hint:your guess is too large.pls try again.")
    }
}
