/* Exercício 22: Escreva um programa que determina o número de dias em um mês.
O usuário deve informar o número do mês (1 a 12) e o programa deve informar quantos dias há nesse mês.
Considere que fevereiro tem 28 dias (não precisa tratar ano bissexto).
*/

function diasNoMes(numeroMes: number): number | string {
  switch (numeroMes) {
    case 1:  // Janeiro
    case 3:  // Março
    case 5:  // Maio
    case 7:  // Julho
    case 8:  // Agosto
    case 10: // Outubro
    case 12: // Dezembro
      return 31;

    case 4:  // Abril
    case 6:  // Junho
    case 9:  // Setembro
    case 11: // Novembro
      return 30;

    case 2:  // Fevereiro
      return 28;

    default:
      return "Mês inválido. Digite um número de 1 a 12.";
  }
}

// Exemplo de uso:
const numeroMes: number = 2; // Altere o número para testar outros meses
const resultado = diasNoMes(numeroMes);

console.log(`O mês ${numeroMes} tem ${resultado} dias.`);
