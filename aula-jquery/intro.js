//console.log(jQuery);
$(document).ready(function () {
  var $cabecalhos = $('h1');
  var $cabecalho1 = $('#cabecalho');
  var $elementosComFilhos = $('.filhos');
  var $divs = $('div');
  var filhoCount = 1;

  $('#esconder').click(function (event) {
    console.log(event);
    $cabecalhos.hide();
  });

  $('#mostrar').click(function (event) {
    $cabecalho1.show();
  });

  $('#slide-up').click(function (event) {
    $cabecalho1.slideUp();
  });

  $('#slide-down').click(function (event) {
    $cabecalho1.slideDown();
  });

  $('#slide-toggle').click(function (event) {
    $cabecalho1.slideToggle();
  });

  $('#remover').click(function (event) {
    $elementosComFilhos.empty();
  });

  $('#adicionar').click(function (event) {
    ++filhoCount;
    $divs.prepend('<h2>Filho ' + filhoCount + '</h2>')
  });
});
