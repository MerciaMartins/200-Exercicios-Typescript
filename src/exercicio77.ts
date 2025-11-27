/*

 Exercício 77: Crie um objeto que represente um livro, com propriedades para o título, autor e número de páginas. 
Em seguida, adicione um método ao objeto que imprima uma descrição do livro.

*/

interface Livro {
    titulo: string;
    autor: string;
    paginas: number;
    descricao: () => void;
}

const livro: Livro = {
    titulo: "Os Segredos da Mente Milionária",
    autor: "T. Harv Eker",
    paginas: 176,

    descricao() {
        console.log(
            `O livro '${this.titulo}' foi escrito por ${this.autor} e tem ${this.paginas} páginas.`
        );
    }
};

livro.descricao();
