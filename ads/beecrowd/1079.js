var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

for (i = 1; i < Number(lines[0]) + 1; i++) {
  var line = lines[i].split(" ");
  console.log((line[0] * 0.2 + line[1] * 0.3 + line[2] * 0.5).toFixed(1));
}
