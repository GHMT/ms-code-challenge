/**
 * Model-Adapter pattern: https://blog.florimondmanca.com/consuming-apis-in-angular-the-model-adapter-pattern
 * We use a variation of this pattern. We add an Interface to represent the API object.
 * Take a look also to the same pattern in React (do not use like this anyway): https://sendgrid.com/blog/using-the-adapter-design-pattern-with-react/
 */

import { Asset } from 'contentful';
import IAdapter from '../adapter';

export interface IPhoto extends Asset {
}

export class Photo {
    readonly id: Asset['sys']['id'];
    readonly url: Asset['fields']['file']['url'];

  constructor(photo: IPhoto) {
    this.id = photo.sys.id;
    this.url = photo.fields.file.url;
  }
}

class PhotoAdapter implements IAdapter<Photo> {
  adapt(item: IPhoto): Photo {
    return new Photo(item);
  }
}

export const PhotoAdapterSingleton: PhotoAdapter = new PhotoAdapter();
