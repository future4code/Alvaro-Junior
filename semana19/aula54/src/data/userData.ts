import { user } from "../busines/types/user"
import { connection } from "./connection"

export const insertUser = async(
  user: user
) => {
  try {
    await connection("User_Arq")
      .insert(user)
  } catch (error) {
    throw new Error(error.sqlMessage || error.message)
  }
}

export const getUserByEmail = async(
  email: string
  ): Promise<any> => {
  try {
    const result = await connection("User_Arq")
      .select("*")
      .where({email})

    if(!result[0]){
      throw new Error("Usuário não encontrado");
    }
    return result[0]
  } catch (error) {
    throw new Error(error.sqlMessage || error.message)
  }
}

export const getAllUsers = async(): Promise<any> => {
  try {
    const result = await connection("User_Arq")
      .select("*")

    return result
  } catch (error) {
    throw new Error(error.sqlMessage || error.message)
  }
}

export const deleteUser = async(id: string): Promise<any> => {
  try {
    await connection("User_Arq")
      .where({id})
      .del()
  } catch (error) {
    throw new Error(error.sqlMessage || error.message)
  }
}