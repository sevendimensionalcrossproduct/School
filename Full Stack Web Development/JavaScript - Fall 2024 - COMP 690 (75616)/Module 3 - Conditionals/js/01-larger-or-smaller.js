let firstNumber = Number(prompt("Select a number"));
let secondNumber = Number(prompt("Select a second number"));

if (isNaN(firstNumber) || isNaN(secondNumber)){
    document.write(`<p>Please enter two valid numbers.</p>`)
} else if (firstNumber === secondNumber){
    document.write(`<p>Both numbers are equal.</p>`);
} else if (firstNumber > secondNumber){
    document.write(`<p>${firstNumber} is larger.`);
} else {
    document.write(`<p>${secondNumber} is larger.`);
}
