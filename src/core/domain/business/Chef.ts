/**
 * Model-Adapter pattern: https://blog.florimondmanca.com/consuming-apis-in-angular-the-model-adapter-pattern
 * We use a variation of this pattern. We add an Interface to represent the API object.
 * Take a look also to the same pattern in React (do not use like this anyway): https://sendgrid.com/blog/using-the-adapter-design-pattern-with-react/
 */

import { Entry } from 'contentful';
import IAdapter from '../adapter';

export interface IChef {
  readonly name?: string;
}

export class Chef {
    readonly id: Entry<IChef>['sys']['id'];  
    readonly name?: string;

  constructor(chef: Entry<IChef>) {
    this.id = chef.sys.id;
    this.name = chef.fields.name;
  }
}

class ChefAdapter implements IAdapter<Chef> {
  adapt(item: Entry<IChef>): Chef {
    return new Chef(item);
  }
}

export const ChefAdapterSingleton: ChefAdapter = new ChefAdapter();
