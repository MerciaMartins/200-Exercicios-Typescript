// Exercício 49: Escreva uma função que aceite três números como argumentos e retorne o maior deles.

function maiorDeTres(a: number, b: number, c: number): number {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(maiorDeTres(10, 25, 7));
