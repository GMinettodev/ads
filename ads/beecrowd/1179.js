var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let par = [5]
let impar = [5]
let par_c = 0
let impar_c = 0

for (i = 0; i < 15; i++) {
    if (lines[i] % 2 == 0) {
        par[par_c] = Number(lines[i])
        par_c++
    } else {
        impar[impar_c] = Number(lines[i])
        impar_c++
    }

    if (par_c == 5) {
        for (k = 0; k < par_c; k++) {
            console.log(`par[${k}] = ${Number(par[k])}`)

        }
        par_c = 0
    } else if (impar_c == 5) {
        for (k = 0; k < impar_c; k++) {
            console.log(`impar[${k}] = ${Number(impar[k])}`)
        }
        impar_c = 0
    }
}
for (k = 0; k < impar_c; k++) {
    console.log(`impar[${k}] = ${Number(impar[k])}`)
}
impar_c = 0

for (k = 0; k < par_c; k++) {
    console.log(`par[${k}] = ${Number(par[k])}`)
}
par_c = 0