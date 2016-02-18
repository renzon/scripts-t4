var i = 2
console.log(i);
console.log('Hello World ' + i);
i = 'sadfsadfsadf';
console.log(i);
console.log(null);
console.log(undefined);
console.log(null == undefined);
console.log(null === undefined);
console.log('0' == 0);
console.log(0 == '0');
console.log(0 === '0');
var lista = [1, 2, 'sdfsadf'];

console.log(lista);
for (var i = 0; i < lista.length; ++i) {
  console.log(lista[i]);


}
lista[0] = 40;
console.log(lista);
lista.push(8);
console.log(lista);
lista.unshift(1);
console.log(lista);
lista.splice(1, 2);
console.log(lista);

function f(a, b) {
  console.log(a);
  console.log(b);
}

f(1, 2);
f();
f(1);







