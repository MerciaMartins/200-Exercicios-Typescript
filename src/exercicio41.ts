// Exercício 41: Usando um laço do-while, crie um programa que transforme um número decimal em binário.

let numero: number = 25; 
let binario: string = "";

let temp: number = numero; 

do {
    const resto: number = temp % 2;       
    binario = resto.toString() + binario; 
    temp = Math.floor(temp / 2);          
} while (temp > 0);

console.log("Número decimal:", numero);
console.log("Número em binário:", binario);
