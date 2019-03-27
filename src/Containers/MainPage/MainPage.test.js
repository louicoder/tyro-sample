import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from '../../Components/Profile/Profile';
import MainPage from './MainPage'
import faces from '../../Components/Profile/Fixtures';
import FacesList from '../../Components/FacesList/FacesList';
import {Provider} from 'react-redux'
import MainStore from '../../store/configureStore';
import {MemoryRouter} from 'react-router'

const store = MainStore();


configure({adapter: new Adapter()})

let wrapper;
beforeEach(() => {
    wrapper = mount(<Provider store={store}><MemoryRouter><MainPage faces={faces}/></MemoryRouter></Provider>)
})

describe('<MainPage />', () => {
    it('render profile component', () => {
        expect(wrapper.find(Profile).children().length).toEqual(1);
    })

    it('render faces component', () => {
        expect(wrapper.find(FacesList).children().length).toEqual(1);
    })

    it('render container div', () => {
        expect(wrapper.find('div').length).toEqual(7);
    })
})