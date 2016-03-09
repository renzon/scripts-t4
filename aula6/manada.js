var manadaVirgula = new ManadaVirgula();
var manadaSustenidaDupla = new ManadaSustenido();
var animas = [new Cachorro(), new Gato()];

animas.forEach(function (animal) {
  manadaVirgula.adicionar(animal);
  manadaSustenidaDupla.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(manadaVirgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(manadaSustenidaDupla.barulhos());