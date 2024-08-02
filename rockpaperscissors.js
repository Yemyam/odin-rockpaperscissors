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
    let humanChoice = prompt("Enter r for rock, p for paper, or s for scissors");
    if (humanChoice == "r"){
        return "rock";
    }
    else if (humanChoice == "p"){
        return "paper";
    }
    else if (humanChoice == "s"){
        return "scissors";
    }
}
console.log(getHumanChoice());
console.log(getComputerChoice());