
// Exercício 31: Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.

let menor: number = 1;
let maior: number = 100;
let acertou: boolean = false;

alert("Pense em um número entre 1 e 100. Eu vou tentar adivinhar!");

while (!acertou && menor <= maior) {
    const meio: number = Math.floor((menor + maior) / 2);
    const resposta = prompt(
        `O número que você pensou é ${meio}?\nDigite:
        'maior' se for maior
        'menor' se for menor
        'sim' se acertei`
    );

    if (!resposta) {
        alert("Você precisa responder algo!");
        continue;
    }

    const respostaFormatada = resposta.toLowerCase();

    if (respostaFormatada === "sim") {
        alert(`Acertei! O número é ${meio}`);
        acertou = true;
    } else if (respostaFormatada === "maior") {
        menor = meio + 1;
    } else if (respostaFormatada === "menor") {
        maior = meio - 1;
    } else {
        alert("Resposta inválida! Digite apenas 'maior', 'menor' ou 'sim'.");
    }
}

if (!acertou) {
    alert("Parece que houve algum erro com as respostas.");
}
