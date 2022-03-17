let number=Math.floor(Math.random()*10+1);
let guess=0;

document.getElementById("button").onclick=function(){
    let answer=document.getElementById("textfield").value;
    guess+=1;
    if(answer==number){
        alert(`You have guessed it in ${guess} tries !...The Number was ${number}`);
    }
    else if(guess<answer){
        alert("The number is too short!");
    }
    else if(guess>answer){
        alert("The number is a tad bit high");
    }

}
