/* @flow */
import Handler from '../templateHandler';

// Handlers
import randomRoomHandler from './randomRoom';
import roomHandler from './room';

// Page
import IndexRoomPage from '../../pages/IndexRoom';

export default new Handler(
  IndexRoomPage, 'room',
  randomRoomHandler, roomHandler
);
