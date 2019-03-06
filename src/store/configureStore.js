import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import facesReducer from '../store/reducers/getFacesReducer'

const rootReducer = combineReducers({
    faces: facesReducer
})

// const composeEnhancers = compose;

const storeConfig = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
}

export default storeConfig;