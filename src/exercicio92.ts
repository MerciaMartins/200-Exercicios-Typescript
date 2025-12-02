
/*
 Exercício 92: Dado um array de objetos que têm várias propriedades, 
crie uma função que retorne um novo array contendo apenas os valores de uma propriedade específica. 

*/

function extrairPropriedade<T, K extends keyof T>(array: T[], propriedade: K): T[K][] {
    return array.map(item => item[propriedade]);
}


interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

const produtos: Produto[] = [
    { nome: "Notebook", preco: 3500, categoria: "Eletrônicos" },
    { nome: "Camiseta", preco: 50, categoria: "Vestuário" },
    { nome: "Bicicleta", preco: 900, categoria: "Esportes" }
];


const nomes: string[] = extrairPropriedade(produtos, "nome");
const precos: number[] = extrairPropriedade(produtos, "preco");

console.log(nomes);  
console.log(precos); 
