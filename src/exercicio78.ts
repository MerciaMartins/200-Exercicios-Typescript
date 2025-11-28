/*
 Exercício 78: Crie um objeto "cachorro" com propriedades para raça, nome e idade. 
Adicione um método que retorne a idade do cachorro em anos humanos (idade do cachorro * 7).

*/

type Cachorro = {
    raca: string;
    nome: string;
    idade: number;
    idadeHumana: () => number;
};

const cachorro: Cachorro = {
    raca: "Labrador",
    nome: "Simba",
    idade: 2,

    idadeHumana() {
        return this.idade * 7;
    }
};

console.log(`A idade do ${cachorro.nome} em anos humanos é: ${cachorro.idadeHumana()}`);
