//Exercício 93: Dado um array de números, encontre a mediana.

function mediana(numeros: number[]): number {
  if (numeros.length === 0) {
    throw new Error("O array não pode ser vazio");
  }

  const ordenados = [...numeros].sort((a, b) => a - b);
  const meio = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 !== 0) {
    return ordenados[meio]!; 
  }

  return (ordenados[meio - 1]! + ordenados[meio]!) / 2;
}


console.log(mediana([5, 2, 9, 1, 7])); 
console.log(mediana([10, 2, 3, 4]));   