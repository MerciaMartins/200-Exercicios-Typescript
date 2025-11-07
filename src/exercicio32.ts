
//Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.

type Escolha = "pedra" | "papel" | "tesoura";
type Resposta = "sim" | "não";

function jogarJogo(): void {
  let jogarNovamente: Resposta | null;

  do {
    const jogadorInput = prompt("Escolha: pedra, papel ou tesoura");
    if (!jogadorInput) {
      alert("Entrada inválida. Encerrando o jogo.");
      return;
    }

    const jogador = jogadorInput.toLowerCase() as Escolha;
    const opcoes: Escolha[] = ["pedra", "papel", "tesoura"];
    const computador = opcoes[Math.floor(Math.random() * 3)];

    alert(`Computador escolheu: ${computador}`);

    if (jogador === computador) {
      alert("Empate!");
    } else if (
      (jogador === "pedra" && computador === "tesoura") ||
      (jogador === "papel" && computador === "pedra") ||
      (jogador === "tesoura" && computador === "papel")
    ) {
      alert("Você venceu! 🎉");
    } else if (opcoes.indexOf(jogador)) {
      alert("Você perdeu! 😢");
    } else {
      alert("Escolha inválida!");
    }

    const resposta = prompt("Deseja jogar novamente? (sim/não)");
    jogarNovamente = resposta ? (resposta.toLowerCase() as Resposta) : "não";

  } while (jogarNovamente === "sim");

  alert("Obrigado por jogar! 👋");
}



jogarJogo();
