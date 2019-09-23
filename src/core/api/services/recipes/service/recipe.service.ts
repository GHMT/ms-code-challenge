import { from } from 'rxjs';
import { map } from 'rxjs/operators';

import API from '../..';
import RECIPES_ENDPOINTS from '../recipes.endpoints';
import { IRecipesService } from '.';
import IApiPaginationResourceResponse from '../../../../domain/app/ApiPaginationResourceResponse';
import IApiCommonResourceResponse from '../../../../domain/app/ApiCommonResourceResponse';
import { Recipe } from '../../../../domain/business/Recipe';

class RecipesService implements IRecipesService {
    getRecipes() {
        return from(API.get<IApiPaginationResourceResponse<IApiCommonResourceResponse<Recipe[]>>>(`${RECIPES_ENDPOINTS.GET_RECIPES}&select=sys.id,fields`))
            .pipe(
                map(response => {
                    let result: Recipe[] = [];
                    // if()
                    return result; 
                })
            )
    };
}

export default RecipesService;