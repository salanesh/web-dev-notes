const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = searchForm.elements.query.value;
  const config = { params: { q: searchTerm } };
  const result = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImages(result.data);
});
const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image.medium) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
