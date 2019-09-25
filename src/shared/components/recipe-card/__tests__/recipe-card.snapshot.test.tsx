import React from 'react';
import { shallow } from "enzyme";

import RecipeCard from '..';

describe('Recipe Card Component snapshots', () => {
  it('match snapshot', () => {
    const RecipeCardShallowed = shallow(
        <RecipeCard
            id='abc123'
            img=''
            title='Dummy Title'
            onRecipeClick={jest.fn(x => x)}
    />
    );

    expect(RecipeCardShallowed).toMatchSnapshot();
  });
});