var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var line = lines[1].split(" ");
let array_length = Number(lines[0]).length;
let array = [];
let menor = line[0];
let pos = 0;

for (i = 0; i < array_length; i++) {
  if (Number(line[i]) < menor) {
    menor = Number(line[i]);
    pos = i;
  }
}

console.log("Menor valor:", menor);
console.log("Posicao:", pos);
