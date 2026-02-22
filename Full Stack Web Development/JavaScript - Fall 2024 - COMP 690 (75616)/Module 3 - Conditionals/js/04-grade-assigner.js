let grade = Number(prompt("Enter your grade:"));

if (grade > 100 || grade < 1){
    console.log("Invalid grade. Please enter a number in the correct range (1-100)");
} else {
    if (grade < 60) {
        console.log("You received an F");
    } else if (grade >= 60 && grade < 70) {
        console.log("You received a D");
    } else if (grade >= 70 && grade < 80){
        console.log("You received a C");
    } else if (grade >= 80 && grade < 90){
        console.log("You received a B");
    } else if (grade >= 90 && grade <= 100) {
        console.log("You received an A");
    }
}

