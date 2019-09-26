import { Entry, Asset, EntryCollection } from 'contentful';

import { IChef } from '../../../../../domain/business/Chef';
import { ITag } from '../../../../../domain/business/Tag';
import { IRecipe } from '../../../../../domain/business/Recipe';

export const iChefEntry: Entry<IChef> = {
    sys: {
        type: 'Some Type',
        id: 'abc',
        createdAt: 'now',
        updatedAt: 'never',
        locale: 'en-EN',
        contentType: {
            sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'cba',
            }
        },
    },
    fields: {
        name: 'Jeff the Chef'
    },
    toPlainObject: () => ({}),
    update: () => new Promise<Entry<IChef>>(() => {})
};

export const iPhotoAsset: Asset = {
    sys: {
        type: 'Some Type',
        id: 'abc',
        createdAt: 'now',
        updatedAt: 'never',
        locale: 'en-EN',
        contentType: {
            sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'cba',
            }
        },
    },
    fields: {
        title: 'Photo title',
        description: 'Short Description',
        file: {
            url: 'www.google.com',
            details: {
                size: 20
            },
            fileName: 'fileName',
            contentType: 'Asset',
        },
    },
    toPlainObject: () => ({})
}

export const iTagEntry: Entry<ITag> = {
    sys: {
        type: 'Some Type',
        id: 'abc',
        createdAt: 'now',
        updatedAt: 'never',
        locale: 'en-EN',
        contentType: {
            sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'cba',
            }
        },
    },
    fields: {
        name: 'healthy'
    },
    toPlainObject: () => ({}),
    update: () => new Promise<Entry<ITag>>(() => {})
};

export const iRecipeEntry: Entry<IRecipe> = {
    sys: {
        type: 'Some Type',
        id: 'abc',
        createdAt: 'now',
        updatedAt: 'never',
        locale: 'en-EN',
        contentType: {
            sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'cba',
            }
        },
    },
    fields: {
        title: 'Title',
        photo: iPhotoAsset,
        calories: 200,
        description: 'Short description',
        chef: iChefEntry,
        tags: [iTagEntry],
    },
    toPlainObject: () => ({}),
    update: () => new Promise<Entry<IRecipe>>(() => {})
};

export const iRecipeEntryCollection: EntryCollection<IRecipe> = {
    total: 1,
    skip: 0,
    limit: 100,
    items: [iRecipeEntry],
    toPlainObject: () => ({}), 
    stringifySafe: () => '',
};
