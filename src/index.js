import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Amplify} from 'aws-amplify';
import config from './aws-exports';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { icons } from './assets/icons';

Amplify.configure(config);

React.icons = icons;

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
