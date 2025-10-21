// Exercício 13: Calcula o IMC e classifica o resultado com base na tabela da OMS.

function calcularIMC(peso: number, altura: number): void {
  const imc = peso / (altura * altura);

  console.log(`Peso: ${peso}kg, Altura: ${altura}m`);
  console.log(`IMC: ${imc.toFixed(2)}`);

  if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
  } else if (imc < 25) {
    console.log("Classificação: Peso normal");
  } else if (imc < 30) {
    console.log("Classificação: Sobrepeso");
  } else {
    console.log("Classificação: Obesidade");
  }
}


calcularIMC(60, 1.75);
