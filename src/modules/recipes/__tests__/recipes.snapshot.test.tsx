import React from 'react';
import { shallow } from "enzyme";
import { MemoryRouter } from 'react-router';

import RecipesList from '..';


describe('Recipes List Component snapshots', () => {
    it('match snapshot', () => {
        const RecipesListsShallowed = shallow(
            <MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}>
                <RecipesList />
            </MemoryRouter>
        );

        expect(RecipesListsShallowed).toMatchSnapshot();
    });
});