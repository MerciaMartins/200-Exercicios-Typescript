// Exercício 76: Crie um objeto vazio e adicione três propriedades a ele, cada uma com diferentes tipos de valores.

type Pessoa = {
  nome: string;
  idade: number;
  estaAtivo: boolean;
};

// Objeto inicialmente vazio, mas tipado
let pessoa: Pessoa = {
  nome: "Ana",
  idade: 25,
  estaAtivo: true,
};

console.log(pessoa);
