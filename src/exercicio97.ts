
//Exercício 97: Dado um array, encontre o elemento que aparece mais vezes.

function elementoMaisFrequente(array: number[]): number | null {
  const contador: Record<number, number> = {};
  let maxContagem = 0;
  let maisFrequente: number | null = null;

  for (const elemento of array) {
    contador[elemento] = (contador[elemento] || 0) + 1;

    if (contador[elemento] > maxContagem) {
      maxContagem = contador[elemento];
      maisFrequente = elemento;
    }
  }

  return maisFrequente;
}


const numeros: number[] = [1, 3, 2, 1, 4, 1, 3, 2, 3, 3];
console.log(elementoMaisFrequente(numeros)); 