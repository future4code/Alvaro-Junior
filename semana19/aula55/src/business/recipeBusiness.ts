import dayjs from "dayjs"
import { insertRecipe, selectRecipeById } from "../data/recipeDatabase"
import { recipe } from "./entities/recipe"
import { generateId } from "./services/idGenerator"

export const businessCreateRecipe = async (
   title: string,
   description: string,
   createdAt: Date,
   userId: string
) => {

   if (
      !title ||
      !description ||
      !userId
   ) {
      throw new Error('"title", "description", and "userId" are required!')
   }

   const id: string = generateId()

   const newRecipe: recipe = {
     id,
     title,
     description,
     createdAt,
     userId
   }

   await insertRecipe(newRecipe)
}

export const businessGetRecipeById = async(
   id:string
)=>{
  const result: recipe = await selectRecipeById(id)

  if (!result) {
    throw new Error("Tarefa não encontrada")
  }

  result.createdAt = dayjs(result.createdAt).format('DD/MM/YYYY')

  return result
}