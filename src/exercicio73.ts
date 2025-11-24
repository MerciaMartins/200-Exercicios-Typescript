// Exercício 73: Função de alta ordem que aplica callbacks no valor inicial a cada "n" milissegundos, repetindo um número de vezes especificado.

function aplicarCallbacksComIntervalo(
    vezes: number,
    callbacks: ((x: number) => number)[],
    valorInicial: number,
    intervalo: number
): void {
    let resultado = valorInicial;
    let contador = 0;

    const id = setInterval(() => {
        for (let i = 0; i < callbacks.length; i++) {
            resultado = callbacks[i]!(resultado); 
        }

        console.log("Após execução " + (contador + 1) + ": " + resultado);

        contador++;

        if (contador >= vezes) {
            clearInterval(id);
            console.log("Resultado final:", resultado);
        }
    }, intervalo);
}


function dobrar(x: number): number {
    return x * 2;
}

function somarTres(x: number): number {
    return x + 3;
}

const funcoes = [dobrar, somarTres];

aplicarCallbacksComIntervalo(3, funcoes, 1, 2000);
