import { Request, Response } from "express";
import { businessSignup, businessLogin, businessGetProfile } from "../business/userBusiness";
import { getTokenData } from "../business/services/authenticator";
import { signupInputDTO } from "../business/entities/user";

export const signup = async (
  req: Request,
  res: Response
) => {
  try {
    const input: signupInputDTO = 
    {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  }

    const token = await businessSignup(input);

    res.status(200).send({
      message: "Usuário criado!",
      access_token: token
    })

  } catch (error) {
    res.status(400).send(error.message)
  }
}

export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { email, password } = req.body

      const token = await businessLogin(email, password)

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}


export const getProfile = async(req: Request, res: Response)=>{

  const verifiedToken = getTokenData(req.headers.authorization as string);
  const id = verifiedToken.id;

  const profile =  await businessGetProfile(id);

  res.status(200).send({profile: {
    id: profile.id,
    name: profile.name,
    email: profile.email
  }});

}

export const getProfileById = async(req: Request, res: Response)=>{

  const verifiedToken = getTokenData(req.headers.authorization as string)
  const id = req.params.id

  const profile =  await businessGetProfile(id)

  res.status(200).send({profile: {
    id: profile.id,
    name: profile.name,
    email: profile.email,
    recipes: profile.recipes
  }});

}