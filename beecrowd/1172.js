var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

for (i = 0; i < 10; i++) {
    lines[i] > 0 ? console.log(`X[${i}] = ${lines[i]}`) : console.log(`X[${i}] = 1`);
}