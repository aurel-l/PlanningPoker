import {
  UPDATE_USERNAME, SOCKET_CONNECTION_START, SOCKET_CONNECTION_SUCCESS,
  SOCKET_CONNECTION_FAIL, UPDATE_SOCKET_CONNECTION_URL,
} from './actions';
import {defaultUserId, defaultUsername, defaultSocket} from './utils/defaults';
import localStorageManager from './utils/localStorageManager';

const userReducer = (state = {
  id: defaultUserId(),
  name: defaultUsername(),
}, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      localStorageManager.enqueue('username', action.payload);
      return {...state, name: action.payload};
    default:
      return state;
  }
};

const socketReducer = (state = {
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

const roomReducer = (state, action) => state;

export default (state = {}, action) => ({
  user: userReducer(state.user, action),
  room: roomReducer(state.room, action),
  socket: socketReducer(state.socket, action),
});
