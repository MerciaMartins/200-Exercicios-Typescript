// Exercício 98: Dado um array de strings e um array de palavras proibidas, retorne um novo array sem as palavras proibidas.


function removerPalavrasProibidas(array: string[], proibidas: string[]): string[] {
  return array.filter(palavra => !proibidas.includes(palavra));
}

const palavras: string[] = ["gato", "cachorro", "rato", "elefante"];
const palavrasProibidas: string[] = ["rato", "elefante"];

const resultado: string[] = removerPalavrasProibidas(palavras, palavrasProibidas);
console.log(resultado); 
