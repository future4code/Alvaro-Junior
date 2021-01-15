import { connection } from "..";
import { user } from "../types/user"

export const insertUser = async (user: user): Promise<any> => {
  try {
    await connection("User")
      .insert(user)

    return "Usuário cadastrado!"
  } catch (error) {
    throw new Error(error)
  }
}

export const getAllUsers = async (): Promise<any> => {
  try {
    const result = await connection("User")
      .select("id", "nickname")

    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const getUserById = async (id: string): Promise<any> => {
  try {
    const result = await connection("User")
      .select("id", "nickname")
      .where("id", id)

    return result[0]
  } catch (error) {
    throw new Error(error)
  }
}

export const updateUser = async (id: string, body: {}) => {
  try {
    await connection("User")
      .update(body)
      .where("id", id)
    
    return "Usuário atualizado com sucesso!"
  } catch (error) {
    throw new Error(error)
  }
}