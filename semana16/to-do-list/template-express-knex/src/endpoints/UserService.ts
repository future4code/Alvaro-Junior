import { Request, Response } from "express";
import { user } from "../types/user";
import { getAllUsers, getUserById, getUserByText, insertUser, updateUser } from "../data/UserDao";

export const getAllUsersEndpoint = async (req: Request, res: Response) => {
  try {
    const result = await getAllUsers()

    res.status(200).send({users: result})
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const getUserByIdEndpoint = async (req: Request, res: Response) => {
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
}

export const getUserByTextEndpoint = async (req: Request, res: Response) => {
  try {
    if (!req.query.query) {
      throw new Error("Texto inválido")
    }

    const text: string = req.query.query as string
    const result = await getUserByText(text)

    res.status(200).send({users: result})
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const insertUserEndpoint = async (req: Request, res: Response) => {
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
}

export const updateUserEndpoint = async (req: Request, res: Response) => {
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
}