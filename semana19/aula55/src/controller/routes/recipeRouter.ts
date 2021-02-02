import express from "express";
import { createRecipe, getRecipeById } from "../recipeController";
export const recipeRouter = express.Router();

recipeRouter.post("/", createRecipe);
recipeRouter.get("/:id", getRecipeById);