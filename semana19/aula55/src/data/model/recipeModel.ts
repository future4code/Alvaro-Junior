import { recipe } from "../../business/entities/recipe";

export function toRecipeModel(obj: any): recipe {
    return {
        id: obj.id,
        userId: obj.userId,
        createdAt: obj.createdAt,
        description: obj.description,
        title: obj.title
    }
}
  