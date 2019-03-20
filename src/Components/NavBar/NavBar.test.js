import {configure, shallow, mount} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {Link, MemoryRouter} from 'react-router'
import NavBar from './NavBar'

configure({adapter: new Adapter()});

describe('<NavBar />', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<NavBar />);
        // const text = wrapper.find('ul').text
        console.log('text');
        expect(wrapper.exists()).toBe(true)
        // console.log(wrapper.instance);
    })

    it('should render 4 list items', () => {
        const wrapper = shallow(<NavBar />);
        // const text = wrapper.find('ul').text
        console.log('text');
        expect(wrapper.find('li').length).toBe(4)
        // console.log(wrapper.instance);
    })
})