import { Request, Response } from "express";
import { postInputDTO } from "../busines/entities/post";
import { authenticationData } from "../busines/entities/user";
import { CustomError } from "../busines/errors/CustomError";
import { PostBusines } from "../busines/postBusines";
import { getTokenData } from "../busines/services/authenticator";
import { checkMissingParameters } from "../busines/services/missingParameters";

const postBusines: PostBusines = new PostBusines()

export class PostController {
  createPost = async(
    req: Request,
    res: Response
  ) => {
    try {
      const { photo, description, type } = req.body

      checkMissingParameters({photo, description, type}, ["photo", "description", "type"])

      const token: string = req.headers.authorization as string
      const tokenData: authenticationData = getTokenData(token)
      const createdAt = new Date

      const input:postInputDTO = {
        photo,
        description,
        type,
        createdAt,
        authorId: tokenData.id
      }

      postBusines.createPost(input)

      res.status(200).send({ message: "post criado com sucesso!" })
    } catch (error) {
      res.send(error.message)
    }
  }

  getPostById = (
    req: Request,
    res: Response
  ) => {
    try {
      const id: string = req.params.id
  
      checkMissingParameters({id}, ["id"])
  
      const token: string = req.headers.authorization as string
  
      if(!token) {throw new CustomError(501, "Unauthorized! Missing token!")}
  
      getTokenData(token)
  
      const result = postBusines.getPostById(id)  
      res.status(200).send({ post: result }) 
    } catch (error) {
      res.send(error.message)
    }
  }
}