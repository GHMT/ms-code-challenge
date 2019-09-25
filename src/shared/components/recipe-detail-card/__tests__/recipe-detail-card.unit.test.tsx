import React from 'react';
import { shallow } from "enzyme";

import RecipeDetailCard from '..';

const RecipeDetailCardProps = {
    img: '',
    title: 'Dummy Title',
    description: 'A very short description',
    chefName: 'Mark Zuchiniberg',
    tags: [{id: '1', name: 'healthy'}, {id: '2', name: 'gluten free'}]
}

describe('Recipe Detail Card Component', () => {
    describe('Rendering', () => {
        it('renders without crashing: all props', () => {
            shallow(
                <RecipeDetailCard
                    {...RecipeDetailCardProps}
                />
            );
        });

        it('renders without crashing: no chef', () => {
            shallow(
                <RecipeDetailCard
                    img={RecipeDetailCardProps.img}
                    title={RecipeDetailCardProps.title}
                    description={RecipeDetailCardProps.description}
                    chefName={undefined}
                    tags={RecipeDetailCardProps.tags}
                />
            );
        });

        it('renders without crashing: no tags', () => {
            shallow(
                <RecipeDetailCard
                    img={RecipeDetailCardProps.img}
                    title={RecipeDetailCardProps.title}
                    description={RecipeDetailCardProps.description}
                    chefName={RecipeDetailCardProps.chefName}
                    tags={undefined}
                />
            );
        });

        it('renders without crashing: no chef & no tags', () => {
            shallow(
                <RecipeDetailCard
                    img={RecipeDetailCardProps.img}
                    title={RecipeDetailCardProps.title}
                    description={RecipeDetailCardProps.description}
                    chefName={undefined}
                    tags={undefined}
                />
            );
        });
    });
});
