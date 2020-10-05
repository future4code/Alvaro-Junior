// Exercícios de interpretação de código

// EXERCÍCIO 1

// a. Será impresso os valores 10 e 50

// b. Não seria impresso nenhum valor, mas a função retornaria os valores 10 e 50.

// EXERCÍCIO 2

// a. As impressões serão: Darvas, Caio, João.

// b. As impressões seriam: Amanda, Caio, Undefined.

// EXERCÍCIO 3

// A função retorna um array que modifica um array de entrada, elevando ao quadrado todos os valores par do array original.

// Exercícios de escrita de código

//EXERCÍCIO 4

// a.

const dadosAluno1 = function (){
    console.log("Eu sou Álvaro, tenho 29 anos, moro em Natal e sou estudante.")
}

let aluno = dadosAluno1()

// b.

const dadosAluno2 = function(nome, idade, cidade, confirmacao){
    if (confirmacao === true){
        return "Eu sou "+nome+", tenho "+idade+" anos, moro em "+cidade+" e sou estudante."
    } else {
        return "Eu sou "+nome+", tenho "+idade+" anos, moro em "+cidade+" e não sou estudante."
    }
}

aluno = dadosAluno2("Álvaro", 29, "Natal", true)
console.log(aluno)

//EXERCÍCIO 5

// a. 

const soma = function (a, b){
    return a+b
}

let resultado = soma(4,6)
console.log(resultado)

// b.
const maior = function (a, b){
    if (a >= b){
        return true
    } else {
        return false
    }
}

resultado = maior(9,9)
console.log(resultado)

// c. 
const repetir10Vezes = function (palavra){
    for (let i = 0; i<10 ; i++){
        console.log(palavra)
    }
}

resultado = repetir10Vezes("amor")

// EXERCÍCIO 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a.
const tamanho = function(array){
    return array.length
}
resultado = tamanho(array)
console.log(resultado)

// b.
const parOuImpar = function(numero){
    if (numero%2 === 0){
        return true
    } else {
        return false
    }
}

resultado = parOuImpar(10)
console.log(resultado)

// c.
const pares1 = function(array){
    let quantidade = 0
    for (let i = 0; i < array.length; i++){
        if (array[i]%2 === 0){
            quantidade++
        }
    }
    return quantidade
}

resultado = pares1(array)
console.log(resultado)

// d.
const pares2 = function(array){
    let quantidade = 0
    for (let i = 0; i < array.length; i++){
        if (parOuImpar(array[i])){
            quantidade++
        }
    }
    return quantidade
}

resultado = pares2(array)
console.log(resultado)

// DESAFIOS

// DESAFIO 1
// 1.
const repetir = (parametro) =>{
    console.log(parametro)
}

resultado = repetir(5)

// 2.

const somar = (numero1, numero2) => {
    resultado = repetir (numero1+numero2)
}

resultado = somar(5, 6)

// DESAFIO 2

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// a.
const paresDoArray = function(array){
    let arrayFinal = []

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            arrayFinal.push(array[i]*2)
        }
    }
    return arrayFinal
}

resultado = paresDoArray(numeros)
console.log(resultado)

// b.
const maiorDoArray = function(array){
    let maior = array[0]

    for (let i of array){
        if (maior < i){
            maior = i
        }
    }
    return maior
}

resultado = maiorDoArray(numeros)
console.log(resultado)

// c.
const indiceMaiorDoArray = function(array){
    let maior = array[0]
    let indice = 0

    for (let i = 0; i < array.length; i++){
        if (maior < array[i]){
            maior = array[i]
            indice = i
        }
    }
    return indice
}

resultado = indiceMaiorDoArray(numeros)
console.log(resultado)

const inversorDeArray = function(array){
    let arrayFinal=[]
    for (let i = array.length-1; i > 0; i--){
        arrayFinal.push(array[i])
    }
    return arrayFinal
}

resultado = inversorDeArray(numeros)
console.log(resultado)