import React from 'react';
import { MemoryRouter, Router } from 'react-router';
import { Link } from 'react-router-dom';
import { shallow, ReactWrapper, mount } from "enzyme";
import { of } from 'rxjs';
import { createMemoryHistory } from 'history';

import RecipeService, { IRecipesService } from '../../../core/api/services/recipes/service';
import RecipeDetail from '..';
import { Recipe } from '../../../core/domain/business/Recipe';


jest.mock('../../../core/api/services/recipes/service');

const mockedRecipeService = RecipeService as jest.Mocked<IRecipesService>
const mockedRecipe: Recipe = {
    id: '1',
    title: 'title',
    photo: {
        id: '1',
        url: 'url'
    },
    calories: 255,
    description: 'A short description',
    chef: { id: 'a', name: 'Me' },
    tags: [{ id: '1', name: 'healthy' }, { id: '2', name: 'gluten free' }]

};
let RecipeDetailMounted: ReactWrapper;

describe('Recipe Detail module', () => {
    describe('Rendering', () => {
        it('renders without crashing', () => {
            shallow(<RecipeDetail />)
        });
    });

    describe('Logic', () => {
        afterEach(() => {
            RecipeDetailMounted.unmount();
        });

        it('mounts: complete recipe', () => {
            mockedRecipeService.getRecipe.mockImplementation(() => of(mockedRecipe));
            RecipeDetailMounted = mount(
                <MemoryRouter>
                    <RecipeDetail />
                </MemoryRouter>
            );
            const recipeCard = RecipeDetailMounted.find('div.card');

            expect(recipeCard).toHaveLength(1);
        });

        it('mounts: recipe with just id', () => {
            mockedRecipeService.getRecipe.mockImplementation(() => of({ id: 'abc' }));
            RecipeDetailMounted = mount(
                <MemoryRouter>
                    <RecipeDetail />
                </MemoryRouter>
            );
            const recipeCard = RecipeDetailMounted.find('div.card');

            expect(recipeCard).toHaveLength(1);
        });

        it('mounts: recipe with just id, title and description', () => {
            mockedRecipeService.getRecipe.mockImplementation(() => of({ id: 'abc', title: 'title', description: 'description' }));
            RecipeDetailMounted = mount(
                <MemoryRouter>
                    <RecipeDetail />
                </MemoryRouter>
            );
            const recipeCard = RecipeDetailMounted.find('div.card');

            expect(recipeCard).toHaveLength(1);
        });

        it('mounts: and navigate to recipe list', () => {
            const history = createMemoryHistory();

            mockedRecipeService.getRecipe.mockImplementation(() => of(mockedRecipe));
            RecipeDetailMounted = mount(
                <Router history={history}>
                    <RecipeDetail />
                </Router>
            );
            const goBackLink = RecipeDetailMounted.find(Link);
            
            goBackLink.simulate('click', { button: 0 });

            expect(history.location.pathname).toEqual('/recipes');
        });
    });
})
