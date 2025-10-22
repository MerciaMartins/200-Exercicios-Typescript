//  Exercício 17: Escreva um programa que determina se um número é par ou ímpar.

function verificarParOuImpar(numero: number): void {
  if (numero % 2 === 0) {
    console.log(`${numero} é par`);
  } else {
    console.log(`${numero} é ímpar`);
  }
}
 
verificarParOuImpar(7);  
verificarParOuImpar(10); 

