/* @flow */
import React from 'react';
import {render} from 'react-dom';

import App from './App';

import ready from './utils/ready';

(async () => {
  await ready;
  render(<App />, document.getElementById('root'));
})();
