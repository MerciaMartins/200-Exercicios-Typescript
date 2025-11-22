// Exercício 64: Escreva uma função que receba uma string e retorne o número de palavras na string.

function contarPalavras(str: string): number {
    
    const palavras: string[] = str.trim().split(/\s+/);
    return palavras.length;
}

console.log(contarPalavras("JavaScript e TypeScript "));
