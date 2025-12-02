
//Exercício 99: Dado um array, retorne um novo array com todas as combinações possíveis de pares de elementos.

function gerarPares<T>(array: T[]): [T, T][] {
  const pares: [T, T][] = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      pares.push([array[i]!, array[j]!]); 
    }
  }

  return pares;
}

const numeros: number[] = [1, 2, 3, 4];
console.log(gerarPares(numeros));
