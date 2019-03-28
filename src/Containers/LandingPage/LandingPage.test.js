import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from './LandingPage';
import Login from '../../Components/Login/Login'

configure({adapter: new Adapter()})

let wrapper;
beforeEach(() => {
    wrapper = shallow(<LandingPage />)
})

describe('<MainPage />', () => {
    it('renders <Login /> component', () => {
        expect(wrapper.find(Login).length).toEqual(1);
    })

    it('renders faces component', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })

})