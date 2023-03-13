const spanTag=document.querySelectorAll('.gamepad span');
const result=document.querySelector('#result');
const activePlayer=document.querySelector('#activePlayer');
const resetAll=document.querySelector('#resetAll');

//variables Decleration 
let moverList=Array(9).fill(null);
let move='X';
let isWon=false;
const winningMoves=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//handle Click
spanTag.forEach((span)=>{
    span.addEventListener('click',(e)=>{
        let index=e.target.getAttribute('data-index');
       
        if(moverList[index]==null && !isWon){
            moverList[index]=move;
            e.target.innerText=move;
            checkWinner();
            if(!isWon){
                move = move==='X'?'O':'X'
                activePlayer.innerText=move;
            }else{
                result.innerText=`Winner is : ${move}`;
            }
        }
    })
})

//Check Winner
function checkWinner(){
   for (let index = 0; index < winningMoves.length; index++) {
     const condition = winningMoves[index]; //[0,1,2]

    const box1=moverList[condition[0]]; //x
    const box2=moverList[condition[1]]; //''
    const box3=moverList[condition[2]]; //''
    if(box1==null || box2==null || box3==null){
      continue;
    }
    if(box1==box2 && box2==box3){
      isWon=true;
    }
   }
}

// reset Game
resetAll.addEventListener('click',()=>{
    moverList=Array(9).fill(null);
    move='X';
    activePlayer.innerText='X'
    isWon=false;
    result.innerText="";
    spanTag.forEach(span=>span.innerText="")
})