import React from 'react';
import { MemoryRouter, Router } from 'react-router';
import { shallow, ReactWrapper, mount } from "enzyme";
import { of } from 'rxjs';
import { createMemoryHistory } from 'history';

import RecipeService, { IRecipesService } from '../../../core/api/services/recipes/service';
import RecipesList from '..';
import { Recipe } from '../../../core/domain/business/Recipe';


jest.mock('../../../core/api/services/recipes/service');

const mockedRecipeService = RecipeService as jest.Mocked<IRecipesService>
const mockedRecipes: Recipe[] = [
    {
        id: '1',
        photo: {
            id: '1',
            url: 'url'
        }
    }
];
let RecipesListMounted: ReactWrapper;

describe('Recipes List module', () => {
    describe('Rendering', () => {
        it('renders without crashing', () => {
            shallow(<RecipesList />)
        });
    });
    
    describe('Logic', () => {
        afterEach(() => {
            RecipesListMounted.unmount();
        });
        
        it('mounts: with 1 recipe', () => {
            mockedRecipeService.getRecipes.mockImplementation(() => of(mockedRecipes));
            RecipesListMounted = mount(
                <MemoryRouter>
                    <RecipesList />
                </MemoryRouter>
            );
            const recipeCards = RecipesListMounted.find('div.recipeCard');

            expect(recipeCards).toHaveLength(1);
        });

        it('mounts: with 1 recipe and no photo', () => {
            mockedRecipeService.getRecipes.mockImplementation(() => of([{id: '2'}]));
            RecipesListMounted = mount(
                <MemoryRouter>
                    <RecipesList />
                </MemoryRouter>
            );
            const recipeCards = RecipesListMounted.find('div.recipeCard');

            expect(recipeCards).toHaveLength(1);
        });

        it('mounts: with no recipes', () => {
            mockedRecipeService.getRecipes.mockImplementation(() => of([]));
            RecipesListMounted = mount(
                <MemoryRouter>
                    <RecipesList />
                </MemoryRouter>
            );
            const recipeCards = RecipesListMounted.find('div.recipeCard');

            expect(recipeCards).toHaveLength(0);
        });

        it('mounts: on click recipe redirects to recipe detail', () => {
            const history = createMemoryHistory();
            const recipe: Recipe = {id: '2'};
            mockedRecipeService.getRecipes.mockImplementation(() => of([recipe]));
            RecipesListMounted = mount(
                <Router history={history}>
                    <RecipesList />
                </Router>
            );
            const recipeCard = RecipesListMounted.find('div.recipeCard');

            recipeCard.simulate('click');

            // expect(recipeCard).toHaveLength(1);
            expect(history.location.pathname).toEqual(`/recipe-detail/${recipe.id}`);
        });
    });
})
