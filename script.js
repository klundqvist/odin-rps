function computerPlay(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
    
}

const choices = ['Rock', 'Paper', 'Scissors'];

function capitalize(str){
    const lower = str.toLowerCase(str);
    return str.charAt(0).toUpperCase() + lower.slice(1);
}

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

const computerSelection = computerPlay(choices);
const playerSelection = capitalize('rOck');

console.log(oneRound(computerSelection, playerSelection));