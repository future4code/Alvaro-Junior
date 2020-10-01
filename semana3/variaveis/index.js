// Exercício 1
// Será impresso os valores:
// 10
// 10, 5

// Exercício 2
// Será impresso os valores:
// 10, 10, 10


// Exercícios de escrita de código
// 1.

let name
let age

console.log(typeof name)
console.log(typeof age)

// // O tipo impresso foi undefined porque nenhum tipo de dado foi atribuido as variáveis.

name = prompt("Qual o seu nome?")
age = Number(prompt("Qual a sua idade?"))

console.log(typeof name)
console.log(typeof age)

// // O prompt será sempre do tipo string, por isso temos de utilizar o Number.

console.log("Olá " + name + ", você tem " + age + " anos")

// 2.

let country = prompt("Em qual país você mora?")
console.log("1. Em qual país você mora?")
console.log("Resposta : " + country)

let state = prompt("Em qual estado você mora?")
console.log("2. Em qual estado você mora?")
console.log("Resposta : " + state)

let city = prompt("Em qual cidade você mora?")
console.log("3. Em qual cidade você mora?")
console.log("Resposta : " + city)

let movie = prompt("Qual é seu filme preferido?")
console.log("4. Qual é seu filme preferido?")
console.log("Resposta : " + movie)

let song = prompt("Qual é sua música preferida?")
console.log("4. Qual é sua música preferida?")
console.log("Resposta : " + song)

// 3.

let foodArray = ["Feijoada", "Lasanha", "Macarronada", "Pizza", "Sushi"]
console.log("Essas são as minhas comidas preferidas: ")
console.log(foodArray[0])
console.log(foodArray[1])
console.log(foodArray[2])
console.log(foodArray[3])
console.log(foodArray[4])

foodArray[1]=prompt("Qual o seu prato favorito?")
console.log(foodArray[0])
console.log(foodArray[1])
console.log(foodArray[2])
console.log(foodArray[3])
console.log(foodArray[4])

// 4.

let questions = ['True','True','True']
questions[0] = Boolean(prompt("Você gosta de assistir filmes?"))
questions[1] = Boolean(prompt("Você gosta de escutar músicas?"))
questions[2]= Boolean(prompt("Você gosta de fazer compras?"))

console.log("Você gosta de assistir filmes?" + questions[0])
console.log("Você gosta de escutar músicas?" + questions[1])
console.log("Você gosta de fazer compras?" + questions[2])