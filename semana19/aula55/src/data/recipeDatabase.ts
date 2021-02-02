import { connection } from "./connection";
import { recipe } from "../business/entities/recipe";
import { toRecipeModel } from "./model/recipeModel";

export const insertRecipe = async (
   recipe: recipe
) => {
   await connection('Recipes_Cookenu')
      .insert(recipe)
}

export const selectRecipeById = async (
   id: string
): Promise<any> => {
   const result = await connection('Recipes_Cookenu')
    .select("*")

   return result[0]
}

export const selectRecipeByUserId = async (
  id: string
): Promise<recipe[]> => {

  const result = await connection("Recipes_Cookenu")
    .select("*")
    .where("userId", id)
  
  const recipes: recipe[] = [];

  for(let recipe of result){
    recipes.push(toRecipeModel(recipe));
  }
  
  return recipes;
}
