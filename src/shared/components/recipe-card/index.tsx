import React from 'react';
import { Card } from 'react-bootstrap';
import ReactTruncate from 'react-truncate';

import { IRecipeCardProps } from './types';

const RecipeCard = ({ id, img, title, onRecipeClick }: IRecipeCardProps) => (
  <React.Fragment>
    <Card border='dark' onClick={() => onRecipeClick(id)} className='recipeCard'>
      <Card.Body>
        <Card.Title>
          <ReactTruncate lines={3} ellipsis={<span>...</span>}>
            {title}
          </ReactTruncate>          
        </Card.Title>
      </Card.Body>
      <Card.Img variant="bottom" src={img} />
    </Card>
  </React.Fragment>
);

export default RecipeCard;
