/* Exercício 65: Escreva uma função que aceite um array de números e uma função de callback 
e retorne a soma de todos os números do array após a aplicação da função de callback.
*/

function contarPalavras(str: string): number {
    const limpa = str.trim();

    if (limpa.length === 0) {
        return 0;
    }

    const palavras = limpa.split(/\s+/);

    return palavras.length;
}

console.log(contarPalavras("JavaScript e TypeScript "));
