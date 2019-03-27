import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'
import { Provider } from 'react-redux';
import MainStore from './store/configureStore';
import { MemoryRouter } from 'react-router';

const store = MainStore();

configure({ adapter: new Adapter() });

describe('<Index />', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>);
    })
	it('should render the <NavBar /> component', () => {
        // console.log(wrapper.props().children);
        expect(wrapper.contains(NavBar)).toBe(true)
    });

    it('should render the <Footer /> component', () => {
        expect(wrapper.contains(Footer)).toBe(true)
    });

});
