//STEP 1
function halfNumber(input){
    let result = (parseFloat(input * 0.5))
    console.log("Half of " + parseFloat(input) + " is " + result);
    return result;
}
halfNumber(5);

//STEP 2
function squareNumber(input){
    let result = (parseFloat(input ** 2));
    console.log("The square of " + parseFloat(input) + " is " + result);
    return result;
}
squareNumber(3);

//STEP 3
function percentOf(input, percentage){
    let result = percentage * input / 100;
    console.log(percentage + " percent of " + input + " equals " + result);
    return result;
}
percentOf(4,50);

//STEP 4
function findModulus(numerator, denominator){
    let result = numerator % denominator;
    console.log("The modulus of " + numerator + " and " + denominator + " equals " + result);
    return result;
}
findModulus(10,4);
