/* 

Exercício 72: Escreva uma função que aceite um número, um array de funções de callback e um valor inicial, 
e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, o número de vezes especificado.

*/

function aplicarCallbacksRepetidamente(
    vezes: number,
    callbacks: ((x: number) => number)[],
    valorInicial: number
): number {
    let resultado = valorInicial;

    for (let i = 0; i < vezes; i++) {
        for (let j = 0; j < callbacks.length; j++) {
            resultado = callbacks[j]!(resultado); 
        }
    }

    return resultado;
}

// Ex.: de callbacks
function dobrar(x: number): number {
    return x * 2;
}

function somarTres(x: number): number {
    return x + 3;
}

const funcoes = [dobrar, somarTres];

const resultadoFinal = aplicarCallbacksRepetidamente(2, funcoes, 1);

console.log("Resultado final:", resultadoFinal);
