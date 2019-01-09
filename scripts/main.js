// operadores matematicos
// var a = 2;
// var b = 3;
// var c = 'Olá mundo!';
// var soma = a + b;
// var sub = a - b;  
// var mult = a * b;
// var div = a / b;

// alert(soma);
// alert(sub);
// alert(mult);
// alert(div);

// mótulo, apresenta o valor do resto
// alert(8%2);

// operador de atribuição
// var a = x
// operador de comparação
// var a == x

// operador de comparação de valor e tipo
// var a === x

//estruturas condicionais
// if (c % 2 == 1) {
//   alert('número ímpar');
// } else if (c == 0) {
//   alert ('número par');
// } else {
//   alert ('valor inválido');
// }

// estruturas de repetição
// while (laço/enquanto)
// var i = 0;
// while (i <3) {
//   alert(i);
//   i = i+1;
// }

// for (laço/enquanto)
// for (var j = 0; j < 3; j++) {
//   alert(j);
// }

// tipos de dados
// var inteiro = 6;
// var flutuante = 4.5;
// var boleano = false;
// var nulo = null;
// var indefinido = undefined;
// var string = 'Olá Mundo!';

// var lista = ['laranja', 'maça', 'banana'];

// alert(lista[0]);
// tipos de dados com integração de laço
// for (item in lista) {
//   alert(lista[item]);
//   console.log(lista[item]);
// }

// funcoes
// function soma(a, b) {
//   console.log(a + b);
// }
// soma (2,2);

// function subtracao(a, b) {
//   return a-b;
// }
// var sub = subtracao(5, 3)
// console.log(sub);

// function multiplicacao(a, b){
//   return a*b;
// }
// console.log(multiplicacao(5,5));

// eventos
// function mensagem(nome) {
//   alert('Não clique novamente '+nome);
//   alert('Volte aqui '+nome);
//   alert('Bem-vindo '+nome);
// }

// DOM
// function mudarCor(cor) {
//   var elemento = document.getElementById('mensagem');
//   elemento.style.background = cor;
//   elemento.style.color = 'white';
// }

function valida() {
  var nome = document.getElementById('nome');
  if (nome.value == "") {
    alert('O campo não pode ser enviado em branco.')
  } else {
    alert('Parabéns ' + nome.value + ', seu formulario foi enviado com sucesso.')
  }
}
