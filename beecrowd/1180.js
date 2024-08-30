var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var line = lines[1].split(" ");
let array_size = Number(lines[0]);
let array = [];
let menor = line[0];
let pos = 0;
for (i = 0; i < array_size; i++) {
  array[i] = Number(line[i]);
  if (array[i] < menor) {
    menor = array[i];
    pos = i;
  }
}

console.log("Menor valor:", menor)
console.log("Posicao:", pos);