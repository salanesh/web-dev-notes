const fs = require("node:fs");
const folderName = process.argv[2] || "project";
const data = "empty";
// console.log(fs);
// ASYNC VERSION
// fs.mkdir("Dogs", { recursive: true }, (err) => {
//   console.log("In the callback");
// });
// console.log("Im after creating the folder");
// SYNC VERSION
try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, data);
  fs.writeFileSync(`${folderName}/app.css`, data);
  fs.writeFileSync(`${folderName}/app.js`, data);
} catch (e) {
  console.log(e);
}
