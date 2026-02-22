let coinFlip = Math.round(Math.random());
let choice = parseInt(prompt(`Select "Heads or Tails":\nEnter "0" for "Heads"\nEnter "1" for "Tails"`));

if (choice !== 0 && choice !== 1){
    alert("Invalid input")
} else {
    if(coinFlip === 0){
        if (coinFlip === choice){
            alert("The flip was heads and you chose heads...you win!");
        } else if (coinFlip !== choice){
            alert("The flip was heads but you chose tails...you lose!");
        }
    } else if (coinFlip === 1) {
        if (coinFlip !== choice){
            alert("The flip was tails but you chose heads...you lose!");
        } else if (coinFlip === choice){
            alert("The flip was tails and you chose tails...you win!");
        }
    }
}

