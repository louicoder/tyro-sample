import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// require('react-web-vector-icons/fonts');
import {Provider} from 'react-redux';
import store from './store/configureStore';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom'

// set default url through axios
axios.defaults.baseURL='https://randomuser.me/api/'

// execute the store function to initiate store creation
const mainStore = store();

// render the app component through the react framework to the html DOM
ReactDOM.render(
    <BrowserRouter>
        <Provider store={mainStore}>
            <App />
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));

// serviceWorker.unregister();
