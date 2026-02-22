// ADD A FUNCTION CALLED CALCULATE
function calculate(){
    let x, y, operation;
    // COLLECT FIRST NUMBER FROM USER
    do {
        x = parseFloat(prompt("Enter first number:"));
        if (isNaN(x) === true) {
            alert("Invalid first input.")
        }
    } while (isNaN(x));

    // COLLECT SECOND NUMBER FROM USER
    do {
        y = parseFloat(prompt("Enter second number:"));
        if (isNaN(y) === true) {
            alert("Invalid second input.")
        }
    } while (isNaN(y));

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = parseInt(prompt(`Enter operation to perform:\n1: Add\n2: Substract\n3: Multiply\n4: Divide`))
    do {
        if (operation < 1 || operation > 4) {
            alert("Invalid operation.")
        }
    } while (operation < 1 || operation > 4);

    switch(operation) {
        case 1: alert(x + " + " + y + " = " + (x + y)); break;
        case 2: alert(x + " - " + y + " = " + (x - y)); break;
        case 3: alert(x + " * " + y + " = " + (x * y)); break;
        case 4: y === 0 ? alert("Domain error") : alert(x + " / " + y + " = " + (x / y)); break;
    }
}

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
calculate();
