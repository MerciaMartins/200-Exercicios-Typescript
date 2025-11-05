
// Exercício 21: Escreva um programa que determina a estação do ano com base no mês.


// - Verão: Dezembro, Janeiro, Fevereiro
// - Outono: Março, Abril, Maio
// - Inverno: Junho, Julho, Agosto
// - Primavera: Setembro, Outubro, Novembro

enum Estacao {
  Verao = "Verão",
  Outono = "Outono",
  Inverno = "Inverno",
  Primavera = "Primavera",
}

function descobrirEstacaoPorNome(nomeMes: string): Estacao | string {
  const mes = nomeMes.toLowerCase();

  switch (mes) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
      return Estacao.Verao;
    case "março":
    case "abril":
    case "maio":
      return Estacao.Outono;
    case "junho":
    case "julho":
    case "agosto":
      return Estacao.Inverno;
    case "setembro":
    case "outubro":
    case "novembro":
      return Estacao.Primavera;
    default:
      return "Mês inválido. Digite o nome do mês corretamente.";
  }
}

const nomeMes: string = "Setembro";
console.log("Estação:", descobrirEstacaoPorNome(nomeMes));
