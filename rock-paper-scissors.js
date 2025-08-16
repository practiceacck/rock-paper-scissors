
// function that randomly returns "rock", "paper" or "scissors"
const humanScore = 0;
const computerScore = 0;

function getComputerChoice(){
    let random_num = Math.random();
    console.log(random_num)
    if (random_num <= 0.3) {
        return "Rock";
    } else if (random_num <= 0.6) {
        return "Paper";
    }else {
        return "Scissors";
    }
}

//function that allows user input to make their gameplay choice
function getHumanChoice(){
    let get_choice = prompt("Let's Play! Pick rock, paper or scissors and write your choice below.");
    return get_choice;
}


console.log(getComputerChoice());
console.log(getHumanChoice());