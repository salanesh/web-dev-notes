let input = "";
const list = ["Hi chirry", "lab u"];
do {
  input = prompt("What should I do?");
  if (input === "new") {
    list.push(prompt("Please input something you wanna add to the list"));
  }
  if (input === "list") {
    console.log("**********");
    for (let i = 0; i < list.length; i++) {
      console.log(`${i}: ${list[i]}`);
    }
    console.log("**********");
  }
  if (input === "delete") {
    const rawIndex = prompt("Please input the element to delete");
    let index = parseInt(rawIndex);
    if (!Number.isNaN) {
      list.splice(index, 1);
      console.log(index);
    } else {
      console.log("Not a number");
    }
  }
} while (input !== "quit" && input !== "q");
