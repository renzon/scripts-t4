function derivar(func) {
  var deltaX = 0.00000000001;

  function derivada(x) {
    return (func(x + deltaX) - func(x)) / deltaX;
  }

  return derivada;

}

function reta(x){
  return  x*x;
}

var retaDerivada=derivar(reta);

console.log(retaDerivada(0));
console.log(retaDerivada(1));

