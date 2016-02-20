/* @flow */
import {UPDATE_USERNAME} from '../actions/types';

import {defaultUserId, defaultUsername} from '../utils/defaults';
import localStorageManager from '../utils/localStorageManager';

export default (state/*: UserState*/ = {
  id: defaultUserId(),
  name: defaultUsername(),
}, action/*: Action*/)/*: UserState*/ => {
  switch (action.type) {
    case UPDATE_USERNAME:
      localStorageManager.enqueue('username', action.payload);
      return {...state, name: action.payload};
    default:
      return state;
  }
};
