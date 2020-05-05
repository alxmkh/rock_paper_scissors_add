var playerSelection = "";
var computerSelection = "";
var result = "";
var countOfGames = 0;
var userScore = 0;
var computerScore = 0;


function computerPlay() {
    let arrayOfAnswer = ["rock", "scissors", "paper"];
    return arrayOfAnswer[Math.floor(Math.random() * arrayOfAnswer.length)];
}

function reset() {
    countOfGames = 0;
    userScore = 0;
    computerScore = 0;
    outputComputerScore.textContent = 0;
    outputUserScore.textContent = 0;
    outputYourTurn.textContent = '-';
    outputComputerTurn.textContent = '-';
}

function start(param) {

    countOfGames++;
    console.log("Round: " + countOfGames);
    playerSelection = param;
    computerSelection = computerPlay();
    console.log("Player selection: " + playerSelection)
    console.log("Computer selection: " + computerSelection);
    outputYourTurn.textContent = playerSelection;
    outputComputerTurn.textContent = computerSelection;
    playRound(playerSelection, computerSelection)
    
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "scissors" && computerSelection == "scissors") {
        result = "tie";
        console.log("Result: " + result);

    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "playerWon";
        console.log("Result: " + result);

    }

    if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "playerLoose";
        console.log("Result: " + result);

    }

    if (playerSelection == "paper" && computerSelection == "paper") {
        result = "tie";
        console.log("Result: " + result);
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        result = "playerWon";
        console.log("Result: " + result);
    }

    if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "playerLoose";
        console.log("Result: " + result);
    }

    if (playerSelection == "rock" && computerSelection == "rock") {
        result = "tie";
        console.log("Result: " + result);
    }

    if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "playerWon";
        console.log("Result: " + result);
    }

    if (playerSelection == "rock" && computerSelection == "paper") {
        result = "playerLoose";
        console.log("Result: " + result);
    }


    if (result == "playerWon") {
        userScore++;
        outputUserScore.textContent = userScore;
        
    }

    if (result == "playerLoose") {
        computerScore++;
        outputComputerScore.textContent = computerScore
    }

}


resetB.addEventListener('click', reset);

rockButton.addEventListener('click', function(){
    start('rock');
});

scissorsButton.addEventListener('click', function(){
    start('scissors');
});

paperButton.addEventListener('click', function(){
    start('paper');
});

