//1
//let movies = [];
//movies[0] = 'Kill Bill Vol 2';
//movies[1] = 'The Counterfeiters';
//movies[2] = 'One Stormy Night';
//movies[3] = 'Charlie and the Chocolate Factory';
//movies[4] = 'Idiocracy';
//
//console.log(moviesA[1]);

//2
//let movies = new Array(5);
//movies[0] = 'Kill Bill Vol 2';
//movies[1] = 'The Counterfeiters';
//movies[2] = 'One Stormy Night';
//movies[3] = 'Charlie and the Chocolate Factory';
//movies[4] = 'Idiocracy';

//console.log(movies[0]);

//3
//let movies = new Array(5);
//movies[0] = 'Kill Bill Vol 2';
//movies[1] = 'The Counterfeiters';
//movies[2] = 'One Stormy Night';
//movies[3] = 'Charlie and the Chocolate Factory';
//movies[4] = 'Idiocracy';
//movies.splice(2,0, 'Spongebob Squarepants: The Movie');

//4
//let movies = ['Kill Bill Vol 2', 'The Counterfeiters', 'One Stormy Night', 'Charlie and the Chocolate Factory', 'Idiocracy'];
//delete movies[0];
//console.table(movies);

//5
//let movies = [
//    'Kill Bill Vol 2', 
//    'The Counterfeiters', 
//    'One Stormy Night', 
//    'Charlie and the Chocolate Factory', 
//    'Idiocracy',
//    'Spongebob Squarepants: The Movie',
//    'Star Wars: Episode III - Revenge of the Sith'
//];

//for(const movie in movies){
//    console.log(movies[movie]);
//}

//6 
//let movies = [
//    'Kill Bill Vol 2', 
//    'The Counterfeiters', 
//    'One Stormy Night', 
//    'Charlie and the Chocolate Factory', 
//    'Idiocracy',
//    'Spongebob Squarepants: The Movie',
//    'Star Wars: Episode III - Revenge of the Sith'
//];

//for(const movie of movies){
//    console.log(movie);
//}

//7
//let movies = [
//    'Kill Bill Vol 2', 
//    'The Counterfeiters', 
//    'One Stormy Night', 
//    'Charlie and the Chocolate Factory', 
//    'Idiocracy',
//    'Spongebob Squarepants: The Movie',
//    'Star Wars: Episode III - Revenge of the Sith'
//];
//
//for(const movie of movies.sort()){
//    console.log(movie);
//}

//8
//let favMovies = [
//    'Kill Bill Vol 2', 
//    'The Counterfeiters', 
//    'One Stormy Night', 
//    'Charlie and the Chocolate Factory', 
//    'Idiocracy',
//    'Spongebob Squarepants: The Movie',
//    'Star Wars: Episode III - Revenge of the Sith'
//];
//
//let leastFavMovies = [
//    'A Serbian Film',
//    'Star Wars: The Last Jedi',
//    'Cocaine Bear'
//]
//
//console.log(`Movies I like:\n`);
//for(const movie of favMovies){
//    console.log(movie);
//}
//
//console.log(`\nMovies I regret watching:\n`);
//for(const movie of leastFavMovies){
//    console.log(movie);
//}

//9
//let favMovies = [
//    'Kill Bill Vol 2', 
//    'The Counterfeiters', 
//    'One Stormy Night', 
//    'Charlie and the Chocolate Factory', 
//    'Idiocracy',
//    'Spongebob Squarepants: The Movie',
//    'Star Wars: Episode III - Revenge of the Sith'
//];
//
//let leastFavMovies = [
//    'A Serbian Film',
//    'Star Wars: The Last Jedi',
//    'Cocaine Bear'
//]
//
//let movies = favMovies.concat(leastFavMovies);
//console.table(movies.sort().reverse());

//10
//let favMovies = [
//    'Kill Bill Vol 2', 
//    'The Counterfeiters', 
//    'One Stormy Night', 
//    'Charlie and the Chocolate Factory', 
//    'Idiocracy',
//    'Spongebob Squarepants: The Movie',
//    'Star Wars: Episode III - Revenge of the Sith'
//];
//
//let leastFavMovies = [
//    'A Serbian Film',
//    'Star Wars: The Last Jedi',
//    'Cocaine Bear'
//]
//
//let movies = favMovies.concat(leastFavMovies);
//
//console.log(leastFavMovies.sort().reverse().pop());

//11
//let favMovies = [
//    'Kill Bill Vol 2', 
//    'The Counterfeiters', 
//    'One Stormy Night', 
//    'Charlie and the Chocolate Factory', 
//    'Idiocracy',
//    'Spongebob Squarepants: The Movie',
//    'Star Wars: Episode III - Revenge of the Sith'
//];
//
//let leastFavMovies = [
//    'A Serbian Film',
//    'Star Wars: The Last Jedi',
//    'Cocaine Bear'
//]
//
//let movies = favMovies.concat(leastFavMovies);
//
//console.log(movies.sort().reverse().shift());

//12
//let favMovies = [
//    'Kill Bill Vol 2', 
//    'The Counterfeiters', 
//    'One Stormy Night', 
//    'Charlie and the Chocolate Factory', 
//    'Idiocracy',
//    'Spongebob Squarepants: The Movie',
//    'Star Wars: Episode III - Revenge of the Sith'
//];
//
//let leastFavMovies = [
//    'A Serbian Film',
//    'Star Wars: The Last Jedi',
//    'Cocaine Bear'
//];
//
//let movies = favMovies.concat(leastFavMovies);
//
//let likedMovies = [
//    'Oppenheimer',
//    'The Fellowship of The Ring',
//    'Good Will Hunting'
//];
//
//for(let i = favMovies.length; i <= movies.length - 1; i++){
//        movies[i] = likedMovies[i - favMovies.length];
//};
//
//console.table(movies);

//13
//let movies = [
//    ["Kill Bill Vol 2", 1], 
//    ["The Counterfeiters", 2], 
//    ["One Stormy Night", 3], 
//    ["Charlie and the Chocolate Factory", 4], 
//    ["Idiocracy", 5]
//];
//let movieTitles = movies.filter(movie => typeof movie[0] === 'string').map(movie => movie[0]);
//console.log(movieTitles);

//14
//let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
//
//(function(employeeArray) {
//    console.log("Employees:");
//    employeeArray.forEach(employee => {
//        console.log(employee);
//    });
//})(employees);

//15
//function filterValues(arr) {
//    return arr.filter(value => value !== false && value !== null && value !== 0 && value !== '');
//}
//
//console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//16
//function getRandomItem(arr) {
//    const randomIndex = Math.floor(Math.random() * arr.length);
//    return arr[randomIndex];
//}
//
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
//console.log(getRandomItem(numbers));
//

//17
//function getLargestNumber(arr) {
//    return arr.sort((a, b) => a - b).reverse()[0];
//}
//
//const numbers = [1, 5, 3, 9, 2, 81];
//
//console.log(getLargestNumber(numbers));
