// Exercícios de interpretação de código
// 1.

// O código verifica se um número digitado pelo usuário é par ou ímpar.
// O código imprimi no console "Passou no teste" quando o usuário digita um número par.
// O código imprimi no console "Não passou no teste" quando o usuário digita um número ímpar.

// 2.

// a. O código retorna o valor de um produto escolhido pelo usuário.

// b. Se o usuário escolher a fruta Maçã o resultado será "O preço da fruta, Maçã é R$ 2.25".

// c. Seria impresso no console: "O preço da fruta, Pêra é R$ 2.25""O preço da fruta, Pêra é R$ 5".

// 3.

// a. A primeira linha está declarando uma constante e atribuindo a ela um valor digitado pelo usuário.

// b. Quando o valor 10 for digitado será impresso na tela: "Esse número passou no teste".
// Caso o valor -10 for digitado o código não imprimirá nada.

// c. Sim, ocorrerá o erro de variável não definida. Pois como a variável mensagem foi declarada dentro do if,
// ela não existirá fora do escopo do if, uma vez que é uma variável let.

// Exercícios de escrita de código
//4.

let idade = Number(prompt("Digite sua idade"))

if (idade >= 18){
    console.log("Você pode dirigir.")
}else {
    console.log("Você nãp pode dirigir.")
}

// 5.

let turno = prompt("Em qual turno você estuda? (M para Matutino, V para Vespertino ou N para Noturno").toUpperCase()

if (turno === "M"){
    console.log("Bom Dia!")
}else if(turno === "V"){
    console.log("Boa Tarde!")
}else if(turno === "N"){
    console.log("Boa Noite!")
}else {
    console.log("Turno inválido, digite M, V ou N")
}

//6.

let mensagem

switch (turno){
    case "M":
        mensagem = "Bom Dia!"
        break
    case "V":
        mensagem = "Boa Tarde!"
        break
    case "N":
        mensagem = "Boa Noite!"
        break
    default:
        mensagem = "Turno inválido, digite M, V ou N"
        break
}

console.log(mensagem)

// 7.
let generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
let precoFilme = Number(prompt("Qual o valor do ingresso?"))

if (generoFilme === "fantasia" && precoFilme < 15){
    console.log("Bom filme")
} else {
    console.log("Escolha outro filme :(")
}

//DESAFIOS
// DESAFIO 1
let snack = prompt("Qual snack você deseja?")

if (generoFilme === "fantasia" && precoFilme < 15){
    console.log("Bom filme")
    console.log("... com " + snack)
} else {
    console.log("Escolha outro filme :(")
}

// DESAFIO 2
let nomeCompleto = prompt("Digite seu nome completo")
let tipoDeJogo = prompt("Qua o tipo de jogo? IN para internacional e DO para doméstico").toUpperCase()
let etapaDoJogo = prompt("Qual a etapa do jogo? SF para semi-final, DT para decisão de terceiro lugar e FI para final.").toUpperCase()
let categoria = Number(prompt("Qual a categoria do ingresso? (1, 2, 3 ou 4)"))
let quantidadeDeIngressos = Number(prompt("Quantos ingressos deseja?"))
let preco
let precofinal

switch(tipoDeJogo){
    case "DO":
        switch(etapaDoJogo){
            case "SF":
                switch(categoria){
                    case 1:
                        preco = 1320
                        break
                    case 2:
                        preco = 880
                        break
                    case 3:
                        preco = 550
                        break
                    case 4:
                        preco = 220
                        break
                }
                break
            case "DT":
                switch(categoria){
                    case 1:
                        preco = 660
                        break
                    case 2:
                        preco = 440
                        break
                    case 3:
                        preco = 330
                        break
                    case 4:
                        preco = 170
                        break
                }
                break
            case "FI":
                switch(categoria){
                    case 1:
                        preco = 1980
                        break
                    case 2:
                        preco = 1320
                        break
                    case 3:
                        preco = 880
                        break
                    case 4:
                        preco = 330
                        break
                }
                break
        }
        break
        case "IN":
        switch(etapaDoJogo){
            case "SF":
                switch(categoria){
                    case 1:
                        preco = 1320/4.1
                        break
                    case 2:
                        preco = 880/4.1
                        break
                    case 3:
                        preco = 550/4.1
                        break
                    case 4:
                        preco = 220/4.1
                        break
                }
                break
            case "DT":
                switch(categoria){
                    case 1:
                        preco = 660/4.1
                        break
                    case 2:
                        preco = 440/4.1
                        break
                    case 3:
                        preco = 330/4.1
                        break
                    case 4:
                        preco = 170/4.1
                        break
                }
                break
            case "FI":
                switch(categoria){
                    case 1:
                        preco = 1980/4.1
                        break
                    case 2:
                        preco = 1320/4.1
                        break
                    case 3:
                        preco = 880/4.1
                        break
                    case 4:
                        preco = 330/4.1
                        break
                }
                break
        }
        break
}

precoFinal = preco * quantidadeDeIngressos

console.log("---Dados da compra--- ")
console.log("Nome do cliente:  "+nomeCompleto)
if (tipoDeJogo === "DO"){
    console.log("Tipo do jogo:  Nacional")
}else{
    console.log("Tipo do jogo:  Internacional")   
}
if (etapaDoJogo === "SF"){
    console.log("Etapa do jogo:  Semi-final")
}else if (etapaDoJogo === "DT"){
    console.log("Etapa do jogo:  Decisão de 3º lugar")
}else {
    console.log("Etapa do jogo:  Final")
}
console.log("Quantidade de Ingressos:  "+quantidadeDeIngressos)
console.log("---Valores--- ")
if (tipoDeJogo === "DO"){
    console.log("Valor do ingresso:  R$ "+preco)
    console.log("Valor total:  R$ "+precoFinal)
}else{
    console.log("Valor do ingresso:  U$ "+preco)
    console.log("Valor total:  U$ "+precoFinal)  
}
