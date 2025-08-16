
// function that randomly returns "rock", "paper" or "scissors"
let humanScore = 0;
let computerScore = 0;

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

// function to calculate the score of a round
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        console.log("Win! Paper beats Rock");
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        console.log("Win! Rock beats Scissors");
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        console.log("Win! Scissors beat Paper");
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        console.log("Uh oh...Scissors beat Paper");
    }else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        console.log("Uh oh...Paper beats Rock");
    }else if (humanChoice == "rock" && computerChoice == "scissors"){
        computerScore++;
        console.log("Uh oh...Rock beats Scissors");
    } else {
        console.log("Try again!");
    }
    return ("Computer Score: " + computerScore + "\n" + "User Score: " + humanScore);
}
/*console.log(getComputerChoice());
console.log(getHumanChoice()); */
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));