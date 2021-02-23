import { deleteUser, getAllUsers, getUserByEmail, insertUser } from "../data/userData";
import { generateToken, getTokenData } from "./services/authenticator";
import { compare, hash } from "./services/hashManager";
import { generateId } from "./services/idGenerator";
import { user, USER_ROLES } from "./types/user";

export const BusinesSignup = async (
  name: string,
  email: string,
  password: string,
  role: USER_ROLES
) => {
  if (
    !name ||
    !email ||
    !password ||
    !role
  ) {
    throw new Error('"name", "email", "password" and "role" are required')
  }

  if(email.indexOf("@") === -1){
    throw new Error("Invalid Email");
  }

  if(password.length < 6){
    throw new Error("Password must have at least 6 characters");
  }

  const id = generateId()
  const hashPassword = await hash(password)
  const newUser: user = {
    id,
    name,
    email,
    password: hashPassword,
    role
  }
  
  await insertUser(newUser)

  const token = generateToken({id, role})

  return token
}

export const BusinesLogin = async(
  email: string,
  password: string
) => {
  if (
    !email ||
    !password
  ) {
    throw new Error('"email" and "password" are required')
  }

  if(email.indexOf("@") === -1){
    throw new Error("Invalid Email");
  }

  if(password.length < 6){
    throw new Error("Password must have at least 6 characters");
  }

  const user = await getUserByEmail(email)

  const hashPassword = await hash(password)
  const hashCompare = await compare(password, user.password)

  console.log(hashPassword)
  // $2a$12$h27qiM1JSxzm3iO3g74dludV2.HSSDvEBl/mD1KO1Hy58xsTSgOlu
  // $2a$12$ESSfQhd7uyJVbKzzuHgj2uHrUlI3WbTtVkQKywOrrS5a045x6p/Ze

  if (!hashCompare) {
    throw new Error("Invalid Password!")
  }

  const token = generateToken({id: user.id, role: user.role})

  return token
}

export const BusinesAllUsers = async (
  token: string
) => {
  if(!token) {
    throw new Error("Unauthorized user!")
  }

  const isAuthorized = getTokenData(token)

  if (!isAuthorized) {
    throw new Error("Unauthorized user!")
  }

  const users = await getAllUsers()

  return users
}

export const BusinesDelUser = async (
  id:string,
  token:string
) => {
  if (
    !id
  ) {
    throw new Error('"id" is required')
  }

  if(!token) {
    throw new Error("Unauthorized user!")
  }

  const isAuthorized = getTokenData(token)

  if (isAuthorized.role !== USER_ROLES.ADMIN) {
    throw new Error("Unauthorized user!")
  }

  await deleteUser(id)
}