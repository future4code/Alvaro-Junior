import { Post } from "./post"

export type user = {
  id: string,
  name: string,
  email: string,
  password: string,
  tasks?: Post[]
}

export class User {
  constructor(
     public readonly id: string,
     public readonly name: string,
     public readonly email: string,
     public readonly password: string,
     private readonly posts?: Post[]
  ) {  }

  public getTasks = () => this.posts

  public addTask = (post: Post): void => {
     this.posts?.push(post)
  }
}

export type signupInputDTO = {
  name: string,
  email: string,
  password: string
}

export type authenticationData = {
  id: string
}