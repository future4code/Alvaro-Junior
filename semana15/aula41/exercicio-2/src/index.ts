// Exercício 2 - a)

// A entrada dessa função é um array de numeros, e a saída é um objeto contendo o maior número
// do array, o menor número do array e a média de todos os números

////////////////////////////////////
// Exercício 2 - b)
type estatistica = {
  maior: number,
  menor: number,
  media: number
}
////////////////////////////////////

function obterEstatisticas(numeros: number[]) {

  const numerosOrdenados = numeros.sort(
    // (a, b) => a - b
    ////////////////////////////////////
    // Exercício 2 - b)
    (a: number, b: number) => a - b
    ////////////////////////////////////
  )

  // let soma = 0
  ////////////////////////////////////
  // Exercício 2 - b)
  let soma: number = 0
  ////////////////////////////////////

  for (let num of numeros) {
      soma += num
  }

  const estatisticas: estatistica = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  }

  return estatisticas
}

const numeros:number[] = [21, 18, 65, 44, 15, 18]
const estatisticas:object = obterEstatisticas(numeros)
console.log(estatisticas)

// Exercício 2 - c)

type amostraDeIdades = {

  numeros: number[],

  obterEstatisticas: (numeros: number[]) => estatistica
}