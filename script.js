
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
function computerPlay(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
    
}

const choices = ['Rock', 'Paper', 'Scissors'];
/*const results = document.querySelector('.results');*/

function capitalize(str){
    const lower = str.toLowerCase(str);
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

const playerSelection = capitalize(window.prompt('Write Rock, Paper or Scissors!'));

var playerScore = 0;
var computerScore = 0;
var drawScore = 0;

function oneRound(computerSelection, playerSelection) {
    const rock = 'Rock'
    const paper = 'Paper'
    const scissors = 'Scissors'

        if (computerSelection === playerSelection) {
            drawScore++;
        }
        else if (computerSelection === paper && playerSelection === rock){ 
            computerScore++;
        }
        else if (computerSelection === rock && playerSelection === scissors){
            computerScore++;
        }
        else if (computerSelection === scissors && playerSelection === paper){
            computerScore++;
        }
        else{
            playerScore++;
    }
}

function game(){
    if (!(choices.includes(playerSelection))) {
        alert(`Hey! That word is not allowed`);
        location.reload();
        }
    else {
        for (let i = 0; i < 5; i++){
            
            const computerSelection = computerPlay(choices);
            oneRound(computerSelection, playerSelection);
            console.log(playerSelection, computerSelection);
            console.log(playerScore, computerScore, drawScore);
        }

        if (playerScore === computerScore) {
            return `It's a draw. Computer got ${computerScore} points, you got ${playerScore} points and you played ${drawScore} equal games.`
        }
        else if (playerScore < computerScore) {
            return `You lost! Computer got ${computerScore} points, you got ${playerScore} points and you played ${drawScore} equal games.`
        }
        else{
            return `You won! Computer got ${computerScore} points, you got ${playerScore} points and you played ${drawScore} equal games.`
        }

        
}}

console.log(playerSelection)
console.log(game())
/*results.textContent = `${game()}`*/