const createSymbol = DEV ? label => String(label) : label => Symbol(label);

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
