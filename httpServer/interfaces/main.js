/* eslint no-unused-vars: 0 */
/* eslint no-use-before-define: 0 */
// Globals
declare var DEV: boolean;

// Actions
type ActionType = string | Symbol;

type Action = {
  type: ActionType,
  payload: any
}

// States
type RootState = {
  user?: UserState,
  room?: RoomState,
  socket?: SocketState
};

type UserState = {
  id: string,
  name: string
};

type RoomState = {};

type SocketState = {
  url: string,
  connection: ?Socket,
  status: string
};

// Misc.
// TODO: change this
type Socket = Object;
