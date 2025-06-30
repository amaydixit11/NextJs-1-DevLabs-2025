let currentMoleTile;
let score=0;
let timeremain=30;
let gamefinish= false;

let countdown;

window.onload= function(){
setGame();

}


function setGame(){
    const timerElement=document.getElementById("countdown");
 
countdown=setInterval(() =>{
    timeremain--;
    timerElement.textContent=timeremain;
    if (timeremain <=0){
clearInterval(countdown);

endGame();


    }
},1000);


    for(let i=0;i<9; i++){
let tile=document.createElement("div");
tile.id=i.toString();
tile.addEventListener("click",selectTile);
document.getElementById("ground").appendChild(tile);
    }
    setInterval(setMole,1090);
}


function getRandomTile(){
    let num=Math.floor(Math.random()*9);
    return num.toString();
}

function  setMole(){
    if(gamefinish){
        return;
    }
    if(currentMoleTile){
        currentMoleTile.innerHTML="";
    }
let mole=document.createElement("img");
mole.src="mole.png";


let num = getRandomTile();
currentMoleTile=document.getElementById(num);
currentMoleTile.appendChild(mole);

}
function selectTile(){
   if(this==currentMoleTile){
        score+=10;
        document.getElementById("points").innerText=score.toString();
        
   }
   
}

function endGame(){
    gamefinish=true;
    if(currentMoleTile) currentMoleTile.innerHTML ="";

}






