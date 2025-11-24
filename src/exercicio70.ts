/* 

Exercício 70: Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, 
e retorne um array de resultados de aplicar cada função de callback ao valor.

*/

function aplicarCallbacks(
    callbacks: ((v: number) => number)[],
    valor: number
): number[] {
    return callbacks.map(fn => fn(valor));
}
