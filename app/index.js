import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import framerApp from './reducers'
import App from './containers/app';

let store = createStore(framerApp);

let rootElement = document.getElementById('root');
React.render(
  <Provider store={store}>
    { () => <App /> }
  </Provider>,
  rootElement
);
