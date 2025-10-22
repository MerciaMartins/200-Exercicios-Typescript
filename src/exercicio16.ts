// Exercício 16: Determinar o maior entre três números

function encontrarMaiorNumero(num1: number, num2: number, num3: number): void {
  let maior: number;

  if (num1 >= num2 && num1 >= num3) {
    maior = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    maior = num2;
  } else {
    maior = num3;
  }

  console.log(`O maior número é: ${maior}`);
}


encontrarMaiorNumero(15, 27, 9);