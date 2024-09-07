let vetor = [23, 57, 12, 89, 34, 5, 72, 46, 91, 18];

for (i = 0; i < vetor.length; i++) {
  for (k = i + 1; k < vetor.length; k++) {
    if (vetor[i] > vetor[k]) {
      [vetor[i], vetor[k]] = [vetor[k], vetor[i]];
    }
  }
}
console.log(vetor);
