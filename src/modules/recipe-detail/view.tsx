import React from 'react';
import { IDummyProps } from './types';

const View = (props: IDummyProps) => (
  <React.Fragment>
    <h1 className="mb-5 mt-5">{`Recipe ID ${props.recipeId} Detail working!`}</h1>
  </React.Fragment>
)

export default View;
