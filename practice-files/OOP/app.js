// PROTOTYPES AND ACCESSING THEM
//test them out using the console
//make a string variable and then access the new method created for it
//everything that isnt a primitive in javascript is an object so they all have a prototype inside them
//the prototypes contain built in methods and properties

String.prototype.yell = function () {
  return `${this.toUpperCase()}!!!!`;
};
// FACTORY FUNCTIONS
// They are functions that create and return an object

function makeColor(r, g, b) {
  // CREATE AN EMPTY OBJECT
  const color = {};
  // STORE THE R,G,B PARAMETERS INSIDE THE OBJECT
  color.r = r;
  color.g = g;
  color.b = b;
  // MAKE A METHOD THAT RETURNS A STRING TEMPLATE LITERAL OF THE RGB
  // STRING CAN BE USED FOR DOING SOME COLOR MANIPULATION IN THE DOM
  // document.body.style.backgroundColor = whatever is returned from color.rgb()
  color.rgb = function () {
    // DESTRUCTURING THE color OBJECT into indiviudal r,g,b variables
    const { r, g, b } = this;
    // RETURNING THE STRING TEMPLATE LITERAL FOR USE
    return `rgb(${r},${g},${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  };
  // DONT FORGET TO RETURN THE COLOR OBJECT
  return color;
}
// USING THE FACTORY FUNCTION TO RETURN AN OBJECT
const firstColor = makeColor(255, 10, 150);

// CONSTRUCTOR FUNCTIONS
// A DOWNSIDE FOR FACTORY FUNCTIONS IS THAT THEY CREATE AND RETURN METHODS EVERYTIME THE FACTORY FUNCTION IS CALLED
// CONSTRUCTOR FUNCTIONS DONT EXHIBIT THIS BEHAVIOR, THEY INSTEAD APPEND THE METHODS INTO THE PROTOTYPE OF THE OBJECT
// SO IT DOES NOT HAVE TO RETURN THE METHOD

const constructColor = function (r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  // NOTE THAT THERE IS NO RETURNING INSIDE THE FUNCTION, IT IS DONE IMPLICITLY
  // NOTE THAT THE METHODS ARE DEFINED OUTSIDE OF THE FUNCTION
};

constructColor.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};
constructColor.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
};
// MAKING A METHOD THAT REQUIRES A PARAMETER NOT INCLUDED WITH THE CONSTRUCTION FUNCTION
// IT ALSO HAS A DEFAULT VALUE OF 1
constructColor.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r},${g},${b},${a})`;
};
// TRYING A METHOD THAT CHANGES THE SCREEN COLOR BASED ON RETURN VALUES FROM THE OTHER METHODS
constructColor.prototype.printIt = function () {
  document.body.style.backgroundColor = this.rgb();
};

// WHEN MAKING AN OBJECT WITH A CONSTRUCTION FUNCTION USE THE "new" KEYWORD
const secondColor = new constructColor(123, 45, 67);
const thirdColor = new constructColor(255, 120, 93);

// CLASSES
// CLASSES DO THE SAME THING AS CONSTRUCTOR FUNCTIONS BUT ARE MORE CONVENIENT SYNTACTICALLY
// THE METHODS INSIDE THE PROTOTYPE DOES NOT HAVE TO BE CREATED OUTSIDE THE CLASS, SO IT IS CLEANER
// THE "class" keyword needs to be used to declare a class
// THE "constructor" keyword needs to be used inside of the class to create and run the constructor function

class truColor {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  rgb() {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  }
  rgba(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r},${g},${b},${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }
  printIt(x) {
    document.body.style.backgroundColor = this.rgba(x);
  }
}

const fourthColor = new truColor(55, 200, 123);
const fifthColor = new truColor(255, 10, 10);

// EXTENDING A CLASS AND THE SUPER KEYWORD
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    const { name } = this;
    console.log(`${name} is eating. om nom nom :)`);
  }
}

class Dog extends Pet {
  bark() {
    const { name } = this;
    console.log(`${name} says WOOF! WOOF! WOOF!`);
  }
}

class Cat extends Pet {
  constructor(name, age, lives = 9) {
    super(name, age);
    this.lives = lives;
  }
  meow() {
    const { name } = this;
    console.log(`${name} is going meow :X`);
  }
}

const scooby = new Dog("Scooby", 8);
const dani = new Cat("Yriwpoqjwwbj", 15);
