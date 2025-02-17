//Create Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

let age = person.age;
console.log(person.firstName + " is " + person.age + " years old.");

let age2 = person["age"];
console.log(person["firstName"] + " is " + person["age"] + " years old.");

let x = "firstName";
let y = "age";
console.log(person[x] + " is " + person[y] + " years old.");

// Adding property to the object
person.nationality = "English";
console.log(person);

// Removing property from the object
delete person.age;
console.log(person);
