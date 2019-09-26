import { Chef, ChefAdapterSingleton} from '../Chef';
import { iChefEntry } from './mocks';

describe('Chef entity', () => {
    it('creates a Chef class instance of an IChef interface', () => {
        const chef = ChefAdapterSingleton.adapt(iChefEntry);

        expect(chef).toBeInstanceOf(Chef);
        expect(chef.id).toEqual('abc');
        expect(chef.name).toEqual('Jeff the Chef');
    })
})
