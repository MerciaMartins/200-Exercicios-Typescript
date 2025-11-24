/* Exercício 75: Escreva uma função de alta ordem que aceite um array de funções de callback e um valor,
 e retorne um novo array que contém os resultados de aplicar a função de callback ao valor, na ordem inversa.
*/

function aplicarCallbacksInverso(
    callbacks: ((x: number) => number)[],
    valor: number
): number[] {
    return callbacks
        .slice()           
        .reverse()         
        .map(fn => fn(valor)); 
}


function dobrar(x: number): number { return x * 2; }
function triplicar(x: number): number { return x * 3; }
function quadrado(x: number): number { return x * x; }

const funcoes = [dobrar, triplicar, quadrado];
const numero = 4;

const resultado = aplicarCallbacksInverso(funcoes, numero);

console.log("Resultados em ordem inversa:", resultado);
