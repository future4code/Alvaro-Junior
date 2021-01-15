import express, { Express,  Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import dayjs from "dayjs";
import { user } from "./types/user";
import { task } from "./types/task";
import { getAllUsers, getUserById, insertUser, updateUser } from "./data/UserDao";
import { getTaskByCreatorUserId, getTaskById, insertTask } from "./data/TaskDao";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

// endpoints aqui
app.get('/user/all', async (req: Request, res: Response) => {
  try {
    const result = await getAllUsers()

    res.status(200).send({users: result})
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.get('/user/:id', async (req: Request, res: Response) => {
  try {
    if(!req.params.id) {
      throw new Error("ID inválido")
    }

    const id:string = req.params.id
    const result = await getUserById(id)

    if(!result) {
      throw new Error("Usuário não encontrado!")
    }

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.get('/task', async (req: Request, res: Response) => {
  try {
    const id: string = req.query.creatorUserId as string

    const result = await getTaskByCreatorUserId(id)

    if(!result) {
      throw new Error("Usuário não encontrado!")
    }

    result.map((usertask: any) => {
      return usertask.limitDate = dayjs(usertask.limitDate).format('DD/MM/YYYY')
    })

    res.status(200).send({tasks: result})
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.get('/task/:id', async (req: Request, res: Response) => {
  try {
    if(!req.params.id) {
      throw new Error("ID inválido")
    }

    const id:string = req.params.id
    let result = await getTaskById(id)

    if(!result) {
      throw new Error("Usuário não encontrado!")
    }

    result.limitDate = dayjs(result.limitDate).format('DD/MM/YYYY')

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.post('/user', async (req: Request, res: Response) => {
  try {
    if (!req.body.name || !req.body.nickname || !req.body.email) {
      throw new Error("Nome, Nickname ou email não informados!")
    }
    const {name, nickname, email} = req.body
    const id: string = String(Date.now())+"-u"
    const newUser:user = {id: id, name: name, nickname: nickname, email: email}
    const result = await insertUser(newUser)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.post('/task', async (req: Request, res: Response) => {
  try {
    if (!req.body.title || !req.body.description || !req.body.limitDate || !req.body.creatorUserId) {
      throw new Error("Título, descrição, data limite ou id do criador não informados!")
    }
    const {title, description, limitDate, creatorUserId} = req.body
    const id: string = String(Date.now())+"-t"
    const limitDateArray = limitDate.split("/")
    const newLimitDate = limitDateArray[2]+"-"+limitDateArray[1]+"-"+limitDateArray[0]
    const newTask: task = {id: id, title: title, description: description, limitDate: new Date(newLimitDate), creatorUserId: creatorUserId}
    const result = await insertTask(newTask)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

app.put('/user/edit/:id', async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id
    let body = {}

    if (!req.body.name && !req.body.nickname && !req.body.email) {
      throw new Error("Nenhuma alteração enviada!")
    }

    if (req.body.name) {
      if (req.body.name === "") {
        throw new Error("Novo nome inválido")
      } else {
        body = {... body, name: req.body.name}
      }
    }

    if (req.body.nickname) {
      if (req.body.nickname === "") {
        throw new Error("Novo nome inválido")
      } else {
        body = {... body, nickname: req.body.nickname}
      }
    }

    if (req.body.email) {
      if (req.body.email === "") {
        throw new Error("Novo nome inválido")
      } else {
        body = {... body, email: req.body.email}
      }
    }

    const result = await updateUser(id, body)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
