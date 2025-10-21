/*
 Exercício 14: Verifica se um ano é bissexto ou não.

Regras para ano bissexto:
 - É divisível por 4
- NÃO pode ser divisível por 100, **a menos que** também seja divisível por 400

*/

function verificarAnoBissexto(ano: number): void {
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(`${ano} é um ano bissexto.`);
  } else {
    console.log(`${ano} não é um ano bissexto.`);
  }
}


verificarAnoBissexto(2025);
verificarAnoBissexto(2024); 
verificarAnoBissexto(1900); 
verificarAnoBissexto(2000); 
