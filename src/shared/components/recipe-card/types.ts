import { Recipe } from "../../../core/domain/business/Recipe";

export interface IRecipeCardProps {
    id: Recipe['id'];
    img: string;
    title: string;
    onRecipeClick: (recipeId: Recipe['id']) => void;
}
