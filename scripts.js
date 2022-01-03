let playerScore = 0
let compScore = 0
let playerChoice = ""
let compChoice = ""
let choices = ["rock", "paper", "scissors"]
let winnerOfRound = ""

function setChoices() {
    playerChoice = prompt("Choose your weapon...")
    playerChoice = playerChoice.toLowerCase()
    compChoice = choices[Math.floor(Math.random() * 3)]
    console.log(`We have Player 1: ${playerChoice} vs Computer: ${compChoice}`)
}

function logWinner() {
    console.log(`The ${winnerOfRound} wins. The score is ${playerScore} to ${compScore}.`)
}


function showResult() {
    if (winnerOfRound != "player" && winnerOfRound != "computer") {
        console.log(`It's a tie. The score is ${playerScore} to ${compScore}.`)
    } else {
        logWinner();
    }
}


//determine winnerOfRound with simple if-then

function determineWinner() {
    setChoices();
    if (playerChoice === "rock" && compChoice === "scissors") {
        winnerOfRound = "player";
        playerScore++;
    } else if (playerChoice === "rock" && compChoice === "paper") {
        winnerOfRound = "computer";
        compScore++;
    } else if (playerChoice === "paper" && compChoice === "scissors") {
        winnerOfRound = "computer";
        compScore++;
    } else if (playerChoice === "paper" && compChoice === "rock") {
        winnerOfRound = "player";
        playerScore++;
    } else if (playerChoice === "scissors" && compChoice === "rock") {
        winnerOfRound = "computer";
        compScore++;
    } else if (playerChoice === "scissors" && compChoice === "paper") {
        winnerOfRound = "player";
        playerScore++;
    } else {
        winnerOfRound = "No one";
    }
    showResult();
}

//game while loop to determine a winner best out of 5
function game() {
    while (playerScore < 3 && compScore < 3) {
        determineWinner();
        if (playerScore === 3) {
            console.log(`The player wins whole game: ${playerScore} to ${compScore}.`);
        } else if (compScore === 3) {
            console.log(`The computer wins whole game: ${playerScore} to ${compScore}.`);
        }
    }
}

game();