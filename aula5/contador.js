function imprimir() {
  console.log('Imprimindo');
}

function decorador(func, cont) {
  if (cont === undefined) {
    cont = 0;
  }

  function funcDecorada() {
    console.log(cont);
    func();
    ++cont;
  }

  return funcDecorada;
}

var imprimirDecorada = decorador(imprimir);
imprimirDecorada = decorador(imprimirDecorada, 10);

imprimirDecorada();
imprimirDecorada();
imprimirDecorada();
