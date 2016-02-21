/* @flow */
import {ENTER_ROOM} from '../actions/types';

export default (
  state/*: RoomState*/ = {}, action/*: Action */
)/*: RoomState */ => {
  switch (action.type) {
    case ENTER_ROOM:
      return {id: action.payload, ...state};
    default:
      return state;
  }
};
