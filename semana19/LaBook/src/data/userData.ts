import { user } from "../busines/entities/user";
import { DataBaseConnection } from "./connection";

const DataBaseTable: string = "labook_users"

export class UserDataBase extends DataBaseConnection{

  insertUser = async(
    user: user
  ) => {
    try {
      await DataBaseConnection.connection(DataBaseTable)
        .insert({ user })
    } catch (error) {
      throw new Error(error.slqMessage || error.message)
    }
  }

  selectUserByEmail = async (
    email: string
  ) => {
    try {
      const result = await DataBaseConnection.connection(DataBaseTable)
        .select("*")
        .where({ email })

      return {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
        password: result[0].password
      }

    } catch (error) {
      throw new Error(error.slqMessage || error.message)
    }
  }

  selectUserById = async (
    id: string
  ) => {
    try {
      const result = await DataBaseConnection.connection(DataBaseTable)
        .select("*")
        .where({ id })

      return {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
        password: result[0].password
      }

    } catch (error) {
      throw new Error(error.slqMessage || error.message)
    }
  }
}

