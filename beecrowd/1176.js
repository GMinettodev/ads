var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let t = parseInt(lines.shift());

for (let i = 0; i < t; i++) {
    let n = parseInt(lines.shift());

    let a = 0;
    let b = 1;
    let c;

    if (n === 0) {
        console.log(`Fib(${n}) = 0`);
    } else if (n === 1) {
        console.log(`Fib(${n}) = 1`);
    } else {
        for (let j = 2; j <= n; j++) {
            c = a + b;
            a = b;
            b = c;
        }

        console.log(`Fib(${n}) = ${Number(b)}`);
    }
}