import { connection } from "../services/connection";
import { User } from "../types/User";

export const insertUser = async (user: User) => {
  await connection("User")
    .insert(user)
}

export const selectUserByEmail = async (email: string): Promise<User> => {
  const result = await connection("User")
    .select("*")
    .where({email})

  return result[0]
}

export const selectUserById = async (id: string): Promise<User> => {
  const result = await connection("User")
    .select("*")
    .where({id})

  return result[0]
}

export const deleteUser = async (id: string): Promise<any> => {
  await connection("User")
    .delete()
    .where({id});
}