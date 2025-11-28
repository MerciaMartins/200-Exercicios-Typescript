/* 
Exercício 79: Crie um objeto que represente um carro, com propriedades para a marca, modelo, ano e velocidade atual,
 e os seguintes métodos: acelerar, frear e obter velocidade atual.
 
 */


class Carro {
    private marca: string;
    private modelo: string;
    private ano: number;
    private velocidadeAtual: number = 0;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar(): void {
        this.velocidadeAtual += 10;
        console.log(`O carro acelerou. Velocidade atual: ${this.velocidadeAtual} km/h`);
    }

    frear(): void {
        if (this.velocidadeAtual > 0) {
            this.velocidadeAtual -= 10;
        }
        console.log(`O carro freou. Velocidade atual: ${this.velocidadeAtual} km/h`);
    }

    obterVelocidade(): number {
        return this.velocidadeAtual;
    }
}

const carro = new Carro("Toyota", "Corolla", 2020);

carro.acelerar();
carro.acelerar();
carro.frear();

console.log(`Velocidade atual (via método): ${carro.obterVelocidade()} km/h`);
