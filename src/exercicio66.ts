/* 
Exercício 66: Escreva uma função que aceite uma função de callback que retorne verdadeiro ou falso e um array, 
 e retorne um novo array que contém apenas os elementos para os quais a função de callback retornou verdadeiro.

*/

function filtrarArray<T>(array: T[], callback: (item: T) => boolean): T[] {
    const novoArray: T[] = [];
    
    for (const item of array) {
        if (callback(item)) {
            novoArray.push(item);
        }
    }

    return novoArray;
}

const numeros: number[] = [1, 2, 3, 4, 5, 6];

// Callback que retorna apenas números pares
const pares = filtrarArray(numeros, (n: number) => n % 2 === 0);

console.log("Array original:", numeros);
console.log("Apenas pares:", pares);
