// Exercício 69: Escreva uma função que aceite um número e uma função de callback e execute a função de callback o número de vezes especificado.

function repetirCallback(
    vezes: number,
    callback: (indice: number) => void
): void {
    for (let i = 0; i < vezes; i++) {
        callback(i);
    }
}

repetirCallback(5, (i: number) => {
    console.log("Execução número:", i + 1);
});
