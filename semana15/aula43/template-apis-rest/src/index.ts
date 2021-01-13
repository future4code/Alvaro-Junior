//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import { stringify } from 'querystring';
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

enum type {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type user = {
    id: number,
    name: string,
    email: string,
    type: type,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: type.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: type.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: type.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: type.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: type.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: type.ADMIN,
        age: 60
    }
]

//--------------------------------------------------------------//
// Exercício 1

// a) Para busque todos os usuários de uma lista devemos utilizar o método get

// b) A entidade que está sendo manipulada é "users/all"
app.get("/users/all", (req: Request, res: Response) => {
  try{

    const result: user[] = users
  
    res.status(200).send(result)

  } catch {

  }
})
//--------------------------------------------------------------//

//--------------------------------------------------------------//
// Exercício 2

// a) Passei os parâmetros para o endpoint como params, pois eu quero apenas pessoas com aquele tipo,
// não podendo pesquisar mais de um tipo por vez.

// b) Para que apenas types válidos sejam utilizados podemos utilizar o enum, e no FrontEnd colocar
// a opção como um select com apenas os types validos.

app.get("/users/:type", (req:Request, res:Response) => {
  let errorCode: number = 400

  try{
    if(req.params.type.toUpperCase() !== "NORMAL" && req.params.type.toUpperCase() !== "ADMIN") {
      errorCode = 422
      throw new Error("Tipo inválido!")
    }

    const result: user[] = users.filter((u:user) => u.type.toUpperCase() === req.params.type.toUpperCase())
  
    res.status(200).send(result)

  }catch(error){
    res.status(errorCode).send(error.message)
  }
})
//--------------------------------------------------------------//

//--------------------------------------------------------------//
// Exercício 3 

// a) O tipo de envio de parâmetro que vamos utilizar é o query parameters.

// b) Para isso utilizamos o try catch

app.get("/users", (req:Request, res: Response) => {

  let errorCode: number = 400

  try{

    const name: string = req.query.name as string
    const myUser = users.find(((u: user) => u.name.toLowerCase() === name.toLowerCase()))

    if (!myUser) {
      errorCode = 404
      throw new Error("Usuário não encontrado")
    }
  
   res.status(200).send(myUser)

  }catch (error){
    res.status(errorCode).send(error.message)
  }
})
//--------------------------------------------------------------//

//--------------------------------------------------------------//
// Exercício 4

// a) Ao alterar o método post para put o endpoint funcionou da mesma maneira.

// b) Não pois o PUT insere os dados de forma direta, sem muitas verificações ou consultas em 
// outros lugares

app.post("/users", (req: Request, res: Response) => {

  let errorCode: number = 400

  try{
    const body: user = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age
    }

    if (!req.body.name || !req.body.email || !req.body.type || !req.body.age) {
      errorCode = 422
      throw new Error("Algum campo inválido, preencha corretamente")
    }

    users.push(body)

    res.status(200).send("Usuário inserido com sucesso")
  }catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.put("/users", (req: Request, res: Response) => {

  let errorCode: number = 400

  try{
    const body: user = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
      age: req.body.age
    }

    if (!req.body.name || !req.body.email || !req.body.type || !req.body.age) {
      errorCode = 422
      throw new Error("Algum campo inválido, preencha corretamente")
    }

    users.push(body)

    res.status(200).send("Usuário inserido com sucesso")
  }catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//--------------------------------------------------------------//
// Exercício 5

app.put("/users/edit/:id", (req: Request, res: Response) => {
  let errorCode: number = 400

  try{
    const userIndex = users.findIndex((u: user) => u.id === Number(req.params.id))

    if (userIndex === -1) {
      errorCode = 404
      throw new Error("Usuário não encontrado!")
    }

    if (isNaN(Number(req.params.id))){
      errorCode = 422
      throw new Error("ID inválido")
    }

    if (!req.body.name && !req.body.email && !req.body.type && !req.body.age) {
      errorCode = 422
      throw new Error("Nenhuma alteração enviada!")
    }

    if (req.body.name) {
      users[userIndex].name = req.body.name
    }
    if (req.body.email) {
      users[userIndex].email = req.body.email
    }
    if (req.body.type) {
      users[userIndex].type = req.body.type
    }
    if (req.body.age) {
      users[userIndex].age = req.body.age
    }

    res.status(200).send("Usuário alterado com sucesso!")
  }catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//--------------------------------------------------------------//

//--------------------------------------------------------------//
// Exercício 6

app.patch("/users/edit/:id", (req: Request, res: Response) => {
  let errorCode: number = 400

  try{
    const userIndex = users.findIndex((u: user) => u.id === Number(req.params.id))

    if (userIndex === -1) {
      errorCode = 404
      throw new Error("Usuário não encontrado!")
    }

    if (isNaN(Number(req.params.id))){
      errorCode = 422
      throw new Error("ID inválido")
    }

    if (!req.body.name && !req.body.email && !req.body.type && !req.body.age) {
      errorCode = 422
      throw new Error("Nenhuma alteração enviada!")
    }

    if (req.body.name) {
      users[userIndex].name = req.body.name
    }
    if (req.body.email) {
      users[userIndex].email = req.body.email
    }
    if (req.body.type) {
      users[userIndex].type = req.body.type
    }
    if (req.body.age) {
      users[userIndex].age = req.body.age
    }

    res.status(200).send("Usuário alterado com sucesso!")
  }catch (error) {
    res.status(errorCode).send(error.message)
  }
})
//--------------------------------------------------------------//

//--------------------------------------------------------------//
//Exercício 7

app.delete("/users/delete/:id", (req: Request, res: Response) => {

  let errorCode: number = 400

  try{
    const userIndex = users.findIndex((u: user) => u.id === Number(req.params.id))

    if (userIndex === -1){
      errorCode = 404
      throw new Error("Unuário não encontrado!")
    }

    users.splice(userIndex, 1)

    res.status(200).send("Usuário removido com sucesso!")

  }catch(error){
    res.status(errorCode).send(error.message)
  }
})
//--------------------------------------------------------------//

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
