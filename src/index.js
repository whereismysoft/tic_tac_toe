import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import configureStore from './store/configureStore';

ReactDom.render(
    <Provider store={configureStore()}>
        <App/>
    </Provider>,
    document.getElementById('app')
);