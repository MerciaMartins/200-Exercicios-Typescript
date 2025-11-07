// Exercício 40: Usando um laço while, crie um programa que inverta uma string.

let texto: string = "Desenvolvedor de Sistemas"; // você pode alterar o texto para testar
let invertida: string = "";

let i: number = texto.length - 1; // começa do último caractere
while (i >= 0) {
    invertida += texto[i];
    i--;
}

console.log("String original:", texto);
console.log("String invertida:", invertida);
