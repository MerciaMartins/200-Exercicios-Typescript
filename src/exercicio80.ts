/* 
Exercício 80: Crie um objeto que represente um estudante, com propriedades para o nome, 
notas de várias matérias e um método para calcular a média das notas.

*/

type Estudante = {
    nome: string;
    notas: number[];
    calcularMedia: () => number;
};

const estudante: Estudante = {
    nome: "Ayla",
    notas: [8, 7, 9, 6, 10],

    calcularMedia() {
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }
};

console.log(`A média de ${estudante.nome} é: ${estudante.calcularMedia()}`);
