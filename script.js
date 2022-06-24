
/* OLD oneRound()
function oneRound(computerSelection, playerSelection) {
    const rock = 'Rock'
    const paper = 'Paper'
    const scissors = 'Scissors'
    


        if (computerSelection === playerSelection) {
            return `Draw. You played ${computerSelection} and computer played ${playerSelection}`;
        }
        else if (computerSelection === paper && playerSelection === rock){ 
            return `You Lose! Computer played ${computerSelection} and you played ${playerSelection}`;
        }
        else if (computerSelection === rock && playerSelection === scissors){
            return `You Lose! Computer played ${computerSelection} and you played ${playerSelection}`;
        }
        else if (computerSelection === scissors && playerSelection === paper){
            return `You Lose! Computer played ${computerSelection} and you played ${playerSelection}`;
        }
        else{
            return `You won! You played ${playerSelection} and computer played ${computerSelection}`
    }
}
*/

// ---results div---
const results = document.querySelector('#results');
const standings = document.querySelector('#standings');
// ---computer choice generator---
function computerPlay(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
    
}

const choices = ['Rock', 'Paper', 'Scissors'];

// ---buttons---
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', function(e){
    playerSelection = 'Rock';
    game();
})

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', function(e){
    playerSelection = 'Paper';
    game();
})

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', function(e){
    playerSelection = 'Scissors';
    game();
})

const buttons = document.querySelectorAll('button');
// ---functions---
var playerScore = 0;
var computerScore = 0;
var drawScore = 0;

function oneRound(computerSelection, playerSelection) {
    const rock = 'Rock'
    const paper = 'Paper'
    const scissors = 'Scissors'

        if (computerSelection === playerSelection) {
            drawScore++;
            results.textContent = `Draw. You played ${computerSelection} and computer played ${playerSelection}`;
        }
        else if (computerSelection === paper && playerSelection === rock){ 
            computerScore++;
            results.textContent = `You Lose! Computer played ${computerSelection} and you played ${playerSelection}`
        }
        else if (computerSelection === rock && playerSelection === scissors){
            computerScore++;
            results.textContent = `You Lose! Computer played ${computerSelection} and you played ${playerSelection}`
        }
        else if (computerSelection === scissors && playerSelection === paper){
            computerScore++;
            results.textContent = `You Lose! Computer played ${computerSelection} and you played ${playerSelection}`
        }
        else{
            playerScore++;
            results.textContent = `You won! You played ${playerSelection} and computer played ${computerSelection}`
        };
    
        standings.textContent = `Standings: YOU: ${playerScore}, COMP: ${computerScore}, DRAWS: ${drawScore}`;
}

function game(){
    
        const computerSelection = computerPlay(choices);
        oneRound(computerSelection, playerSelection);
        console.log(playerSelection, computerSelection);
        console.log(playerScore, computerScore, drawScore);
        
        if(playerScore + computerScore + drawScore === 5){
            results.textContent = '';
            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                  location.reload();
                });
              });

            if (playerScore === computerScore) {
                standings.textContent = `It's a draw. Computer got ${computerScore} points, you got ${playerScore} points and you played ${drawScore} equal games. Click any button to reload the page!`;
            }
            else if (playerScore < computerScore) {
                standings.textContent = `You lost! Computer got ${computerScore} points, you got ${playerScore} points and you played ${drawScore} equal games. Click any button to reload the page!`
            }
            else{
                standings.textContent = `You won! Computer got ${computerScore} points, you got ${playerScore} points and you played ${drawScore} equal games. Click any button to reload the page!`
            }
        }

        
}

//console.log(game())