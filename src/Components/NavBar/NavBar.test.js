import {configure, shallow, mount} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {Link, MemoryRouter} from 'react-router'
import NavBar from './NavBar'

configure({adapter: new Adapter()});

let wrapper;

beforeEach(() => {
    wrapper = shallow(<NavBar />)
})

describe('<NavBar />', () => {

    it('should render correctly', () => {
        
        expect(wrapper.exists()).toBe(true)
    })

    it('should render 4 nav list items', () => {
        expect(wrapper.find('li').length).toBe(4)
    })
})