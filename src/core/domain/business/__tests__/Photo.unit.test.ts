import { Photo, PhotoAdapterSingleton} from '../Photo';
import { iPhotoAsset } from '../__mocks__/contentful-entries';

describe('Photo entity', () => {
    it('creates a Photo class instance of an IPhoto interface', () => {
        const photo = PhotoAdapterSingleton.adapt(iPhotoAsset);

        expect(photo).toBeInstanceOf(Photo);
        expect(photo.id).toEqual('abc');
        expect(photo.url).toEqual('www.google.com');
    })
})
