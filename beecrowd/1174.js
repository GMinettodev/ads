var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (i = 0; i < 100; i++) {
    lines[i] <= 10 ? console.log(`A[${i}] = ${Number(lines[i]).toFixed(1)}`) : {};
}