import { Tag, TagAdapterSingleton} from '../Tag';
import { iTagEntry } from '../__mocks__/contentful-entries';

describe('Tag entity', () => {
    it('creates a Tag class instance of an ITag interface', () => {
        const tag = TagAdapterSingleton.adapt(iTagEntry);

        expect(tag).toBeInstanceOf(Tag);
        expect(tag.id).toEqual('abc');
        expect(tag.name).toEqual('healthy');
    })
})
