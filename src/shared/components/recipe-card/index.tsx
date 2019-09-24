import React from 'react';
import { Card } from 'react-bootstrap';

import { IRecipeCardProps } from './types';

const RecipeCard = ({ id, img, title, onRecipeClick }: IRecipeCardProps) => (
  <React.Fragment>
    <Card className='recipeCard'>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Img variant="bottom" src={img} onClick={() => onRecipeClick(id)} />
    </Card>
  </React.Fragment>
);

export default RecipeCard;
