import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import {
  ISmartProps,
} from './types';
import View from './view';
import { Recipe } from '../../core/domain/business/Recipe';
import RecipesService from '../../core/api/services/recipes/service';

const RecipeDetail = (props: ISmartProps) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const getRecipeSubscription = RecipesService.getRecipe(props.match.params.recipeId).subscribe(recipe => setRecipe(recipe));

    return () => getRecipeSubscription.unsubscribe();
  }, [props.match.params.recipeId]);

  return (
    <View
      recipe={recipe}/>
  );
}

export default withRouter(RecipeDetail);
