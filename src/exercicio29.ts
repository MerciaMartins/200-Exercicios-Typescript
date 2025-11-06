// Exercício 29: Usando um laço do-while, imprima todos os números pares de 1 a 100.

let numero: number = 1;

do {
  if (numero % 2 === 0) {
    console.log(numero);
  }
  numero++;
} while (numero <= 100);
