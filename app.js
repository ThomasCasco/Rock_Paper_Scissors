const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOSE = 2;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const computerImg = document.getElementById("computer-img");

rockBtn.addEventListener("click", ()=>{
    play(ROCK);
});
paperBtn.addEventListener("click", ()=>{
    play(PAPER);
});
scissorBtn.addEventListener("click", ()=>{
    play(SCISSORS);
});

function play (userOption){
    userImg.src = "img/"+userOption+".svg";

    resultText.innerHTML = "Chossing!";

    const interval = setInterval(function(){
        const computerSelection = calcMachineOption();
        computerImg.src = "img/"+computerSelection+".svg";
    }, 100);

    setTimeout(function(){

        clearInterval(interval);

        const computerSelection = calcMachineOption();
        const result = calcResult(userOption,computerSelection);
    
        computerImg.src = "img/"+computerSelection+".svg";
    
    
        switch(result){
            case TIE:
                resultText.innerHTML = "You have tied! 🤔"
                break;
            case WIN:
                resultText.innerHTML = "You win! 👏😊"
                break;
            case LOSE:
                resultText.innerHTML = "You lose! 😥"
                break;            
        }

    }, 1000);
}

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;    
    }
}

function calcResult(userOption,computerSelection){
    if(userOption === computerSelection){
        return TIE;

    }else if(userOption === ROCK){
        
        if(computerSelection === PAPER) return LOSE;
        if(computerSelection === SCISSORS) return WIN;

    }else if(userOption === PAPER){

        if(computerSelection === SCISSORS) return LOSE;
        if(computerSelection === ROCK) return WIN;

    }else if(userOption === SCISSORS){
        
        if(computerSelection === ROCK) return LOSE;
        if(computerSelection === PAPER) return WIN;
    } 
}