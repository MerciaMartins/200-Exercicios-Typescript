/*

Exercício 86:  Crie um objeto "livro" que possui propriedades para o título, 
autor e número de páginas, e um método para exibir o livro na console.

*/


interface Livro {
    titulo: string;
    autor: string;
    paginas: number;
    exibirLivro(): void;
}


const livro: Livro = {
    titulo: "Aprendendo TypeScript",
    autor: "Nathan Rozentals",
    paginas: 384,

    exibirLivro(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Páginas: ${this.paginas}`);
    }
};


livro.exibirLivro();
