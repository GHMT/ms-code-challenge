import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'jest-canvas-mock';

import IconLibrary, { Icons } from './shared/icons';

configure({ adapter: new Adapter() });

IconLibrary.add(...Icons);
