let playerScore = 0;
let cpuScore = 0;

function play(userChoice) {
    const choice = ["rock", "paper", "scissors"];
    const cpuChoice = choice[Math.floor(Math.random() * choice.length)];

    let result = "";

    if (userChoice === cpuChoice) {
        result = "Tie";
    } else if (
        (userChoice === "rock" && cpuChoice === "scissors") ||
        (userChoice === "paper" && cpuChoice === "rock") ||
        (userChoice === "scissors" && cpuChoice === "paper")
    ) {
        result = `You win! CPU chose ${cpuChoice}`;
        playerScore++;
    } else {
        result = `You lose, CPU chose ${cpuChoice}`;
        cpuScore++;
    }

    document.getElementById("result").textContent = result;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = cpuScore;
}



