import { Request, Response } from "express";
import dayjs from "dayjs";
import { status, task } from "../types/task";
import { getTaskByCreatorUserId, getTaskById, insertTask } from "../data/TaskDao";


export const getTaskByCreatorUserIdEndpoint = async (req: Request, res: Response) => {
  try {
    if(!req.query.creatorUserId) {
      throw new Error("Indique um id de Usuário válido")
    }

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
}

export const getTaskByIdEndpoint = async (req: Request, res: Response) => {
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
}

export const insertTaskEndpoint = async (req: Request, res: Response) => {
  try {
    if (!req.body.title || !req.body.description || !req.body.limitDate || !req.body.creatorUserId) {
      throw new Error("Título, descrição, data limite ou id do criador não informados!")
    }
    const {title, description, limitDate, creatorUserId} = req.body
    const id: string = String(Date.now())+"-t"
    const limitDateArray = limitDate.split("/")
    const newLimitDate = limitDateArray[2]+"-"+limitDateArray[1]+"-"+limitDateArray[0]
    const newTask: task = {id: id, title: title, description: description, limitDate: new Date(newLimitDate), status: status.to_do, creatorUserId: creatorUserId}
    const result = await insertTask(newTask)

    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}