import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IDummyProps } from './types';
import RecipeDetailCard from '../../shared/components/recipe-detail-card';
import DEFAULT_RECIPE_IMG from '../../assets/default-recipe-img.png';

const View = (props: IDummyProps) => (
  <React.Fragment>
    <div className='row mb-3 go-back'>
      <Link to='/recipes'>
        <FontAwesomeIcon className='text-info float-left' icon="arrow-alt-circle-left" style={{ fontSize: '2em', cursor: 'pointer'}} />
      </Link>
    </div>
    {props.recipe && <RecipeDetailCard
      img={props.recipe.photo ? `${props.recipe.photo.url}?fit=fill&w=1200&h=380` : DEFAULT_RECIPE_IMG}
      title={props.recipe.title ? props.recipe.title : ''}
      description={props.recipe.description ? props.recipe.description : ''}
      chefName={props.recipe.chef ? props.recipe.chef.name : undefined}
      tags={props.recipe.tags} />}
  </React.Fragment>
)

export default View;
