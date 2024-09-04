var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let maior,
  menor,
  soma = 0;

if (Number(lines[0]) > Number(lines[1])) {
  maior = Number(lines[0]);
  menor = Number(lines[1]);
} else {
  maior = Number(lines[1]);
  menor = Number(lines[0]);
}

for (i = menor + 1; i < maior; i++) {
  if (i % 2 !== 0) {
    soma += i;
  }
}

console.log(soma)