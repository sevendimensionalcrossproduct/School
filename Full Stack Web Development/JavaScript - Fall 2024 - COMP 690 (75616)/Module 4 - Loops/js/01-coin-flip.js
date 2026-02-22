let coinFlip;
let times = parseInt(prompt("How many times?"));
for (i = 0; i <= times; i++){
    flip = Math.round(Math.random());
    if (flip === 0){
        console.log("Heads");
    } else if (flip === 1) {
        console.log("Tails");
    }
}
