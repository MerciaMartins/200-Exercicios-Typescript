// Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo.


function verificarIntervalo(numero: number, limiteInferior: number, limiteSuperior: number): void {
  if (numero >= limiteInferior && numero <= limiteSuperior) {
    console.log(`${numero} está dentro do intervalo [${limiteInferior}, ${limiteSuperior}]`);
  } else {
    console.log(`${numero} está fora do intervalo [${limiteInferior}, ${limiteSuperior}]`);
  }
}

verificarIntervalo(25, 10, 50); 
verificarIntervalo(5, 10, 50);