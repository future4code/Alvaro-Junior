import { connection } from "..";

export const insertResponsible = async (taskId: string, userId: string): Promise<any> => {
  try {
    await connection("Responsible_User")
      .insert({
        task_id: taskId,
        responsible_user_id: userId
      })

    return "Responsável cadastrado!"
  } catch (error) {
    throw new Error(error.sqlMessage)
  }
}