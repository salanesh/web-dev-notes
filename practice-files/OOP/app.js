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
constructColor.prototype.rgba = function (a = 1) {
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
