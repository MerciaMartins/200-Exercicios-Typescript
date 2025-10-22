// Exercício 20: Escreva um programa que imprime uma classificação baseada na nota de um aluno.


function classificarNota(nota: number): void {
  let classificacao: string;

  if (nota >= 90) {
    classificacao = "A";
  } else if (nota >= 80) {
    classificacao = "B";
  } else if (nota >= 70) {
    classificacao = "C";
  } else if (nota >= 60) {
    classificacao = "D";
  } else {
    classificacao = "F";
  }

  console.log(`A nota do aluno foi ${nota} e sua classificação é: ${classificacao}`);
}

classificarNota(85);  
classificarNota(59);