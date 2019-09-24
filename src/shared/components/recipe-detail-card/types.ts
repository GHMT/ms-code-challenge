import { Recipe } from "../../../core/domain/business/Recipe";

export interface IRecipeDetailCard {
    img: string;
    title: string;
    description: string;
    chefName: string | undefined;
    tags: Recipe['tags'];
}
