import { Request, Response } from "express";
import { insertAdress } from "../data/AdressDao";
import { getData } from "../data/getData";
import { deleteUser, insertUser, selectUserByEmail, selectUserById } from "../data/UserDao";
import { getAdressByCep } from "../services/adressManager";
import { hash } from "../services/hashManager";
import { generator } from "../services/idGenerator";
import { generateToken } from "../services/tokenGenerator";
import { adress, adressInput } from "../types/Adress";
import { AuthenticationData } from "../types/Authentication";
import { User, USER_ROLES } from "../types/User";

export const userSignUp = async (req: Request, res: Response): Promise<any> => {
  try {
    const id: string = generator()
    const adressId: string = generator()
    const {email, password, role, cep} = req.body

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

    if (role !== USER_ROLES.NORMAL && role !== USER_ROLES.ADMIN) {
      res.statusCode = 422
      throw new Error('Função inválida! Insira "NORMAL" ou "ADMIN"!')
    }

    if (isNaN(Number(cep)) || cep.includes("-")){
      res.statusCode = 422
      throw new Error('CEP inválida! Insira apenas números!')
    }

    const myAdress: adress = await getAdressByCep(cep)

    const hashPassword = await hash(password)

    const newUser: User = {
      id,
      email,
      password: hashPassword,
      role
    }

    const newUserAdress: adressInput = {
      id: adressId,
      street: myAdress.street,
      neighbourhood: myAdress.neighbourhood,
      city: myAdress.city,
      state: myAdress.state,
      user_id: id
    }

    await insertUser(newUser)
    await insertAdress(newUserAdress)

    const Authentication: AuthenticationData = {
      id,
      role 
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

    const hashPassword = await hash(user.password)

    if (password !== hashPassword) {
      res.statusCode = 403
      throw new Error("Senha incorreta!")
    }

    const Authentication: AuthenticationData = {
      id: user.id,
      role: user.role
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

    if (Authentication.role !== "NORMAL") {
      res.statusCode = 401
      throw new Error(`Apenas usuário "NORMAIS" podem acesar essa funcionalidade!`);
    }

    const user = await selectUserById(Authentication.id)

    const result = {
      id: user.id,
      email: user.email
    }

    res.status(200).send(result)
  } catch (error) {
    res.send(error.message)
  }
}

export const delUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    if (!token) {
      res.statusCode = 401
      throw new Error("Usuário não autorizado!")
    }

    const authenticationData = getData(token);

    if (authenticationData.role !== "ADMIN") {
      res.statusCode = 401
      throw new Error(`Apenas usuário "ADMINISTRADORES" podem acesar essa funcionalidade!`);
    }

    const id = req.params.id;

    await deleteUser(id);

    res.sendStatus(200);
  } catch (error) {
    res.send({message: error.message})
  }
}

export const getUserById = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

     const tokenData = getData(token);
     
     if (!token) {
      res.statusCode = 401
      throw new Error("Usuário não autorizado!")
    }
	
    const user = await selectUserById(tokenData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    })
  } catch (error) {
    res.send({message: error.message})
  }

 }