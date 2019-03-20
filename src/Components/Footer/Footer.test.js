import {configure, shallow, mount} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer'

configure({adapter: new Adapter()});
let wrapper;

beforeEach(() => {
    wrapper = shallow(<Footer />)
})

describe('<Footer />', () => {

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('should render 4 list items', () => {
        expect(wrapper.find('div').length).toBe(1)
    })

    it('should render 1 paragraph', () => {
        expect(wrapper.find('p').length).toBe(1)
    })
})