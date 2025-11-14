// Exercício 54: Escreva uma função que ordene um array de números em ordem decrescente.

function ordenarDecrescente(arr: number[]): number[] {
    return arr.sort((a, b) => b - a);
}

let numeros: number[] = [5, 2, 9, 1, 7];

console.log("Array original:", numeros);
console.log("Array ordenado (decrescente):", ordenarDecrescente(numeros));
