import React from 'react';
import { mount, ReactWrapper, shallow } from "enzyme";

import RecipeCard from '..';

let RecipeCardMounted: ReactWrapper;
let onRecipeClickMock = jest.fn(x => x);
const recipeId = 'abc123';

describe('Recipe Card Component', () => {
    describe('Rendering', () => {
        it('renders without crashing', () => {
            shallow(
                <RecipeCard
                    id={recipeId}
                    img=''
                    title='Dummy Title'
                    onRecipeClick={onRecipeClickMock}
                />
            );
        });
    });

    describe('Logic', () => {
        beforeEach(() => {
            onRecipeClickMock = jest.fn(x => x);
            RecipeCardMounted = mount(
                <RecipeCard
                    id={recipeId}
                    img=''
                    title='Dummy Title'
                    onRecipeClick={onRecipeClickMock}
                />
            );
        });
        
        afterEach(() => {
            RecipeCardMounted.unmount();
        });
    
        it('executes on click callback', () => {
            RecipeCardMounted.simulate('click');
    
            expect(onRecipeClickMock.mock.calls.length).toBe(1);
        })
        
        it('returns correct id on click', () => {
            RecipeCardMounted.simulate('click');
    
            expect(onRecipeClickMock.mock.results[0].value).toBe(recipeId)
        })
    });
});
