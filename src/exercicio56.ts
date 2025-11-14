// Exercício 56: Escreva uma função que retorne o maior número em um array de números.

function maiorNumero(arr: number[]): number {
    return Math.max(...arr);
}

const numeros: number[] = [10, 5, 3, 22, -7, 15];

console.log("Array:", numeros);
console.log("Maior número:", maiorNumero(numeros));
