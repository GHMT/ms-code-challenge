import React from 'react';
import { shallow } from "enzyme";

import RecipesList from '..';

describe('Recipes List module', () => {
    it('renders without crashing', () => {
        shallow(<RecipesList />)
    })
})
