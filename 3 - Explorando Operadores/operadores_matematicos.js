const textoValor = "O valor do produto é: R$"
let idade = 30
console.log("Valor da minha variável " + idade)
//Adição
idade = 30 + 6
console.log("Operação de adição " + idade)

//Subtração 
let primeiroNumero = 1023
let segundoNumero = 23
console.log(primeiroNumero - segundoNumero)

//Multiplicação
let precoProduto = 100.99
let valorComTaxa = precoProduto * 2
console.log(textoValor + precoProduto + " reais, com a taxa fica: R$" + valorComTaxa + " reais.")

//Divisão
let notaDoMercado = 50.00
let pessoasParaDividir = 2
let divisao = notaDoMercado / pessoasParaDividir
console.log(textoValor + notaDoMercado + " reais, e o Valor da divisão é: " + divisao + " reais" )

//Módulo #resto
let calculo = 10 % 3 
console.log("Operação de módulo: " + calculo)