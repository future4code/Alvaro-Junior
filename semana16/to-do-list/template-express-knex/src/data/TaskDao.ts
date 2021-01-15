import { connection } from "..";
import { task } from "../types/task";

export const insertTask = async (task: task) => {
  try {
    await connection("Task")
      .insert(task)

    return "Tarefa cadastrado!"
  } catch (error) {
    throw new Error(error)
  }
}

export const getTaskById = async (id: string): Promise<any> => {
  try {
    const result = await connection("Task")
      .join('User', function() {
        this.on('User.id', '=', 'Task.creatorUserId');
      })
      .select("Task.id as taskId", "title", "description", "limitDate", "creatorUserId", "User.nickname as creatorUserNickname")
      .where("Task.id", id)

    return result[0]
  } catch (error) {
    throw new Error(error)
  }
}

export const getTaskByCreatorUserId = async (id: string): Promise<any> => {
  try {
    const result = await connection("User")
      .join('Task', function() {
        this.on('User.id', '=', 'Task.creatorUserId')
      })
      .select("Task.id as taskId", "title", "description", "limitDate", "creatorUserId", "User.nickname as creatorUserNickname")
      .where("User.id", id)
    
    return result
  } catch (error) {
    throw new Error(error)
  }
}