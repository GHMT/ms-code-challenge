import { Observable } from 'rxjs';

import RecipesService from './recipe.service';
import { Recipe } from '../../../../domain/business/Recipe';

export interface IRecipesService {
  getRecipes: () => Observable<Recipe[]>;
}
const IRecipesServiceSingleton: IRecipesService = new RecipesService();

export default IRecipesServiceSingleton;
