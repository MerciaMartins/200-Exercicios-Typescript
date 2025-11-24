/* 

Exercício 68: Escreva uma função de alta ordem que aceite um array de números e uma função de callback, 
e retorne um novo array que contém apenas os números do array original que satisfazem a condição da função de callback.

*/ 

function filtrarNumeros(
    array: number[],
    callback: (num: number) => boolean
): number[] {
    return array.filter(callback);
}

const numeros: number[] = [10, 15, 20, 25, 30];

const maioresQue18 = filtrarNumeros(numeros, n => n > 18);

console.log("Array original:", numeros);
console.log("Maiores que 18:", maioresQue18);
