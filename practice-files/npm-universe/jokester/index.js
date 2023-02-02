const giveMeAJoke = require("give-me-a-joke");
const colors = require("colors");

giveMeAJoke.getRandomDadJoke((joke) => console.log(joke.rainbow));
