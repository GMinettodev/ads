var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i] <= 0) {
        lines[i] = 1
    }
    console.log(`X[${i}] = ${Number(lines[i])}`)
}
