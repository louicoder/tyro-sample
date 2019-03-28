import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {faces} from '../Profile/Fixtures'
import FacesList from './FacesList';
import MainStore from '../../store/configureStore';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom'

configure({ adapter: new Adapter() });

const store = MainStore();

let wrapper;
beforeEach(() => {
    const props = {
        data: faces,
        clicked: jest.fn()
    }
	wrapper = mount(<Provider store={store}><MemoryRouter><FacesList {...props}/></MemoryRouter></Provider>);
});

describe('<FacesList />', () => {
	it('render 301 faces divs of people', () => {
        expect(wrapper.find('div').length).toEqual(301);
    });

});
