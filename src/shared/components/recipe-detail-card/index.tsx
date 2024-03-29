import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import { IRecipeDetailCard } from './types';

const RecipeDetailCard = (props: IRecipeDetailCard) => (
  <React.Fragment>
    <Card border='dark'>
      <Card.Header><h2>{props.title}</h2></Card.Header>
      <Card.Img variant="top" src={props.img}/>
      <Card.Body>
        <div className='card-text'>
          <ReactMarkdown 
            source={props.description}
            linkTarget='_blank'/>
        </div>
        {props.chefName && (
          <footer className="blockquote-footer">
            <small className="text-muted">
              by <cite title={props.chefName}>{props.chefName}</cite>
            </small>
          </footer>
        )}
      </Card.Body>
      {props.tags && props.tags.length && (
        <Card.Footer className="text-muted">
          {props.tags.map(tag => <Badge className='mx-1 my-1 float-left' variant='info' key={tag.id}>{tag.name}</Badge>)}
        </Card.Footer>
      )}
    </Card>
  </React.Fragment>
);

export default RecipeDetailCard;
