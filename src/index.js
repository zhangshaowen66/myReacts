import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import {Provider, connect} from 'react-redux'
import App from './app'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
   ,
    document.getElementById('root')
);

serviceWorker.unregister();
