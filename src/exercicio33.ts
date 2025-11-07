
// Exercício 33: Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.

let n1: number = 0;
let n2: number = 1;

console.log("Os primeiros 10 números da sequência de Fibonacci:");

for (let i: number = 1; i <= 10; i++) {
  console.log(n1);
  const proximo: number = n1 + n2;
  n1 = n2;
  n2 = proximo;
}
