import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';

configure({adapter: new Adapter()});
let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />)
})

describe('<App />', () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });
  it('should render the <NavBar /> component', () => {
    expect(wrapper.find(NavBar).length).toEqual(1);
  })

  it('should render the <Footer /> component', () => {
    expect(wrapper.find(Footer).length).toEqual(1);
  })
})
