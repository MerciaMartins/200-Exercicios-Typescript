
/*

Exercício 87: Dado dois arrays, um com vários números pares e outro com números ímpares,
combine-os e em seguida, filtre apenas os números que são múltiplos de 5.

*/


const pares: number[] = [2, 4, 6, 8, 10, 20, 30];
const impares: number[] = [1, 3, 5, 7, 9, 15, 25];


const combinado: number[] = pares.concat(impares);


const multiplosDe5: number[] = combinado.filter((num: number) => num % 5 === 0);

console.log(multiplosDe5); 
