import { PostDataBase } from "../data/postData";
import { Post, postInputDTO } from "./entities/post";
import { generateId } from "./services/idGenerator";

const postDataBase: PostDataBase = new PostDataBase()

export class PostBusines {
  createPost = async(
    input: postInputDTO
  ) => {
    const id: string = generateId()

    const post: Post = {
      id,
      photo: input.photo,
      description: input.description,
      type: input.type,
      createdAt: input.createdAt,
      authorId: input.authorId
    }

    await postDataBase.insertPost(post)
  }

  getPostById = async(
    id: string
  ) => {
    const result = await postDataBase.selectPostById(id)

    return result
  }
}