var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let counter = 0;
let sum = 0;

for (let i = 0; i < 6; i++) {
  lines[i] > 0 ? (counter++, (sum += Number(lines[i]))) : {};
}

console.log(`${counter} valores positivos\n${Number(sum / counter).toFixed(1)}`);
