var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

lines.forEach((num, index) => {
  if (index === 0 || index >= Number(lines[0]) + 1) {
    return;
  }
  let number = Number(num);
  let category;
  if (number === 0) {
    category = "NULL";
  } else {
    switch (true) {
      case Number(number) % 2 === 0 && Number(number) > 0:
        category = "EVEN POSITIVE";
        break;
      case Number(number) % 2 === 0 && Number(number) < 0:
        category = "EVEN NEGATIVE";
        break;
      case Number(number) % 2 !== 0 && Number(number) > 0:
        category = "ODD POSITIVE";
        break;
      case Number(number) % 2 !== 0 && Number(number) < 0:
        category = "ODD NEGATIVE";
        break;
    }
  }
  console.log(category);
});
