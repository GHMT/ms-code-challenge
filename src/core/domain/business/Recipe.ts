/**
 * Model-Adapter pattern: https://blog.florimondmanca.com/consuming-apis-in-angular-the-model-adapter-pattern
 * We use a variation of this pattern. We add an Interface to represent the API object.
 * Take a look also to the same pattern in React (do not use like this anyway): https://sendgrid.com/blog/using-the-adapter-design-pattern-with-react/
 */

import { Entry, Asset } from 'contentful';

import IAdapter from '../adapter';
import { IChef, ChefAdapterSingleton, Chef } from './Chef';
import { ITag, TagAdapterSingleton, Tag } from './Tag';
import { Photo, PhotoAdapterSingleton } from './Photo';

export interface IRecipe {
  readonly title?: string;
  readonly photo?: Asset;
  readonly calories?: number;
  readonly description?: string;
  readonly chef?: Entry<IChef>;
  readonly tags?: Entry<ITag>[];
}

export class Recipe {
  readonly id: Entry<IRecipe>['sys']['id'];
  readonly title?: string;
  readonly photo?: Photo;
  readonly calories?: number;
  readonly description?: string;
  readonly chef?: Chef;
  readonly tags?: Tag[];

  constructor(recipe: Entry<IRecipe>) {
    this.id = recipe.sys.id;
    this.title = recipe.fields.title;
    this.photo = recipe.fields.photo ? PhotoAdapterSingleton.adapt(recipe.fields.photo) : recipe.fields.photo;
    this.calories = recipe.fields.calories;
    this.description = recipe.fields.description;
    this.chef = recipe.fields.chef ? ChefAdapterSingleton.adapt(recipe.fields.chef) : recipe.fields.chef;
    this.tags = recipe.fields.tags ? recipe.fields.tags.map(iTag => TagAdapterSingleton.adapt(iTag)) : recipe.fields.tags;
  }
}

class RecipeAdapter implements IAdapter<Recipe> {
  adapt(item: Entry<IRecipe>): Recipe {
    return new Recipe(item);
  }
}

export const RecipeAdapterSingleton: RecipeAdapter = new RecipeAdapter();
