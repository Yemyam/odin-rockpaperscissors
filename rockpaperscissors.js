// used to calculate scores
var humanScore = 0;
var computerScore = 0;

function getComputerChoice(){
    let rand = parseFloat(Math.random());
    if ((rand >= 0) && (rand < 1/3)){
        return "rock"
    }
    else if ((rand >= 1/3) && (rand < 2/3)){
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice(){
    let loop = true;
    while (true){
        let humanChoice = prompt("Please enter rock, paper or scissors!").toLowerCase();
    
        if (humanChoice == "rock"){
            return "rock";
        }
        else if (humanChoice == "paper"){
            return "paper";
        }
        else if (humanChoice == "scissors"){
            return "scissors";
        }
    }
    

}
function playRound(humanChoice, computerChoice){
    if((humanScore == 5) || (computerScore == 5)){
        return;
    }
    if (humanChoice == computerChoice){
        results.textContent = `Its a tie! You both chose ${humanChoice}`
    }
    else if ((((humanChoice == "paper") && (computerChoice == "scissors")) || ((humanChoice == "rock") && (computerChoice == "paper"))) || ((humanChoice == "scissors") && (computerChoice == "rock"))){
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    else{
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    score.textContent = `Player: ${humanScore} Computer: ${computerScore}`
    if((humanScore == 5) || (computerScore == 5)){
        if (humanScore == 5){
            winner.textContent = "You reached 5 points, you win!"
        }
        else{
            winner.textContent = "The computer reached 5 points, you lose!"
        }
        // now display play again buttons
        playAgain.textContent = "Play Again?"
        let playAgainY = document.createElement("button");
        let playAgainN = document.createElement("button");
        playAgainY.textContent = "Yes"
        playAgainN.textContent = "No"
        playAgain.appendChild(playAgainY)
        playAgain.appendChild(playAgainN)
        playAgainY.addEventListener("click",() => {
            playAgain.textContent = ""
            humanScore = 0;
            computerScore = 0;
            winner.textContent = ""
            score.textContent = "Player: 0 Computer: 0"
        })
        
    }
}

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const score = document.querySelector("#score")
const results = document.querySelector("#results")
const winner = document.querySelector("#winner")
const playAgain = document.querySelector("#playAgain");
rockBtn.addEventListener("click",function(){
    playRound("rock",getComputerChoice())
})
paperBtn.addEventListener("click", function(){
    playRound("paper",getComputerChoice())
})
scissorsBtn.addEventListener("click",function(){
    playRound("scissors",getComputerChoice())
})
