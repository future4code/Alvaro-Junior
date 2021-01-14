//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type statement = { 
  value: number,
  date: Date,
  description: string
}

type client = {
    id: number,
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    statement: statement[]
}


let clients: client[] = [
    {
        id: 1,
        name: "Alice",
        cpf: "777.777.777-77",
        birthDate: "15/04/1980",
        balance: 1800,
        statement: []
    },
    {
        id: 2,
        name: "Bob",
        cpf: "555.555.555-55",
        birthDate: "07/08/1999",
        balance: 800,
        statement: []
    },
    {
        id: 3,
        name: "Coragem",
        cpf: "999.999.999-99",
        birthDate: "15/02/1994",
        balance: 1400,
        statement: []
    }
]

// Endpoint para pegar todos os usuários

app.get("/clients", (req: Request, res: Response) => {
  res.status(200).send({"clients": clients})
})

// Endpoint para pesquisar o saldo um cliente a partir do CPF

app.get("/clients/:cpf", (req: Request, res: Response) => {
  let errorCode: number = 400

  try{
    
    const result: client | undefined = clients.find((client: client) => {return client.cpf === req.params.cpf})

    if(!result) {
      errorCode = (422)
      throw new Error("Usuário não encontrado")
    }

    res.status(200).send({"balance": result.balance})
  }catch(error){
    res.status(errorCode).send(error.message)
  }
})

// Endpoint para criar novo usuário.

app.post("/clients/create", (req: Request, res: Response) => {
  
  let errorCode: number = 400
  
  try{
    if (!req.body.name || !req.body.cpf || !req.body.birthDate) {
      errorCode = 404
      throw new Error("Parâmetros inválidos!")
    }

    const existingCPF: client | undefined = clients.find((client: client) => {return client.cpf === req.body.cpf})

    if (!existingCPF) {
      errorCode = 422
      throw new Error("CPF já cadastrado!")
    }
    
    const today: Date = new Date
    const arrBirthDate: string[] = req.body.birthDate.split("/") 
    const birthDate: string = arrBirthDate[1]+'-'+arrBirthDate[0]+"-"+arrBirthDate[2]
    const age: number = (((today.getTime() - new Date(birthDate).getTime()) / (1000 * 3600 * 24)) / 365.25)
    
    if (age < 18) {
      errorCode = 422
      throw new Error("Usuário menor de idade!")
    }

    const client: client = {
      id: Date.now(),
      name: req.body.name,
      cpf: req.body.cpf,
      birthDate: req.body.birthDate,
      balance: 0,
      statement: []
    }
  
    clients.push(client)
  
    res.status(200).send('Usuário criado com sucesso')
  } catch(error){
    res.status(errorCode).send(error.message)
  }
})

// Endpoint para pagar contas

app.post("/clients/payment", (req: Request, res: Response) => {
  let errorCode: number = 400

  try{
    if (!req.body.description || !req.body.cpf || !req.body.value) {
      errorCode = 422
      throw new Error("Por favor preencha todos os parâmetros obrigatórios!")
    }

    let paymentDate: Date = new Date

    if (req.body.paymentDate) {
      const arrPaymentDate: string[] = req.body.paymentDate.split("/")
      paymentDate = new Date (arrPaymentDate[1]+'-'+arrPaymentDate[0]+"-"+arrPaymentDate[2])
    }

    if (paymentDate < new Date) {
      errorCode = 422
      throw new Error("Data inválida!")
    }
    
    const clientIndex: number = clients.findIndex((client: client) => {return client.cpf === req.body.cpf})
    
    if (Number(req.body.value) > clients[clientIndex].balance) {
      errorCode = 422
      throw new Error("Saldo insuficiente para a transação!")
    }

    const statement: statement = {
      value: -req.body.value,
      date: paymentDate,
      description: req.body.description
    }

    clients[clientIndex].statement.push(statement)

    res.status(200).send("Pagamento agendado!")
  }catch(error){
    res.status(errorCode).send(error.message)
  }
})

// Endpoint para transferências

app.post("/clients/transfer", (req: Request, res: Response) => {
  let errorCode: number = 400

  try{
    if (!req.body.cpfSender || !req.body.cpfReceiver || !req.body.nameSender || !req.body.nameReceiver || !req.body.value) {
      errorCode = 422
      throw new Error("Por favor preencha todos os parâmetros obrigatórios!")
    }

    const senderIndex: number = clients.findIndex((client: client) => {return client.cpf === req.body.cpfSender})
    const receiverIndex: number = clients.findIndex((client: client) => {return client.cpf === req.body.cpfReceiver})

    if(senderIndex === -1) {
      errorCode = (422)
      throw new Error("Remetente não encontrado")
    }

    if(req.body.nameSender !== clients[senderIndex].name){
      errorCode = (422)
      throw new Error("Nome e CPF do remetente não correspondem!")
    }

    if(receiverIndex === -1) {
      errorCode = (422)
      throw new Error("Destinatário não encontrado")
    }

    if(req.body.nameReceiver !== clients[receiverIndex].name){
      errorCode = (422)
      throw new Error("Nome e CPF do destinatário não correspondem!")
    }

    if (Number(req.body.value) > clients[senderIndex].balance) {
      errorCode = 422
      throw new Error("Saldo insuficiente para a transação!")
    }

    const senderStatement: statement = {
      value: -req.body.value,
      date: new Date,
      description: "Transferência enviada!"
    }

    const receiverStatement: statement = {
      value: Number(req.body.value),
      date: new Date,
      description: "Transferência recebida!"
    }

    clients[senderIndex].statement.push(senderStatement)
    clients[receiverIndex].statement.push(receiverStatement)

    res.status(200).send("Trasnferência agendado!")
  }catch(error){
    res.status(errorCode).send(error.message)
  }
})

// Endpoint para depósitos

app.put("/clients/deposit", (req: Request, res: Response) => {
  let errorCode: number = 400

  try{
    if (!req.body.name || !req.body.cpf || !req.body.value) {
      throw new Error("Parâmetros inválidos")
    }

    const clientIndex: number = clients.findIndex((client: client) => {return client.cpf === req.body.cpf})

    if (clientIndex === -1) {
      errorCode = 422
      throw new Error("Usuário não encontrado")
    }

    const statement: statement = {
      value: Number(req.body.value),
      date: new Date,
      description: "Depósito em dinheiro"
    }

    clients[clientIndex].balance += Number(req.body.value)
    clients[clientIndex].statement.push(statement)

    res.status(200).send("Depósito realizado!")
  }catch(error){
    res.status(errorCode).send(error.message)
  }
})

// Endpoint para atualizar saldo do cliente

app.put("/clients/update/:cpf", (req: Request, res: Response) => {
  let errorCode: number = 400

  try{
    if (!req.params.cpf) {
      errorCode = 422
      throw new Error("CPF inválido")
    }

    const today = new Date

    const clientIndex: number = clients.findIndex((client: client) => {return client.cpf === req.params.cpf})

    for (let i of clients[clientIndex].statement) {
      if (i.date < today) {
        if (i.description !== "Depósito em dinheiro"){
          clients[clientIndex].balance += Number(i.value)
        }
      }
    }

    res.status(200).send("Saldo atualizado!")
  }catch(error){
    res.status(errorCode).send(error.message)
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
