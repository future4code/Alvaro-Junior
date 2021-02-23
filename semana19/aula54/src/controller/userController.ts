import { Request, Response } from "express";
import { user } from "../busines/types/user";
import { BusinesAllUsers, BusinesDelUser, BusinesLogin, BusinesSignup } from "../busines/userBusines";

export const ControllerSignup = async(
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const {name, email, password, role} = req.body
  
    const token = await BusinesSignup(
      name,
      email,
      password,
      role
    )
  
    res.status(200).send({message: "Usuário criado!", token})
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const ControllerLogin = async(
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { email, password } = req.body

    const token = await BusinesLogin(email, password)

    res.status(200).send({ token })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const ControlerAllUsers = async(
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const token = req.headers.token as string

    const users = await BusinesAllUsers(token)

    res.status(200).send({users})
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const ControlerDelUser = async(
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const id = req.params.id
    const token = req.headers.token as string

    await BusinesDelUser(id, token)

    res.status(200).send({
      "message": "Usuário apagado com sucesso!"
    })
  } catch (error) {
    res.status(400).send(error.message)
  }
}