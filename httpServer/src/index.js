import React from 'react';
import {render} from 'react-dom';
import {
  Router, Route, IndexRoute,
  hashHistory, browserHistory,
} from 'react-router';

const history = (ENV === 'production') ? browserHistory : hashHistory;

import App from './App';
import Home from './pages/Home';
import User from './pages/User';
import Settings from './pages/Settings';
import RoomSelector from './pages/RoomSelector';
import Room from './pages/Room';

import ready from './utils/ready';

async function main() {
  await ready;
  render(
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='user' component={User} />
        <Route path='room' component={RoomSelector} />
        <Route path='room/:roomId' component={Room} />
        <Route path='settings' component={Settings} />
      </Route>
    </Router>,
    document.getElementById('root')
  );
}

main();
