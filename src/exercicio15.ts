
/*
Exercício 15: Verifica se uma palavra é um palíndromo.

Palíndromo é uma palavra que permanece igual quando lida de trás para frente.
Exemplos: "ovo", "radar", "ana", "mirim"
*/

function verificarPalindromo(palavra: string): void {

  const formatada = palavra.toLowerCase().replace(/\s/g, "");

 
  const invertida = formatada.split("").reverse().join("");

  if (formatada === invertida) {
    console.log(`"${palavra}" é um palíndromo.`);
  } else {
    console.log(`"${palavra}" não é um palíndromo.`);
  }
}


verificarPalindromo("morango");
verificarPalindromo("Ovo");