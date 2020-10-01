// Exercícios de interpretação de código

// EXERCÍCIO 1

// Será impresso o valor 5

// EXERCÍCIO 2

// Será impresso os seguintes valores:
// 19
// 21
// 23
// 25
// 27
// 30

// DESAFIO 1
// Será impresso as seguintes strings:
// 0
// 0
// 0
// 0
// 0
// 0
// 0
// 0
// 0
// 0

// Exercícios de escrita de código

//EXERCÍCIO 3

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a.

for(let numero of arrayOriginal){
    console.log(numero)
}

// b.

for(let numero of arrayOriginal){
    numero = numero/10
    console.log(numero)
}

// c.

const arrayPares = []

for(let numero of arrayOriginal){
    if (numero%2===0){
        arrayPares.push(numero)
    }
}
 console.log(arrayPares)

 // d.

for(let i=0;i<arrayOriginal.length;i++){
    console.log("O elemento do índex " + i + " é: " + arrayOriginal[i])
}

// e.

let maior = arrayOriginal[0]
let menor = arrayOriginal[0]

for (let numero of arrayOriginal){
    if (maior < numero){
        maior = numero
    }
    if (menor > numero){
        menor = numero
    }
}

console.log("O maior número é "+maior+" e o menor é "+menor)

//DESAFIO 2

let primeiroJogador = Number(prompt("Digite um número"))
let segundoJogador
let contador = 0

console.log("Vamos Jogar!")

while (segundoJogador !== primeiroJogador){
    segundoJogador = Number(prompt("Chute um número"))
    console.log("O número chutado foi: " + segundoJogador)
    if (segundoJogador > primeiroJogador){
        console.log("Errrrrrrrou, é menor")
    } else if(segundoJogador < primeiroJogador){
        console.log("Errrrrrrrou, é maior")
    } else {
        console.log("Acertou!!")
    }
    contador++
}

console.log("O número de tentativas foi: "+contador)

// DESAFIO 3

const numeroComputador = Math.floor(Math.random()*(100-1)+1)+1

let numeroUsuario

console.log("Vamos Jogar!")

while (numeroUsuario !== numeroComputador){
    numeroUsuario = Number(prompt("Chute um número"))
    console.log("O número chutado foi: " + numeroUsuario)
    if (numeroUsuario > numeroComputador){
        console.log("Errrrrrrrou, é menor")
    } else if(numeroUsuario < numeroComputador){
        console.log("Errrrrrrrou, é maior")
    } else {
        console.log("Acertou!!")
    }
    contador++
}