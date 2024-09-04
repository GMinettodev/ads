var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

for (let i = 0; i <= lines[0]; i++) {
  i % 2 !== 0 ? console.log(i) : {};
}
