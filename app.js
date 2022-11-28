console.log("hello world");

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
const choice = options[Math.floor(Math.random() * options.length)]
return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "Tie";
    } else if ((playerSelection == "rock" && computerSelection == "scissors")||
    (playerSelection == "paper" && computerSelection == "rock")||
    (playerSelection == "scissors" && computerSelection == "paper")){
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
   console.log("Begin");
   const result = checkWinner(playerSelection, computerSelection);
      if (result == "Tie"){
        return "It is a draw";
      } else if (result == "Player"){
        return `You Won! ${playerSelection} beats ${computerSelection}`;
      } else {
        return `You Lost! ${computerSelection} beats ${playerSelection}`;
      }
   }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));