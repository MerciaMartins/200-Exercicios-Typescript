
// Exercício 89: Dada uma string com várias palavras separadas por espaços, transforme-a em um array e depois retorne a palavra mais longa. 

const frase: string = "Aprendendo JavaScript e melhorando minhas habilidades de programação";


const palavras: string[] = frase.split(" ");


const palavraMaisLonga: string = palavras.reduce((maior: string, atual: string) => {
    return atual.length > maior.length ? atual : maior;
}, ""); // Inicializa com string vazia para garantir tipagem segura

console.log("Palavra mais longa:", palavraMaisLonga);
