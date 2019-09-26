import { ContentfulClientApi, Entry, EntryCollection } from 'contentful';

import RecipeService from '../recipe.service';
import API from '../../..';
import { IRecipe, Recipe } from '../../../../../domain/business/Recipe';
import { iRecipeEntry, iRecipeEntryCollection } from '../__mocks__/entry-collection';

jest.mock('../../..');

let recipeService: RecipeService;
const mockedAPI = API as jest.Mocked<ContentfulClientApi>

beforeEach(() => {
   recipeService = new RecipeService();
})

describe('Recipe Service', () => {
    describe('get entry', () => {
        
        beforeEach(() => {
            mockedAPI.getEntry.mockImplementation(() => new Promise((resolve: (value: Entry<IRecipe>) => void, reject) => {
                resolve(iRecipeEntry);
            }));
        })
        
        it('gets called', () => {
            recipeService.getRecipe('1');
    
            expect(mockedAPI.getEntry.mock.calls.length).toEqual(1);
        });

        it('return expected value', done => {
            recipeService.getRecipe('1').subscribe(recipe => {
                expect(recipe).toBeInstanceOf(Recipe);
                expect(recipe.id).toBe('abc');
                done();
            });
        });
    });

    describe('get entries', () => {
        
        beforeEach(() => {
            mockedAPI.getEntries.mockImplementation(() => new Promise((resolve: (value: EntryCollection<IRecipe>) => void, reject) => {
                resolve(iRecipeEntryCollection);
            }));
        })
        
        it('gets called', () => {
            recipeService.getRecipes();
    
            expect(mockedAPI.getEntries.mock.calls.length).toEqual(1);
        });

        it('return expected value', done => {
            recipeService.getRecipes().subscribe(recipes => {
                expect(recipes[0]).toBeInstanceOf(Recipe);
                expect(recipes[0].id).toBe('abc');
                done();
            });
        });
    });
    
})

