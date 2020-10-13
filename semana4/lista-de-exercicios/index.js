// Lista de Exercícios

// Exercícios de Interpretção  de código

// EXERCÍCIO 1

// A função conversorDeMoeda converte valores em dolar para real, para isso o usuário deve informar a cotação do dolar 
// e o valor a ser convertido. 
// Ao final o valor da conversão em reais é impressa no console.

// EXERCÍCIO 2

// A função investeDinheiro calcula quanto será o valor após um investimento, ela aceita os investimentos Poupança,
// Renda Fixa, CDB e Ações. Para calcular a função mutiplica o valor investido pela taxa de juros de cada tipo de 
// investimento. 
// O código ainda declara duas constantes novoMontante e segundoMontante que irão retornar um investimento em Ações
// com o valor inicial de 150 e um investimento em Tesouro Direto com valor inicial de 200 respectivamente.
// Ao final as constantes são impressas no console.
// De forma que no console será impresso:
// 165
// TIPO DE INVESTIMENTO INFORMADO INCORRETO

// EXERCÍCIO 3

// O código inicia declarando 3 arrays, numeros que é um array de numeros, array1 e array2 que são vazios. Após isso
// o array numeros entra em um laço for of, onde os elementos serão avaliados par ou não, caso sejam par serão inseridos
// no array1, caso ímpar serão adicionados no array2.
// Por fim, é impresso no console a quantidade total de números do array numeros, assim como do array1 (numeros pares) e
// array2 (numeros impares).
// De forma que no console será impresso:
// 14
// 6
// 8

//EXERCÍCIO 4

// O código inicia declarando o array numeros que é um array de numeros, e duas variáveis, numero1 que recebe infinito e 
// numero2 que recebe 0. Após isso o array numeros entra em um laço for of, onde será atribuido a variável numero1 o menor 
// elemento do array numeros, e a variável numero2 será atribuido o maior elemento do array numeros. Ao final do código as
// variáveis numero1 e numero2, contendo o menor e maior elemento do array numeros respectivamente, serão impressas no console.
// De forma que no console será impresso:
// -10
// 283

// Exercícios de Lógica de Programação

// EXERCÍCIO 1

// Para percorrer/iterar uma lista podemos usar laços de repetição, while, for ou for of.
// Para exemplificar faremos um programa que a partir de um array retorne os elementos pares e impares de um array.

const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283]

// while
let arrayPares = []
let arrayImpares = []

let i = 0

while (i < numeros.length){
    if(numeros[i] % 2 === 0){
        arrayPares.push(numeros[i])
    } else {
        arrayImpares.push(numeros[i])
    }
    i++
}

console.log(arrayPares)
console.log(arrayImpares)

// for
arrayPares = []
arrayImpares = []

for(i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        arrayPares.push(numeros[i])
    } else {
        arrayImpares.push(numeros[i])
    }
}

console.log(arrayPares)
console.log(arrayImpares)

// for of
arrayPares = []
arrayImpares = []

for (numero of numeros){
    if(numero % 2 === 0){
        arrayPares.push(numero)
    } else {
        arrayImpares.push(numero)
    }
}

console.log(arrayPares)
console.log(arrayImpares)

// EXERCÍCIO 2

// a. O valor da expressão retornará false, pois o operador lógico && retorna verdadeiro apenas se todas as condições forem 
// true. Como o booleano 2 e o booleano 4 retornam false a expressão retornará false.

// b. O valor da expressão retornará false, pois o operador || retorna true se ao menos uma condição for true. Podemos perceber
// que a primeira expressão (booleano1 && booleano2) retornar false, como !booleano retorna false a expressão geral retorna false.

// c. O valor da expressão retornará true, pois a primeira expressão (booleano 2 || booleano 3) retorna true e a segunda expressão
// (booleano4 || booleano 1) também retorna true, por isso a expressão geral também retornará true.

// d. O valor da expressão retornará true, pois a primeira expressão !(booleano2 && booleano3) retorna true uma vez que a 
// exclamação faz com que o valor retornado seja o oposto da expressão dentro dos parentesis, e a segunda expressão retorna 
// false, contudo como o operador || retornará true se ao menos uma das condições forem true.

// e. O valor da expressão retornará true, pois a segunda expressão (!booleano 4 && booleano 3 && booleano 3) retornará verdadeiro,
<<<<<<< HEAD
// e como o operador || retornará true se ao menos uma das condições forem true, a expressão geral retornará true. 
=======
// e como o operador || retornará true se ao menos uma das condições forem true, a expressão geral retornará true.
>>>>>>> 6d5ff5d8ff5d25e3a0e690c022449cc800d13e4c

// EXERCÍCIO 3

// O código do meu colega não funcionará como o experado pois ele retornará sempre um numero par a mais, uma vez que ele está usando
// a condição i <= quantidadeDeNumerosPares, também a constante quantidadeDeNumerosPares não está recebendo nenhum valor, e por fim
// o indice i não está sendo atualizado após cada iteração para resolver esse problema deve-se apenas alterar a condição para i <= quantidadeDeNumerosPares e declara a 
// constantequantidadeDeNumerosPares e atualizar o indice i ao final de cada iteração.

const quantidadeDeNumerosPares = Number(prompt("Digite a quantidade de números pares desejada!"))
i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
<<<<<<< HEAD
} 
=======
}
>>>>>>> 6d5ff5d8ff5d25e3a0e690c022449cc800d13e4c

// EXERCÍCIO 4

const tipoTriangulo = (a,b,c) => {
    if ((a === b) && (b === c)){
        return "Equilátero"
    } else if ((a !== b) && (b !== c) && (a !== c)){
        return "Escaleno"
    } else {
        return "Isóceles"
    }
}

<<<<<<< HEAD
console.log (tipoTriangulo(4,4,4))
console.log (tipoTriangulo(4,4,3))
console.log (tipoTriangulo(4,3,4))
console.log (tipoTriangulo(3,4,4))
console.log (tipoTriangulo(3,4,5))
=======
console.log("Lados do triangulo: 4,4,4")
console.log(tipoTriangulo(4,4,4))
console.log("Lados do triangulo: 4,4,3")
console.log(tipoTriangulo(4,4,3))
console.log("Lados do triangulo: 4,3,4")
console.log(tipoTriangulo(4,3,4))
console.log("Lados do triangulo: 3,4,4")
console.log(tipoTriangulo(3,4,4))
console.log("Lados do triangulo: 3,4,5")
console.log(tipoTriangulo(3,4,5))
>>>>>>> 6d5ff5d8ff5d25e3a0e690c022449cc800d13e4c

// EXERCÍCIO 5

const comparadorDeNumeros = (a, b) => {
    console.log("O maior é: "+maiorNumero(a, b))
    console.log(a+" "+divisivel(a, b)+" "+b)
    console.log(b+" "+divisivel(b, a)+" "+a)
    console.log("A diferença entre eles é "+diferenca(a, b))
}

const maiorNumero = (a, b) => {
    if (a > b){
        return a
    } else {
        return b
    }
}

const divisivel = (a, b) => {
    if (a % b === 0){
        return "é divisível por"
    } else {
        return "não é divisível por"
    }
}

const diferenca = (a, b) => {
    if (a > b){
        return a - b
    } else {
        return b - a
    }
<<<<<<< HEAD
} 
=======
}
>>>>>>> 6d5ff5d8ff5d25e3a0e690c022449cc800d13e4c

comparadorDeNumeros(15,30)

// Exercícios de Funções

// ECERCÍCIO 1

let maior = -Infinity
let segundoMaior 
let menor = Infinity
let segundoMenor 

const segundoMaiorEMenor = (arrayDeNumeros) => {
    for (i = 0; i < arrayDeNumeros.length; i++){
        if (maior < arrayDeNumeros[i]){
            segundoMaior = maior
            maior = arrayDeNumeros[i]
        }
    }
    for (i = 0; i < arrayDeNumeros.length; i++){
        if (menor > arrayDeNumeros[i]){
            segundoMenor = menor
            menor = arrayDeNumeros[i]
        }
    }
    console.log("O segundo maior é: "+segundoMaior)
    console.log("O segundo menor é: "+segundoMenor)
    console.log(arrayDeNumeros)
}

<<<<<<< HEAD
segundoMaiorEMenor(numeros) // O array numeros foi declarado no Exercício 1 de Lógica de Programação 
=======
segundoMaiorEMenor(numeros) // O array numeros foi declarado no Exercício 1 de Lógica de Programação
>>>>>>> 6d5ff5d8ff5d25e3a0e690c022449cc800d13e4c

//EXERCÍCIO 2

const funcaoNaoNomeada = function() {
    window.alert("Hello Future4")
}

<<<<<<< HEAD
const resultado = funcaoNaoNomeada() 

// Exercícios de Objetos

// EXERCÍCIO 1

// Array é uma matriz onde se pode guardar dados de mesmo tipo. Um Objeto é uma coleção de propriedades,
// onde cada elemento é do mesmo tipo e tem propriedades de mesmo tipo. O array é bem usada para armazenar 
// valores de mesmo tipo em uma única variável, muito bom quando você tem grandes lotes de dados para 
// serem armazenados e analisados, já os objetos é mais indicado quando se tem uma coleção de dados
// relacionados entre si.

// EXERCÍCIO 2

function criaRetangulo(lado1, lado2){
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }

    return `largura ${retangulo.largura}, altura ${retangulo.altura}, perímetro ${retangulo.perimetro} e área ${retangulo.area}`
}

console.log(criaRetangulo(8,9))
=======
const resultado = funcaoNaoNomeada()
>>>>>>> 6d5ff5d8ff5d25e3a0e690c022449cc800d13e4c
