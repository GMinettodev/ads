var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let n = Number(lines[0]);

if (n % 2 === 0) {
  n++;
}

for (i = 0; i < 6; i++) {
  console.log(n + i * 2);
}
