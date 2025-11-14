// Exercício 59: Escreva uma função que receba um array de números e retorne um novo array com todos os números duplicados.

function duplicarArray(arr: number[]): number[] {
    return arr.map(num => num * 2);
}

const numeros: number[] = [1, 2, 3, 4];

console.log("Array original:", numeros);
console.log("Array duplicado:", duplicarArray(numeros));
