let computerPlay = function() {
    const choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection;
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


function addPlayerScore() {
    if (playerScore <= 2) {
        playerScore++;
        playerLabel.innerText = `Player: ${playerScore}`;
        computerLabel.innerText = `Computer: ${computerScore}`;
    }
    if (playerScore === 3) {
        resultText.innerText = `You win! The score was ${playerScore} to ${computerScore}.`;
        choices.style.display = "none";
        btn.innerHTML = "Play again?";
        btn.classList.add("btn");
        choiceContainer.appendChild(btn);
    }
}

function addComputerScore() {
    if (computerScore <= 2) {
        computerScore++;
        playerLabel.innerText = `Player: ${playerScore}`;
        computerLabel.innerText = `Computer: ${computerScore}`;
    }
    if (computerScore === 3) {
        resultText.innerText = `You lose! The score was ${playerScore} to ${computerScore}.`;
        choices.style.display = "none";
        btn.innerHTML = "Play again?";
        btn.classList.add("btn");
        choiceContainer.appendChild(btn);
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        setPlayerWinnerClass();
        addPlayerScore();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        setPlayerWinnerClass();
        addPlayerScore();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        setPlayerWinnerClass();
        addPlayerScore();
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        setComputerWinnerClass();
        addComputerScore();
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        setComputerWinnerClass();
        addComputerScore();
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        setComputerWinnerClass();
        addComputerScore();
    } else {
        resultText.innerText = `Choose your weapon...`;
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
const playerLabel = document.querySelector(".player-label");
const computerLabel = document.querySelector(".computer-label");
const choices = document.querySelector(".choices");
const choiceContainer = document.querySelector(".choice-container");
const btn = document.createElement("button");



let playerScore = 0;
let computerScore = 0;

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

btn.addEventListener("click", function() {
    location.reload();
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