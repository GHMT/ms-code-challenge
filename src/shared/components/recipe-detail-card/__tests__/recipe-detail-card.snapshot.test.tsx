import React from 'react';
import { shallow } from "enzyme";

import RecipeDetailCard from '..';

const RecipeDetailCardProps = {
  img: '',
  title: 'Dummy Title',
  description: 'A very short description',
  chefName: 'Mark Zuchiniberg',
  tags: [{ id: '1', name: 'healthy' }, { id: '2', name: 'gluten free' }]
}

describe('Recipe Detail Card Component snapshots', () => {
  it('match snapshot: all props', () => {
    const RecipeDetailCardShallowed = shallow(
      <RecipeDetailCard
        {...RecipeDetailCardProps}
      />
    );

    expect(RecipeDetailCardShallowed).toMatchSnapshot();
  });

  it('match snapshot: no chef', () => {
    const RecipeDetailCardShallowed = shallow(
      <RecipeDetailCard
        img={RecipeDetailCardProps.img}
        title={RecipeDetailCardProps.title}
        description={RecipeDetailCardProps.description}
        chefName={undefined}
        tags={RecipeDetailCardProps.tags}
      />
    );

    expect(RecipeDetailCardShallowed).toMatchSnapshot();
  });

  it('match snapshot: no tags', () => {
    const RecipeDetailCardShallowed = shallow(
      <RecipeDetailCard
        img={RecipeDetailCardProps.img}
        title={RecipeDetailCardProps.title}
        description={RecipeDetailCardProps.description}
        chefName={RecipeDetailCardProps.chefName}
        tags={undefined}
      />
    );

    expect(RecipeDetailCardShallowed).toMatchSnapshot();
  });

  it('match snapshot: no chef & no tags', () => {
    const RecipeDetailCardShallowed = shallow(
      <RecipeDetailCard
        img={RecipeDetailCardProps.img}
        title={RecipeDetailCardProps.title}
        description={RecipeDetailCardProps.description}
        chefName={undefined}
        tags={undefined}
      />
    );

    expect(RecipeDetailCardShallowed).toMatchSnapshot();
  });
});