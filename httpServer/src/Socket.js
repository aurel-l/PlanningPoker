import {Component, PropTypes as T} from 'react';
import io from 'socket.io-client';

import {
  socketConnectionStart, socketConnectionSuccess,
  socketConnectionFail, socketConnectionMessage,
} from './actions';

export default class Socket extends Component {
  static propTypes = {
    dispatch: T.func.isRequired,
    socket: T.shape({
      url: T.string.isRequired,
      connection: T.object,
    }).isRequired,
  }

  // Lifecycle
  componentDidMount() {
    this.manageConnection();
  }

  shouldComponentUpdate(nextProps) {
    return this.props.socket.url !== nextProps.socket.url;
  }

  componentDidUpdate() {
    this.manageConnection();
  }

  componentWillUnmount() {
    this.props.socket.connection.disconnect();
  }

  // Custom
  manageConnection = () => {
    const {dispatch, socket} = this.props;
    if (socket.connection) {
      socket.connection.disconnect();
    }
    const socketIOConnection = io(socket.url);
    socketIOConnection.on('connect', () => {
      console.log('SocketIO connect');
      dispatch(socketConnectionSuccess());
    });
    socketIOConnection.on('event', data => {
      console.log('SocketIO event');
      console.log(data);
      socketConnectionMessage(data);
    });
    socketIOConnection.on('error', err => {
      console.log('SocketIO error');
      console.log(err);
      socketConnectionFail();
    });
    socketIOConnection.on('disconnect', () => {
      console.log('SocketIO disconnect');
      socketConnectionFail();
    });
    dispatch(socketConnectionStart(socketIOConnection));
  }

  render() {
    return null;
  }
}
