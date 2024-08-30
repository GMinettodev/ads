var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (i = 0; i < 20; i++) {
    if (i < 10) {
        aux = lines[i]
        lines[i] = lines[lines.length - i - 1]
        lines[lines.length - i - 1] = aux
    }
    console.log(`N[${i}] = ${Number(lines[i])}`)
}
