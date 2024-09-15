var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let line = new Array(Number(lines[0]));
let total, c, r, s;
total = c = r = s = 0;

for (let i = 0; i < line.length; i++) {
  let parts = lines[i + 1].split(" ");
  line[i] = [Number(parts[0]), parts[1].trim()];

  // console.log(`[${i}][0] = ${line[i][0]}, [${i}][1] = ${line[i][1]}`);
  switch (line[i][1]) {
    case "C":
      c += line[i][0];
      break;
    case "R":
      r += line[i][0];
      break;
    case "S":
      s += line[i][0];
      break;
  }
  total += line[i][0];
}

console.log(
  `
Total: ${total} cobaias
Total de coelhos: ${c}
Total de ratos: ${r}
Total de sapos: ${s}
Percentual de coelhos: ${((c * 100) / total).toFixed(2)} %
Percentual de ratos: ${((r * 100) / total).toFixed(2)} %
Percentual de sapos: ${((s * 100) / total).toFixed(2)} %
`.trim()
);
