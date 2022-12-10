function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('José', 'Barros');

console.log(p1.nome);

class Pessoas{
    constructor (nome, cpf, nascimento){
        this.nome = nome;
        this.cpf = cpf;
        this.nascimento = nascimento;
    }
}

const p2 = new Pessoas('Jonas', '6468468468', '10.08.1822');
const p3 = new Pessoas('Casemiro', '256569366', '10.6.1988')

console.log(p2.nascimento);
console.log (p2.nome);
console.log(p3.nascimento);
console.log (p3.nome);