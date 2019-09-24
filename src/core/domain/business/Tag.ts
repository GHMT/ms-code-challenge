/**
 * Model-Adapter pattern: https://blog.florimondmanca.com/consuming-apis-in-angular-the-model-adapter-pattern
 * We use a variation of this pattern. We add an Interface to represent the API object.
 * Take a look also to the same pattern in React (do not use like this anyway): https://sendgrid.com/blog/using-the-adapter-design-pattern-with-react/
 */

import { Entry } from 'contentful';
import IAdapter from '../adapter';

export interface ITag {
  readonly name?: string;
}

export class Tag {
    readonly id: Entry<ITag>['sys']['id'];
    readonly name?: string;

  constructor(tag: Entry<ITag>) {
    this.id = tag.sys.id;
    this.name = tag.fields.name;
  }
}

class TagAdapter implements IAdapter<Tag> {
  adapt(item: Entry<ITag>): Tag {
    return new Tag(item);
  }
}

export const TagAdapterSingleton: TagAdapter = new TagAdapter();
