
// Exercício 96: Dado dois arrays, verifique se o segundo array é um subarray do primeiro.

function ehSubarray(array1: number[], array2: number[]): boolean {
  if (array2.length === 0) return true; 
  if (array2.length > array1.length) return false;

  for (let i = 0; i <= array1.length - array2.length; i++) {
    if (array1.slice(i, i + array2.length).every((val, index) => val === array2[index])) {
      return true;
    }
  }
  return false;
}


const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [2, 3, 4];
const arr3: number[] = [2, 4];

console.log(ehSubarray(arr1, arr2)); 
console.log(ehSubarray(arr1, arr3)); 
