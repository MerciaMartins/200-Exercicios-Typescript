// Exercício 52: Escreva uma função que calcule o n-ésimo número de Fibonacci.

function fibonacci(n: number): number {
    let a: number = 0;
    let b: number = 1;
    let resultado: number = 0;

    if (n === 0) return a;
    if (n === 1) return b;

    for (let i = 2; i <= n; i++) {
        resultado = a + b;
        a = b;
        b = resultado;
    }

    return resultado;
}

console.log(fibonacci(7)); 
