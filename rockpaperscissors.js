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
    if (humanChoice == computerChoice){
        document.querySelector("#results").textContent = `Its a tie! You both chose ${humanChoice}`
    }
    else if ((((humanChoice == "paper") && (computerChoice == "scissors")) || ((humanChoice == "rock") && (computerChoice == "paper"))) || ((humanChoice == "scissors") && (computerChoice == "rock"))){
        document.querySelector("#results").textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    else{
        document.querySelector("#results").textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
}

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
rockBtn.addEventListener("click",function(){
    playRound("rock",getComputerChoice())
})
paperBtn.addEventListener("click", function(){
    playRound("paper",getComputerChoice())
})
scissorsBtn.addEventListener("click",function(){
    playRound("scissors",getComputerChoice())
})

// function playGame(){
//     for(let i = 0; i<5; i++){
//         playRound(getHumanChoice(),getComputerChoice());
//         console.log(`Score: You: ${humanScore} Computer: ${computerScore}`);
//     }
//     if (humanScore > computerScore){
//         console.log("You won the game!")
//     }
//     else if (humanScore < computerScore){
//         console.log("You lost the game")
//     }
//     else{
//         console.log("The game was a tie!")
//     }
// }
// playGame();