function derivar(func) {
  var deltaX = 0.00000000001;

  function derivada(x) {
    return (func(x + deltaX) - func(x)) / deltaX;
  }

  return derivada;

}

function reta(x) {
  return 2 * x + 1;
}
function parabola(x) {
  return x * x;
}

var retaDerivada = derivar(reta);

console.log(retaDerivada(0));
console.log(retaDerivada(1));

var parabolaDerivada = derivar(parabola);

console.log(parabolaDerivada(0));
console.log(parabolaDerivada(1));

