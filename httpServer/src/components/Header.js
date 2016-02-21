/* @flow */
import React, {PropTypes as T} from 'react';
import Link from '../router/Link';

import s from './Header.css';

const RoomInfo = ({room}) => (
  <Link to={`/room${room ? `/${room.id}` : ''}`} className={s.room}>
    <p>
      {room ? `Room: ${room.id}` : 'No room chosen'}
    </p>
  </Link>
);
RoomInfo.propTypes = {
  room: T.string,
};

const Header = ({username, room}/*: {username: string, room: ?string}*/) => (
  <header className={s.header}>
    <Link to="/" className={s.title}>
      <p>Planning poker</p>
    </Link>
    <RoomInfo room={room} />
    <Link to="/user" className={s.user}>
      <p>User: {username}</p>
    </Link>
  </header>
);
Header.propTypes = {
  username: T.string.isRequired,
  room: T.string,
};

export default Header;
