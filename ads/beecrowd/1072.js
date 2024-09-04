var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let n = lines[0],
  x = [],
  inc = 0,
  outc = 0;

for (i = 0; i < n; i++) {
  x[i] = Number(lines[i + 1]);
}

for (i = 0; i < x.length; i++) {
  if (x[i] >= 10 && x[i] <= 20) {
    inc++;
  } else {
    outc++;
  }
}

console.log(`${inc} in\n${outc} out`);
