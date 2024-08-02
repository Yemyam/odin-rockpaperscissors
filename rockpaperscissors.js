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
console.log(getComputerChoice());