//STEP 1
//function sortAlphabetically(string){
//	return string.split('').sort().join('');
//}
//
//str = prompt("Enter a string");
//alert("This is the string sorted alphabetically: " + sortAlphabetically(str));

//STEP 2
//function capitalize(string) {
//	return string
//	.split(' ')
//	.map(word =>
//	word.charAt(0).toUpperCase() + word.slice(1)
//	)
//	.join(' ');
//}
//
//str = prompt("Enter a phrase in lowercase");
//alert("The capitalized phrase is: " + capitalize(str));

//STEP 3
//function countVowels(str) {
//	const vowels = 'aeiouAEIOU';
//	let count = 0;
//
//	for (let i = 0; i < str.length; i++) {
//    		if (vowels.includes(str[i])) {
//      			count++;
//    		}
//  	}
//
//	return count;
//}

//STEP 4
//function generateRandomId(length) {
//  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//  let result = '';
//
//  for (let i = 0; i < length; i++) {
//    const randomIndex = Math.floor(Math.random() * characters.length);
//    result += characters.charAt(randomIndex);
//  }
//
//  return result;
//}
//
//let length = prompt("Select ID length");
//console.log("ID Generated: " + generateRandomId(length))

//STEP 5
//function longestCountry(countries) {
//	let longestName = countries[0];
//
//	for (let i = 1; i < countries.length; i++) {
//		if (countries[i].length > longestName.length) {
//			longestName = countries[i];
//		}
//	}
//
//  	return longestName;
//}
//
//let countries = ["Japan", "The United Kingdom of Great Britain and Northern Ireland", "United Mexican States"];
//let result = longestCountry(countries);
//console.log(result);
