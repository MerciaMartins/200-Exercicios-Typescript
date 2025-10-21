
/* 
 Exercício 12: Escreva um programa que verifica a situação de um estudante de acordo com sua média final.

 Regras:
- Média abaixo de 5: Reprovado
 - Média entre 5 e 6.9: Recuperação
- Média 7 ou mais: Aprovado

*/


function verificarSituacaoAluno(mediaFinal: number): void {
  if (mediaFinal < 5) {
    console.log(`Média: ${mediaFinal}. Situação: Reprovado.`);
  } else if (mediaFinal < 7) {
    console.log(`Média: ${mediaFinal}. Situação: Recuperação.`);
  } else {
    console.log(`Média: ${mediaFinal}. Situação: Aprovado.`);
  }
}

verificarSituacaoAluno(8.2);
