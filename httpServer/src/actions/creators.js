import * as types from './types';

// Helper function
const actionCreator = (type, payload) => ({type, payload});

// Action creators
export const updateUsername = username => (
  actionCreator(types.UPDATE_USERNAME, username)
);

export const socketConnectionStart = connect => (
  actionCreator(types.SOCKET_CONNECTION_START, connect)
);

export const socketConnectionSuccess = () => (
  actionCreator(types.SOCKET_CONNECTION_SUCCESS)
);

export const socketConnectionFail = () => (
  actionCreator(types.SOCKET_CONNECTION_FAIL)
);

export const socketConnectionMessage = connect => (
  actionCreator(types.SOCKET_CONNECTION_MESSAGE, connect)
);

export const updateSocketConnectionUrl = url => (
  actionCreator(types.UPDATE_SOCKET_CONNECTION_URL, url)
);

export const enterRoom = roomId => (actionCreator(types.ENTER_ROOM, roomId));
