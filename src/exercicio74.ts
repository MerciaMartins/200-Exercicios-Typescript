/*
Exercício 74: Escreva uma função de alta ordem que aceite uma função de callback e um array, 
e retorne um novo array que contém os resultados de aplicar a função de callback a cada elemento do array, sem alterar o array original.

*/

function aplicarCallbackArray(
    callback: (x: number) => number,
    array: number[]
): number[] {
    return array.map(callback);
}


function dobrar(x: number): number {
    return x * 2;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = aplicarCallbackArray(dobrar, numeros);

console.log("Array original:", numeros);
console.log("Novo array:", resultado);
