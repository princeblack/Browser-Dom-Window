let nomber = 0;
let player = 0;
let guess = Math.ceil(Math.random()* 10) +1;

while (nomber < 4) {
    if (nomber == 3) {
        alert(`Sorry, you failed to guess the number in three attempts. The number was ${guess}`);
        break;
    }
    let playerGuess = Number(prompt("Guess a number between 1-10"));
    if (playerGuess == guess) {
        alert(`Success, the number was ${guess}! Attempts : ${playerGuess}`);
        break;
    } else if (playerGuess + 1 == guess || playerGuess - 1 == guess ) {
        alert("Oh that was too close ! Try Again");
    }else{
        alert("Wrong!!! Try Again");

    }
    
    nomber += 1;
}