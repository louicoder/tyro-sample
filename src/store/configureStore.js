import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import facesReducer from '../store/reducers/getFacesReducer'

const rootReducer = combineReducers({
    faces: facesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeConfig = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}

export default storeConfig;