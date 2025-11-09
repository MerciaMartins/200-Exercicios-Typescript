// Exercício 42: Usando um laço for, crie um programa que transforme um número binário em decimal.

const binario: string = "11001"; // exemplo (25 em decimal)
let decimal: number = 0;

// percorre a string de trás pra frente
for (let i: number = 0; i < binario.length; i++) {
    const caractere: string = binario.charAt(binario.length - 1 - i); 
    const digitoBinario: number = parseInt(caractere, 10);
    decimal += digitoBinario * (2 ** i);
}

console.log("Número binário:", binario);
console.log("Número em decimal:", decimal);
