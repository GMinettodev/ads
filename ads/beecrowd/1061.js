var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

// Função para calcular segundos
function getSegundos(dia, hora, minuto, segundo) {
  return dia * 86400 + hora * 3600 + minuto * 60 + segundo;
}

// Leitura e processamento da entrada
let diaInicio = Number(lines[0].split(" ")[1]);
let [horaInicio, minutoInicio, segundoInicio] = lines[1]
  .split(" : ")
  .map(Number);
let totalSegundosInicio = getSegundos(
  diaInicio,
  horaInicio,
  minutoInicio,
  segundoInicio
);

let diaFim = Number(lines[2].split(" ")[1]);
let [horaFim, minutoFim, segundoFim] = lines[3].split(" : ").map(Number);
let totalSegundosFim = getSegundos(diaFim, horaFim, minutoFim, segundoFim);

// Verificando se o tempo de fim é menor que o tempo de início
if (totalSegundosFim < totalSegundosInicio) {
  console.error("O tempo de término deve ser maior que o tempo de início.");
  process.exit(1); // Saída do processo com erro
}

// Cálculo da duração em segundos
let duracaoSegundos = totalSegundosFim - totalSegundosInicio;

// Cálculo de dias, horas, minutos e segundos
let dias = Math.floor(duracaoSegundos / 86400);
duracaoSegundos %= 86400;

let horas = Math.floor(duracaoSegundos / 3600);
duracaoSegundos %= 3600;

let minutos = Math.floor(duracaoSegundos / 60);
let segundos = duracaoSegundos % 60;

// Saída no formato desejado
console.log(`${dias} dia(s)`);
console.log(`${horas} hora(s)`);
console.log(`${minutos} minuto(s)`);
console.log(`${segundos} segundo(s)`);
