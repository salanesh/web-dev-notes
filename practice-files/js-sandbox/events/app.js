const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");
const listElements = document.querySelectorAll("li");
const unorderedList = document.querySelector("ul");

tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   SELECTING USING querySelector
  //   const username = document.querySelector("#username");
  //   const tweet = document.querySelector("#tweet");

  // SELECTING USING THE ELEMENT FORM PROPERTY
  //   The property after the elements property is the id

  const username = tweetForm.elements.username;
  const tweet = tweetForm.elements.tweet;
  addTweet(username, tweet);
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");

  bTag.append(`${username.value}`);
  newTweet.append(bTag);
  newTweet.append(` - ${tweet.value}`);
  tweetsContainer.appendChild(newTweet);

  tweetForm.elements.username.value = "";
  tweetForm.elements.tweet.value = "";
};

// EVENT BUBBLING
// events that trigger from interacting from parent elements will also trigger when the child element gets interacted.
// example would be a click event triggered on a child element would also trigger the even of the parent

// const clickedParent = () => {
//   console.log("Parent clicked :)");
// };
// const clickedChild = () => {
//   console.log("Child clicked :)");
// };

// unorderedList.addEventListener("click", clickedParent);
// for (el of listElements) {
//   el.addEventListener("click", clickedChild);
// }
//as can be seen, both event listeners get triggered.

// EVENT DELEGATION
// it is when I stop the event from bubbling when a child element is interacted with
// it is also when I add an event listener to a parent element to trigger an event on a child element interaction
// const clickedParent = (e) => {
//   if (e.target.nodeName === "LI") {
//     console.log("list item clicked");
//   } else {
//     console.log(e.target.nodeName);
//   }
// };
// unorderedList.addEventListener("click", clickedParent);
