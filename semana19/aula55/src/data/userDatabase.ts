import { connection } from "./connection"
import { user } from "../business/entities/user"


export const insertUser = async(
   user: user
) => {
   await connection("Users_Cookenu")
   .insert(user)
}

export const selectUserByEmail = async (
  email: string
): Promise<user> => {
  try {
    const result = await connection("Users_Cookenu")
      .select("*")
      .where({ email })

    const User:user = {
      id: result[0].id,
      name: result[0].name,
      email: result[0].email,
      password: result[0].password
    }
    
    return User

  } catch (error) {
    throw new Error(error.slqMessage || error.message)
  }
}

export const selectUserById = async (
   id: string
): Promise<user> => {
   try {
      const result = await connection("Users_Cookenu")
         .select("*")
         .where({ id })

      const User:user = {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
        password: result[0].password
      }

      return User

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}