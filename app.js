function computerPlay() {
  let gameObjects = ["rock", "paper", "scissors"];
  let random_number = Math.floor(Math.random() * 3);
  return gameObjects[random_number];
}

function playRound(playerSelection, computerSelection) {
  // Messages
  let message = "";
  let winnerMessage = "You Win!";
  let loserMessage = "You Lose!";
  let drawMessage = "It is a draw!";


  computerSelection = computerPlay();

  // Game Objects
  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";



  // Game Logic
  if (playerSelection == rock && computerSelection == paper) {
    return loserMessage;
  } else if (playerSelection == rock && computerSelection == scissors) {
    return winnerMessage;
  } else if (playerSelection == paper && computerSelection == scissors) {
    return loserMessage;
  } else if (playerSelection == paper && computerSelection == rock) {
    return winnerMessage;
  } else if (playerSelection == scissors && computerSelection == rock) {
    return loserMessage;
  } else if (playerSelection == scissors && computerSelection == paper) {
    return winnerMessage;
  } else {
    return drawMessage;
  }
}
function game() {
    
    for(let i = 0; i< 5;i++)
    {
        let userInput = window.prompt("Enter your Choice here")
        userInput = userInput.toLowerCase()
        console.log(playRound(userInput,computerPlay()))
    }
  }


game()