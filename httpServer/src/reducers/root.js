/* @flow */
import user from './user';
import room from './room';
import socket from './socket';

export default (
  state/*: RootState*/ = {}, action/*: Action*/
)/*: RootState*/ => ({
  user: user(state.user, action),
  room: room(state.room, action),
  socket: socket(state.socket, action),
});
