



var f=function f(func){
  console.log('Executando f');
};

console.log(f);
var g=f;
f=1;
console.log(g);
g();

function h(func){
  function nova(x){
    return func(x+1);
  }

  return nova;
}

function reta(x){
  return x;
}

var retaComShift=h(reta);

console.log(retaComShift);
console.log(retaComShift(1));

