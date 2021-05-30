const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;

const player = document.querySelector('#player-score')
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `Computer Score: ${computerScore}`;


function disableButtons()
{
  buttons.forEach(button =>{
    button.disabled = true
  })
}

function computerPlay() {
  let gameObjects = ["rock", "paper", "scissors"];
  let random_number = Math.floor(Math.random() * 3);
  return gameObjects[random_number];
}

function playRound(playerSelection) {
  // Messages
  let message = "";
  let winnerMessage = "You Win!";
  let loserMessage = "You Lose!";
  let drawMessage = "It is a draw!";

  let computerSelection = computerPlay();

  // Game Objects
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";

  // Game Logic
  if (playerSelection == rock && computerSelection == paper) {

    return computerScore++;
  } else if (playerSelection == rock && computerSelection == scissors) {
    return playerScore++;
  } else if (playerSelection == paper && computerSelection == scissors) {
    return computerScore++;
  } else if (playerSelection == paper && computerSelection == rock) {
    return playerScore++;
  } else if (playerSelection == scissors && computerSelection == rock) {
    return computerScore++;
  } else if (playerSelection == scissors && computerSelection == paper) {
    return playerScore++;
  } else {
    return playerScore;
  }
}
// function game() {
//   for (let i = 0; i < 5; i++) {
//     let userInput = window.prompt("Enter your Choice here");
//     userInput = userInput.toLowerCase();
//     console.log(playRound(userInput));
//   }
// }

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;

    playRound(playerSelection);
    console.log(playerScore, computerScore);
    
    computer.textContent = `Computer Score: ${computerScore}`;
    player.textContent = `Player Score: ${playerScore}`;
    if (playerScore == 5 ) {
      console.log("Player wins");

      const output = document.querySelector("#output");
      output.textContent = "Player wins";
      disableButtons()

    } else if (computerScore == 5) {
      console.log("Computer wins");
      const output = document.querySelector("#output");
      output.textContent = "Computer wins";
      disableButtons()
    }
  });
});
