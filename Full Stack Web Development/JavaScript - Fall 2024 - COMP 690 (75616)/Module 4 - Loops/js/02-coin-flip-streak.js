let coinFlip;
do {
    flip = Math.round(Math.random());
        if (flip === 0){
        console.log("Heads");
    } else if (flip === 1) {
        console.log("Tails");
    }
} while (flip !== 1)
