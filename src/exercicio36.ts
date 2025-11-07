/*

 Exercício 36: Usando um laço for, imprima todos os números perfeitos de 1 a 100 
(um número é perfeito se a soma de seus divisores, incluindo 1 mas não ele mesmo, é igual ao próprio número)

*/

console.log("Números perfeitos entre 1 e 100:");

for (let num: number = 1; num <= 100; num++) {
    let soma: number = 0;

    // Encontrar divisores próprios
    for (let i: number = 1; i < num; i++) {
        if (num % i === 0) {
            soma += i;
        }
    }

    if (soma === num) {
        console.log(num);
    }
}
