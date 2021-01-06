// Exercício 1 - a)

let minhaString = "String"
// let minhaString: string = 3
// Ao atribuir um número a variável minhaString ocorre um erro, pois era experada uma entrada do 
// tipo string.

// Exercício 1 - b)

let meuNumero: number = 3
// para que a variável possa receber tanto números quanto strings é necessário fazer o union type, 
// de forma que a declaração ficaria: 
// let meuNumero: number | string = 3

// Exercício 1 - c)

///////////////////////////////////////
// enum do Exercício 1 - e)
enum Cor {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta"
} 
///////////////////////////////////////

type pessoa = {
  nome: string,
  idade: number,
  // corFavorita: string
  /////////////////////////////////////
  // tipagem da corFavorita do Exercício 1 - e)
  corFavorita: Cor
  /////////////////////////////////////
}

const alvaro: pessoa = {
  nome: "Álvaro",
  idade: 29,
  // corFavorita: "Azul"
  /////////////////////////////////////
  // corFavorita do Exercício 1 - e)
  corFavorita: Cor.AZUL
  /////////////////////////////////////
}

// Exercício 1 - d)

const mateus: pessoa = {
  nome: "Mateus",
  idade: 24,
  // corFavorita: "Verde"
  /////////////////////////////////////
  // corFavorita do Exercício 1 - e)
  corFavorita: Cor.VERDE
  /////////////////////////////////////
}

const diana: pessoa = {
  nome: "Diana",
  idade: 23,
  // corFavorita: "Vermelho"
  /////////////////////////////////////
  // corFavorita do Exercício 1 - e)
  corFavorita: Cor.VERMELHO
  /////////////////////////////////////
}

const fernanda: pessoa = {
  nome: "Fernanda",
  idade: 25,
  // corFavorita: "Violeta"
  /////////////////////////////////////
  // corFavorita do Exercício 1 - e)
  corFavorita: Cor.VIOLETA
  /////////////////////////////////////
}