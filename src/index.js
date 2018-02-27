import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/App';
import routes from './router';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store/store';

import './style/style.scss';

ReactDOM.render(
    <Provider store={store}>
    {routes}
    </Provider>, document.getElementById('root'));
registerServiceWorker();
