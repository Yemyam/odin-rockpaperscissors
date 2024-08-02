// used to calculate scores
// var humanScore = 0;
// var computerScore = 0;

function getComputerChoice(){
    let rand = parseFloat(Math.random());
    if ((rand >= 0) && (rand < 1/3)){
        return 0; // rock
    }
    else if ((rand >= 1/3) && (rand < 2/3)){
        return 1; // paper
    }
    else {
        return 2; // scissors
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter rock, paper or scissors!").toLowerCase;
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

function playRound(humanChoice, computerChoice){

}