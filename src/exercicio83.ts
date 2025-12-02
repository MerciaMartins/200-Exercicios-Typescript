
/* 
Exercício 83: Crie um objeto "tempo" que possui propriedades para horas, minutos e segundos,
e um método para converter o tempo para segundos.
*/

// Definindo a interface para o tempo
interface Tempo {
    horas: number;
    minutos: number;
    segundos: number;
    converterParaSegundos(): number;
}

// Criando o objeto com tipagem
const tempo: Tempo = {
    horas: 2,
    minutos: 20,
    segundos: 45,

    converterParaSegundos(): number {
        return this.horas * 3600 + this.minutos * 60 + this.segundos;
    }
};


console.log(`${tempo.horas} hora(s), ${tempo.minutos} minuto(s) e ${tempo.segundos} segundo(s) equivalem a um total de ${tempo.converterParaSegundos()} segundos`);
