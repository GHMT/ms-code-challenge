import { from } from 'rxjs';
import { map } from 'rxjs/operators';

import API from '../..';
import { IRecipesService } from '.';
import { IRecipe, RecipeAdapterSingleton, Recipe } from '../../../../domain/business/Recipe';

class RecipesService implements IRecipesService {
    getRecipes() {
        return from(API.getEntries<IRecipe>({ content_type: 'recipe', select: 'sys.id,fields.title,fields.photo' }))
            .pipe( map(response => response.items.map(iRecipe => RecipeAdapterSingleton.adapt(iRecipe))) )
    }

    getRecipe(recipeId: Recipe['id']) {
        return from(API.getEntry<IRecipe>(recipeId, { content_type: 'recipe', select: 'sys.id,fields' }))
            .pipe( map(response => RecipeAdapterSingleton.adapt(response)) );
    }
}

export default RecipesService;
