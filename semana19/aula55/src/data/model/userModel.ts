import { user } from "../../business/entities/user";
import { recipe } from "../../business/entities/recipe";

export function setRecipes(myUser: user, recipes: recipe[]): user {
    myUser.recipes = recipes;
    return myUser;
}