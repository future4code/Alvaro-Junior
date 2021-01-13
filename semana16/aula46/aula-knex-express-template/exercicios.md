### Ecercício 1

a) A resposta que temos quando utilizamos o raw é composta por um array de arrays, onde o primeiro array é o resultado efetivamente, e o segundo array são as configurações da resposta.

b) const getActorByName = async (name: string): Promise<any> => {
  try {
    const result = await connection            
      .select("*")            
      .from("Actor")            
      .where("name", `${name}`)

    return result[0]
  } catch (error) {
    throw new Error(error)    
  }
}

c)const getGenderCount = async (gender: string): Promise<any> => {
  try {
    const result = await connection
      .count("*")
      .from("Actor")
      .where("gender", `${gender}`)

    return result[0]
  } catch (error) {
    throw new Error(error)
  }
}

### Exercício 2

a) const updateActorSalary = async (salary: number, id: string): Promise<string> => {
  try {
    await connection("Actor")
      .update({salary: salary})
      .where("id", `${id}`)

    return "Salário atualizado"
  } catch (error) {
    throw new Error(error)
  }
}

b) const deleteActor = async (id: string): Promise<any> => {
  try {
    await connection("Actor")
      .where("id", `${id}`)
      .del()

    return "Ator deletado com sucesso!"
  } catch (error) {
    throw new Error(error)
  }
}

c) const genderSalaryAvg = async (gender: string): Promise<any> => {
  try {
    const result = await connection("Actor")
      .avg("salary as Average")
      .where("gender", gender)
    
    return result[0]
  } catch (error) {
    throw new Error(error)
  }
}

### Exercício 3

a) app.get('/actor/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await getActorById(id)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

b) app.get('/actor', async (req: Request, res: Response) => {
  try {
    const gender: string = req.query.gender as string
    const result = await getGenderCount(gender)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

### Exercício 4

a) app.post('/actor', async (req: Request, res:Response) => {
  try {
    const {id, salary} = req.body
    const result = await updateActorSalary(Number(salary), id)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

b) app.delete('/actor/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await deleteActor(id)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

### Exercício 5

const createMovie = async (
  id: string,
  name: string,
  sinopse: string,
  release_date: Date,
  rating: number,
  playing_limit_date: Date
): Promise<any> => {
  try {
    await connection
      .insert({
        id: id, 
        name: name, 
        sinopse: sinopse, 
        release_date: release_date, 
        rating: rating, 
        playing_limit_date: playing_limit_date
      })
      .into("Movies")
  } catch (error) {
    throw new Error(error)
  }
}

app.post('/movie', async (req: Request, res: Response) => {
  try {
    const {id, name, sinopse, release_date, rating, playing_limit_date} = req.body
    const result = createMovie(id, name, sinopse, release_date, Number(rating), playing_limit_date)

    res.status(200).send("Filme Cadastrado")
  } catch (error) {
    res.status(400).send(error.message)
  }
})