let computerPlay = function() {
    const choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection;
}

function playRock() {
    playerImage.src = "./images/rock.png";
    let compChoice = computerPlay();
    computerImage.src = `./images/${compChoice}.png`;
    // let playerSelection = "rock";
    // return playerSelection;
}

function playPaper() {
    playerImage.src = "./images/paper.png";
    let compChoice = computerPlay();
    computerImage.src = `./images/${compChoice}.png`;
    // let playerSelection = "paper";
    // return playerSelection;
}

function playScissors() {
    playerImage.src = "./images/scissors.png";
    let compChoice = computerPlay();
    computerImage.src = `./images/${compChoice}.png`;
    // let playerSelection = "scissors";
    // return playerSelection;
}

function setPlayerWinnerClass() {
    if (!playerHand.classList.contains("player-winner")) {
        playerHand.classList.add("player-winner");
    }
    if (computerHand.classList.contains("computer-winner")) {
        computerHand.classList.remove("computer-winner");
    }
}

function setComputerWinnerClass() {
    if (!computerHand.classList.contains("computer-winner")) {
        computerHand.classList.add("computer-winner");
    }
    if (playerHand.classList.contains("player-winner")) {
        playerHand.classList.remove("player-winner");
    }
}

function setTieClass() {
    if (playerHand.classList.contains("player-winner")) {
        playerHand.classList.remove("player-winner");
    }
    if (computerHand.classList.contains("computer-winner")) {
        computerHand.classList.remove("computer-winner");
    }
}


function playRound(playerSelection, computerSelection) {
    let winner;

    if (playerSelection === "rock" && computerSelection === "scissors") {
        winner = "Player";
        resultText.innerText = 'You win! Play again?';
        setPlayerWinnerClass();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        winner = "Player";
        resultText.innerText = 'You win! Play again?';
        setPlayerWinnerClass();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        winner = "Player";
        resultText.innerText = 'You win! Play again?';
        setPlayerWinnerClass();
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        winner = "Computer";
        resultText.innerText = 'You lose! Play again?';
        setComputerWinnerClass();
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        winner = "Computer";
        resultText.innerText = 'You lose! Play again?';
        setComputerWinnerClass();
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        winner = "Computer";
        resultText.innerText = 'You lose! Play again?';
        setComputerWinnerClass();
    } else {
        winner = "No one";
        resultText.innerText = "It's a tie! Play again?";
        setTieClass();
    }

    // return winner;
}


const rockSelector = document.querySelector(".rock");
const paperSelector = document.querySelector(".paper");
const scissorsSelector = document.querySelector(".scissors");
const playerImage = document.querySelector(".player-img");
const computerImage = document.querySelector(".computer-img");
const resultText = document.querySelector(".result-text");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");



rockSelector.addEventListener("click", function(e) {
    let playerSelection = "rock";
    let computerSelection = computerPlay();
    computerImage.src = `./images/${computerSelection}.png`;
    playerImage.src = "./images/rock.png";
    playRound(playerSelection, computerSelection);
});

paperSelector.addEventListener("click", function(e) {
    let playerSelection = "paper";
    let computerSelection = computerPlay();
    computerImage.src = `./images/${computerSelection}.png`;
    playerImage.src = "./images/paper.png";
    playRound(playerSelection, computerSelection);
});

scissorsSelector.addEventListener("click", function(e) {
    let playerSelection = "scissors";
    let computerSelection = computerPlay();
    computerImage.src = `./images/${computerSelection}.png`;
    playerImage.src = "./images/scissors.png";
    playRound(playerSelection, computerSelection);
});



function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;
    let victor;
    while (playerScore != 3 && computerScore != 3) {
        playerSelection = prompt("Choose your weapon...");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        if (playRound(playerSelection, computerSelection) === "Player") {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection) === "Computer") {
            computerScore++;
        }
        console.log(playerScore + " " + computerScore);
    }
    if (playerScore === 3) {
        victor = "Player";
    } else {
        victor = "Computer";
    }
    return victor;
}














// THIS IS THE OLD WAY, WITHOUT RETURNS IN THE FUNCTIONS

// let playerScore = 0
// let compScore = 0
// let playerChoice = ""
// let compChoice = ""
// let choices = ["rock", "paper", "scissors"]
// let winnerOfRound = ""

// function setChoices() {
//     playerChoice = prompt("Choose your weapon...")
//     playerChoice = playerChoice.toLowerCase()
//     compChoice = choices[Math.floor(Math.random() * 3)]
//     console.log(`We have Player 1: ${playerChoice} vs Computer: ${compChoice}`)
// }

// function logWinner() {
//     console.log(`The ${winnerOfRound} wins. The score is ${playerScore} to ${compScore}.`)
// }


// function showResult() {
//     if (winnerOfRound != "player" && winnerOfRound != "computer") {
//         console.log(`It's a tie. The score is ${playerScore} to ${compScore}.`)
//     } else {
//         logWinner();
//     }
// }


// //determine winnerOfRound with simple if-then

// function determineWinner() {
//     setChoices();
//     if (playerChoice === "rock" && compChoice === "scissors") {
//         winnerOfRound = "player";
//         playerScore++;
//     } else if (playerChoice === "rock" && compChoice === "paper") {
//         winnerOfRound = "computer";
//         compScore++;
//     } else if (playerChoice === "paper" && compChoice === "scissors") {
//         winnerOfRound = "computer";
//         compScore++;
//     } else if (playerChoice === "paper" && compChoice === "rock") {
//         winnerOfRound = "player";
//         playerScore++;
//     } else if (playerChoice === "scissors" && compChoice === "rock") {
//         winnerOfRound = "computer";
//         compScore++;
//     } else if (playerChoice === "scissors" && compChoice === "paper") {
//         winnerOfRound = "player";
//         playerScore++;
//     } else {
//         winnerOfRound = "No one";
//     }
//     showResult();
// }

// //game while loop to determine a winner best out of 5
// function game() {
//     while (playerScore < 3 && compScore < 3) {
//         determineWinner();
//         if (playerScore === 3) {
//             console.log(`The player wins whole game: ${playerScore} to ${compScore}.`);
//         } else if (compScore === 3) {
//             console.log(`The computer wins whole game: ${playerScore} to ${compScore}.`);
//         }
//     }
// }

// game();