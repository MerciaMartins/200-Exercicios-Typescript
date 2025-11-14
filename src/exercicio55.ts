// Exercício 55: Escreva uma função que retorne o menor número em um array de números.

function menorNumero(arr: number[]): number {
    return Math.min(...arr);
}

let numeros: number[] = [10, 5, 3, 22, -7, 15];

console.log("Array:", numeros);
console.log("Menor número:", menorNumero(numeros));
