// Exercício 9: Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.

function verificarNumero(numero: number): string {
    if (numero > 0) return `O número ${numero} é positivo.`;
    if (numero < 0) return `O número ${numero} é negativo.`;
    return `O número é zero.`;
}

console.log(verificarNumero(5));