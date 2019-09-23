/**
 * Model-Adapter pattern: https://blog.florimondmanca.com/consuming-apis-in-angular-the-model-adapter-pattern
 * We use a variation of this pattern. We add an Interface to represent the API object.
 * Take a look also to the same pattern in React (do not use like this anyway): https://sendgrid.com/blog/using-the-adapter-design-pattern-with-react/
 */

import IAdapter from '../adapter';

export interface IRecipe {
  readonly id: string;
  readonly title: string;
  readonly photoURL: string;
}

export class Recipe {
  readonly id: string;
  readonly title: string;
  readonly photoURL: string;
//   readonly calories: number;
//   readonly description: string;
//   readonly chef: Chef;
//   readonly tags: Tag[];


  constructor(recipe: IRecipe) {
    this.id = recipe.id;
    this.title = recipe.title;
    this.photoURL = recipe.photoURL;
  }
}

export class RecipeAdapter implements IAdapter<Recipe> {
  adapt(item: IRecipe): Recipe {
    return new Recipe(item);
  }
}

export const RecipeAdapterSingleton: RecipeAdapter = new RecipeAdapter();
