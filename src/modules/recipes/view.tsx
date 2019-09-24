import React from 'react';

import { IDummyProps } from './types';
import RecipeCard from '../../shared/components/recipe-card';
import DEFAULT_RECIPE_IMG from '../../assets/default-recipe-img.png';

const View = (props: IDummyProps) => (
  <React.Fragment>
    <h1 className="mb-5 mt-5">Recipes List</h1>
    <div className='row'>
      {props.recipes.map(recipe => (
        <div key={recipe.id} className='col-sm-6 col-md-4 col-lg-3 mb-2'>
          <RecipeCard
            id={recipe.id}
            title={recipe.title || ''}
            img={recipe.photo ? recipe.photo.url : DEFAULT_RECIPE_IMG}
            onRecipeClick={props.onRecipeClick}
          />
        </div>
      ))}
    </div>
  </React.Fragment>
)

export default View;
