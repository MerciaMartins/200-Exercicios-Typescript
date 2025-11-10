// Exercício 48: Escreva uma função que aceite um número como argumento e retorne se ele é par ou ímpar.

function parOuImpar(n: number): string {
  return n % 2 === 0 ? "Par" : "Ímpar";
}

console.log(parOuImpar(4));
console.log(parOuImpar(7));
