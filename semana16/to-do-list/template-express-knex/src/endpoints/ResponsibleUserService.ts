import { Request, Response } from "express";
import { insertResponsible } from "../data/ResponsibleUserDao"

export const insertResponsibleEndpoint = async (req: Request, res: Response) => {
  try {
    if (!req.body.task_id || !req.body.responsible_user_id) {
      throw new Error("Id da tarefa ou id do responsável não informados!")
    }

    const {taskId, userId} = req.body
    const result = await insertResponsible( taskId, userId )
    
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}