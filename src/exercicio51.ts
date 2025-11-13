// Exercício 51: Escreva uma função que calcule o fatorial de um número.

function fatorial(n: number): number {
    let resultado: number = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(fatorial(5)); 