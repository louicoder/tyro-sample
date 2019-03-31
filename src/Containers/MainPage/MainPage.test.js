import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from '../../Components/Profile/Profile';
import MainPage from './MainPage'
import faces from '../../Components/Profile/Fixtures';
import FacesList from '../../Components/FacesList/FacesList';
import {Provider} from 'react-redux'
import MainStore from '../../store/configureStore';
import {MemoryRouter} from 'react-router';
import classes from './MainPage.css';

const store = MainStore();


configure({adapter: new Adapter()})

let wrapper;


describe('<MainPage />', () => {


    beforeEach(() => {
        const props = {
            faces: faces,
            match: {
                params: {
                    id: '53213223-850c-4be6-ae10-d1dba0c74bb7'
                }
            }
        }
    
        const state = {
            searchTerm: ''
        }
        
        wrapper = mount(<Provider store={store}><MemoryRouter><MainPage {...props} {...state}/></MemoryRouter></Provider>)
    })


    it('renders profile component', () => {
        expect(wrapper.find(Profile).children().length).toEqual(1);

    })

    it('renders faces component', () => {
        expect(wrapper.find(FacesList).children().length).toEqual(1);
    })

    it('renders container div', () => {
        expect(wrapper.find('div').length).toEqual(6);
    })

    it('sets new state when nameChangedHandler is called', () => {
       const el = wrapper.find("input").first().simulate('change',{target: { value: 'louis'}}).instance().value

        wrapper.setState({
            searchTerm: el
        })
        
        expect(wrapper.state().searchTerm).toEqual('louis')
    })
})