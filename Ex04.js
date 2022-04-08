//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário,
// assim como a quantidade de dias pelos quais o carro foi alugado. 
//Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let kmPercorridos = 869
let diaAlugados = 8
let valorPorDia = 60
let valorPorKm = 0.15
let valorKmDias = diaAlugados * valorPorDia
let valorKmRodado = kmPercorridos * valorPorKm
let preçoAPagar = valorKmRodado + valorKmDias
console.log('CALCULADORA DE ALUGUEL DE AUTOMÓVEL')
console.log(`Km percorridos: ${kmPercorridos} km`)
console.log(`Quantos dias do aluguel do carro? ${diaAlugados} dias`)
console.log(`O valor total a pagar é de ${preçoAPagar}`)