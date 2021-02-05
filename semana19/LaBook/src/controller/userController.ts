import { Request, Response } from "express";
import { signupInputDTO } from "../busines/entities/user";
import { checkMissingParameters } from "../busines/services/missingParameters";
import { UserBusines } from "../busines/userBusines";

const userBusines: UserBusines = new UserBusines() 

export class UserController {

  signup = async (
    req: Request,
    res: Response
  ) => {
    try {
      const {name, email, password} = req.body

      checkMissingParameters({name, email, password}, ["name", "email", "password"])

      const input: signupInputDTO = {
        name,
        email,
        password
      }
  
      const token = await userBusines.signup(input)

      res
        .status(200)
        .send({
          message: "Usuário criado!",
          token
        })
  
    } catch (error) {
      res.send(error.message)
    }
  }

  login = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
       const { email, password } = req.body

       checkMissingParameters({email, password}, ["email", "password"])
 
       const token = await userBusines.login(email, password)
 
       res.send({
          message: "Usuário logado!",
          token
       })
 
    } catch (error) {
      res.send(error.message)
    }
 }
}
