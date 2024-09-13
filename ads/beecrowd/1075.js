var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

for (i = 1; i <= 10000; i++) {
  if (i % Number(lines[0]) === 2) {
    console.log(i);
  }
}
