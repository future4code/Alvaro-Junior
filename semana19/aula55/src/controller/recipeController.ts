import { Request, Response } from "express";
import { businessCreateRecipe, businessGetRecipeById} from "../business/recipeBusiness";
import { getTokenData } from "../business/services/authenticator";

export const createRecipe = async (
  req: Request,
  res: Response
) => {
  try {

    const { title, description } = req.body
    const createdAt = new Date
    const verifiedToken = getTokenData(req.headers.authorization as string);
    const id = verifiedToken.id;

    await businessCreateRecipe(
      title,
      description,
      createdAt,
      id
    )

    res.status(201).end()

  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getRecipeById = async (
  req: Request,
  res: Response
) => {
  try {

    const { id } = req.params
    const verifiedToken = getTokenData(req.headers.authorization as string);

    if (!verifiedToken) {
      throw new Error("Unauthorized!")
    }
    const recipe = await businessGetRecipeById(id)

    res.status(200).send({
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      createdAt: recipe.createdAt
    })

  } catch (error) {
    res.status(400).send(error.message)
  }
}
