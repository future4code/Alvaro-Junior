import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/
/************************Actor Table***************************/
const getActorByName = async (name: string): Promise<any> => {
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

const getGenderCount = async (gender: string): Promise<any> => {
  try {
    const result = await connection
      .count("* as Quantidade")
      .from("Actor")
      .where("gender", `${gender}`)

    return result[0]
  } catch (error) {
    throw new Error(error)
  }
}

const updateActorSalary = async (salary: number, id: string): Promise<any> => {
  try {
    await connection("Actor")
      .update({salary: salary})
      .where("id", `${id}`)

    return "Salário atualizado"
  } catch (error) {
    throw new Error(error)
  }
}

const deleteActor = async (id: string): Promise<any> => {
  try {
    await connection("Actor")
      .where("id", `${id}`)
      .del()

    return "Ator deletado com sucesso!"
  } catch (error) {
    throw new Error(error)
  }
}

const genderSalaryAvg = async (gender: string): Promise<any> => {
  try {
    const result = await connection("Actor")
      .avg("salary as Average")
      .where("gender", gender)
    
    return result[0]
  } catch (error) {
    throw new Error(error)
  }
}

const getActorById = async (id: string): Promise<any> => {
  const result = await connection
    .select("*")
    .from ("Actor")
    .where("id", id)

	return result[0]
}

/**************************************************************/

app.get('/actor/search', async (req: Request, res: Response) => {
  try {
    const name: string = req.query.name as string
    const result = await getActorByName(name)

    res.status(200).send({"Actor": result})
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.get('/actor', async (req: Request, res: Response) => {
  try {
    const gender: string = req.query.gender as string
    const result = await getGenderCount(gender)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.post('/actor', async (req: Request, res:Response) => {
  try {
    const {id, salary} = req.body
    const result = await updateActorSalary(Number(salary), id)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.delete('/actor/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await deleteActor(id)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.get('/actor/avgsalary/:gender', async (req: Request, res: Response) => {
  try {
    const gender = req.params.gender
    const result = await genderSalaryAvg(gender)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.get('/actor/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const result = await getActorById(id)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

/**************************************************************/

/**********************Movies Table****************************/
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
/**************************************************************/
app.post('/movie', async (req: Request, res: Response) => {
  try {
    const {id, name, sinopse, release_date, rating, playing_limit_date} = req.body
    const result = createMovie(id, name, sinopse, release_date, Number(rating), playing_limit_date)

    res.status(200).send("Filme Cadastrado")
  } catch (error) {
    res.status(400).send(error.message)
  }
})
/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}