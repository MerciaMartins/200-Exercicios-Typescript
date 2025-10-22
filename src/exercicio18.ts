
// Exercício 18: Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.

function verificarSePodeDirigir(idade: number): void {
  if (idade >= 18) {
    console.log("Você pode dirigir!");
  } else {
    console.log("Você ainda não pode dirigir.");
  }
}

verificarSePodeDirigir(20); 
verificarSePodeDirigir(16); 
