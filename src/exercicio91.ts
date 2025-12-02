
//Exercício 91: Dado um array de strings, ordene-o em ordem decrescente com base no comprimento de cada string.


function ordenarPorComprimento(arr: string[]): string[] {
    return arr.sort((a: string, b: string) => b.length - a.length);
}


const arrayDeStrings: string[] = ["banana", "maçã", "laranja", "kiwi"];
const arrayOrdenado: string[] = ordenarPorComprimento(arrayDeStrings);

console.log(arrayOrdenado); 
