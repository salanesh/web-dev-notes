const express = require("express");
const app = express();
// console.dir(app);
// app.use((req, response) => {
//   console.log("NEW REQUEST");
//   response.send("Wakata");
// });
app.get("/", (req, res) => {
  res.send("<h1>THIS IS THE HOME PAGE!</h1>");
});
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
});
app.get("/r/:subreddit/:postID", (req, res) => {
  const { subreddit, postID } = req.params;
  res.send(
    `<h1>Browsing the ${subreddit} subreddit with a post ID of: ${postID}</h1>`
  );
});
app.get("/cats", (req, res) => {
  res.send("MEOW FROM BROWSER");
  console.log("MEOW");
});
app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO /cats!!!");
});
app.get("/dogs", (req, res) => {
  res.send("WOOF FROM BROWSER");
  console.log("WOOF");
});
app.get("*", (req, res) => {
  res.send("I dont know that path");
});
app.listen(8080, () => {
  console.log("Listening on port 8080");
});
