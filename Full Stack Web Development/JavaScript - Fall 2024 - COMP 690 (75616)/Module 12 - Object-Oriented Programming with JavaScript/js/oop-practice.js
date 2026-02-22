//// STEP 1
//class Cat {
//  constructor(name, breed) {
//    this.name = name;
//    this.breed = breed;
//  }
//}
//
//const Dog = class {
//  constructor(name, breed) {
//    this.name = name;
//    this.color = color;
//  }
//};
//// STEP 2
//let myCat = new Cat("Kitty", "Calico");
//
//let myDog = new Dog("Mina", "Texas Heeler");
//
//// STEP 3
//class Animal {
//  constructor() {
//    this.create();
//  }
//
//  create() {
//    console.log("The Animal has been created");
//  }
//// STEP 4
//class Animal {
//  constructor(message) {
//    this.create(message);
//  }
//
//  create(message) {
//    console.log(message);
//  }
//}
//// STEP 5
//class Animal {
//  constructor(type, breed, color, height, length) {
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//  }
//}
//// STEP 6
//function displayAnimalProperties(animal) {
//  for (let property in animal) {
//    console.log(`${property}: ${animal[property]}`);
//  }
//}
//// STEP 7
//class Animal {
//  constructor(type, breed, color, height, length) {
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//  }
//
//  speak() {
//    if (this.type === "dog") {
//      console.log(`The ${this.color} dog is barking!`);
//    } else if (this.type === "cat") {
//      console.log(`The ${this.color} cat is meowing!`);
//    } else {
//      console.log("Unknown animal sound.");
//    }
//  }
//}
//
//let myDog = new Animal("dog", "brown", "brown", 24, 60);
//myDog.speak();
//
//let myCat = new Animal("cat", "black", "black", 9, 20);
//myCat.speak();
//// STEP 8
//class Animal {
//  #type;
//  #breed;
//  #color;
//  #height;
//  #length;
//
//  constructor(type, breed, color, height, length) {
//    this.#type = type;
//    this.#breed = breed;
//    this.#color = color;
//    this.#height = height;
//    this.#length = length;
//  }
//
//  #checkType() {
//    return this.#type === "dog" ? "dog" : "cat";
//  }
//
//  speak() {
//    const animalType = this.#checkType();
//    console.log(`The ${animalType} has made a noise!`);
//  }
//}
//
//let myDog = new Animal("dog", "Labrador", "brown", 24, 60);
//myDog.speak();
//
//let myCat = new Animal("cat", "Siamese", "white", 9, 20);
//myCat.speak(); 
//
//// STEP 9
//String.prototype.findWords = function(word) {
//  const regex = new RegExp(`\\b${word}\\b`, 'gi');
//  const matches = this.match(regex);
//  const count = matches ? matches.length : 0;
//
//  alert(`The word "${word}" was found ${count} times in the paragraph.`);
//};
