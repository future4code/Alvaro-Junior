import { Request, Response } from "express";
import { getData } from "../data/getData";
import { insertUser, selectUserByEmail, selectUserById } from "../data/UserDao";
import { generator } from "../services/idGenerator";
import { generateToken } from "../services/tokenGenerator";
import { AuthenticationData } from "../types/Authentication";
import { User } from "../types/User";

export const userSignUp = async (req: Request, res: Response): Promise<any> => {
  try {
    const id: string = generator()
    const {email, password} = req.body

    if(!email || !email.includes("@")) {
      res.statusCode = 422
      throw new Error("Email não preenchido ou inválido!")
    }

    if(!password) {
      res.statusCode = 422
      throw new Error("A senha é obrigatória!")
    }

    if(password.length < 6) {
      res.statusCode = 422
      throw new Error("Senha inválida! Deve conter no mínimo caracteres!")
    }

    const newUser: User = {
      id,
      email,
      password
    }

    await insertUser(newUser)

    const Authentication: AuthenticationData = {
      id
    }

    const token = generateToken(Authentication)

    res.status(200).send({token: token})
  } catch (error) {
    res.send(error.message)
  }
}

export const userLogin = async (req: Request, res: Response): Promise<any> => {
  try {
    const {email, password} = req.body

    if(!email || !email.includes("@")) {
      res.statusCode = 422
      throw new Error("Email não preenchido ou inválido!")
    }

    if(!password) {
      res.statusCode = 422
      throw new Error("A senha é obrigatória!")
    }

    if(password.length < 6) {
      res.statusCode = 422
      throw new Error("Senha inválida! Deve conter no mínimo caracteres!")
    }

    const user = await selectUserByEmail(email)

    if (!user) {
      res.statusCode = 404
      throw new Error("Email não cadastrado!")
    }

    if (password !== user.password) {
      res.statusCode = 403
      throw new Error("Senha incorreta!")
    }

    const Authentication: AuthenticationData = {
      id: user.id
    }

    const token = generateToken(Authentication)

    res.status(200).send({token: token})
  } catch (error) {
    res.send(error.message)
  }

}

export const getUserProfile = async (req: Request, res: Response): Promise<any> => {
  try {
    const token = req.headers.authorization as string

    if (!token) {
      res.statusCode = 401
      throw new Error("Usuário não autorizado!")
    }

    const Authentication = getData(token)
    const id = Authentication.id

    const user = await selectUserById(id)

    const result = {
      id: user.id,
      email: user.email
    }

    res.status(200).send(result)
  } catch (error) {
    res.send(error.message)
  }
}