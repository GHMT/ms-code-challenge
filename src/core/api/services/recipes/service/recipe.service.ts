import { from } from 'rxjs';
import { map } from 'rxjs/operators';

import API from '../..';
import { IRecipesService } from '.';
import { IRecipe, RecipeAdapterSingleton } from '../../../../domain/business/Recipe';

class RecipesService implements IRecipesService {
    getRecipes() {
        return from(API.getEntries<IRecipe>({ content_type: 'recipe' }))
            .pipe( map(response => response.items.map(iRecipe => RecipeAdapterSingleton.adapt(iRecipe))) )
    }
}

export default RecipesService;
