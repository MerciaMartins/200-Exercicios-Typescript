/*

Exercício 67: Escreva uma função que aceite uma função de callback e um array de arrays, 
e retorne um novo array que contém os resultados de aplicar a função de callback a cada array.

*/

function mapearArrays<T, R>(
    arrayDeArrays: T[][],
    callback: (subArray: T[]) => R
): R[] {
    return arrayDeArrays.map(subArray => callback(subArray));
}

const arrays: number[][] = [
    [1, 2, 3],
    [4, 5],
    [6]
];

// Callback que soma os elementos de cada array
const somas = mapearArrays(arrays, (subArr: number[]): number => {
    return subArr.reduce((total, n) => total + n, 0);
});

console.log("Arrays originais:", arrays);
console.log("Somas de cada array:", somas);
