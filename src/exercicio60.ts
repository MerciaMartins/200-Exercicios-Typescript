// Exercício 60: Escreva uma função que receba um array de números e retorne um novo array com todos os números ao quadrado.

function aoQuadrado(arr: number[]): number[] {
    return arr.map(num => num ** 2);
}

const numeros: number[] = [1, 2, 3, 4];

console.log("Array original:", numeros);
console.log("Array ao quadrado:", aoQuadrado(numeros));
