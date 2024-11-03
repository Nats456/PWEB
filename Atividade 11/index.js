//1 Forma Literal

const Funcionario1 = {
    matricula: '123456',
    nome: 'João Silva',
    funcao: 'Desenvolvedor'
};



//2 Usando Construtor

function Funcionario(matricula, nome, funcao) {
    this.matricula = matricula;
    this.nome = nome;
    this.funcao = funcao;
}

const funcionario1 = new Funcionario('123456', 'Maria Oliveira', 'Analista');

//3 Criando uma classe como se fosse Java

class Funcionario {
    constructor(matricula, nome, funcao) {
        this.matricula = matricula;
        this.nome = nome;
        this.funcao = funcao;
    }
}

const funcionario2 = new Funcionario('123456', 'Carlos Pereira', 'Gerente');


