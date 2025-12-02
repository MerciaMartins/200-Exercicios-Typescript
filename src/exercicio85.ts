// Exercício 85: Crie um objeto "quadrado" que herda as propriedades do objeto "retangulo" e substitua o método para calcular a área.


class Retangulo {
    protected altura: number;
    protected largura: number;

    constructor(altura: number, largura: number) {
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea(): number {
        return this.altura * this.largura;
    }
}


class Quadrado extends Retangulo {
    private lado: number;

    constructor(lado: number) {
        super(lado, lado); 
        this.lado = lado;
    }

    
    calcularArea(): number {
        return this.lado * this.lado;
    }

 
    getLado(): number {
        return this.lado;
    }
}


const meuRetangulo = new Retangulo(8, 15);
const meuQuadrado = new Quadrado(8);

console.log("Área do Retângulo:", meuRetangulo.calcularArea());
console.log("Área do Quadrado:", meuQuadrado.calcularArea());
