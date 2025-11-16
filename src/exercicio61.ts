// Exercício 61: Escreva uma função que receba um array de números e retorne um novo array com a raiz quadrada de todos os números.

function raizQuadradaArray(arr: number[]): number[] {
    return arr.map(num => Math.sqrt(num));
}

let numeros: number[] = [1, 4, 9, 16, 25];

console.log("Array original:", numeros);
console.log("Raiz quadrada:", raizQuadradaArray(numeros));
