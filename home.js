let score = {
    player: 0,
    computer: 0,
    ties: 0
};

let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let tiesScore = document.getElementById('tiesScore')

function scoreboard(result){
    if(result == 'player'){
        score.player++ 
    playerScore.textContent = score.player;
    console.log(score)
    }
    if(result == 'computer'){
        score.computer++ 
    computerScore.textContent = score.computer;
    console.log(score)
    }
    if(result == 'ties'){
        score.ties++ 
    tiesScore.textContent = score.ties;
    console.log(score)
    }
}