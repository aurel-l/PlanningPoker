/* @flow */
import * as types from './types';

// Helper function
const actionCreator = (type, payload) => ({type, payload});

// Action creators
export const init = ()/*: Action*/ => actionCreator(types.INIT);

export const updateUsername = (username/*: string */)/*: Action*/ => (
  actionCreator(types.UPDATE_USERNAME, username)
);

export const socketConnectionStart = (connect/*: Socket*/)/*: Action */ => (
  actionCreator(types.SOCKET_CONNECTION_START, connect)
);

export const socketConnectionSuccess = ()/*: Action*/ => (
  actionCreator(types.SOCKET_CONNECTION_SUCCESS)
);

export const socketConnectionFail = ()/*: Action*/ => (
  actionCreator(types.SOCKET_CONNECTION_FAIL)
);

export const socketConnectionMessage = (connect/*: Socket*/)/*: Action*/ => (
  actionCreator(types.SOCKET_CONNECTION_MESSAGE, connect)
);

export const updateSocketConnectionUrl = (url/*: string*/)/*: Action*/ => (
  actionCreator(types.UPDATE_SOCKET_CONNECTION_URL, url)
);

export const enterRoom = (roomId/*: string*/)/*: Action*/ => (
  actionCreator(types.ENTER_ROOM, roomId)
);

export const navigate = (url/*: string*/)/*: Action*/ => (
  actionCreator(types.NAVIGATE, url)
);
