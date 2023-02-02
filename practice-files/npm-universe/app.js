// REQUIRING A SINGLE FILE

// const math = require("./math");
// console.log(math.pi);
// console.log(math.square(9));

// REQUIRING AN ENTIRE DIRECTORY
// NEED TO HAVE AN INDEX.JS FILE INSIDE THE DIRECTORY

const dogs = require("./shelter");
console.log(dogs.allDogs[0]);
