import io from 'socket.io-client';

import {
  socketConnectionStart, socketConnectionSuccess,
  socketConnectionFail, socketConnectionMessage,
} from '../actions/creators';

import observeStore from './observe';

const needsReconnect = (() => {
  let url;
  return nextInfo => url !== nextInfo.url;
})();

const setEventListeners = (connection, dispatch) => {
  connection.on('connect', () => {
    console.log('SocketIO connect');
    dispatch(socketConnectionSuccess());
  });
  connection.on('event', data => {
    console.log('SocketIO event');
    console.log(data);
    dispatch(socketConnectionMessage(data));
  });
  connection.on('error', err => {
    console.log('SocketIO error');
    console.log(err);
    dispatch(socketConnectionFail());
  });
  connection.on('disconnect', () => {
    console.log('SocketIO disconnect');
    dispatch(socketConnectionFail());
  });
};

export default (store, dispatch) => {
  let connection;
  const handleChange = socketInfo => {
    if (needsReconnect(socketInfo)) {
      if (connection) connection.disconnect();
      connection = io(socketInfo.url);
      setEventListeners(connection, dispatch);
    }
  };

  observeStore(store, handleChange, s => s.socket);

  dispatch(socketConnectionStart(connection));
};
