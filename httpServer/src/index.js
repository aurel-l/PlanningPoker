/* @flow */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App';

import rootReducer from './reducers/root';

import ready from './utils/ready';

const store = createStore(rootReducer);

(async () => {
  await ready;
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})();
