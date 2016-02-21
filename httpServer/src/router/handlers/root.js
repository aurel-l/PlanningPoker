/* @flow */
import Handler from '../templateHandler';

// Handlers
import userHandler from './user';
import settingsHandler from './settings';
import indexRoomHandler from './indexRoom';

// Page
import HomePage from '../../pages/Home';

export const ROOT = '@ROOT';

export default new Handler(
  HomePage, ROOT,
  userHandler, settingsHandler, indexRoomHandler
);
