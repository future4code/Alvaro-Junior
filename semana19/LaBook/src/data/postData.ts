import { Post } from "../busines/entities/post";
import { DataBaseConnection } from "./connection";

const DataBaseTable: string = "labook_posts"

export class PostDataBase extends DataBaseConnection{

  insertPost = async(
    post: Post
  ) => {
    try {
      await DataBaseConnection.connection(DataBaseTable)
      .insert({ post })
    } catch (error) {
      throw new Error(error.slqMessage || error.message)
    }
  }

  selectPostById = async(
    id: string
  ) => {
    try {
      const result = await DataBaseConnection.connection(DataBaseTable)
        .select("*")
        .where({id})
      
      return result[0]
    } catch (error) {
      throw new Error(error.slqMessage || error.message)
    }
  }
}