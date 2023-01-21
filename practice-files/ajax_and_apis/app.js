const starwarsButton = document.querySelector("#starwarsButton");
const dadJokeButton = document.querySelector("#dadJokeButton");
const dadJokeArea = document.querySelector("#dadJokeArea");

starwarsButton.addEventListener("click", () => {
  let starwarsID = Number(document.querySelector("#starwarsID").value);
  getStarWarsData(starwarsID);
});
dadJokeButton.addEventListener("click", () => {
  getDadJoke();
});
// USING FETCH METHOD
// fetch(`https://swapi.dev/api/planets/1`)
//   .then((res) => {
//     console.log("RESOLVED", res);
//     // res.json().then((data) => {
//     //   console.log("JSON DONE", data);
//     // });
//     // ALTERNATE WAY
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("ERROR", e);
//   });

// USING ASYNC FETCH
// const getStarWarsData = async (id) => {
//   try {
//     const result = await fetch(`https://swapi.dev/api/planets/${id}`);
//     const data = await result.json();
//     console.log(data);
//     const result2 = await fetch(`https://swapi.dev/api/planets/${id + 1}`);
//     const data2 = await result2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("Error", e);
//   }
// };

// USING AXIOS LIBRARY
// I DONT HAVE TO GET THE JSON BY USING THE .json method and awaiting that
const getStarWarsData = async (id) => {
  try {
    const result = await axios.get(`https://swapi.dev/api/planets/${id}`);
    console.log(result.data);
  } catch (e) {
    console.log("Error", e);
  }
};

// GETTING HEADERS USING AXIOS
const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const dadResult = await axios.get("https://icanhazdadjoke.com/", config);
  dadJokeArea.innerText = dadResult.data.joke;
  console.log(dadResult);
};
