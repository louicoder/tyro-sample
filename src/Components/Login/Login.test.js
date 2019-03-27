import { configure, shallow } from 'enzyme';
import React from 'react'
import Login from './Login';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
let wrapper;

beforeEach(() => {
    wrapper = shallow(<Login />)
});

describe('<Login/>', () => {
	it('should render a single form', () => {
		expect(wrapper.find('form').length).toEqual(1);
	});
});
