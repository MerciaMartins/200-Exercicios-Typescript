/*

Exercício 81: Crie um objeto representando uma conta bancária, que possui uma propriedade de saldo
e métodos para depósito e saque.

*/



class ContaBancaria {
    private saldo: number; 

    constructor(saldoInicial: number = 0) {
        this.saldo = saldoInicial;
    }

    // Método para depósito
    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }

    // Método para saque
    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log(`Saque de R$${valor} não realizado. Saldo insuficiente.`);
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        }
    }

    // Método para consultar o saldo
    consultarSaldo(): number {
        return this.saldo;
    }
}


const minhaConta = new ContaBancaria();
minhaConta.depositar(700);
minhaConta.sacar(300);
minhaConta.sacar(400);
console.log(`Saldo final: R$${minhaConta.consultarSaldo()}`);
