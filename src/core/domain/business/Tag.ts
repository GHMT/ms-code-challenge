/**
 * Model-Adapter pattern: https://blog.florimondmanca.com/consuming-apis-in-angular-the-model-adapter-pattern
 * We use a variation of this pattern. We add an Interface to represent the API object.
 * Take a look also to the same pattern in React (do not use like this anyway): https://sendgrid.com/blog/using-the-adapter-design-pattern-with-react/
 */

import IAdapter from '../adapter';

export interface ITag {
  readonly id: string;
  readonly name: string;
}

export class Tag {
    readonly id: string;
    readonly name: string;

  constructor(chef: ITag) {
    this.id = chef.id;
    this.name = chef.name;
  }
}

export class TagAdapter implements IAdapter<Tag> {
  adapt(item: ITag): Tag {
    return new Tag(item);
  }
}

export const TagAdapterSingleton: TagAdapter = new TagAdapter();
