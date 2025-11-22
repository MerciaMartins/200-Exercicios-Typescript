// Exercício 63: Escreva uma função que receba um número e retorne um array com todos os números primos até aquele número.

function primosAteN(n: number): number[] {
    const primos: number[] = [];

    for (let i = 2; i <= n; i++) {
        let primo = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            primos.push(i);
        }
    }

    return primos;
}

console.log(primosAteN(30));
