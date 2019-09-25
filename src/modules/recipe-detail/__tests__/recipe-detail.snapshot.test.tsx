import React from 'react';
import { shallow } from "enzyme";
import { MemoryRouter } from 'react-router';

import RecipeDetail from '..';


describe('Recipe Detail Component snapshots', () => {
    it('match snapshot', () => {
        const RecipeDetailShallowed = shallow(
            <MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}>
                <RecipeDetail />
            </MemoryRouter>
        );

        expect(RecipeDetailShallowed).toMatchSnapshot();
    });
});