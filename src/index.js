import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// require('react-web-vector-icons/fonts');
import {Provider} from 'react-redux';
import store from './store/configureStore';
import axios from 'axios';

axios.defaults.baseURL='https://randomuser.me/api/'

const RootApp = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(RootApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
