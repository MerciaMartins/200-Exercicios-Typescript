// Exercício 23: Escreva um programa que verifica as cores de um semáforo.

/*
 O usuário deve informar a cor (vermelho, amarelo ou verde).
 - "Pare" para vermelho
 - "Atenção" para amarelo
 - "Siga" para verde
*/

function verificarSemaforo(cor: string): string {
  const corNormalizada = cor.toLowerCase();

  switch (corNormalizada) {
    case "vermelho":
      return "Pare";
    case "amarelo":
      return "Atenção";
    case "verde":
      return "Siga";
    default:
      return "Cor inválida. Digite vermelho, amarelo ou verde.";
  }
}


const corInformada: string = "Verde"; 
console.log(verificarSemaforo(corInformada));
