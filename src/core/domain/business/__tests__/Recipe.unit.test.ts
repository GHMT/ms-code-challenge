import { Recipe, RecipeAdapterSingleton} from '../Recipe';
import { iRecipeEntry } from '../__mocks__/contentful-entries';

describe('Rcipe entity', () => {
    it('creates a Recipe class instance of an IRecipe interface', () => {
        const recipe = RecipeAdapterSingleton.adapt(iRecipeEntry);

        expect(recipe).toBeInstanceOf(Recipe);
        expect(recipe.id).toEqual(iRecipeEntry.sys.id);
        expect(recipe.description).toEqual(iRecipeEntry.fields.description);
        expect(recipe.calories).toEqual(iRecipeEntry.fields.calories);
        expect(recipe.chef && recipe.chef.name).toEqual(iRecipeEntry.fields.chef && iRecipeEntry.fields.chef.fields.name);
        expect(recipe.photo && recipe.photo.url).toEqual(iRecipeEntry.fields.photo && iRecipeEntry.fields.photo.fields.file.url);
        expect(recipe.tags && recipe.tags[0].name).toEqual(iRecipeEntry.fields.tags && iRecipeEntry.fields.tags[0].fields.name);
        expect(recipe.title).toEqual(iRecipeEntry.fields.title);
    });

    it('creates a Recipe class instance of an IRecipe interface with no chef, tags and photo', () => {
        const partialIRecipeEntry: typeof iRecipeEntry = {
            ...iRecipeEntry,
            fields: {
                ...iRecipeEntry.fields,
                chef: undefined,
                tags: undefined,
                photo: undefined,
            }
        };
        const recipe = RecipeAdapterSingleton.adapt(partialIRecipeEntry);

        expect(recipe).toBeInstanceOf(Recipe);
        expect(recipe.id).toEqual(partialIRecipeEntry.sys.id);
        expect(recipe.description).toEqual(partialIRecipeEntry.fields.description);
        expect(recipe.calories).toEqual(partialIRecipeEntry.fields.calories);
        expect(recipe.chef && recipe.chef.name).toEqual(partialIRecipeEntry.fields.chef && partialIRecipeEntry.fields.chef.fields.name);
        expect(recipe.photo && recipe.photo.url).toEqual(partialIRecipeEntry.fields.photo && partialIRecipeEntry.fields.photo.fields.file.url);
        expect(recipe.tags && recipe.tags[0].name).toEqual(partialIRecipeEntry.fields.tags && partialIRecipeEntry.fields.tags[0].fields.name);
        expect(recipe.title).toEqual(partialIRecipeEntry.fields.title);
    });
})
