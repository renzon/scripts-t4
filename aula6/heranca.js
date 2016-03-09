function Pessoa() {
  this.nome = 'Renzo';
}

Pessoa.prototype = {
  cumprimentar: function () {
    return 'Olá, meu nome é ' + this.nome;
  }
};

function Homem() {
  this.sexo = 'Masculino';
  Pessoa.call(this);
}

var HomemPrototype = new Pessoa();
HomemPrototype.atividade = function () {
  return this.nome + ' é do sexo ' + this.sexo + '. portanto, joga futebol'
};
HomemPrototype.cumprimentar = function () {
  return 'Apertado de mão, meu nome é ' + this.nome
};

Homem.prototype = HomemPrototype;

var renzo = new Homem();
console.log(renzo.prototype);
var arihane = new Pessoa();
arihane.nome = 'Arihane';

console.log(renzo.nome);
console.log(renzo.cumprimentar());

console.log(arihane.nome);
console.log(arihane.cumprimentar());

console.log(renzo.idade);
console.log(arihane.idade);

Pessoa.prototype.idade = 33;
console.log(renzo.idade);
console.log(arihane.idade);
console.log(renzo.atividade());

function f(a, b) {
  console.log(this);
  console.log(a + b);
}

//f('a', 'b');
//var contexto={nome:'Contexto'};
//f.call(contexto,'A','B');
//f.apply(contexto,['alpha','bravo']);




















