// Exercício 44: Usando um laço do-while, crie um programa que imprima a soma de duas matrizes.

const matrizA: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const matrizB: number[][] = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
];

const matrizSoma: number[][] = [];
let i: number = 0;

do {
  const linhaSoma: number[] = [];
  for (let j: number = 0; j < matrizA[i].length; j++) {
    linhaSoma.push(matrizA[i][j] + matrizB[i][j]);
  }
  matrizSoma.push(linhaSoma);
  i++;
} while (i < matrizA.length);

console.log("Matriz A:", matrizA);
console.log("Matriz B:", matrizB);
console.log("Soma das matrizes:", matrizSoma);
