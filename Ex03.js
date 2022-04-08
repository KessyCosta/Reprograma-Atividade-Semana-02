//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom 
//(10%) e o valor total a ser pago.

console.log('CALCULADORA DE TAXA DO GARÇOM')
let valorJantar = 326.50
let taxaServiço = 0.1
let taxaGarçom = valorJantar * taxaServiço
let valorTotal = valorJantar + taxaGarçom
console.log(`Valor do jantar: ${valorJantar}`)
console.log(`Taxa de 10% do garçom: ${taxaGarçom}`)
console.log(`Valor total a pagar: ${valorTotal}`)
