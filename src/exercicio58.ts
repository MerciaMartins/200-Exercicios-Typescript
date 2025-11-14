// Exercício 58: Escreva uma função que retorne a soma de todos os números pares em um array de números.

function somaPares(arr: number[]): number {
    return arr
        .filter(num => num % 2 === 0)
        .reduce((acc, num) => acc + num, 0);
}

const numeros: number[] = [1, 2, 3, 4, 5, 6];

console.log("Array:", numeros);
console.log("Soma dos números pares:", somaPares(numeros));
