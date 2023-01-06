const colorChanger = () => {
  //   need to generate 3 random numbers from 0 to 255
  const randNums = [];
  for (let i = 0; i < 3; i++) {
    randNums.push(Math.floor(Math.random() * 256));
  }
  const body = document.querySelector("body");
  const colorDisplayer = document.querySelector("#colorDisplayer");
  const colors = `rgb(${randNums.join(",")})`;
  colorDisplayer.innerText = colors;
  body.style.backgroundColor = colors;
};
const changeColorBtn = document.querySelector("#changeColorBtn");
changeColorBtn.addEventListener("click", colorChanger);
