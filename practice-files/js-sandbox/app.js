// const seatPlan = [
//   ["chievo", "joms", "barry"],
//   ["james", "chilloy", "daks"],
//   ["carl", "jerome", "kaius"],
// ];
// for (let i = 0; i < seatPlan.length; i++) {
//   console.log(`Row #${i + 1}`);
//   const row = seatPlan[i];
//   for (let j = 0; j < row.length; j++) {
//     console.log(`Seat #${j + 1}:${row[j]}`);
//   }
// }

//break keyword

// let input = prompt("Say something");
// while (true) {
//   input = prompt(`${input}`);
//   if (input === "stop it") {
//     console.log("Ok you win");
//     break;
//   }
// }

// guessing game

// let maximum = parseInt(prompt("Enter the maximum number"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Give me ur guess :)"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") {
//     break;
//   }
//   if (guess > targetNum) {
//     guess = prompt("Too high, try again :)");
//   } else {
//     guess = prompt("Too low, try again :)");
//   }
// }
// if (guess === "q") {
//   console.log("you quit");
// } else {
//   console.log(`You got it. It took you ${attempts} attempts`);
// }

// for of loop

// const girls = ["chirry", "isha", "dani", "dior", "yoki", "misha", "cia"];

// for (let name of girls) {
//   console.log(name);
// }

// for in loop

// const myClass = {
//   jerome: 80,
//   barry: 97,
//   james: 80,
//   joms: 20,
//   chievo: 70,
//   animas: 23,
//   jax: 29,
// };

// let total = 0;
// let divisor = Object.values(myClass).length;
// for (score in myClass) {
//   total += myClass[score];
// }
// console.log(`The average of the class is: ${total / divisor}`);

// higher order functions
// const rollDie = function () {
//   console.log(Math.floor(Math.random() * 6) + 1);
// };
// function doTwice(func) {
//   func();
//   func();
// }
// const doTenTimes = function (func) {
//   for (let i = 0; i < 10; i++) {
//     func();
//   }
// };
// // doTwice(rollDie);
// doTenTimes(rollDie);

// returning functions from a function
// can be used to make factory functions

// function makeBetween(min, max) {
//   return function (num) {
//     if (num > min && num < max) {
//       return true;
//     } else {
//       return false;
//     }
//   };
// }

// object method creation
// methods are just functions stored inside objects

// const toolBox = {
//   printGirls: function () {
//     const girls = ["Chirry", "Isha", "Yoki", "Dani", "Dior", "Misha", "Cia"];
//     for (names of girls) {
//       console.log(names);
//     }
//   },
//   greet: function (daName) {
//     console.log(`Heyoo! ${daName}, how are you doing?`);
//   },
// };

// this keyword
// the default thing that "this" refers to is always the window otherwise it is the object it is inside of

// const hen = {
//   name: "Helen",
//   eggCount: 0,
//   layAnEgg: function () {
//     this.eggCount++;
//     return "EGG";
//   },
// };

// try catch error handling
// useful for ajax and api's
// it doesnt have to be 'e', the parameter inside the catch

// const yell = function (str) {
//   try {
//     console.log(str.toUpperCase().repeat(3));
//   } catch (erz) {
//     console.log(erz);
//     console.log("U got an error");
//   }
// };

// foreach array method
// accepts a callback and executes callback for each element of array

// const people = [
//   "chirry",
//   "james",
//   "isha",
//   "chievo",
//   "barry",
//   "joms",
//   "pearly",
//   "misha",
//   "dani",
// ];

// people.forEach(function (element) {
//   console.log(element);
// });

//map array method
// what is different from for each is it has to return a copy of the array that has been changed by the callback

// arrow functions
// a shorter way to define functions, all it needs is an arrow thingy after the parameter parenthesis and the parameter parenthesis can be omitted if it only has one parameter
// it has to be stored in a variable to have a name

// const bigPeople = people.map((el) => {
//   return el.toUpperCase();
// });
// console.log(bigPeople);

// implicit returns with arrow functions
// this can only be done in an arrow function, i dont need to use the return keyword
// just remove the curly braces and omit the return keyword and it automatically returns the result of the expression after the arrow

// const rollDie = () => {
//   // arrow function with curly brace needs return keyword
//   return Math.floor(Math.random() * 6) + 1;
// };

// const rollDie = () => Math.floor(Math.random() * 6) + 1;

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const squares = nums.map((el) => el ** 2);
// console.log(squares);

// setTimeout and setInterval
// useful for async javascript
// both accept callbacks and do their shit based on time
// setTimeout works by executing a callback after a set amount of time once
// setInterval does the same but repeats it until clearInterval is called with the id setInterval returns

// const printLove = () => {
//   console.log("I love you :)");
// };

// setTimeout(printLove, 3000);
// let id = setInterval(printLove, 2000);
// clearInterval(id);

// reduce method is an array method
// accepts a reducer function supplied by me
// the reducer function must have a previous and next value as parameters
// the reduce method traverses thru the array with the default previous value as the first element
// it executes the reducer function then passes the returned value as the first parameter until the array is completely traversed

// const nums = [1, 2, 3, 4];
// const addshit = (prev, current) => {
//   return prev + current;
// };
// let result = nums.reduce(addshit);
// console.log(result);

// the 'this' keyword works differently when inside an arrow function instead of a regular one

// const person = {
//   firstname: "Joseph Pio",
//   lastname: "Sala",
//   hobbies: ["self-development", "reading", "journaling", "calisthenics"],
//   printName: function () {
//     console.log(`My name is ${this.firstname} ${this.lastname}`);
//   },
//   printNameArrow: () => {
//     console.log(`My name is ${this.firstname} ${this.lastname}`);
//   },
// };

// default parameters
// the old way was to check if the parameter passed was null or undefined
// now u just put an equals sign and the default to the parameter
// always put the default parameters after the normal parameters that need stuff

// const greet = (name, msg = "Hey there", punc = "!") => {
//   console.log(`${msg} ${name}${punc}`);
// };

//spread operator
// use the spread operator to spread an interable object like an array into multiple parameters for a function
// the spread operator is just a series of dots ... then the variable
// i see it being very useful for sql statements and binding parameters since i use it in php
// ...nums (example)

// const names = [
//   "Joseph",
//   "James",
//   "Barry",
//   "Chievo",
//   "Joms",
//   "Carlos",
//   "Miguel",
//   "Jacks",
//   "Kevin",
//   "Peter",
// ];
// const numbers = [5, 6, 7, 8];
// const sum = (num1, num2, num3, num4) => {
//   return num1 + num2 + num3 + num4;
// };
// console.log(names);
// console.log(...names);
// console.log(sum(...numbers));

// spread can also be used to copy arrays without the problem of getting the memory location of the original array
// const girlies = ["Chirry", "Isha", "Yoki", "Dani", "Dior", "Misha", "Pearly"];
// let girlies2 = [...girlies];
// girlies2.push("Erica");
// console.log(girlies);
// console.log(girlies2);

// can also be used to quickly concatenate arrays
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// spread can also be used on objects like copying one to another without mutating it
// const formData = {
//   first_name: "Joseph Pio",
//   last_name: "Sala",
//   province: "Cebu",
//   gender: "Male",
// };

// const toServer = {
//   ...formData,
//   id: 123,
//   is_admin: false,
// };
// console.log(toServer);

//rest parameters
//I can use the arguments parameter to recieve all the data passed to a function
//it acts like an array and has properties like length but has no methods
//just leave the parameters inside the function definition parenthesis blank
//They cant be used in arrow functions

// function printNames() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// printNames("Joseph", "Barry", "James", "Chievo", "Joms");

//rest operator
//three dots before the parameter name like spread
//unlike spread it is inside the function definition
//puts all data passed into the function as an array
//can be used inside arrow functions

// const names = (...people) => {
//   for (person of people) {
//     console.log(person);
//   }
// };
// names("Joseph", "Barry", "James", "Chievo", "Joms");

//using spread and rest parameters mixed with normal parameters
// const barkada = ["James", "Chievo", "Joms"];
// const whoWinsGold = (first, second, ...people) => {
//   console.log(`The gold medalist is: ${first}`);
//   console.log(`The silver medalist is: ${second}`);
//   console.log(`Fuck off everyone else: ${people}`);
// };
// whoWinsGold("Joseph", "Barry", ...barkada);

// destructuring an array
// it works by wrapping the variables inside [] brackets
// order inside the original array matters when destructuring
// the first variable gets the first element and the second gets the second element and so on
// the cool thing is that i can store the rest of the elements inside another array just by using the spread operator
// super cool

// const wholeBarkada = [
//   "Joseph",
//   "James",
//   "Barry",
//   "Chievo",
//   "Joms",
//   "Jacks",
//   "Animas Kevin",
// ];
// const [gold, silver, ...everyoneElse] = wholeBarkada;
// const congratulations = (first, second, ...all) => {
//   console.log(`Congratulations to ${all} , Thank you for participating`);
//   console.log(
//     `And now for our finalists: Second Place: ${second}, and our first placer! ${first}!`
//   );
// };
// congratulations(gold, silver, everyoneElse);

// destructuring objects
// const user1 = {
//   first_name: "Joseph Pio",
//   middle_name: "Liao",
//   last_name: "Sala",
//   age: 28,
//   occupation: "Unemployed",
//   city: "Cebu",
// };
// const user2 = {
//   first_name: "Dior",
//   last_name: "Guerra",
// };

// destructuring with variable names as property names in object
// unless they are made custom then they have to match
// const { first_name, last_name, age} = user1;

//destructuring with custom variable names instead of property names and a default value if property doesnt exist
// const { first_name: name, last_name: lname, age = 18 } = user2;

// JAVASCRIPT EVENTS
// the on click event works on all elements just when they are clicked it executes a function
// I can pass a callback or an anonymous function
// const congrats = () => {
//   console.log("I love myself, congrats for being good to myself");
// };
// let buttonOne = document.querySelector("#btn1");
// buttonOne.onclick = congrats;

// adding event listeners
// use the addEventListener method to add an event listener to an element
// it has 3 parameters the event, the callback or anonymous function, and options

// function happiness() {
//   console.log(
//     "Im responsible for my wellbeing, the buck stops with me and me alone :)"
//   );
// }
// function responsibility() {
//   console.log(
//     "Being responsible isnt a bad thing, I have the power to choose what direction my life goes"
//   );
// }

// const button = document.querySelector("#btn1");

// //an advantage of using an event listener is that I can execute multiple callbacks on 1 element
// // onclick doesnt work like that
// // button.onclick = happiness;
// // button.onclick = responsibility;

// // here it works
// // the third paramter makes it so that when the event happens once it removes the listener
// button.addEventListener("click", happiness, { once: true });
// button.addEventListener("click", responsibility);

// KEYBOARD AND WINDOW EVENTS
// I also tested if passing a callback works with a parameter, IT DOES :)

// const textInput = document.querySelector("#textInput");
// const printKey = (e) => {
//   console.log(e.type);
// };

// textInput.addEventListener("keydown", printKey);
// textInput.addEventListener("keyup", printKey);

// FORM EVENTS AND PREVENT DEFAULT

// const daForm = document.querySelector("form");
// const textInput = document.querySelector("#textInput");
// const listOfStuff = document.querySelector("#listOfStuff");
// daForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let inputValue = textInput.value;
//   let listItem = document.createElement("li");
//   listItem.innerText = inputValue;
//   listOfStuff.appendChild(listItem);
//   textInput.value = "";
// });

// CALLBACK HELL
// it is when we have to nest callbacks that overpopulate the callstack
// promises are used to allieviate this issue

// example: changing the color of the page every second to a different color using a timer
// it can be observed that adding more colors makes it more fucking nested
// const changeColor = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext();
//   }, delay);
// };
// changeColor("blue", 1000, () => {
//   changeColor("green", 1000, () => {
//     changeColor("red", 1000);
//   });
// });

// PROMISES
// better than just using nested callbacks

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve("Fake data here :)");
//       } else {
//         reject("Request Error!");
//       }
//     }, 1000);
//   });
// };
// fakeRequest("dogs/sex")
//   .then(() => {
//     console.log("Done with request");
//   })
//   .catch((err) => {
//     console.log("Oh no!!!", err);
//   });

// changeColorPromise function creation
const changeColorPromise = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};
// calling the changeColorPromise function
// changeColorPromise("green", 1000)
//   .then(() => {
//     console.log("One success");
//     return changeColorPromise("blue", 1000);
//   })
//   .then(() => {
//     console.log("Two sucess");
//     return changeColorPromise("violet", 2000);
//   })
//   .then(() => {
//     console.log("Three is the charm");
//     return changeColorPromise("yellow", 5000);
//   });

// the async keyword makes it so i dont have to chain "then"
// await keyword is used inside an async function to wait for a promise to fulfill before calling the next function
// using these will make my code shorter and more readable
// use a try catch block to handle rejected promises

const printColors = async () => {
  try {
    await changeColorPromise("green", 1000);
    await changeColorPromise("blue", 1000);
    await changeColorPromise("red", 1000);
    await changeColorPromise("aqua", 1000);
    await changeColorPromise("purple", 1000);
    await changeColorPromise("yellow", 1000);
  } catch (e) {
    console.log("It didnt work");
  }
};
printColors();
