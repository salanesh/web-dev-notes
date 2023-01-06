// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector("#container");
const baseLink =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const pokemonDiv = document.createElement("div");
  pokemonDiv.classList.add("pokemon-div");
  const pokeNum = document.createElement("span");
  pokeNum.innerText = `# ${i}`;
  const image = document.createElement("img");
  image.setAttribute("src", `${baseLink}${i}.png`);

  pokemonDiv.appendChild(image);
  pokemonDiv.appendChild(pokeNum);
  container.appendChild(pokemonDiv);
}
