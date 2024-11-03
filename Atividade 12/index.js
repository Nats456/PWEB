function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function() {
        return this.base * this.altura;
    };
}


const base = parseFloat(prompt("Digite a base do retângulo:"));
const altura = parseFloat(prompt("Digite a altura do retângulo:"));
const retangulo = new Retangulo(base, altura);


const area = retangulo.calcularArea();
console.log(`A área do retângulo é: ${area}`);

// Conta 
class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.saldoEspecial = saldoEspecial;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }
}

// Receber dados para Corrente
const nomeCorrentistaCorrente = prompt("Digite o nome do correntista (Conta Corrente):");
const bancoCorrente = prompt("Digite o nome do banco (Conta Corrente):");
const numeroContaCorrente = prompt("Digite o número da conta (Conta Corrente):");
const saldoCorrente = parseFloat(prompt("Digite o saldo (Conta Corrente):"));
const saldoEspecial = parseFloat(prompt("Digite o saldo especial (Conta Corrente):"));

// Criar objeto Conta Corrente
const contaCorrente = new Corrente(nomeCorrentistaCorrente, bancoCorrente, numeroContaCorrente, saldoCorrente, saldoEspecial);

// Receber dados para Poupança
const nomeCorrentistaPoupanca = prompt("Digite o nome do correntista (Conta Poupança):");
const bancoPoupanca = prompt("Digite o nome do banco (Conta Poupança):");
const numeroContaPoupanca = prompt("Digite o número da conta (Conta Poupança):");
const saldoPoupanca = parseFloat(prompt("Digite o saldo (Conta Poupança):"));
const juros = parseFloat(prompt("Digite a taxa de juros (Conta Poupança):"));
const dataVencimento = prompt("Digite a data de vencimento (Conta Poupança):");

// Criar objeto Conta Poupança
const contaPoupanca = new Poupanca(nomeCorrentistaPoupanca, bancoPoupanca, numeroContaPoupanca, saldoPoupanca, juros, dataVencimento);

// Exibir dados das contas
console.log(`Dados da Conta Corrente:`);
console.log(`Nome do Correntista: ${contaCorrente.nomeCorrentista}`);
console.log(`Banco: ${contaCorrente.banco}`);
console.log(`Número da Conta: ${contaCorrente.numeroConta}`);
console.log(`Saldo: ${contaCorrente.saldo}`);
console.log(`Saldo Especial: ${contaCorrente.saldoEspecial}`);

console.log(`\nDados da Conta Poupança:`);
console.log(`Nome do Correntista: ${contaPoupanca.nomeCorrentista}`);
console.log(`Banco: ${contaPoupanca.banco}`);
console.log(`Número da Conta: ${contaPoupanca.numeroConta}`);
console.log(`Saldo: ${contaPoupanca.saldo}`);
console.log(`Juros: ${contaPoupanca.juros}`);
console.log(`Data de Vencimento: ${contaPoupanca.dataVencimento}`);
