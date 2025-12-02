// Exercício 84:  Crie um objeto "retangulo" que possui propriedades para altura e largura, e um método para calcular a área.


class Retangulo {
    private altura: number;
    private largura: number;

    constructor(altura: number, largura: number) {
        this.altura = altura;
        this.largura = largura;
    }

    // Método para calcular a área
    calcularArea(): number {
        return this.altura * this.largura;
    }

    // Métodos opcionais para acessar propriedades
    getAltura(): number {
        return this.altura;
    }

    getLargura(): number {
        return this.largura;
    }

    setAltura(novaAltura: number): void {
        this.altura = novaAltura;
    }

    setLargura(novaLargura: number): void {
        this.largura = novaLargura;
    }
}


const meuRetangulo = new Retangulo(8, 15);

console.log(`Altura: ${meuRetangulo.getAltura()}`);
console.log(`Largura: ${meuRetangulo.getLargura()}`);
console.log(`Área calculada: ${meuRetangulo.calcularArea()}`);
