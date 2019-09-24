import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import {
  ISmartProps,
  IDummyProps
} from './types';
import View from './view';
import RecipesService from '../../core/api/services/recipes/service';
import { Recipe } from '../../core/domain/business/Recipe';
import { FirstArgument } from '../../shared/types/Misc';

const RecipesList = (props: ISmartProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const getRecipesSubscription = RecipesService.getRecipes().subscribe(recipes => setRecipes(recipes));

    return () => getRecipesSubscription.unsubscribe();
  }, []);

  const onRecipeClickHandler = (recipeId: FirstArgument<IDummyProps['onRecipeClick']>) => {
    console.log('clicked recipe', recipeId);
    props.history.push(`recipe-detail/${recipeId}`)
  }

  return (
    <View
     recipes={recipes}
     onRecipeClick={onRecipeClickHandler} />
  );
}

export default withRouter(RecipesList);
