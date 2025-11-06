// Exercício 26: Usando um laço do-while, imprima todos os números ímpares de 1 a 20.

let numero: number = 1;

do {
  if (numero % 2 !== 0) {
    console.log(numero);
  }
  numero++;
} while (numero <= 20);
