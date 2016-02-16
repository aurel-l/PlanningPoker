const createSymbol = label => String(label);

// Action types
export const UPDATE_USERNAME = createSymbol('UPDATE_USERNAME');
export const SOCKET_CONNECTION_START = createSymbol('SOCKET_CONNECTION_START');
export const SOCKET_CONNECTION_SUCCESS = createSymbol(
  'SOCKET_CONNECTION_SUCCESS'
);
export const SOCKET_CONNECTION_FAIL = createSymbol('SOCKET_CONNECTION_FAIL');
export const SOCKET_CONNECTION_MESSAGE = createSymbol(
  'SOCKET_CONNECTION_MESSAGE'
);
export const UPDATE_SOCKET_CONNECTION_URL = createSymbol(
  'SOCKET_CONNECTION_MESSAGE'
);
export const ENTER_ROOM = createSymbol('ENTER_ROOM');

// Action creators
const actionCreator = (type, payload) => ({type, payload});

export const updateUsername = username => (
  actionCreator(UPDATE_USERNAME, username)
);

export const socketConnectionStart = connect => (
  actionCreator(SOCKET_CONNECTION_START, connect)
);

export const socketConnectionSuccess = () => (
  actionCreator(SOCKET_CONNECTION_SUCCESS)
);

export const socketConnectionFail = () => (
  actionCreator(SOCKET_CONNECTION_FAIL)
);

export const socketConnectionMessage = connect => (
  actionCreator(SOCKET_CONNECTION_MESSAGE, connect)
);

export const updateSocketConnectionUrl = url => (
  actionCreator(UPDATE_SOCKET_CONNECTION_URL, url)
);

export const enterRoom = roomId => (actionCreator(ENTER_ROOM, roomId));
