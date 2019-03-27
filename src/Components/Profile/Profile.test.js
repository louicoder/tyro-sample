import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from './Profile';
import {faces} from './Fixtures'
import {Provider} from 'react-redux'
import MainStore from '../../store/configureStore';

configure({adapter: new Adapter()})

describe('<Profile />', () => {

    let wrapper;
    const store = MainStore();
    
    it('should render no profile when no faces prop passed', () => {
        const props = {
            id: '',
            faces: faces
        }
        wrapper = mount(<Provider store={store}><Profile {...props}/></Provider>)
       
        expect(wrapper.find('div').length).toEqual(2);
        expect(wrapper.contains('Click on any profile to view.')).toBe(true);
    })

    it('should render no profile when no faces prop passed', () => {
        const props = {
            id: '53213223-850c-4be6-ae10-d1dba0c74bb7',
            faces: faces
        }
        wrapper = shallow(<Provider store={store}><Profile {...props}/></Provider>)

        expect(wrapper.contains('Click on any profile to view.')).toBe(false);
        
    })

    // it('should render profile img when correct id is passed', () => {
    //     const profProps = {
    //         id: '53213223-850c-4be6-ae10-d1dba0c74bb7'            
    //     }
    //     wrapper = shallow(<Provider store={store}><Profile {...profProps}/></Provider>)
    //     // wrapper.setProps({
    //     //     id: '53213223-850c-4be6-ae10-d1dba0c74bb7'
    //     // })
    //     console.log(wrapper.debug());
    //     expect(wrapper.contains(<Profile/>).text).toEqual('Name')
    // })
})