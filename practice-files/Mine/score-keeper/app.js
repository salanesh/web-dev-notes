const maxScoreElement = document.querySelector("#maxScore");
const optionList = document.querySelectorAll("option");
let maximumScore = maxScoreElement.value;
const playerOneButton = document.querySelector("#playerOne");
const playerTwoButton = document.querySelector("#playerTwo");
const resetButton = document.querySelector("#resetButton");
const scoreOneElement = document.querySelector("#scoreOne");
const scoreTwoElement = document.querySelector("#scoreTwo");
let scoreOne = 0;
let scoreTwo = 0;

maxScoreElement.addEventListener("change", function (e) {
  maximumScore = e.target.value;
  //   console.log(maximumScore);
  reset();
});

playerOneButton.addEventListener("click", (e) => {
  scoreOne = parseInt(scoreOneElement.innerText) + 1;
  scoreOneElement.innerText = scoreOne;
  if (scoreOne >= maximumScore) {
    console.log("Max score reached for player 1");
    playerOneButton.setAttribute("disabled", true);
    playerTwoButton.setAttribute("disabled", true);
    scoreOneElement.classList.add("winner");
    scoreTwoElement.classList.add("loser");
  }
});

playerTwoButton.addEventListener("click", (e) => {
  scoreTwo = parseInt(scoreTwoElement.innerText) + 1;
  scoreTwoElement.innerText = scoreTwo;
  if (scoreTwo >= maximumScore) {
    console.log("Max score reached for player 2");
    playerOneButton.setAttribute("disabled", true);
    playerTwoButton.setAttribute("disabled", true);
    scoreTwoElement.classList.add("winner");
    scoreOneElement.classList.add("loser");
  }
});

resetButton.addEventListener("click", reset);

function reset() {
  playerOneButton.removeAttribute("disabled");
  playerTwoButton.removeAttribute("disabled");
  scoreOneElement.innerText = 0;
  scoreTwoElement.innerText = 0;
  scoreOneElement.classList.remove("winner", "loser");
  scoreTwoElement.classList.remove("winner", "loser");
}
