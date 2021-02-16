import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import Enzyme, {shallow} from 'enzyme'

Enzyme.configure({adapter: new Adapter})

const setup = () => shallow(<App/>)

test('renders learn react link', () => {
  const wrapper = setup()
});
