//STEP 1
//let month = prompt("Enter the month (1-12)");
//let year = prompt("Enter the year");
//
//month = parseInt(month);
//year = parseInt(year);
//
//let date = new Date(year, month, 0);
//let daysInMonth = date.getDate();
//
//console.log(`The number of days in month ${month} of the year ${year} is: ${daysInMonth}`);

//STEP 2
//let month = prompt("Enter the month (1-12)");
//let date = new Date(0, month, 0);
//let months = [
//	"January", "February", "March", "April", "May", "June",
//	"July", "August", "September", "October", "November", "December"
//];
//let monthName = months[date.getMonth()];
//
//console.log("The month is: " + monthName);

//STEP 3
//let month = prompt("Enter the month (1-12)") - 1;
//let year = prompt("Enter the year");
//let day = prompt("Enter the day")
//
//let date = new Date(year, month, day);
//let dayOfWeek = date.getDay();
//
//let result = dayOfWeek === 0 || dayOfWeek === 6 ? date.toDateString() + " is a weekend," : date.toDateString() + " is not a weekend.";
//
//console.log(result);

//STEP 4
//let currentDate = new Date();
//let currentDay = currentDate.getDate();
//
//let yesterday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDay - 1);
//console.log("Yesterday was: " + yesterday.toDateString());

//STEP 5
//let currentDate = new Date();
//let currentDay = currentDate.getDay();
//const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
//console.log(weekdays[currentDay - 1]);
