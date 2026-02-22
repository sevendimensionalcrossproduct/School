let userChoice = parseInt(prompt(`Choose your move:\nEnter "0" for "Rock"\nEnter "1" for "Paper"\nEnter "2" for "Scissors"`));
let computerChoice = Math.floor(Math.random() * 3);

if (userChoice !== 0 && userChoice !== 1 && userChoice !== 2) {
    alert("Invalid input.");
} else {
    if (userChoice === 0) {
        switch(computerChoice){
            case 0: alert("We both chose rock. Tie."); break;
            case 1: alert("You chose rock and I chose paper. You lose."); break;
            case 2: alert("You chose rock and I chose scissors. You win!"); break;
        }
    } else if (userChoice === 1) {
        switch(computerChoice){
            case 0: alert("You chose paper and I chose rock. You win!"); break;
            case 1: alert("We both chose paper. Tie."); break;
            case 2: alert("You chose paper and I chose scissors. You lose."); break;
        }
    } else if (userChoice === 2) {
        switch(computerChoice){
            case 0: alert("You chose scissors and I chose rock. You lose."); break;
            case 1: alert("You chose scissors and I chose paper. You win!"); break;
            case 2: alert("We both chose scissors. Tie."); break;
        }
    }
}
