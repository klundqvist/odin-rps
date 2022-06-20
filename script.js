

function computerPlay(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
    
}

const choices = ['Rock', 'Paper', 'Scissors'];
const result = computerPlay(choices);
console.log(`computer plays ${result}`);


