// Exercícios de interpretação de código

// 1.

//Será impresso:
// a. false
// b. false
// c. true
// e. boolean

// 2.

// Será impresso:
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 10

//Exercícios de escrita de código
// 1.
const idadeUsuario = Number(prompt("Qual a sua idade"))
const idadeAmigo = Number(prompt("Qual a idade d@ seu(sua) melhor amig@?"))

let maisVelho = idadeUsuario > idadeAmigo

console.log("Sua idade é maior que a do seu melhor amigo? " + maisVelho)

let diferençaDeIdade = idadeUsuario - idadeAmigo

console.log(diferençaDeIdade)

// 2.
let numeroPar = Number(prompt("Digite um número par"))

let restoDaDivisao = numeroPar % 2

console.log("O resto da divisão é: " + restoDaDivisao)

// Sempre que é digitado um valor par, o valor impresso é 0, e quando digitamos um valor impar, o valor impresso é 1

// 3. 
let listaDeTarefas = ["","",""]

listaDeTarefas[0] = prompt("Qual a primeira tarefa a realizar no dia?")
listaDeTarefas[1] = prompt("Qual a segunda tarefa a realizar no dia?")
listaDeTarefas[2] = prompt("Qual a terceira tarefa a realizar no dia?")

console.log(listaDeTarefas)

let indice = (Number(prompt("digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 ")))

listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas)

// 4.

let nomeDoUsuario = prompt("Digite seu nome")
let emailDoUsuario = prompt("Digite seu email")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + " !")

// Desafios extras

// 1.
let grau1 = 77
let grau2 = 80
let grau3 = 30

let grau1K = (grau1 - 32)* 5/9 + 273.15
let grau2F = grau2 * 9/5 + 32
let grau3F = grau3 * 9/5 + 32
let grau3K = grau3 + 273.15

console.log("77°F = " + grau1K + " K")
console.log("80°C = " + grau2F + " °F")
console.log("30°C = " + grau3F + " °F e " + grau3K + " K")

grau3 = Number(prompt("insira um valor em graus Celsius que ele deseja converter"))

grau3F = grau3 * 9/5 + 32
grau3K = grau3 + 273.15

console.log(grau3 + "°C = " + grau3F + " °F e " + grau3K + " K")

// 2.
let consumoResidencia = 280
let valorConsumo = consumoResidencia * 0.05

console.log("O valor a ser pago é: " + valorConsumo + " R$")

let descontoValor = 15

valorConsumo *= (1 - descontoValor / 100)

console.log("O valor a ser pago é: " + valorConsumo + " R$")

// 3.
// a.
let massaLb = 20
let massaKg
let massaOz = 10.5

massaKg = massaLb * 0.45359237

console.log("20lb equivalem a " + massaKg + " kg")

// b.

massaKg = massaOz / 35.274

console.log("10.5oz equivalem a " + massaKg + " kg")

// c.
let distanciaMilha = 100
let distanciaPe = 50

let distanciaMetro = distanciaMilha * 1609.344

console.log("100mi equivalem a " + distanciaMetro + " m")

// d.

distanciaMetro = distanciaPe / 3.2808

console.log("50ft equivalem a " + distanciaMetro + " m")

// e.
let volumeGalao = 103.56
let volumeXicara = 450

let volumeLitro = volumeGalao * 3.78541

console.log("103.56gal equivalem a " + volumeLitro + " l")

// f.
volumeLitro = volumeXicara * 0.24

console.log("450 xic equivalem a " + volumeLitro + " l")

// g.
volumeGalao = Number(prompt("Digite o volume em galao"))

volumeLitro = volumeGalao * 3.78541

console.log("103.56gal equivalem a " + volumeLitro + " l")

volumeXicara = Number(prompt("Digite o volume em xícaras"))

volumeLitro = volumeXicara * 0.24

console.log("450 xic equivalem a " + volumeLitro + " l")