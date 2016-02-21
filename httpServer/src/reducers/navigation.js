/* @flow */
import {NAVIGATE} from '../actions/types';

import {defaultHash} from '../utils/defaults';

const pathToLevels = (path = '') => path.split('/').filter(x => x);

export default (state/*: NavigationState*/ = {
  levels: pathToLevels(defaultHash()),
}, action/*: Action*/)/*: NavigationState*/ => {
  switch (action.type) {
    case NAVIGATE:
      window.location.hash = action.payload;
      return {...state, levels: pathToLevels(action.payload)};
    default:
      return state;
  }
};
