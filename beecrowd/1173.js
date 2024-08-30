var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = [10]
n[0] = Number(lines[0])
console.log(`N[0] = ${Number(n)}`)

for (i = 1; i < 10; i++) {
    n[i] = n[i - 1] * 2;
    console.log(`N[${i}] = ${Number(n[i])}`)
}