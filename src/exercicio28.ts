// Exercício 28: Usando um laço while, calcule e imprima a soma de todos os números de 1 a 100.

let numero: number = 1;
let soma: number = 0;

while (numero <= 100) {
  soma += numero;
  numero++;
}

console.log("A soma de 1 a 100 é:", soma);
