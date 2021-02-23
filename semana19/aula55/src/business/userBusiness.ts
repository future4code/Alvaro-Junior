import { compare, hash } from "./services/hashManager";
import { insertUser, selectUserByEmail, selectUserById } from "../data/userDatabase";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { user, signupInputDTO } from "./entities/user";
import { setRecipes } from "../data/model/userModel";
import { selectRecipeByUserId } from "../data/recipeDatabase";
import dayjs from "dayjs";

export const businessSignup = async (
  input: signupInputDTO
) => {

   if (
      !input.name ||
      !input.email ||
      !input.password
   ) {
      throw new Error('"name", "email" and "password" are required')
   }

   const id: string = generateId()

   const hashPassword = await hash(input.password);

   const user: user = {
      id,
      name: input.name,
      email: input.email,
      password: hashPassword
   }

   await insertUser(user);

   const token: string = generateToken({
      id
   })

   return token
}

export const businessLogin = async (
   email: string,
   password: string
) => {
   if (!email || !password) {
      throw new Error("'email' and 'senha' are required")
   }

   const User: user = await selectUserByEmail(email)

   if (!User) {
      throw new Error("User not find or incorrect password")
   }

   const passwordIsCorrect: boolean = await compare(password, User.password)

   if (!passwordIsCorrect) {
      throw new Error("User not find or incorrect password")
   }

   const token: string = generateToken({
      id: User.id
   })

   return token
}

export const businessGetProfile = async(id: string)=>{

   const user = await selectUserById(id)
   const userRecipes = await (await selectRecipeByUserId(id)).map(recipe => {
     recipe.createdAt = dayjs(recipe.createdAt).format('DD/MM/YYYY')
     return recipe
   })
   const userWithRecipes = setRecipes(user, userRecipes)

   return userWithRecipes;

}