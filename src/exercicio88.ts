
/* 
Exercício 88: Dado um array de preços de produtos, calcule o preço total após adicionar 
10% de imposto a cada produto usando map(), e depois somando tudo com reduce(). 
*/


const precos: number[] = [10, 25, 50, 100];

// Adiciona 10% de imposto a cada produto
const comImposto: number[] = precos.map((preco: number) => preco * 1.10);

// Soma todos os preços já com imposto
const total: number = comImposto.reduce((soma: number, preco: number) => soma + preco, 0);

console.log("Preços com imposto:", comImposto);
console.log("Total final:", total);
