import { franc, francAll } from "franc";
import pkg from "langs";
import pkg2 from "colors";
const lang = pkg;
const colors = pkg2;
try {
  const francVal = franc(process.argv[2]);
  console.log(lang.where("3", francVal).name.green);
} catch (e) {
  console.log("Language not recognized".red);
}
