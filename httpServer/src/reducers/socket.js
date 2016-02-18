/* eslint complexity: [2, 5] */
import {
  SOCKET_CONNECTION_START, SOCKET_CONNECTION_SUCCESS,
  SOCKET_CONNECTION_FAIL, UPDATE_SOCKET_CONNECTION_URL,
} from '../actions/types';

import {defaultSocket} from '../utils/defaults';

export default (state = {
  url: defaultSocket(),
  connection: null,
  status: 'disconnected',
}, action) => {
  switch (action.type) {
    case SOCKET_CONNECTION_START:
      return {...state, connection: action.payload, status: 'connecting'};
    case SOCKET_CONNECTION_SUCCESS:
      return {...state, status: 'connected'};
    case SOCKET_CONNECTION_FAIL:
      return {...state, status: 'disconnected'};
    case UPDATE_SOCKET_CONNECTION_URL:
      return {...state, url: action.payload, status: 'disconnected'};
    default:
      return state;
  }
};
