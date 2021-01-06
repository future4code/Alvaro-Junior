// Exercício 3 - a)

type post = {
  autor: string,
  texto: string
}

const posts: post[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

// Exercício 3 - b)

// As entradas da função é um array de posts e um string contendo o autor que será pesquisado

function buscarPostsPorAutor(posts: post[], autorInformado:string) {
  return posts.filter(
    (post: post) => {
      return post.autor === autorInformado
    }
  )
}

const postDoAutor: post[] = buscarPostsPorAutor(posts, "Dobby")

console.log(postDoAutor)